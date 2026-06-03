// ─── PRODUCTS ─────────────────────────────────────────────────────────────────

export type Product = {
  slug: string;
  name: string;
  series: string;
  tag: string;
  category: "indoor" | "outdoor" | "tracking";
  type: string[];
  installation: string[];
  power: string;
  cri: string;
  cct: string;
  ip: string;
  shape: "track" | "circle" | "cone" | "strip" | "wall" | "step";
  bg: string;
  isNew?: boolean;
  desc: string;
  features: string[];
};

export const products: Product[] = [
  {
    slug: "ala-track-mute",
    name: "ALA Track Mute",
    series: "ALA",
    tag: "LED Track Light",
    category: "indoor",
    type: ["Fixed/Adjustable"],
    installation: ["Track"],
    power: "6W – 26W",
    cri: "CRI 90+",
    cct: "2700K / 3000K / 4000K",
    ip: "IP20",
    shape: "track",
    bg: "from-neutral-200 to-neutral-300",
    isNew: true,
    desc: "Compact and quiet track light with family-style design and diverse accessories suitable for more scene spaces.",
    features: ["CREE LED", "MacAdam 2 step", "50,000h lifespan", "TRIAC / 0-10V dimming", "Anti-glare honeycomb"],
  },
  {
    slug: "atl-ultra-recessed",
    name: "ATL Ultra Recessed",
    series: "ATL",
    tag: "Auto Tracking Light",
    category: "tracking",
    type: ["Auto Tracking"],
    installation: ["Recessed"],
    power: "9W – 40W",
    cri: "CRI 90+",
    cct: "2700K / 3000K",
    ip: "IP20",
    shape: "circle",
    bg: "from-slate-200 to-slate-300",
    isNew: true,
    desc: "Intelligent auto-tracking recessed light that silently follows objects and art pieces with precision motor control.",
    features: ["Auto tracking motor", "Silent operation", "DALI / 0-10V dimming", "Wide beam 15°–60°", "Die-cast aluminium"],
  },
  {
    slug: "amoo-vanity-downlight",
    name: "AMOO Vanity Downlight",
    series: "AMOO",
    tag: "LED Ceiling Light",
    category: "indoor",
    type: ["Fixed/Adjustable"],
    installation: ["Recessed"],
    power: "15W",
    cri: "CRI 90+",
    cct: "3000K / 4000K",
    ip: "IP44",
    shape: "circle",
    bg: "from-stone-200 to-stone-300",
    desc: "Mirror-front vanity downlight designed for luxury bathroom environments with high colour fidelity.",
    features: ["OSRAM LED", "CRI 95+", "IP44 rated", "Warm dimming", "Anti-glare lens"],
  },
  {
    slug: "akin-anti-glare-strip",
    name: "AKIN Anti-Glare Strip",
    series: "AKIN",
    tag: "LED Strip Light",
    category: "indoor",
    type: ["Dot-free"],
    installation: ["Surface Mounted"],
    power: "12W/m",
    cri: "CRI 90+",
    cct: "2700K / 3000K / 4000K",
    ip: "IP20",
    shape: "strip",
    bg: "from-zinc-200 to-zinc-300",
    desc: "High-performance anti-glare LED strip with UGR<16 and dot-free technology for luxury linear applications.",
    features: ["UGR <16", "Dot-free technology", "Epistar LED", "CRI 90+", "Bendable PCB"],
  },
  {
    slug: "ares-mini-fixed",
    name: "ARES Mini Fixed",
    series: "ARES",
    tag: "LED Ceiling Light",
    category: "indoor",
    type: ["Fixed/Adjustable"],
    installation: ["Recessed"],
    power: "1.2W – 6W",
    cri: "CRI 90+",
    cct: "2700K / 3000K / 4000K",
    ip: "IP20",
    shape: "circle",
    bg: "from-gray-200 to-gray-300",
    desc: "Ultra-compact recessed ceiling light for accent and ambient lighting in premium hotel corridors and suites.",
    features: ["Compact Ø40mm", "CREE LED", "Anti-glare reflector", "Multiple beam angles", "Paintable trim ring"],
  },
  {
    slug: "ada-adjustable",
    name: "ADA Adjustable",
    series: "ADA",
    tag: "LED Ceiling Light",
    category: "indoor",
    type: ["Fixed/Adjustable"],
    installation: ["Recessed"],
    power: "7W – 20W",
    cri: "CRI 90+",
    cct: "2700K / 3000K",
    ip: "IP20",
    shape: "cone",
    bg: "from-amber-100 to-amber-200",
    isNew: true,
    desc: "360° rotatable adjustable downlight with smooth aiming for art illumination in hotel lobbies and galleries.",
    features: ["360° rotation", "90° tilt", "CREE LED", "Glare-shield included", "DALI dimming"],
  },
  {
    slug: "alf-flowz",
    name: "ALF Flowz",
    series: "ALF",
    tag: "LED Strip Light",
    category: "outdoor",
    type: ["RGB/Tunable White"],
    installation: ["Surface Mounted"],
    power: "8W/m",
    cri: "CRI 90+",
    cct: "2700K",
    ip: "IP67",
    shape: "strip",
    bg: "from-teal-200 to-emerald-200",
    desc: "IP67 flexible LED strip with side-bend capability for curved architectural and landscape applications.",
    features: ["IP67 waterproof", "Side-bend design", "Silicone extrusion", "300° light output", "UV resistant"],
  },
  {
    slug: "aplite-landscape",
    name: "APLITE Tree-Strapped",
    series: "APLITE",
    tag: "LED Landscape Light",
    category: "outdoor",
    type: ["Fixed/Adjustable"],
    installation: ["Surface Mounted"],
    power: "3W – 12W",
    cri: "CRI 80+",
    cct: "2700K / 3000K",
    ip: "IP65",
    shape: "wall",
    bg: "from-green-200 to-lime-200",
    desc: "Tree-mounted landscape accent light with adjustable strap mount, ideal for resort gardens and pathways.",
    features: ["IP65 rated", "Adjustable strap", "Spike / strap mount", "Warm white", "Salt-spray tested"],
  },
  {
    slug: "axe-wall-light",
    name: "AXE Wall Light",
    series: "AXE",
    tag: "LED Wall Light",
    category: "outdoor",
    type: ["Fixed/Adjustable"],
    installation: ["Surface Mounted"],
    power: "5W – 18W",
    cri: "CRI 90+",
    cct: "2700K / 3000K",
    ip: "IP65",
    shape: "wall",
    bg: "from-sky-200 to-blue-200",
    desc: "Architectural outdoor wall light with precision optics and durable die-cast housing for facade illumination.",
    features: ["IP65 outdoor rated", "Die-cast aluminium", "Asymmetric optics", "Salt-spray Level 9", "Paintable finish"],
  },
  {
    slug: "amoo-adjustable",
    name: "AMOO Adjustable",
    series: "AMOO",
    tag: "LED Ceiling Light",
    category: "indoor",
    type: ["Fixed/Adjustable"],
    installation: ["Recessed"],
    power: "10W – 25W",
    cri: "CRI 90+",
    cct: "2700K / 3000K / 4000K",
    ip: "IP44",
    shape: "cone",
    bg: "from-rose-100 to-pink-200",
    desc: "Adjustable bathroom ceiling light with IP44 rating and superior CRI for accurate colour rendering.",
    features: ["IP44 wet rated", "±30° tilt", "CREE LED", "CRI 93+", "Glare-control lens"],
  },
  {
    slug: "akin-3d-bendable",
    name: "AKIN 3D Bendable",
    series: "AKIN",
    tag: "LED Strip Light",
    category: "indoor",
    type: ["Dot-free"],
    installation: ["Surface Mounted"],
    power: "10W/m",
    cri: "CRI 90+",
    cct: "3000K / 4000K",
    ip: "IP20",
    shape: "strip",
    bg: "from-violet-200 to-purple-200",
    isNew: true,
    desc: "3D-bendable anti-glare strip light that shapes to any curved surface for custom architectural cove lighting.",
    features: ["3D bendable", "UGR <16", "Dot-free", "Grille anti-glare", "Custom lengths"],
  },
  {
    slug: "ada-step-light",
    name: "ADA Step Light",
    series: "ADA",
    tag: "LED Step Light",
    category: "outdoor",
    type: ["Fixed/Adjustable"],
    installation: ["Recessed"],
    power: "2W – 4W",
    cri: "CRI 80+",
    cct: "2700K / 3000K",
    ip: "IP65",
    shape: "step",
    bg: "from-orange-200 to-amber-200",
    desc: "Slim recessed step and riser light for outdoor staircases, pool decks, and terrace pathways.",
    features: ["Ultra slim 15mm", "IP65 rated", "Anti-glare screen", "Stainless steel trim", "Warm dimming"],
  },
];

