export interface ServiceItem {
  id: string;
  name: string;
  category: "braids" | "wigs" | "natural" | "kids" | "addons" | "bridal";
  startingPrice: number;
  durationMins: number;
  description: string;
  popular?: boolean;
}

export interface ServiceCategory {
  id: "braids" | "wigs" | "natural" | "kids" | "addons" | "bridal";
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "braids",
    title: "Braiding Services",
    subtitle: "Precision parts, clean lines & long-lasting protective elegance",
    description: "From classic knotless braids to bohemian twists, every set is tailored for scalp comfort, neatness, and maximum longevity.",
    badge: "Most Requested",
  },
  {
    id: "wigs",
    title: "Wig Services & Revamping",
    subtitle: "Flawless melt, precision customization & luxury hair care",
    description: "Expert lace melting, styling, and revitalizing washes to keep your units looking brand new.",
  },
  {
    id: "natural",
    title: "Natural Hair Care",
    subtitle: "Moisture-rich treatments, detangling & gentle styling",
    description: "Health-first natural hair handling designed to retain length and restore shine.",
  },
  {
    id: "kids",
    title: "Children's Hairstyles (Ages 8+)",
    subtitle: "Gentle, neat & pain-free protective styles for young queens & kings",
    description: "Patient and friendly styling tailored specifically for young clients.",
    badge: "Ages 8+",
  },
  {
    id: "bridal",
    title: "Bridal & Special Occasions",
    subtitle: "Show-stopping event hair designed for your grand celebration",
    description: "Wedding, traditional engagement, birthday, and red-carpet glam hairstyling with mobile home service.",
    badge: "VIP Glam",
  },
  {
    id: "addons",
    title: "Add-Ons & Hair Supplies",
    subtitle: "Enhance your appointment with extra pampering & hair care",
    description: "Add length, hair washes, detangling, beads, or request premium extension supplies.",
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  // 1. BRAIDING
  { id: "all-back-cornrows", name: "All-back Cornrows", category: "braids", startingPrice: 5000, durationMins: 120, description: "Classic, neat straight-back cornrows designed for sleek everyday wear or wig underlays." },
  { id: "ghana-weaving", name: "Ghana Weaving", category: "braids", startingPrice: 8000, durationMins: 180, description: "Precision feed-in Ghanaian weaving with crisp stitch lines and polished finish." },
  { id: "box-braids", name: "Classic Box Braids", category: "braids", startingPrice: 12000, durationMins: 240, description: "Traditional square or triangle-parted box braids with sealed ends." },
  { id: "large-knotless", name: "Large Knotless Braids", category: "braids", startingPrice: 12000, durationMins: 210, description: "Tension-free, feather-light large knotless braids for effortless styling." },
  { id: "knotless-braids", name: "Knotless Braids (Standard)", category: "braids", startingPrice: 15000, durationMins: 270, description: "Our signature pain-free, scalp-healthy knotless braids with natural root transitions.", popular: true },
  { id: "medium-knotless", name: "Medium Knotless Braids", category: "braids", startingPrice: 18000, durationMins: 300, description: "The sweet spot of full density, lightness, and versatile styling options.", popular: true },
  { id: "small-knotless", name: "Small Knotless Braids", category: "braids", startingPrice: 25000, durationMins: 360, description: "Ultra-fine, high-density knotless braids that last 8+ weeks." },
  { id: "boho-braids", name: "Boho (Bohemian) Braids", category: "braids", startingPrice: 20000, durationMins: 300, description: "Knotless braiding infused with cascading curly tendrils for that effortless goddess aesthetic.", popular: true },
  { id: "goddess-braids", name: "Goddess Braids", category: "braids", startingPrice: 18000, durationMins: 270, description: "Elegant feed-in braids accented with soft curly tips and edges." },
  { id: "senegalese-twists", name: "Senegalese Twists", category: "braids", startingPrice: 15000, durationMins: 240, description: "Silky, rope-twist protective styling with clean parts." },
  { id: "passion-twists", name: "Passion Twists", category: "braids", startingPrice: 15000, durationMins: 240, description: "Textured, bouncy bohemian twists made with water wave extensions." },
  { id: "faux-locs", name: "Faux Locs", category: "braids", startingPrice: 20000, durationMins: 300, description: "Lightweight, natural-looking loc extensions with distressed or sleek texture." },
  { id: "stitch-braids", name: "Stitch Braids", category: "braids", startingPrice: 10000, durationMins: 180, description: "Razor-sharp, defined stitch lines crafted with artisan precision." },
  { id: "tribal-braids", name: "Tribal Braids (Fulani)", category: "braids", startingPrice: 18000, durationMins: 270, description: "Intricate patterned cornrows in the front with knotless braids or twists in the back." },
  { id: "feed-in-braids", name: "Feed-in Braids", category: "braids", startingPrice: 10000, durationMins: 150, description: "Seamlessly graduated feed-in braids that flatter your facial contour." },
  { id: "lemonade-braids", name: "Lemonade Braids", category: "braids", startingPrice: 15000, durationMins: 210, description: "Statement side-swept cornrows inspired by Queen Bey." },
  { id: "ponytail-braids", name: "Braided Ponytail Styles", category: "braids", startingPrice: 12000, durationMins: 180, description: "High or low braided pony styles with snatched baby hairs." },

  // 2. WIGS
  { id: "wig-installation", name: "Wig Installation", category: "wigs", startingPrice: 10000, durationMins: 120, description: "Flawless lace placement, adhesive melt, and natural perimeter finish." },
  { id: "wig-install-styling", name: "Wig Installation with Styling", category: "wigs", startingPrice: 15000, durationMins: 150, description: "Full install paired with wand curls, bone-straight pressing, or crimps.", popular: true },
  { id: "frontal-install", name: "Frontal Installation", category: "wigs", startingPrice: 15000, durationMins: 150, description: "13x4 / 13x6 lace frontal custom melt with plucked natural hairline." },
  { id: "closure-install", name: "Closure Installation", category: "wigs", startingPrice: 12000, durationMins: 120, description: "Clean 4x4 / 5x5 closure install with flat, natural root transition." },
  { id: "wig-revamping", name: "Wig Revamping", category: "wigs", startingPrice: 15000, durationMins: 180, description: "Deep cleansing, intensive conditioning, lace detangling, re-styling, and revival." },
  { id: "wig-washing", name: "Wig Washing & Clarifying", category: "wigs", startingPrice: 5000, durationMins: 60, description: "Thorough product buildup removal, sulfate-free wash, and silk dry." },
  { id: "wig-styling", name: "Wig Styling Only", category: "wigs", startingPrice: 8000, durationMins: 90, description: "Bouncy curls, layered cuts, or pin-straight hot comb finish on pre-installed units." },
  { id: "wig-customization", name: "Wig Customization (Pluck & Bleach)", category: "wigs", startingPrice: 12000, durationMins: 120, description: "Knot bleaching, tinting to your skin tone, and micro-plucking for an undetectable hairline." },

  // 3. NATURAL HAIR
  { id: "natural-cornrows", name: "Natural Hair Cornrows", category: "natural", startingPrice: 5000, durationMins: 90, description: "No extension added. Neat scalp cornrows to nourish your own hair." },
  { id: "natural-twists", name: "Natural Hair Twists", category: "natural", startingPrice: 6000, durationMins: 120, description: "Two-strand twists with organic butter moisturizers for high definition." },
  { id: "natural-styling", name: "Natural Hair Styling & Updos", category: "natural", startingPrice: 5000, durationMins: 90, description: "Creative twists, flat twists, and fro-hawks for afro-textured hair." },
  { id: "wash-conditioning", name: "Wash and Conditioning", category: "natural", startingPrice: 5000, durationMins: 60, description: "Invigorating scalp wash, moisture replenishment, and gentle finger detangling." },
  { id: "deep-conditioning", name: "Deep Conditioning Treatment", category: "natural", startingPrice: 5000, durationMins: 60, description: "Heat-activated steam moisture mask to combat dryness and breakage." },
  { id: "detangling", name: "Gentle Detangling Session", category: "natural", startingPrice: 3000, durationMins: 45, description: "Painless knot resolution with slip-rich conditioner to minimize shedding." },
  { id: "protective-styling", name: "Simple Protective Styling", category: "natural", startingPrice: 6000, durationMins: 90, description: "Low-tension styles to keep your ends tucked and promote healthy growth." },

  // 4. KIDS
  { id: "kids-simple-cornrows", name: "Simple Cornrows (Kids 8+)", category: "kids", startingPrice: 3000, durationMins: 90, description: "Gentle scalp handling, light tension, and clean playful patterns." },
  { id: "kids-all-back", name: "All-back Braids (Kids 8+)", category: "kids", startingPrice: 4000, durationMins: 90, description: "School-friendly, durable all-back cornrows." },
  { id: "kids-ghana-weaving", name: "Ghana Weaving (Kids 8+)", category: "kids", startingPrice: 5000, durationMins: 120, description: "Stylish feed-in weaving styled for comfort and school activities." },
  { id: "kids-box-braids", name: "Box Braids (Kids 8+)", category: "kids", startingPrice: 7000, durationMins: 150, description: "Lightweight box braids with kid-friendly hair lengths." },
  { id: "kids-knotless", name: "Knotless Braids (Kids 8+)", category: "kids", startingPrice: 10000, durationMins: 180, description: "Zero pull on tender scalps. Pure comfort for your young queen." },
  { id: "kids-beaded", name: "Beaded Hairstyles (Kids 8+)", category: "kids", startingPrice: 5000, durationMins: 120, description: "Fun, vibrant wooden or colorful bead installations with secure rubber bands." },
  { id: "kids-ponytail", name: "Kids Ponytail Styles", category: "kids", startingPrice: 5000, durationMins: 90, description: "Bubbly high puff or braided ponytail with festive accessories." },
  { id: "kids-occasions", name: "Special Occasion Hairstyles (Kids)", category: "kids", startingPrice: 8000, durationMins: 150, description: "Birthdays, graduations, and church festive styling with hair embellishments." },

  // 5. BRIDAL & OCCASIONS
  { id: "bridal-styling", name: "Bridal Hairstyling", category: "bridal", startingPrice: 20000, durationMins: 240, description: "White wedding bridal styling, veil setting, crown placement, and all-day hold.", popular: true },
  { id: "traditional-wedding", name: "Traditional Wedding Hairstyle", category: "bridal", startingPrice: 15000, durationMins: 210, description: "Engagement styling tailored for gele styling or regal bridal accessories." },
  { id: "birthday-styling", name: "Birthday Hairstyling", category: "bridal", startingPrice: 10000, durationMins: 180, description: "Picture-perfect photoshoot glam designed to make you the center of attention." },
  { id: "event-styling", name: "Special Event Styling", category: "bridal", startingPrice: 10000, durationMins: 150, description: "Dinner events, red carpets, matriculations, and milestone celebrations." },

  // 6. ADD-ONS
  { id: "addon-wash", name: "Hair Washing Add-on", category: "addons", startingPrice: 3000, durationMins: 30, description: "Clarifying cleanse before your braiding or installation session." },
  { id: "addon-takedown", name: "Hair Takedown & Detangling", category: "addons", startingPrice: 3000, durationMins: 45, description: "Careful removal of previous braids or weave without cutting your natural hair." },
  { id: "addon-extra-length", name: "Extra Length (Knee/Thigh length)", category: "addons", startingPrice: 3000, durationMins: 60, description: "Extended braider time and hair layering for dramatic runway lengths." },
  { id: "addon-accessories", name: "Beads, Rings & Accessories", category: "addons", startingPrice: 1000, durationMins: 15, description: "Gold cuffs, metallic strings, Cowrie shells, or wooden beads." },
];

