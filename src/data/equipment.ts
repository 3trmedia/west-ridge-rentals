// PLACEHOLDER INVENTORY: every item below is sample data until West Ridge supplies the real fleet.
export type Category = {
  slug: string; name: string; blurb: string;
  kicker: string; h1: string; intro: string;
  whyTitle: string; whyBody: string[]; checklist: string[]; badge: [string, string];
  faqs: [string, string][];
  uses: string[];
};
export type Item = {
  slug: string; book: string; name: string; category: string; blurb: string;
  specs: [string, string][]; features: string[]; delivery: boolean; rates: [number, number, number]; // [day, week, month]
};

// PLACEHOLDER COPY: category page content is generic until West Ridge confirms real details.
export const categories: Category[] = [
  { slug: 'trucks', name: 'Trucks & Hauling',
    blurb: 'Dump trucks, flatbeds and trailers to move material and machines.',
    uses: ["Hauling gravel, soil and debris","Moving equipment between job sites","Delivering materials to the site","Demo and cleanup jobs"],
    kicker: 'Dump trucks & trailers for rent in Utah', h1: 'Trucks & hauling. Ready when you are.',
    intro: 'Dump trucks, flatbeds and equipment trailers for contractors and businesses. Tell us the dates and we confirm availability fast.',
    whyTitle: 'Move more, wait less',
    whyBody: ['Hauling shouldn’t slow a job down. Our trucks and trailers are inspected between rentals so they show up ready to work.', 'Rent a truck on its own or pair it with an excavator or skid steer and a trailer to get everything to the site in one trip.'],
    checklist: ['Dump trucks, flatbeds and trailers', 'Inspected between every rental', 'Delivery available across Utah', 'Straps, tarps and ramps on request', 'Daily, weekly and monthly rates'],
    badge: ['Utah', 'Statewide hauling'],
    faqs: [['Do I need a CDL?', 'Some larger trucks require one. We’ll tell you when you request.'], ['Can you deliver a trailer?', 'Yes. Delivery is quoted by distance.'], ['What do I need to rent?', 'Typically a valid ID, proof of insurance and a signed rental agreement. A deposit may apply.'], ['How fast can I get one?', 'Often within a day or two. Send a request and we’ll confirm.'], ['Can I rent for a single day?', 'Yes. Daily, weekly and monthly options are available.'], ['Do you service my area?', 'We serve the Wasatch Front and beyond. Call us to confirm your job site.']] },
  { slug: 'excavation', name: 'Excavation',
    blurb: 'Excavators, backhoes, skid steers and track loaders for digging, grading and loading.',
    uses: ["Trenching for utilities","Foundation and footing digging","Grading and site prep","Loading and moving material"],
    kicker: 'Excavators & skid steers for rent in Utah', h1: 'Dig it. Grade it. Done.',
    intro: 'Mini excavators, full-size excavators, backhoes, skid steers and track loaders for trenching, grading, loading and site prep.',
    whyTitle: 'The right machine for the job',
    whyBody: ['From tight residential trenches to full-size site work, we have machines sized for the job. Not sure what you need? Describe the project and we’ll point you to the right one.', 'Attachments like buckets, thumbs, forks and augers are available with most machines.'],
    checklist: ['Mini and full-size excavators', 'Skid steers, track loaders and backhoes', 'Buckets, thumbs, forks and augers', 'Delivered and picked up on a trailer', 'Quick walk-around at handoff'],
    badge: ['3.5–20t', 'Machine sizes'],
    faqs: [['Do you rent operators?', 'Let us know in your request notes and we’ll tell you what is possible.'], ['Are attachments included?', 'A standard bucket is included. Other attachments are available.'], ['How is delivery handled?', 'We haul it on a trailer to your job site and pick it up when you are done.'], ['What size excavator do I need?', 'Describe the job and we’ll recommend one.'], ['What do I need to rent?', 'Typically a valid ID, proof of insurance and a signed rental agreement.'], ['Can I rent by the week?', 'Yes. Daily, weekly and monthly rates are available.']] },
  { slug: 'landscaping', name: 'Landscaping',
    blurb: 'Stump grinders and trenchers for yards, lots and site cleanup.',
    uses: ["Sprinkler and drip-line trenches","Stump removal","Yard grading and cleanup","Clearing lots and fence lines"],
    kicker: 'Landscaping equipment for rent in Utah', h1: 'Landscaping gear that gets it done.',
    intro: 'Stump grinders and trenchers for yards, lots and small commercial sites.',
    whyTitle: 'Built for finished yards',
    whyBody: ['Compact, low-ground-pressure machines work around finished lawns, fences and tight side yards without tearing things up.', 'Perfect for sprinkler lines, stump removal, grading and cleanup, for contractors and property managers alike.'],
    checklist: ['Low ground pressure machines', 'Stump grinders and trenchers', 'Fits through standard gates', 'Easy pickup or delivery', 'Weekend-friendly rentals'],
    badge: ['Low', 'Ground pressure'],
    faqs: [['Will it damage my lawn?', 'Rubber-track machines are much gentler on turf than wheels.'], ['Can I pick it up myself?', 'Smaller equipment is pickup-friendly. Ask about trailers.'], ['What do I need to rent?', 'Typically a valid ID, proof of insurance and a signed rental agreement.'], ['Is training provided?', 'We do a quick walk-around at handoff.'], ['Can I rent for a weekend?', 'Yes, weekend and daily rentals are available.'], ['Do you service my area?', 'We deliver across Utah. Call us to confirm your job site.']] },
  { slug: 'compaction', name: 'Compaction',
    blurb: 'Rollers and plate compactors for base, gravel and pavers.',
    uses: ["Compacting base and gravel","Setting pavers and patios","Trench backfill","Asphalt and driveway finishing"],
    kicker: 'Compaction equipment for rent in Utah', h1: 'A solid base starts here.',
    intro: 'Smooth drum rollers and plate compactors for base, gravel, pavers and asphalt.',
    whyTitle: 'Get the finish right',
    whyBody: ['Proper compaction is what makes a driveway, patio or parking lot last. Our rollers and plates are maintained and ready to run.', 'Pair with a skid steer or truck from our fleet and get everything in one rental.'],
    checklist: ['Smooth drum rollers', 'Plate compactors', 'Pickup-friendly sizes', 'Fuel and water-spray ready', 'Bundle with trucks and loaders'],
    badge: ['1 Call', 'Bundle your rental'],
    faqs: [['Which compactor for pavers?', 'A plate compactor is typical. Tell us the job and we’ll help.'], ['Can I pick one up?', 'Plate compactors fit in a truck bed. Rollers usually need a trailer.'], ['What do I need to rent?', 'Typically a valid ID, proof of insurance and a signed rental agreement.'], ['Is fuel included?', 'Equipment goes out ready to run. Return it with a full tank.'], ['Can I rent by the day?', 'Yes.'], ['Do you deliver?', 'Yes, delivery is quoted by distance.']] },
];