// ─── PROJECTS ─────────────────────────────────────────────────────────────────

export type Project = {
  slug: string;
  name: string;
  location: string;
  country: string;
  brand: string;
  types: string[];
  areas: string[];
  year: number;
  bg: string;
  bgLarge: string;
  desc: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "atlantis-the-royal-dubai",
    name: "Atlantis The Royal",
    location: "Dubai, UAE",
    country: "Overseas",
    brand: "Other Luxury",
    types: ["LED Ceiling Light", "LED Track Light", "LED Strip Light"],
    areas: ["Lobby", "Guest room", "Restaurant", "Pool"],
    year: 2023,
    bg: "from-[#1a2a3a] to-[#2c4a6e]",
    bgLarge: "from-[#0d1e2e] via-[#1a2a3a] to-[#2c4a6e]",
    desc: "A landmark ultra-luxury resort on its own island, featuring dramatic lighting throughout 795 rooms, 90 suites, and world-class amenities.",
    highlights: ["ALA Track series throughout suites", "Custom colour temperature per zone", "Smart DALI control system", "IP65 pool deck fixtures"],
  },
  {
    slug: "capella-bangkok",
    name: "Capella Bangkok",
    location: "Bangkok, Thailand",
    country: "Overseas",
    brand: "Capella",
    types: ["LED Ceiling Light", "LED Linear Light", "LED Strip Light"],
    areas: ["Guest room", "Lobby", "Restaurant", "SPA"],
    year: 2022,
    bg: "from-[#2a1a3a] to-[#5a3a6e]",
    bgLarge: "from-[#1a0d2a] via-[#2a1a3a] to-[#5a3a6e]",
    desc: "A riverside sanctuary in Bangkok combining heritage architecture with sophisticated contemporary lighting design across 101 suites.",
    highlights: ["AMOO downlight series throughout", "Warm dim technology 2700K–1800K", "Heritage corridor accent lighting", "SPA mood lighting system"],
  },
  {
    slug: "alila-shanghai",
    name: "Alila Wutai Shanghai",
    location: "Shanghai, China",
    country: "China",
    brand: "Hyatt",
    types: ["LED Ceiling Light", "LED Track Light", "LED Wall Light"],
    areas: ["Lobby", "Guest room", "Restaurant", "Lounge"],
    year: 2023,
    bg: "from-[#1a3a2a] to-[#2e6e5a]",
    bgLarge: "from-[#0d2a1a] via-[#1a3a2a] to-[#2e6e5a]",
    desc: "Urban sanctuary in the heart of Shanghai, blending contemporary Chinese design with precision hospitality lighting across 212 rooms.",
    highlights: ["ADA adjustable downlights", "AKIN strip in cove details", "Restaurant DALI scene control", "Artwork track lighting"],
  },
  {
    slug: "w-maldives-resort",
    name: "W Maldives Resort & Spa",
    location: "Maldives",
    country: "Overseas",
    brand: "Marriott",
    types: ["LED Ceiling Light", "LED Strip Light", "LED Landscape Light"],
    areas: ["Guest room", "Pool", "Outdoor landscape", "Restaurant"],
    year: 2023,
    bg: "from-[#1a3a4a] to-[#2e6e8e]",
    bgLarge: "from-[#0d2a3a] via-[#1a3a4a] to-[#2e6e8e]",
    desc: "Iconic overwater resort in North Malé Atoll. Full lighting upgrade across all villas, public areas, and oceanfront facilities.",
    highlights: ["IP67 outdoor fixtures throughout", "Salt-spray Level 9 tested", "Overwater villa ambient system", "APLITE landscape series"],
  },
  {
    slug: "st-regis-macao",
    name: "St. Regis Macao",
    location: "Macau, China",
    country: "China",
    brand: "Marriott",
    types: ["LED Ceiling Light", "LED Track Light", "LED Linear Light"],
    areas: ["Lobby", "Guest room", "Restaurant", "Meeting Room"],
    year: 2022,
    bg: "from-[#3a2a1a] to-[#6e4e2e]",
    bgLarge: "from-[#2a1a0d] via-[#3a2a1a] to-[#6e4e2e]",
    desc: "Opulent five-star hotel in the Cotai Strip featuring Aero lighting across all public spaces and 400 guest rooms and suites.",
    highlights: ["Custom gold-trim fixture series", "Lobby 9m ceiling solution", "DALI integrated control", "Ballroom colour tuning"],
  },
  {
    slug: "four-seasons-bangkok",
    name: "Four Seasons Bangkok",
    location: "Bangkok, Thailand",
    country: "Overseas",
    brand: "Four Seasons",
    types: ["LED Ceiling Light", "LED Strip Light", "LED Track Light"],
    areas: ["Lobby", "Guest room", "SPA", "Pool"],
    year: 2021,
    bg: "from-[#1a3a3a] to-[#2e6e6e]",
    bgLarge: "from-[#0d2a2a] via-[#1a3a3a] to-[#2e6e6e]",
    desc: "Riverside luxury hotel at Chao Phraya with 299 rooms, featuring Aero's complete indoor and outdoor lighting solution.",
    highlights: ["Full indoor/outdoor package", "ARES mini-fixed throughout rooms", "Riverside terrace IP65 fixtures", "Lobby art track lighting"],
  },
  {
    slug: "jw-marriott-changsha",
    name: "JW Marriott Hotel Changsha",
    location: "Changsha, China",
    country: "China",
    brand: "Marriott",
    types: ["LED Ceiling Light", "LED Linear Light", "LED Track Light"],
    areas: ["Lobby", "Guest room", "Restaurant", "Meeting Room"],
    year: 2022,
    bg: "from-[#2a3a1a] to-[#4e6e2e]",
    bgLarge: "from-[#1a2a0d] via-[#2a3a1a] to-[#4e6e2e]",
    desc: "Landmark high-rise hotel in central Changsha with signature JW Marriott elegance supported by Aero's full-floor lighting package.",
    highlights: ["450 room full package", "Marble lobby uplighting", "Restaurant scene control", "24/7 technical on-site support"],
  },
  {
    slug: "andaz-nanjing",
    name: "Andaz Nanjing Hexi",
    location: "Nanjing, China",
    country: "China",
    brand: "Hyatt",
    types: ["LED Ceiling Light", "LED Strip Light", "LED Wall Light"],
    areas: ["Lobby", "Guest room", "Lounge", "Restaurant"],
    year: 2023,
    bg: "from-[#3a1a2a] to-[#6e2e5a]",
    bgLarge: "from-[#2a0d1a] via-[#3a1a2a] to-[#6e2e5a]",
    desc: "Contemporary lifestyle hotel with 270 rooms featuring Aero's full suite of ceiling, strip, and wall-wash lighting solutions.",
    highlights: ["Lifestyle zone LED strip coves", "AMOO vanity in all bathrooms", "Art wall track system", "Smart scene preset library"],
  },
];