export const BRAND_CONFIG = {
  name: "Beauty Branch",
  tagline: "Where Beauty Meets Excellence",
  founder: "Janneatte",
  experienceYears: "10+",
  phone: "08072223017",
  whatsappNumber: "+2348072223017",
  email: "ajamagarjanet@gmail.com",
  location: "University of Ibadan, Bodija, Ibadan, Oyo State, Nigeria",
  serviceMode: "Home Service Available Across Ibadan",
  instagramUrl: "https://www.instagram.com/janneatte_beauty_branch?exln=MWdvOWRpMGIwd3c5dA==",
  tiktokUrl: "https://www.tiktok.com/@.janneatte?_r=1&_t=ZS-9ATOHpTppPY",
  hours: {
    monSat: "10:00 AM – 7:00 PM",
    sun: "3:00 PM – 7:00 PM",
  },
  depositAmount: 5000, // ₦5,000 flat deposit
  bufferMinutes: 30,
  minNoticeHours: 24,
  maxAdvanceDays: 60,
  policies: {
    deposit: "A flat ₦5,000 deposit is required to confirm every booking. Deposits are strictly non-refundable upon cancellation, but remain 100% intact and transferable if you reschedule at least 24 hours in advance.",
    lateness: "A 15-minute grace period is provided. Lateness beyond 30 minutes attracts an extra fee, provided the day's schedule still permits your appointment to proceed without interrupting subsequent bookings.",
    preparation: [
      "Wash and thoroughly detangle your hair prior to appointment (unless you added a Hair Washing Add-on).",
      "Confirm with Janet whether you are providing your own hair extensions or purchasing through Beauty Branch.",
      "Send or upload your desired inspiration photo during booking for precise preparation.",
      "Have a clear, well-lit chair and seating area ready for home service appointments.",
    ],
  },
};