// PLACEHOLDER RATES (USD): every item's [day, week, month] price is sample data until West Ridge supplies real rates.

export const items: Item[] = [
  { slug: 'dump-truck-10yd', book: 'Dump Truck', name: '10 Yard Dump Truck', category: 'trucks', blurb: 'Everyday hauler for gravel, soil and demo debris.',
    specs: [['Capacity', '10 cubic yards'], ['Payload', '~15 tons'], ['License', 'CDL may be required']], features: ['Tandem axle', 'Tarp system', 'Backup camera'], delivery: true, rates: [350, 1400, 4200] },
  { slug: 'flatbed-trailer-20', book: 'Equipment Trailer', name: '20 ft Equipment Trailer', category: 'trucks', blurb: 'Tag-along trailer for moving skid steers and mini excavators.',
    specs: [['Length', '20 ft'], ['Capacity', '14,000 lbs'], ['Hitch', 'Ball or pintle']], features: ['Fold-down ramps', 'Electric brakes', 'D-ring tie-downs'], delivery: true, rates: [95, 380, 1140] },
  { slug: 'flatbed-truck', book: 'Flatbed Truck', name: 'Flatbed Truck', category: 'trucks', blurb: 'Haul pallets, materials and equipment across Utah.',
    specs: [['Bed', '9 ft steel flatbed'], ['Payload', '~5,000 lbs'], ['License', 'Standard driver license']], features: ['Stake pockets', 'Ratchet straps available'], delivery: true, rates: [220, 880, 2640] },
  { slug: 'mini-excavator-35', book: 'Mini Excavator', name: 'Mini Excavator (3.5 ton)', category: 'excavation', blurb: 'Tight-access digging for trenches, footings and utilities.',
    specs: [['Operating weight', '~7,700 lbs'], ['Dig depth', '~10 ft'], ['Bucket', '24 in standard']], features: ['Zero tail swing', 'Thumb available', 'Rubber tracks'], delivery: true, rates: [300, 1200, 3600] },
  { slug: 'excavator-20t', book: '20 Ton Excavator', name: 'Excavator (20 ton)', category: 'excavation', blurb: 'Full-size digging power for large sites and heavy jobs.',
    specs: [['Operating weight', '~45,000 lbs'], ['Dig depth', '~22 ft'], ['Bucket', '36 in standard']], features: ['Hydraulic thumb', 'A/C cab', 'Quick coupler'], delivery: true, rates: [750, 3000, 9000] },
  { slug: 'skid-steer', book: 'Skid Steer', name: 'Skid Steer Loader', category: 'excavation', blurb: 'The all-purpose workhorse for loading, grading and clearing.',
    specs: [['Rated capacity', '~2,200 lbs'], ['Lift height', '~10 ft'], ['Attachments', 'Bucket, forks, auger']], features: ['Enclosed cab', 'Quick-attach', 'High-flow option'], delivery: true, rates: [300, 1200, 3600] },
  { slug: 'backhoe-loader', book: 'Backhoe', name: 'Backhoe Loader', category: 'excavation', blurb: 'Dig and load with one machine.',
    specs: [['Dig depth', '~14 ft'], ['Loader bucket', '1 cubic yard'], ['Drive', '4WD']], features: ['Extendable dipper', 'Enclosed cab'], delivery: true, rates: [380, 1520, 4560] },
  { slug: 'compact-track-loader', book: 'Track Loader', name: 'Compact Track Loader', category: 'excavation', blurb: 'Low ground pressure for finished lawns and soft soil.',
    specs: [['Rated capacity', '~2,700 lbs'], ['Ground pressure', 'Low'], ['Attachments', 'Bucket, forks, grapple']], features: ['Rubber tracks', 'Enclosed cab'], delivery: true, rates: [350, 1400, 4200] },
  { slug: 'stump-grinder', book: 'Stump Grinder', name: 'Stump Grinder', category: 'landscaping', blurb: 'Clear stumps fast without digging them out.',
    specs: [['Cutting depth', '~16 in'], ['Engine', '~25 hp'], ['Type', 'Self-propelled']], features: ['Easy trailer transport'], delivery: true, rates: [225, 900, 2700] },
  { slug: 'trencher', book: 'Trencher', name: 'Trencher', category: 'landscaping', blurb: 'Utility, irrigation and drainage trenches, dug fast and clean.',
    specs: [['Trench depth', 'up to 36 in'], ['Width', '4-6 in']], features: ['Adjustable depth'], delivery: true, rates: [150, 600, 1800] },
  { slug: 'smooth-drum-roller', book: 'Roller', name: 'Smooth Drum Roller', category: 'compaction', blurb: 'Compact base, gravel and asphalt for a solid finish.',
    specs: [['Drum width', '48 in'], ['Weight', '~3,500 lbs']], features: ['Vibratory', 'Water spray'], delivery: true, rates: [225, 900, 2700] },
  { slug: 'plate-compactor', book: 'Plate Compactor', name: 'Plate Compactor', category: 'compaction', blurb: 'Pavers, trench backfill and small base areas.',
    specs: [['Plate', '20 in'], ['Force', '~4,000 lbf']], features: ['Pickup-friendly size'], delivery: true, rates: [60, 240, 720] },
];