// ─── ARTICLES ─────────────────────────────────────────────────────────────────

export type Article = {
  slug: string;
  category: "News" | "Blog" | "Media";
  date: string;
  title: string;
  excerpt: string;
  bg: string;
};

export const articles: Article[] = [
  {
    slug: "light-building-2026",
    category: "News",
    date: "March 2026",
    title: "Aero Light at Light + Building 2026, Frankfurt",
    excerpt: "Join us at the world's leading trade fair for lighting and building technology. Visit our booth to experience the newest ALA and ATL series in person.",
    bg: "from-slate-300 to-blue-300",
  },
  {
    slug: "worlds-50-best-hotels-2025",
    category: "News",
    date: "November 2025",
    title: "Three Aero-lit Hotels Make World's 50 Best Hotels 2025 List",
    excerpt: "Capella Bangkok, Four Seasons Maldives, and Alila Wutai Shanghai were recognised among the world's finest, all featuring Aero Light solutions.",
    bg: "from-amber-200 to-yellow-300",
  },
  {
    slug: "w-maldives-upgrade",
    category: "News",
    date: "September 2024",
    title: "W Maldives Resort Completes Full Lighting Upgrade",
    excerpt: "A complete overhaul of all public and guest areas with IP67 fixtures, salt-spray tested to Level 9 for the demanding oceanfront environment.",
    bg: "from-teal-200 to-cyan-300",
  },
  {
    slug: "dialux-partnership",
    category: "News",
    date: "July 2024",
    title: "Aero Light Partners with DIALux for BIM & Lighting Simulation",
    excerpt: "Our full product library is now available within DIALux evo, enabling lighting designers to simulate Aero fixtures with photometric accuracy.",
    bg: "from-violet-200 to-purple-300",
  },
  {
    slug: "iso-9001-recertification",
    category: "News",
    date: "August 2024",
    title: "Aero Light Earns ISO 9001:2015 Recertification",
    excerpt: "Our quality management systems have been independently audited and recertified, reaffirming our commitment to world-class manufacturing standards.",
    bg: "from-emerald-200 to-green-300",
  },
  {
    slug: "warm-dim-technology",
    category: "Blog",
    date: "June 2024",
    title: "Why Warm Dim Technology Matters in Luxury Hotel Design",
    excerpt: "Warm dim mimics the behaviour of incandescent bulbs — as dimmed, colour temperature drops from 3000K to 1800K, creating intimate, candle-like warmth.",
    bg: "from-orange-200 to-red-200",
  },
  {
    slug: "cri-in-hospitality",
    category: "Blog",
    date: "April 2024",
    title: "CRI 90+ vs CRI 80: Why It Matters for Hotel Guests",
    excerpt: "Colour Rendering Index directly affects how guests perceive your property. Higher CRI means skin tones look healthier, food looks more appetising.",
    bg: "from-pink-200 to-rose-300",
  },
  {
    slug: "guangzhou-design-week-2024",
    category: "Media",
    date: "October 2024",
    title: "Aero Light at Guangzhou Design Week 2024",
    excerpt: "Photo highlights and video recap from our exhibit showcasing the ALA Track Mute launch and the expanded AMOO bathroom lighting family.",
    bg: "from-indigo-200 to-blue-300",
  },
];

