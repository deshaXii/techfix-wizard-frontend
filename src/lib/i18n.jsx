import React from 'react';

const translations = {
  en: {
    nav: {
      home: 'Home',
      wizard: 'Repair Wizard',
      services: 'Services',
      testimonials: 'Testimonials',
      nearby: 'Nearby shops',
      how: 'How it works',
      faq: 'FAQ',
      contact: 'Contact',
      login: 'Login',
      language: 'Language',
      theme: 'Theme',
      back: 'Back',
      menu: 'Menu'
    },
    theme: {
      ocean: 'Ocean',
      midnight: 'Midnight',
      slate: 'Slate'
    },
    footer: {
      tagline: 'Fast quotes. Transparent pricing. Repairs you can trust.',
      product: 'Product',
      company: 'Company',
      contact: 'Contact',
      supportLine: 'Support: Mon–Sat, 09:00–18:00',
      privacy: 'Privacy policy',
      terms: 'Terms',
      rights: 'All rights reserved.'
    },
    login: {
      title: 'Login (coming soon)',
      desc: 'We’ll add accounts for saving offers, tracking repairs, and faster checkouts.',
      goWizard: 'Start a repair quote',
      goHome: 'Back to home',
      noteTitle: 'Tip',
      noteDesc: 'For now you can use the wizard without an account and still receive your offer by email.',
      comingSoonPill: 'Coming soon',
      leftTitle: 'Save offers & track repairs',
      leftDesc: 'Create an account later — for now you can still use the wizard and receive your offer by email.',
      kpiOffersLabel: 'Offers',
      kpiOffersValue: '1-click',
      kpiStatusLabel: 'Status',
      kpiStatusValue: 'Live',
      kpiCheckoutLabel: 'Checkout',
      kpiCheckoutValue: 'Fast',
      continueGoogle: 'Continue with Google',
      continueApple: 'Continue with Apple',
      or: 'or',
      emailLabel: 'Email',
      passwordLabel: 'Password',
      signInSoon: 'Sign in (coming soon)'
    },
    home: {
      heroTitle: 'Get a repair quote in minutes.',
      heroSubtitle:
        'Pick your device, select the repairs you need, and receive an offer — clear pricing, no surprises.',
      ctaPrimary: 'Start the wizard',
      ctaSecondary: 'How it works',
      pill1: 'Same-day repairs (most cases)',
      pill2: 'Only pay after repair',
      pill3: 'Transparent offers by email',

      previewTitle: 'FastoFix Repair Wizard',
      previewBadge: '3 simple steps',
      step1Title: 'Pick your model',
      step1Desc: 'Search by brand, model or code.',
      step2Title: 'Choose repairs',
      step2Desc: 'Add one or more repairs.',
      step3Title: 'Finish appointment',
      step3Desc: 'Leave details & choose service.',
      previewCtaTitle: 'Ready to start?',
      previewCtaDesc: 'Get an offer sent straight to your inbox.',
      previewCtaBtn: 'Get my offer',

      howEyebrow: 'How it works',
      howTitle: 'A simple flow that converts.',
      howDesc:
        'The landing page connects directly to the wizard — smooth UX, clear steps, and a clean layout.',
      howCard1Title: 'Find your device',
      howCard1Desc: 'Search by brand, model name, or model code.',
      howCard2Title: 'Select repairs',
      howCard2Desc: 'Add repairs, see price updates instantly.',
      howCard3Title: 'Receive your offer',
      howCard3Desc: 'Send your offer by email and pick a service method.',

      benefitsEyebrow: 'Why FastoFix',
      benefitsTitle: 'Clean UI + smart flow = more conversions.',
      benefitsDesc: 'A modern layout with subtle animations and strong call-to-actions.',
      b1Title: 'Mobile-first design',
      b1Desc: 'Looks great on phone, tablet, and desktop — consistent spacing and typography.',
      b1Point: 'Responsive sections & cards',
      b2Title: 'Built for clarity',
      b2Desc: 'Clear steps, clear price breakdown, and helpful hints.',
      b2Point: 'Fewer drop-offs',
      b3Title: 'Smooth interactions',
      b3Desc: 'Soft shadows, gentle transitions, and reveal-on-scroll animations.',
      b3Point: 'Feels premium',

      faqTitle: 'Frequently asked questions',
      faqDesc: 'Short answers to the questions customers ask most.',
      faq1Q: 'Do I pay before the repair?',
      faq1A: 'No. You only pay after the repair is completed.',
      faq2Q: 'Can I add multiple repairs?',
      faq2A: 'Yes — add extra repairs to your list and see the updated total instantly.',
      faq3Q: 'How do I receive my offer?',
      faq3A: 'At the end you can send the offer to your email address.',
      faq4Q: 'How long do repairs take?',
      faq4A: 'Many repairs can be done the same day. Some repairs may take longer depending on parts.',

      ctaTitle: 'Start your quote now',
      ctaDesc: 'Use the wizard to choose your model and repairs, then send the offer to your inbox.',
      ctaBtn: 'Open Repair Wizard',

      previewLabel: 'Preview',
      metricAvgLabel: 'Average',
      metricAvgValue: '3 min',
      metricDiscountLabel: 'Discount',
      metricDiscountValue: '€15',
      supportPhoneDesc: 'iPhone, Samsung, Google Pixel & more',
      supportTabletDesc: 'iPad models & popular tablets',
      supportLaptopDesc: 'MacBook & laptop repairs'
    },
    common: {
      back: 'Back',
      nextStep: 'Next step',
      sendOffer: 'Send Offer',
      sendOfferPdf: 'Send Offer PDF',
      directMailbox: 'Directly in your mailbox',
      youOnlyPayAfter: 'You only pay after your repair',
      free: 'FREE',
      startingAt: 'starting at',
      priceOnRequest: 'price on request',
      select: 'Select',
      search: 'Search brand, model or model code',
      total: 'Total',
      subtotal: 'sub-total',
      comboDiscount: 'Combo-discount',
      addExtraRepairDiscount: 'Add an extra repair and receive €15 discount.',
      offerCreated: 'Offer created',
      copyId: 'Copy offer ID'
    },
    wizard: {
      step1Title: 'Which model do you have?',
      step1Hint: 'Enter brand, model or model code.',
      orSelectType: 'Or select the device type',
      orSelectBrand: 'Or select the brand',
      findMyModel: 'Find my model',
      allModels: 'All models',
      noModels: 'No models found for the current selection. Try another brand, switch device type, or search above.',
      deviceTypes: {
        phone: 'Phone',
        tablet: 'Tablet',
        laptop: 'Mac / Laptop'
      },
      selectDevice: 'Select device',
      selectRepair: 'Select repair',
      finish: 'Finish appointment',

      step2: 'Step 2',
      selectRepairTitle: 'Select the repair you need',
      step3: 'Step 3',
      finishTitle: 'Finish your appointment',
      finishSubtitle: 'Leave your details and choose a service method.',

      device: 'Device',
      smartphone: 'Smartphone',
      selectColor: 'Select color',
      selectRepairLabel: 'Select repair',
      repairList: 'Repair List',

      receiveOfferByEmail: 'Receive your offer by email',
      fillInfo: 'Please fill in all necessary information',
      selectLocation: 'Select location',
      currentLocation: 'CURRENT LOCATION',
      searchLocation: 'Search location by address',
      selectServiceMethod: 'Select Service Method',
      comeByStore: 'Come by our store',
      doneWhileWaiting: 'Done while you are waiting',
      shipDevice: 'Ship device',
      repairWithin24h: 'Repair within 24 hours',

      firstName: 'First name',
      lastName: 'Last name',
      number: 'Number',
      streetName: 'Streetname',
      city: 'City',
      zipcode: 'Zipcode',
      country: 'Country',
      email: 'Email',
      phone: 'Phone',
      imei: 'IMEI number',
      send: 'Send offer'
    },
    colors: {
      black: 'BLACK',
      lavender: 'LAVENDER',
      mistBlue: 'MIST BLUE',
      sage: 'SAGE',
      white: 'WHITE'
    }
  },
  nl: {
    nav: {
      home: 'Home',
      wizard: 'Reparatie-wizard',
      services: 'Services',
      testimonials: 'Reviews',
      nearby: 'Dichtbij',
      how: 'Hoe werkt het',
      faq: 'FAQ',
      contact: 'Contact',
      login: 'Inloggen',
      language: 'Taal',
      theme: 'Thema',
      back: 'Terug',
      menu: 'Menu'
    },
    theme: {
      ocean: 'Oceaan',
      midnight: 'Nacht',
      slate: 'Leisteen'
    },
    footer: {
      tagline: 'Snelle offertes. Transparante prijzen. Reparaties die je kunt vertrouwen.',
      product: 'Product',
      company: 'Bedrijf',
      contact: 'Contact',
      supportLine: 'Support: ma–za, 09:00–18:00',
      privacy: 'Privacybeleid',
      terms: 'Voorwaarden',
      rights: 'Alle rechten voorbehouden.'
    },
    login: {
      title: 'Inloggen (binnenkort)',
      desc: 'We voegen accounts toe voor het opslaan van offertes, het volgen van reparaties en sneller afrekenen.',
      goWizard: 'Start een offerte',
      goHome: 'Terug naar home',
      noteTitle: 'Tip',
      noteDesc: 'Voor nu kun je de wizard gebruiken zonder account en alsnog je offerte per e-mail ontvangen.',
      comingSoonPill: 'Binnenkort',
      leftTitle: 'Sla offertes op & volg reparaties',
      leftDesc: 'Maak later een account — voor nu kun je de wizard gebruiken en je offerte per e-mail ontvangen.',
      kpiOffersLabel: 'Offertes',
      kpiOffersValue: '1-klik',
      kpiStatusLabel: 'Status',
      kpiStatusValue: 'Live',
      kpiCheckoutLabel: 'Afrekenen',
      kpiCheckoutValue: 'Snel',
      continueGoogle: 'Doorgaan met Google',
      continueApple: 'Doorgaan met Apple',
      or: 'of',
      emailLabel: 'E-mail',
      passwordLabel: 'Wachtwoord',
      signInSoon: 'Inloggen (binnenkort)'
    },
    home: {
      heroTitle: 'Ontvang in minuten een reparatie-offerte.',
      heroSubtitle:
        'Kies je apparaat, selecteer de reparaties die je nodig hebt en ontvang een offerte — duidelijke prijzen, geen verrassingen.',
      ctaPrimary: 'Start de wizard',
      ctaSecondary: 'Hoe werkt het',
      pill1: 'Vaak dezelfde dag klaar',
      pill2: 'Betaal pas na reparatie',
      pill3: 'Offertes per e-mail',

      previewTitle: 'FastoFix Reparatie-wizard',
      previewBadge: '3 simpele stappen',
      step1Title: 'Kies je model',
      step1Desc: 'Zoek op merk, model of code.',
      step2Title: 'Kies reparaties',
      step2Desc: 'Voeg één of meerdere reparaties toe.',
      step3Title: 'Rond afspraak af',
      step3Desc: 'Gegevens + service-methode.',
      previewCtaTitle: 'Klaar om te starten?',
      previewCtaDesc: 'Ontvang je offerte direct in je inbox.',
      previewCtaBtn: 'Stuur mijn offerte',

      howEyebrow: 'Hoe werkt het',
      howTitle: 'Een simpele flow die converteert.',
      howDesc:
        'De landingpagina is direct gekoppeld aan de wizard — soepele UX, duidelijke stappen en een strakke layout.',
      howCard1Title: 'Vind je apparaat',
      howCard1Desc: 'Zoek op merk, modelnaam of modelcode.',
      howCard2Title: 'Selecteer reparaties',
      howCard2Desc: 'Voeg reparaties toe en zie de prijs direct.',
      howCard3Title: 'Ontvang je offerte',
      howCard3Desc: 'Stuur de offerte naar je e-mail en kies een servicemethode.',

      benefitsEyebrow: 'Waarom FastoFix',
      benefitsTitle: 'Strakke UI + slimme flow = meer conversie.',
      benefitsDesc: 'Moderne layout met subtiele animaties en sterke call-to-actions.',
      b1Title: 'Mobile-first design',
      b1Desc: 'Ziet er top uit op telefoon, tablet en desktop — consistente spacing en typografie.',
      b1Point: 'Responsive secties & cards',
      b2Title: 'Gemaakt voor duidelijkheid',
      b2Desc: 'Duidelijke stappen, heldere prijsopbouw en handige hints.',
      b2Point: 'Minder afhakers',
      b3Title: 'Soepel gevoel',
      b3Desc: 'Zachte schaduwen, rustige transitions en reveal-on-scroll animaties.',
      b3Point: 'Premium ervaring',

      faqTitle: 'Veelgestelde vragen',
      faqDesc: 'Korte antwoorden op de meest gestelde vragen.',
      faq1Q: 'Moet ik vooraf betalen?',
      faq1A: 'Nee. Je betaalt pas nadat de reparatie is afgerond.',
      faq2Q: 'Kan ik meerdere reparaties toevoegen?',
      faq2A: 'Ja — voeg extra reparaties toe en zie het totaal direct bijwerken.',
      faq3Q: 'Hoe ontvang ik mijn offerte?',
      faq3A: 'Aan het einde kun je de offerte naar je e-mailadres sturen.',
      faq4Q: 'Hoe lang duurt een reparatie?',
      faq4A: 'Veel reparaties kunnen dezelfde dag klaar zijn. Soms duurt het langer afhankelijk van onderdelen.',

      ctaTitle: 'Start nu je offerte',
      ctaDesc: 'Gebruik de wizard, kies je model en reparaties, en stuur de offerte naar je inbox.',
      ctaBtn: 'Open Reparatie-wizard',

      previewLabel: 'Preview',
      metricAvgLabel: 'Gemiddeld',
      metricAvgValue: '3 min',
      metricDiscountLabel: 'Korting',
      metricDiscountValue: '€15',
      supportPhoneDesc: 'iPhone, Samsung, Google Pixel & meer',
      supportTabletDesc: 'iPad-modellen & populaire tablets',
      supportLaptopDesc: 'MacBook & laptopreparaties'
    },
    common: {
      back: 'Terug',
      nextStep: 'Volgende stap',
      sendOffer: 'Offerte versturen',
      sendOfferPdf: 'Offerte PDF versturen',
      directMailbox: 'Direct in je mailbox',
      youOnlyPayAfter: 'Je betaalt pas na reparatie',
      free: 'GRATIS',
      startingAt: 'vanaf',
      priceOnRequest: 'prijs op aanvraag',
      select: 'Selecteer',
      search: 'Zoek merk, model of modelcode',
      total: 'Totaal',
      subtotal: 'subtotaal',
      comboDiscount: 'Combi-korting',
      addExtraRepairDiscount: 'Voeg een extra reparatie toe en ontvang €15 korting.',
      offerCreated: 'Offerte aangemaakt',
      copyId: 'Kopieer offerte-ID'
    },
    wizard: {
      step1Title: 'Welk model heb je?',
      step1Hint: 'Voer merk, model of modelcode in.',
      orSelectType: 'Of kies het apparaattype',
      orSelectBrand: 'Of selecteer het merk',
      findMyModel: 'Vind mijn model',
      allModels: 'Alle modellen',
      noModels: 'Geen modellen gevonden voor deze selectie. Kies een ander merk, wissel apparaattype, of zoek hierboven.',
      deviceTypes: {
        phone: 'Telefoon',
        tablet: 'Tablet',
        laptop: 'Mac / Laptop'
      },
      selectDevice: 'Selecteer apparaat',
      selectRepair: 'Selecteer reparatie',
      finish: 'Afronden afspraak',

      step2: 'Stap 2',
      selectRepairTitle: 'Selecteer de reparatie die je nodig hebt',
      step3: 'Stap 3',
      finishTitle: 'Rond je afspraak af',
      finishSubtitle: 'Vul je gegevens in en kies een servicemethode.',

      device: 'Apparaat',
      smartphone: 'Smartphone',
      selectColor: 'Selecteer kleur',
      selectRepairLabel: 'Selecteer reparatie',
      repairList: 'Reparatielijst',

      receiveOfferByEmail: 'Ontvang je offerte per e-mail',
      fillInfo: 'Vul alle benodigde informatie in',
      selectLocation: 'Selecteer locatie',
      currentLocation: 'HUIDIGE LOCATIE',
      searchLocation: 'Zoek locatie op adres',
      selectServiceMethod: 'Selecteer servicemethode',
      comeByStore: 'Kom langs in onze winkel',
      doneWhileWaiting: 'Klaar terwijl je wacht',
      shipDevice: 'Stuur apparaat op',
      repairWithin24h: 'Reparatie binnen 24 uur',

      firstName: 'Voornaam',
      lastName: 'Achternaam',
      number: 'Nummer',
      streetName: 'Straatnaam',
      city: 'Stad',
      zipcode: 'Postcode',
      country: 'Land',
      email: 'E-mail',
      phone: 'Telefoon',
      imei: 'IMEI-nummer',
      send: 'Offerte versturen'
    },
    colors: {
      black: 'ZWART',
      lavender: 'LAVENDEL',
      mistBlue: 'MISTBLAUW',
      sage: 'SALIE',
      white: 'WIT'
    }
  }
};

const I18nContext = React.createContext(null);

export function I18nProvider({ children }) {
  const [lang, setLang] = React.useState(() => {
    const stored = localStorage.getItem('fastofix_lang');
    return stored || 'en';
  });

  React.useEffect(() => {
    localStorage.setItem('fastofix_lang', lang);
  }, [lang]);

  const t = React.useCallback(
    (path) => {
      const parts = String(path).split('.').filter(Boolean);
      let cur = translations?.[lang];
      for (const p of parts) cur = cur?.[p];
      return cur ?? path;
    },
    [lang]
  );

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = React.useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