export const catName = (slug: string) => categories.find((c) => c.slug === slug)?.name ?? slug;


// Short name typed as the calendar event title to block an item (see /bookings-guide).
export const bookingKeys = (i: Item) => [i.book, i.name, i.slug];

// Suggested add-ons shown as "Often rented together" (first two that exist).
export const pairs: Record<string, string[]> = {
  'dump-truck-10yd': ['skid-steer', 'mini-excavator-35'],
  'flatbed-trailer-20': ['mini-excavator-35', 'skid-steer'],
  'flatbed-truck': ['flatbed-trailer-20', 'skid-steer'],
  'mini-excavator-35': ['flatbed-trailer-20', 'dump-truck-10yd'],
  'excavator-20t': ['dump-truck-10yd', 'smooth-drum-roller'],
  'skid-steer': ['flatbed-trailer-20', 'dump-truck-10yd'],
  'backhoe-loader': ['dump-truck-10yd', 'plate-compactor'],
  'compact-track-loader': ['flatbed-trailer-20', 'stump-grinder'],
  'stump-grinder': ['compact-track-loader', 'flatbed-trailer-20'],
  'trencher': ['plate-compactor', 'skid-steer'],
  'smooth-drum-roller': ['dump-truck-10yd', 'skid-steer'],
  'plate-compactor': ['trencher', 'mini-excavator-35'],
};