// ─── DOWNLOADS ────────────────────────────────────────────────────────────────

export type Download = {
  id: string;
  category: "Catalogue" | "Portfolio";
  title: string;
  year: string;
  size: string;
  downloads: number;
  bg: string;
};

export const downloads: Download[] = [
  { id: "cat-2025", category: "Catalogue", title: "Aero Light Catalogue 2025 V3.1", year: "2025", size: "28 MB", downloads: 3842, bg: "from-slate-200 to-slate-300" },
  { id: "cat-eprog", category: "Catalogue", title: "E-Programme 2022", year: "2022", size: "14 MB", downloads: 2109, bg: "from-blue-200 to-blue-300" },
  { id: "cat-2019", category: "Catalogue", title: "Aero Light Catalogue 2019", year: "2019", size: "22 MB", downloads: 1456, bg: "from-stone-200 to-stone-300" },
  { id: "cat-ceiling", category: "Catalogue", title: "LED Ceiling Light Brochure", year: "2024", size: "8 MB", downloads: 976, bg: "from-amber-100 to-amber-200" },
  { id: "cat-vanity", category: "Catalogue", title: "Vanity Downlight Series Brochure", year: "2024", size: "6 MB", downloads: 741, bg: "from-pink-100 to-pink-200" },
  { id: "cat-landscape", category: "Catalogue", title: "Landscape Lighting Brochure", year: "2023", size: "11 MB", downloads: 632, bg: "from-green-100 to-green-200" },
  { id: "cat-night", category: "Catalogue", title: "LED Night Light Brochure", year: "2023", size: "5 MB", downloads: 489, bg: "from-indigo-100 to-indigo-200" },
  { id: "cat-strip", category: "Catalogue", title: "LED Strip Light Brochure", year: "2024", size: "7 MB", downloads: 815, bg: "from-teal-100 to-teal-200" },
  { id: "port-hyatt", category: "Portfolio", title: "Aero × Hyatt Portfolio 2023", year: "2023", size: "18 MB", downloads: 1203, bg: "from-violet-200 to-purple-300" },
  { id: "port-marriott", category: "Portfolio", title: "Aero × Marriott Portfolio 2023", year: "2023", size: "20 MB", downloads: 1087, bg: "from-rose-200 to-pink-300" },
  { id: "port-ihg", category: "Portfolio", title: "Aero × IHG Portfolio 2022", year: "2022", size: "16 MB", downloads: 894, bg: "from-orange-200 to-amber-300" },
  { id: "port-general", category: "Portfolio", title: "Aero Portfolio 2022", year: "2022", size: "35 MB", downloads: 2456, bg: "from-emerald-200 to-teal-300" },
];

