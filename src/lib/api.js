const API_BASE = import.meta.env.VITE_API_BASE || 'https://fastofix-api.vercel.app';

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    },
    ...options
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok || !json.ok) {
    const msg = json?.error?.message || `Request failed: ${res.status}`;
    throw new Error(msg);
  }
  return json.data;
}

export const api = {
  brands: () => request('/api/v1/catalog/brands'),
  models: (params = {}) => {
    const qs = new URLSearchParams(params);
    const q = qs.toString();
    return request(`/api/v1/catalog/models${q ? `?${q}` : ''}`);
  },
  model: (id) => request(`/api/v1/catalog/models/${id}`),
  repairs: (modelId) => request(`/api/v1/catalog/models/${modelId}/repairs`),
  createOffer: (payload) => request('/api/v1/offers', { method: 'POST', body: JSON.stringify(payload) }),
  offer: (id) => request(`/api/v1/offers/${id}`)
};

export function formatEUR(cents) {
  const value = (Number(cents || 0) / 100);
  return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(value);
}
