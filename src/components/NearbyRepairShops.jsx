import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { api } from '../lib/api.js';

// Fix default marker icons in bundlers (Vite)
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow
});

function metersToKm(m) {
  const n = Number(m || 0);
  if (!Number.isFinite(n)) return '';
  if (n < 1000) return `${Math.round(n)} m`;
  return `${(n / 1000).toFixed(1)} km`;
}

export default function NearbyRepairShops() {
  const [status, setStatus] = React.useState('idle'); // idle | locating | loading | ready | error
  const [pos, setPos] = React.useState(null); // {lat,lng}
  const [shops, setShops] = React.useState([]);
  const [err, setErr] = React.useState('');

  const getLocation = React.useCallback(() => {
    setErr('');
    if (!('geolocation' in navigator)) {
      setStatus('error');
      setErr('Geolocation is not supported on this device.');
      return;
    }
    setStatus('locating');
    navigator.geolocation.getCurrentPosition(
      (p) => {
        const next = { lat: p.coords.latitude, lng: p.coords.longitude };
        setPos(next);
        setStatus('loading');
        api.nearbyShops({ lat: next.lat, lng: next.lng, radius: 2500 })
          .then((data) => {
            setShops(Array.isArray(data?.shops) ? data.shops : []);
            setStatus('ready');
          })
          .catch((e) => {
            setStatus('error');
            setErr(e?.message || 'Failed to load nearby shops.');
          });
      },
      (e) => {
        setStatus('error');
        setErr(e?.message || 'Location permission denied.');
      },
      { enableHighAccuracy: true, timeout: 12000 }
    );
  }, []);

  React.useEffect(() => {
    // Auto-try once, but keep a button if user blocks.
    getLocation();
  }, [getLocation]);

  const center = pos ? [pos.lat, pos.lng] : [30.0444, 31.2357]; // Cairo fallback

  return (
    <div className="grid lg:grid-cols-2 gap-6 items-stretch">
      <div className="bg-white border border-primary-100 rounded-3xl shadow-soft p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm font-semibold text-ink">Nearby repair shops</div>
            <div className="mt-1 text-sm text-ink/70">
              We use your location to show repair shops around you (within ~2.5 km).
            </div>
          </div>
          <button
            type="button"
            onClick={getLocation}
            className="h-10 px-4 rounded-2xl bg-white border border-primary-100 text-ink font-semibold shadow-soft hover:shadow-md hover:-translate-y-0.5 transition"
          >
            Refresh
          </button>
        </div>

        <div className="mt-5">
          {status === 'locating' ? (
            <div className="text-sm text-ink/70">Getting your location…</div>
          ) : status === 'loading' ? (
            <div className="text-sm text-ink/70">Loading nearby shops…</div>
          ) : status === 'error' ? (
            <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {err || 'Something went wrong.'}
              <div className="mt-2 text-xs text-red-700/80">
                Tip: allow location permission, then press “Refresh”.
              </div>
            </div>
          ) : null}

          {status === 'ready' && shops.length === 0 ? (
            <div className="rounded-2xl border border-primary-100 bg-surface px-4 py-3 text-sm text-ink/70">
              No nearby repair shops found. Try increasing the radius later.
            </div>
          ) : null}

          {shops.length > 0 ? (
            <ul className="mt-4 space-y-3">
              {shops.slice(0, 8).map((s) => (
                <li key={s.id} className="rounded-2xl border border-primary-100 bg-surface px-4 py-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="text-sm font-bold text-ink truncate">{s.name || 'Repair shop'}</div>
                      {s.address ? (
                        <div className="mt-1 text-xs text-ink/60">{s.address}</div>
                      ) : null}
                    </div>
                    <div className="text-xs font-semibold text-primary whitespace-nowrap">
                      {metersToKm(s.distanceMeters)}
                    </div>
                  </div>
                  <div className="mt-2 flex gap-2">
                    <a
                      className="text-xs font-semibold text-primary hover:underline"
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${s.lat},${s.lng}`)}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open in Maps
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>

      <div className="bg-white border border-primary-100 rounded-3xl shadow-soft overflow-hidden">
        <div className="h-[420px]">
          <MapContainer center={center} zoom={13} scrollWheelZoom={false} className="h-full w-full">
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {pos ? (
              <Marker position={[pos.lat, pos.lng]}>
                <Popup>Your location</Popup>
              </Marker>
            ) : null}
            {shops.map((s) => (
              <Marker key={s.id} position={[s.lat, s.lng]}>
                <Popup>
                  <div className="text-sm font-semibold">{s.name || 'Repair shop'}</div>
                  {s.address ? <div className="text-xs opacity-80">{s.address}</div> : null}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