// ─── OFFICES ──────────────────────────────────────────────────────────────────

export const offices = [
  { city: "Guangzhou", label: "Headquarters", phone: "+86 020 0000 0000", email: "gz@aerolight.cn", address: "No. 1 Aero Tower, Tianhe District, Guangzhou, China" },
  { city: "Innovation Factory", label: "Nansha District", phone: "+86 020 0000 0001", email: "factory@aerolight.cn", address: "Nansha Economic Zone, Guangzhou, China" },
  { city: "Shenzhen", label: "Branch Office", phone: "+86 0755 0000 0000", email: "sz@aerolight.cn", address: "Futian CBD, Shenzhen, Guangdong, China" },
  { city: "Shanghai", label: "Branch Office", phone: "+86 021 0000 0000", email: "sh@aerolight.cn", address: "Jing'an District, Shanghai, China" },
  { city: "Hong Kong", label: "Branch Office", phone: "+852 0000 0000", email: "hk@aerolight.cn", address: "Central, Hong Kong SAR" },
  { city: "Singapore", label: "Regional Office", phone: "+65 0000 0000", email: "sg@aerolight.cn", address: "Marina Bay, Singapore" },
  { city: "South Korea", label: "Branch Office", phone: "+82 02 0000 0000", email: "kr@aerolight.cn", address: "Gangnam-gu, Seoul, South Korea" },
  { city: "Taipei", label: "Branch Office", phone: "+886 02 0000 0000", email: "tw@aerolight.cn", address: "Xinyi District, Taipei, Taiwan" },
];
