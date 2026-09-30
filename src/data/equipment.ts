// PLACEHOLDER INVENTORY: every item below is sample data until West Ridge supplies the real fleet.
export type Category = { slug: string; name: string; blurb: string; icon: string };
export type Item = {
  slug: string; name: string; category: string; blurb: string;
  specs: [string, string][]; features: string[]; delivery: boolean; rate: string;
};

export const categories: Category[] = [
  { slug: 'trucks',      name: 'Trucks & Hauling', blurb: 'Dump trucks, flatbeds and trailers to move material and machines.', icon: 'truck' },
  { slug: 'excavation',  name: 'Excavation',       blurb: 'Excavators, backhoes and skid steers for digging and grading.',      icon: 'excavator' },
  { slug: 'landscaping', name: 'Landscaping',      blurb: 'Compact equipment for yards, lots and site cleanup.',                icon: 'leaf' },
  { slug: 'compaction',  name: 'Compaction & Concrete', blurb: 'Rollers, plate compactors and finishing tools.',                icon: 'roller' },
];

const CALL = 'Call for quote';

export const items: Item[] = [
  { slug: 'dump-truck-10yd', name: '10 Yard Dump Truck', category: 'trucks', blurb: 'Everyday hauler for gravel, soil and demo debris.',
    specs: [['Capacity', '10 cubic yards'], ['Payload', '~15 tons'], ['License', 'CDL may be required']], features: ['Tandem axle', 'Tarp system', 'Backup camera'], delivery: true, rate: CALL },
  { slug: 'flatbed-trailer-20', name: '20 ft Equipment Trailer', category: 'trucks', blurb: 'Tag-along trailer for moving skid steers and mini excavators.',
    specs: [['Length', '20 ft'], ['Capacity', '14,000 lbs'], ['Hitch', 'Ball or pintle']], features: ['Fold-down ramps', 'Electric brakes', 'D-ring tie-downs'], delivery: true, rate: CALL },
  { slug: 'flatbed-truck', name: 'Flatbed Truck', category: 'trucks', blurb: 'Haul pallets, materials and equipment across Utah.',
    specs: [['Bed', '20 ft'], ['Payload', '~10,000 lbs'], ['License', 'Standard (verify)']], features: ['Stake pockets', 'Ratchet straps available'], delivery: true, rate: CALL },
  { slug: 'mini-excavator-35', name: 'Mini Excavator (3.5 ton)', category: 'excavation', blurb: 'Tight-access digging for trenches, footings and utilities.',
    specs: [['Operating weight', '~7,700 lbs'], ['Dig depth', '~10 ft'], ['Bucket', '24 in standard']], features: ['Zero tail swing', 'Thumb available', 'Rubber tracks'], delivery: true, rate: CALL },
  { slug: 'excavator-20t', name: 'Excavator (20 ton)', category: 'excavation', blurb: 'Full-size digging power for large sites and heavy jobs.',
    specs: [['Operating weight', '~45,000 lbs'], ['Dig depth', '~22 ft'], ['Bucket', '36 in standard']], features: ['Hydraulic thumb', 'A/C cab', 'Quick coupler'], delivery: true, rate: CALL },
  { slug: 'skid-steer', name: 'Skid Steer Loader', category: 'excavation', blurb: 'The all-purpose workhorse for loading, grading and clearing.',
    specs: [['Rated capacity', '~2,200 lbs'], ['Lift height', '~10 ft'], ['Attachments', 'Bucket, forks, auger']], features: ['Enclosed cab', 'Quick-attach', 'High-flow option'], delivery: true, rate: CALL },
  { slug: 'backhoe-loader', name: 'Backhoe Loader', category: 'excavation', blurb: 'Dig and load with one machine.',
    specs: [['Dig depth', '~14 ft'], ['Loader bucket', '1 cubic yard'], ['Drive', '4WD']], features: ['Extendable dipper', 'Enclosed cab'], delivery: true, rate: CALL },
  { slug: 'compact-track-loader', name: 'Compact Track Loader', category: 'landscaping', blurb: 'Low ground pressure for finished lawns and soft soil.',
    specs: [['Rated capacity', '~2,700 lbs'], ['Ground pressure', 'Low'], ['Attachments', 'Bucket, forks, grapple']], features: ['Rubber tracks', 'Enclosed cab'], delivery: true, rate: CALL },
  { slug: 'stump-grinder', name: 'Stump Grinder', category: 'landscaping', blurb: 'Clear stumps fast without digging them out.',
    specs: [['Cutting depth', '~16 in'], ['Engine', '~25 hp'], ['Type', 'Self-propelled']], features: ['Easy trailer transport'], delivery: true, rate: CALL },
  { slug: 'trencher', name: 'Walk-Behind Trencher', category: 'landscaping', blurb: 'Sprinkler lines, cable and small utility trenches.',
    specs: [['Trench depth', 'up to 36 in'], ['Width', '4-6 in']], features: ['Adjustable depth'], delivery: true, rate: CALL },
  { slug: 'smooth-drum-roller', name: 'Smooth Drum Roller', category: 'compaction', blurb: 'Compact base, gravel and asphalt for a solid finish.',
    specs: [['Drum width', '48 in'], ['Weight', '~3,500 lbs']], features: ['Vibratory', 'Water spray'], delivery: true, rate: CALL },
  { slug: 'plate-compactor', name: 'Plate Compactor', category: 'compaction', blurb: 'Pavers, trench backfill and small base areas.',
    specs: [['Plate', '20 in'], ['Force', '~4,000 lbf']], features: ['Pickup-friendly size'], delivery: false, rate: CALL },
];

export const catName = (slug: string) => categories.find((c) => c.slug === slug)?.name ?? slug;

// Simple line icons shared by category cards and photo placeholders.
export const icons: Record<string, string> = {
  truck: '<path d="M2 16V6h11v10M13 9h4l3 3v4h-2M2 16h2m14 0h-2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>',
  excavator: '<path d="M3 18h12M5 18v-4h7v4M8 14V9l5-5 4 3-4 5M13 12l5 3-2 3"/><circle cx="6" cy="19.5" r="1"/>',
  leaf: '<path d="M5 19c0-9 5-14 15-14 0 10-5 15-14 15M5 19c3-5 6-8 10-10"/>',
  roller: '<rect x="3" y="14" width="6" height="6" rx="3"/><rect x="12" y="11" width="9" height="9" rx="4.5"/><path d="M9 17h3M5 14V8h7l2 3"/>',
};
