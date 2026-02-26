export interface Phone {
  name: string;
  storage: string;
  price: number;
  colors: string[];
  condition: string;
}

export interface Device {
  name: string;
  storage?: string;
  price: number;
  colors: string[];
  condition: string;
  specs?: string;
}

export const iphones: Phone[] = [
  {
    name: "iPhone 17 Pro Max",
    storage: "512GB",
    price: 35499,
    colors: ["Cosmic Orange", "Deep Blue", "Silver"],
    condition: "NEW"
  },
  {
    name: "iPhone 17 Pro Max",
    storage: "256GB",
    price: 30999,
    colors: ["Cosmic Orange", "Deep Blue", "Silver"],
    condition: "NEW"
  },
  {
    name: "iPhone 17 Pro",
    storage: "512GB",
    price: 32999,
    colors: ["Cosmic Orange", "Deep Blue", "Silver"],
    condition: "NEW"
  },
  {
    name: "iPhone 17 Pro",
    storage: "256GB",
    price: 27999,
    colors: ["Cosmic Orange", "Deep Blue", "Silver"],
    condition: "NEW"
  },
  {
    name: "iPhone 16 Pro",
    storage: "128GB",
    price: 21999,
    colors: ["Black Titanium", "White Titanium", "Natural Titanium", "Desert Titanium"],
    condition: "NEW"
  },
  {
    name: "iPhone 17",
    storage: "256GB",
    price: 19999,
    colors: ["Lavender", "Sage", "Mist Blue", "White", "Black"],
    condition: "NEW"
  },
  {
    name: "iPhone 16 Plus",
    storage: "256GB",
    price: 21499,
    colors: ["Black", "White", "Pink", "Teal", "Ultramarine"],
    condition: "NEW"
  },
  {
    name: "iPhone 16 Plus",
    storage: "128GB",
    price: 17999,
    colors: ["Black", "White", "Pink", "Teal", "Ultramarine"],
    condition: "NEW"
  },
  {
    name: "iPhone 16",
    storage: "128GB",
    price: 15999,
    colors: ["Black", "White", "Pink", "Teal", "Ultramarine"],
    condition: "NEW"
  },
  {
    name: "iPhone 15",
    storage: "256GB",
    price: 15999,
    colors: ["Black", "Blue", "Green", "Pink", "Yellow"],
    condition: "NEW"
  },
  {
    name: "iPhone 15",
    storage: "128GB",
    price: 13999,
    colors: ["Black", "Blue", "Green", "Pink", "Yellow"],
    condition: "NEW"
  },
  {
    name: "iPhone 14",
    storage: "256GB",
    price: 13499,
    colors: ["Midnight", "Starlight", "Blue", "Purple", "Yellow", "(PRODUCT)RED"],
    condition: "NEW"
  },
  {
    name: "iPhone 14",
    storage: "128GB",
    price: 11999,
    colors: ["Midnight", "Starlight", "Blue", "Purple", "Yellow", "(PRODUCT)RED"],
    condition: "NEW"
  },
  {
    name: "iPhone 13",
    storage: "128GB",
    price: 10499,
    colors: ["Midnight", "Starlight", "Blue", "Pink", "Green", "(PRODUCT)RED"],
    condition: "NEW"
  },
];

export const samsungPhones: Phone[] = [
  {
    name: "Samsung S25 Ultra",
    storage: "512GB",
    price: 27999,
    colors: ["Titanium Silver Blue", "Titanium Black", "Titanium White Silver", "Titanium Gray"],
    condition: "NEW"
  },
  {
    name: "Samsung S25 Ultra",
    storage: "256GB",
    price: 25999,
    colors: ["Titanium Silver Blue", "Titanium Black", "Titanium White Silver", "Titanium Gray"],
    condition: "NEW"
  },
  {
    name: "Samsung S25 Plus",
    storage: "256GB",
    price: 19999,
    colors: ["Icy Blue", "Mint", "Navy", "Silver Shadow"],
    condition: "NEW"
  },
  {
    name: "Samsung S25",
    storage: "256GB",
    price: 17999,
    colors: ["Icy Blue", "Mint", "Navy", "Silver Shadow"],
    condition: "NEW"
  },
  {
    name: "Samsung S24 Ultra",
    storage: "512GB",
    price: 25999,
    colors: ["Titanium Black", "Titanium Gray", "Titanium Violet", "Titanium Yellow", "Titanium Green", "Titanium Blue", "Titanium Orange"],
    condition: "NEW"
  },
  {
    name: "Samsung S24 Ultra",
    storage: "256GB",
    price: 23999,
    colors: ["Titanium Black", "Titanium Gray", "Titanium Violet", "Titanium Yellow", "Titanium Green", "Titanium Blue", "Titanium Orange"],
    condition: "NEW"
  },
  {
    name: "Samsung S24 Plus",
    storage: "256GB",
    price: 17999,
    colors: ["Onyx Black", "Marble Gray", "Cobalt Violet", "Amber Yellow", "Jade Green", "Sapphire Blue"],
    condition: "NEW"
  },
  {
    name: "Samsung S24",
    storage: "256GB",
    price: 15499,
    colors: ["Onyx Black", "Marble Gray", "Cobalt Violet", "Amber Yellow", "Jade Green", "Sapphire Blue"],
    condition: "NEW"
  },
  {
    name: "Samsung A56",
    storage: "256GB",
    price: 9499,
    colors: ["Awesome Iceblue", "Awesome Lilac", "Awesome Navy", "Awesome White"],
    condition: "NEW"
  },
  {
    name: "Samsung A36",
    storage: "256GB",
    price: 7499,
    colors: ["Awesome Navy", "Awesome Lilac", "Awesome Mint", "Awesome White"],
    condition: "NEW"
  },
  {
    name: "Samsung A26",
    storage: "256GB",
    price: 5499,
    colors: ["Black", "Light Blue", "Light Green"],
    condition: "NEW"
  },
  {
    name: "Samsung A26",
    storage: "128GB",
    price: 4799,
    colors: ["Black", "Light Blue", "Light Green"],
    condition: "NEW"
  },
  {
    name: "Samsung A17",
    storage: "128GB",
    price: 3999,
    colors: ["Black", "Light Blue", "Light Green", "Gold"],
    condition: "NEW"
  },
  {
    name: "Samsung A16",
    storage: "128GB",
    price: 3199,
    colors: ["Black", "Light Blue", "Light Green", "Gold"],
    condition: "NEW"
  },
  {
    name: "Samsung A07",
    storage: "128GB",
    price: 2499,
    colors: ["Black", "Light Blue", "Light Green"],
    condition: "NEW"
  },
  {
    name: "Samsung A06",
    storage: "64GB",
    price: 1999,
    colors: ["Black", "Light Blue", "Light Green"],
    condition: "NEW"
  },
];

export const usedPhones: Phone[] = [
  {
    name: "Used iPhone 16 Pro Max",
    storage: "256GB",
    price: 22999,
    colors: ["Black Titanium", "White Titanium", "Natural Titanium", "Desert Titanium"],
    condition: "USED"
  },
  {
    name: "Used iPhone 16 Pro",
    storage: "256GB",
    price: 18999,
    colors: ["Black Titanium", "White Titanium", "Natural Titanium", "Desert Titanium"],
    condition: "USED"
  },
  {
    name: "Used iPhone 16 Pro",
    storage: "128GB",
    price: 17999,
    colors: ["Black Titanium", "White Titanium", "Natural Titanium", "Desert Titanium"],
    condition: "USED"
  },
  {
    name: "Used iPhone 16",
    storage: "128GB",
    price: 14999,
    colors: ["Black", "White", "Pink", "Teal", "Ultramarine"],
    condition: "USED"
  },
  {
    name: "Used iPhone 15 Pro",
    storage: "256GB",
    price: 15999,
    colors: ["Black Titanium", "White Titanium", "Blue Titanium", "Natural Titanium"],
    condition: "USED"
  },
  {
    name: "Used iPhone 15 Pro",
    storage: "128GB",
    price: 14999,
    colors: ["Black Titanium", "White Titanium", "Blue Titanium", "Natural Titanium"],
    condition: "USED"
  },
  {
    name: "Used iPhone 15",
    storage: "128GB",
    price: 12999,
    colors: ["Black", "Blue", "Green", "Pink", "Yellow"],
    condition: "USED"
  },
  {
    name: "Used iPhone 14 Pro Max",
    storage: "256GB",
    price: 15999,
    colors: ["Deep Purple", "Space Black", "Silver", "Gold"],
    condition: "USED"
  },
  {
    name: "Used iPhone 14 Pro",
    storage: "256GB",
    price: 13999,
    colors: ["Deep Purple", "Space Black", "Silver", "Gold"],
    condition: "USED"
  },
  {
    name: "Used iPhone 14 Pro",
    storage: "128GB",
    price: 12999,
    colors: ["Deep Purple", "Space Black", "Silver", "Gold"],
    condition: "USED"
  },
  {
    name: "Used iPhone 14",
    storage: "128GB",
    price: 8999,
    colors: ["Midnight", "Starlight", "Blue", "Purple", "Yellow", "(PRODUCT)RED"],
    condition: "USED"
  },
  {
    name: "Used iPhone 13 Pro Max",
    storage: "256GB",
    price: 12999,
    colors: ["Graphite", "Silver", "Gold", "Sierra Blue", "Alpine Green"],
    condition: "USED"
  },
  {
    name: "Used iPhone 13 Pro",
    storage: "256GB",
    price: 10999,
    colors: ["Graphite", "Silver", "Gold", "Sierra Blue", "Alpine Green"],
    condition: "USED"
  },
  {
    name: "Used iPhone 13 Pro",
    storage: "128GB",
    price: 9999,
    colors: ["Graphite", "Silver", "Gold", "Sierra Blue", "Alpine Green"],
    condition: "USED"
  },
  {
    name: "Used iPhone 13",
    storage: "256GB",
    price: 8999,
    colors: ["Midnight", "Starlight", "Blue", "Pink", "Green", "(PRODUCT)RED"],
    condition: "USED"
  },
  {
    name: "Used iPhone 13",
    storage: "128GB",
    price: 7999,
    colors: ["Midnight", "Starlight", "Blue", "Pink", "Green", "(PRODUCT)RED"],
    condition: "USED"
  },
  {
    name: "Used iPhone 12 Pro Max",
    storage: "256GB",
    price: 9999,
    colors: ["Graphite", "Silver", "Gold", "Pacific Blue"],
    condition: "USED"
  },
  {
    name: "Used iPhone 12 Pro",
    storage: "128GB",
    price: 8999,
    colors: ["Graphite", "Silver", "Gold", "Pacific Blue"],
    condition: "USED"
  },
  {
    name: "Used iPhone 12",
    storage: "128GB",
    price: 6999,
    colors: ["Black", "White", "Blue", "Green", "Purple", "(PRODUCT)RED"],
    condition: "USED"
  },
  {
    name: "Used iPhone 11 Pro Max",
    storage: "256GB",
    price: 8999,
    colors: ["Midnight Green", "Space Gray", "Silver", "Gold"],
    condition: "USED"
  },
  {
    name: "Used iPhone 11 Pro",
    storage: "256GB",
    price: 7499,
    colors: ["Midnight Green", "Space Gray", "Silver", "Gold"],
    condition: "USED"
  },
  {
    name: "Used iPhone 11",
    storage: "128GB",
    price: 5999,
    colors: ["Black", "White", "Green", "Purple", "Yellow", "(PRODUCT)RED"],
    condition: "USED"
  },
  {
    name: "Used iPhone 11",
    storage: "64GB",
    price: 4999,
    colors: ["Black", "White", "Green", "Purple", "Yellow", "(PRODUCT)RED"],
    condition: "USED"
  },
  {
    name: "Used Samsung S25",
    storage: "256GB",
    price: 13999,
    colors: ["Icy Blue", "Mint", "Navy", "Silver Shadow"],
    condition: "USED"
  },
  {
    name: "Used Samsung S24 Ultra",
    storage: "256GB",
    price: 16999,
    colors: ["Titanium Black", "Titanium Gray", "Titanium Violet", "Titanium Yellow"],
    condition: "USED"
  },
  {
    name: "Used Samsung S24",
    storage: "256GB",
    price: 10999,
    colors: ["Onyx Black", "Marble Gray", "Cobalt Violet", "Amber Yellow"],
    condition: "USED"
  },
  {
    name: "Used Samsung S23 Ultra",
    storage: "256GB",
    price: 13999,
    colors: ["Phantom Black", "Cream", "Green", "Lavender"],
    condition: "USED"
  },
  {
    name: "Used Samsung S23",
    storage: "256GB",
    price: 8999,
    colors: ["Phantom Black", "Cream", "Green", "Lavender"],
    condition: "USED"
  },
  {
    name: "Used Samsung S22 Ultra",
    storage: "256GB",
    price: 11999,
    colors: ["Phantom Black", "Burgundy", "Green", "White"],
    condition: "USED"
  },
  {
    name: "Used Samsung S22",
    storage: "256GB",
    price: 6999,
    colors: ["Phantom Black", "Phantom White", "Green", "Pink Gold"],
    condition: "USED"
  },
  {
    name: "Used Samsung Note 20 Ultra",
    storage: "256GB",
    price: 8999,
    colors: ["Mystic Bronze", "Mystic Black", "Mystic White"],
    condition: "USED"
  },
  {
    name: "Used Samsung Note 20",
    storage: "256GB",
    price: 6499,
    colors: ["Mystic Bronze", "Mystic Gray", "Mystic Green"],
    condition: "USED"
  },
];

export const ipads: Device[] = [
  {
    name: "iPad Air M5 13\" WiFi",
    storage: "256GB",
    price: 19999,
    colors: ["Blue", "Purple", "Starlight", "Space Gray"],
    condition: "NEW",
    specs: "M5 chip, 13-inch Liquid Retina display"
  },
  {
    name: "iPad Pro M5 11\" WiFi",
    storage: "256GB",
    price: 19999,
    colors: ["Silver", "Space Black"],
    condition: "NEW",
    specs: "M5 chip, 11-inch Liquid Retina XDR display"
  },
  {
    name: "iPad Pro M5 11\" Cellular",
    storage: "256GB",
    price: 24999,
    colors: ["Silver", "Space Black"],
    condition: "NEW",
    specs: "M5 chip, 11-inch Liquid Retina XDR display"
  },
  {
    name: "iPad Pro M5 13\" WiFi",
    storage: "256GB",
    price: 25999,
    colors: ["Silver", "Space Black"],
    condition: "NEW",
    specs: "M5 chip, 13-inch Liquid Retina XDR display"
  },
  {
    name: "iPad Pro M5 13\" Cellular",
    storage: "256GB",
    price: 28999,
    colors: ["Silver", "Space Black"],
    condition: "NEW",
    specs: "M5 chip, 13-inch Liquid Retina XDR display"
  },
  {
    name: "iPad A16",
    storage: "128GB",
    price: 7999,
    colors: ["Silver", "Space Gray"],
    condition: "NEW",
    specs: "A16 Bionic chip, 10.9-inch Liquid Retina display"
  },
];

export const macbooks: Device[] = [
  {
    name: "MacBook Air 13-inch M1",
    storage: "8/256",
    price: 12999,
    colors: ["Silver", "Space Gray", "Gold"],
    condition: "NEW",
    specs: "M1 chip, 13.3-inch Liquid Retina display"
  },
  {
    name: "MacBook Air 13-inch M2",
    storage: "16/256",
    price: 16499,
    colors: ["Midnight", "Starlight", "Silver", "Space Gray"],
    condition: "NEW",
    specs: "M2 chip, 13.6-inch Liquid Retina display"
  },
  {
    name: "MacBook Air 13-inch M4",
    storage: "16/256GB",
    price: 19499,
    colors: ["Midnight", "Starlight", "Silver", "Space Gray"],
    condition: "NEW",
    specs: "M4 chip, 13.6-inch Liquid Retina display"
  },
  {
    name: "MacBook Air 13-inch M4",
    storage: "16/512GB",
    price: 24999,
    colors: ["Midnight", "Starlight", "Silver", "Space Gray"],
    condition: "NEW",
    specs: "M4 chip, 13.6-inch Liquid Retina display"
  },
  {
    name: "MacBook Air 15-inch M4",
    storage: "16/256GB",
    price: 26999,
    colors: ["Midnight", "Starlight", "Silver", "Space Gray"],
    condition: "NEW",
    specs: "M4 chip, 15.3-inch Liquid Retina display"
  },
  {
    name: "MacBook Air 15-inch M4",
    storage: "16/512GB",
    price: 31999,
    colors: ["Midnight", "Starlight", "Silver", "Space Gray"],
    condition: "NEW",
    specs: "M4 chip, 15.3-inch Liquid Retina display"
  }
];

export const buds: Device[] = [
  {
    name: "AirPods Pro 3rd Gen",
    price: 5600,
    colors: ["White"],
    condition: "NEW",
    specs: "H3 chip, Active Noise Cancellation, USB-C"
  },
  {
    name: "AirPods 4 ANC",
    price: 3499,
    colors: ["White"],
    condition: "NEW",
    specs: "H2 chip, Active Noise Cancellation"
  },
  {
    name: "AirPods 4",
    price: 2999,
    colors: ["White"],
    condition: "NEW",
    specs: "H2 chip, Spatial Audio"
  }
];

export const watches: Device[] = [
  {
    name: "Apple Watch Ultra 3",
    storage: "49mm",
    price: 17999,
    colors: ["Natural Titanium"],
    condition: "NEW",
    specs: "S10 chip, 49mm Titanium case"
  },
  {
    name: "Samsung Watch 8 Ultra",
    storage: "47mm",
    price: 9999,
    colors: ["Titanium Gray"],
    condition: "NEW",
    specs: "Exynos W1100, 47mm Titanium case"
  },
  {
    name: "Apple Watch 11",
    storage: "46mm",
    price: 8999,
    colors: ["Midnight", "Silver", "Starlight"],
    condition: "NEW",
    specs: "S11 chip, 46mm Aluminum case"
  },
  {
    name: "Samsung Watch Ultra",
    storage: "47mm",
    price: 7999,
    colors: ["Titanium Gray"],
    condition: "NEW",
    specs: "Exynos W1000, 47mm Titanium case"
  },
  {
    name: "Samsung Watch Classic",
    storage: "43mm",
    price: 7999,
    colors: ["Black", "Silver"],
    condition: "NEW",
    specs: "Exynos W1000, 43mm Stainless Steel case"
  },
  {
    name: "Apple Watch SE 3rd Gen",
    storage: "44mm",
    price: 6299,
    colors: ["Midnight", "Silver", "Starlight"],
    condition: "NEW",
    specs: "S9 chip, 44mm Aluminum case"
  },
  {
    name: "Samsung Watch 8",
    storage: "44mm",
    price: 5999,
    colors: ["Graphite", "Silver", "Gold"],
    condition: "NEW",
    specs: "Exynos W1100, 44mm Aluminum case"
  },
  {
    name: "Apple Watch SE 3rd Gen",
    storage: "40mm",
    price: 5499,
    colors: ["Midnight", "Silver", "Starlight"],
    condition: "NEW",
    specs: "S9 chip, 40mm Aluminum case"
  },
  {
    name: "Samsung Watch 8",
    storage: "40mm",
    price: 5499,
    colors: ["Graphite", "Silver", "Gold"],
    condition: "NEW",
    specs: "Exynos W1100, 40mm Aluminum case"
  },
  {
    name: "Apple Watch SE 2nd Gen",
    storage: "44mm",
    price: 4999,
    colors: ["Midnight", "Silver", "Starlight"],
    condition: "NEW",
    specs: "S8 chip, 44mm Aluminum case"
  },
  {
    name: "Samsung Watch 7",
    storage: "44mm",
    price: 4499,
    colors: ["Green", "Silver", "Graphite"],
    condition: "NEW",
    specs: "Exynos W1000, 44mm Aluminum case"
  },
  {
    name: "Apple Watch SE 2nd Gen",
    storage: "40mm",
    price: 4499,
    colors: ["Midnight", "Silver", "Starlight"],
    condition: "NEW",
    specs: "S8 chip, 40mm Aluminum case"
  },
  {
    name: "Samsung Watch 7",
    storage: "40mm",
    price: 3999,
    colors: ["Green", "Cream", "Graphite", "Silver"],
    condition: "NEW",
    specs: "Exynos W1000, 40mm Aluminum case"
  }
];

export const samsungTablets: Device[] = [
  {
    name: "Tab S9 WiFi",
    storage: "256GB",
    price: 13499,
    colors: ["Graphite", "Beige"],
    condition: "NEW",
    specs: "Snapdragon 8 Gen 2, 11-inch AMOLED display"
  },
  {
    name: "Tab A9 Plus Cellular",
    storage: "128GB",
    price: 5999,
    colors: ["Graphite", "Silver"],
    condition: "NEW",
    specs: "Snapdragon 695, 11-inch TFT display, 5G"
  },
  {
    name: "Tab A9 Plus WiFi",
    storage: "128GB",
    price: 4999,
    colors: ["Graphite", "Silver"],
    condition: "NEW",
    specs: "Snapdragon 695, 11-inch TFT display"
  },
  {
    name: "Tab A9",
    storage: "64GB WiFi",
    price: 2999,
    colors: ["Graphite", "Silver"],
    condition: "NEW",
    specs: "Snapdragon 695, 8.7-inch TFT display"
  }
];

export const gamingSound: Device[] = [
  {
    name: "PlayStation 5 Pro Console",
    storage: "2TB",
    price: 17999,
    colors: ["White"],
    condition: "NEW",
    specs: "PS5 Pro with Advanced Graphics and Performance"
  },
  {
    name: "PlayStation 5 Disc Console",
    storage: "1TB",
    price: 12999,
    colors: ["White"],
    condition: "NEW",
    specs: "PS5 with Ultra HD Blu-ray Disc Drive"
  },
  {
    name: "PS5 VR2 Horizon Bundle",
    price: 12999,
    colors: ["White"],
    condition: "NEW",
    specs: "PlayStation VR2 with Horizon Call of the Mountain"
  },
  {
    name: "PlayStation 5 Digital Console",
    storage: "825GB",
    price: 11999,
    colors: ["White"],
    condition: "NEW",
    specs: "PS5 Digital Console (No Disc Drive)"
  },
  {
    name: "PlayStation Portal Remote Player",
    price: 4999,
    colors: ["White"],
    condition: "NEW",
    specs: "PS5 Remote Play Device"
  },
  {
    name: "Playstation 5 Joystick Edge",
    price: 4299,
    colors: ["Black"],
    condition: "NEW",
    specs: "PS5 DualSense Edge Wireless Controller"
  },
  {
    name: "PS5 Disc Drive",
    price: 2499,
    colors: ["White"],
    condition: "NEW",
    specs: "PS5 External Disc Drive"
  },
  {
    name: "DualSense Wireless Controller",
    price: 1599,
    colors: ["White"],
    condition: "NEW",
    specs: "PS5 Standard Controller"
  },
  {
    name: "DualSense Charging Station",
    price: 899,
    colors: ["White"],
    condition: "NEW",
    specs: "PS5 Controller Charging Station"
  },
  {
    name: "Xbox Series X Console",
    storage: "1TB",
    price: 15999,
    colors: ["Black"],
    condition: "NEW",
    specs: "Xbox Series X with 4K Gaming"
  },
  {
    name: "Xbox Series S Console",
    storage: "1TB",
    price: 11999,
    colors: ["White"],
    condition: "NEW",
    specs: "Xbox Series S with Digital Gaming"
  },
  {
    name: "Xbox Joystick",
    price: 1499,
    colors: ["Black", "White"],
    condition: "NEW",
    specs: "Xbox Wireless Controller"
  },
  {
    name: "META Quest 3S",
    storage: "512GB",
    price: 15999,
    colors: ["White"],
    condition: "NEW",
    specs: "Meta Quest 3S VR Headset 512GB"
  },
  {
    name: "META Quest 3S",
    storage: "256GB",
    price: 10999,
    colors: ["White"],
    condition: "NEW",
    specs: "Meta Quest 3S VR Headset 256GB"
  },
  {
    name: "META Quest 3S",
    storage: "128GB",
    price: 7999,
    colors: ["White"],
    condition: "NEW",
    specs: "Meta Quest 3S VR Headset 128GB"
  },
  {
    name: "Nintendo Switch",
    storage: "With Game",
    price: 11999,
    colors: ["Neon Blue/Red"],
    condition: "NEW",
    specs: "Nintendo Switch with Game Bundle"
  },
  {
    name: "Nintendo Switch 2",
    price: 9999,
    colors: ["Black"],
    condition: "NEW",
    specs: "Nintendo Switch 2 Console"
  },
  {
    name: "Nintendo Switch",
    price: 6999,
    colors: ["Neon Blue/Red"],
    condition: "NEW",
    specs: "Nintendo Switch Console"
  },
  {
    name: "Nintendo Switch Lite",
    price: 3800,
    colors: ["Coral", "Turquoise", "Yellow", "Gray"],
    condition: "NEW",
    specs: "Nintendo Switch Lite Handheld"
  },
  {
    name: "BackBone PlayStation",
    price: 2499,
    colors: ["White"],
    condition: "NEW",
    specs: "BackBone One Controller for PlayStation"
  },
  {
    name: "BackBone USB-C",
    price: 2499,
    colors: ["Black"],
    condition: "NEW",
    specs: "BackBone One Controller USB-C"
  },
  {
    name: "BackBone Lightning",
    price: 2499,
    colors: ["White"],
    condition: "NEW",
    specs: "BackBone One Controller Lightning"
  },
  {
    name: "G923 PS5",
    price: 7499,
    colors: ["Black"],
    condition: "NEW",
    specs: "Logitech G923 Racing Wheel for PS5"
  },
  {
    name: "Logitech G29 Racing Wheel",
    price: 5999,
    colors: ["Black"],
    condition: "NEW",
    specs: "Racing Wheel and Pedals for PlayStation and PC"
  },
  {
    name: "G920 Xbox",
    price: 5499,
    colors: ["Black"],
    condition: "NEW",
    specs: "Logitech G920 Racing Wheel for Xbox"
  },
  {
    name: "HORI Apex Racing Wheel PS5",
    price: 3299,
    colors: ["Black"],
    condition: "NEW",
    specs: "HORI Racing Wheel Apex for PS5"
  },
  {
    name: "Logitech Gear Shifter",
    price: 1499,
    colors: ["Black"],
    condition: "NEW",
    specs: "Driving Force Shifter for Racing Wheels"
  }
];

export interface GamingCombo {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  validUntil: string;
}

export const gamingCombos: GamingCombo[] = [
  { id: "COMBO 1", name: "PS5 Pro + Extra Controller", description: "PS5 Pro combo with extra controller included", price: 19074, category: "PS5 Pro", validUntil: "2026-02-28" },
  { id: "COMBO 2", name: "PS5 Pro 2TB + Controller + PS5 Charging Station", description: "PS5 Pro combo with controller and charging station", price: 19509, category: "PS5 Pro", validUntil: "2026-02-28" },
  { id: "COMBO 3", name: "PS5 Pro 2TB + Controller + PS5 Charging Station + Racing Wheel", description: "PS5 Pro combo with racing wheel setup", price: 25508, category: "PS5 Pro", validUntil: "2026-02-28" },
  { id: "COMBO 4", name: "PS5 Pro 2TB + Controller + PS5 Charging Station + Racing Wheel + Gear Shifter", description: "PS5 Pro ultimate racing combo", price: 26308, category: "PS5 Pro", validUntil: "2026-02-28" },
  { id: "COMBO 5", name: "G29 Racing Wheel + Gear Shifter", description: "Racing wheel and gear shifter bundle", price: 6799, category: "PS5 Pro", validUntil: "2026-02-28" },
  { id: "COMBO 6", name: "PS5 Pro + Extra Controller + PS5 Portal", description: "PS5 Pro combo with controller and Portal", price: 24073, category: "PS5 Pro", validUntil: "2026-02-28" },
  { id: "COMBO 7", name: "PS5 Pro + PS5 Portal", description: "PS5 Pro and Portal combo", price: 22998, category: "PS5 Pro", validUntil: "2026-02-28" },
  { id: "COMBO 8", name: "PS5 Disc + Controller", description: "PS5 Disc combo with extra controller", price: 14074, category: "PS5 Disc", validUntil: "2026-02-28" },
  { id: "COMBO 9", name: "PS5 Disc + Controller + PS5 Charging Station", description: "PS5 Disc combo with controller and charging station", price: 14509, category: "PS5 Disc", validUntil: "2026-02-28" },
  { id: "COMBO 10", name: "PS5 Disc + Controller + PS5 Charging Station + G29 Wheel", description: "PS5 Disc combo with racing wheel setup", price: 20508, category: "PS5 Disc", validUntil: "2026-02-28" },
  { id: "COMBO 11", name: "PS5 Disc + Controller + PS5 Charging Station + G29 Wheel + Gear Shifter", description: "PS5 Disc ultimate racing combo", price: 21308, category: "PS5 Disc", validUntil: "2026-02-28" },
  { id: "COMBO 12", name: "PS5 Disc + Controller + PS5 Portal", description: "PS5 Disc combo with controller and Portal", price: 19073, category: "PS5 Disc", validUntil: "2026-02-28" },
  { id: "COMBO 13", name: "PS5 Disc + PS5 Portal", description: "PS5 Disc and Portal combo", price: 14074, category: "PS5 Disc", validUntil: "2026-02-28" },
  { id: "COMBO 14", name: "PS5 Digital + Extra Controller", description: "PS5 Digital combo with extra controller", price: 13074, category: "PS5 Digital", validUntil: "2026-02-28" },
  { id: "COMBO 15", name: "PS5 Digital + Extra Controller + PS5 Charging Station", description: "PS5 Digital combo with controller and charging station", price: 13509, category: "PS5 Digital", validUntil: "2026-02-28" },
  { id: "COMBO 16", name: "PS5 Digital + Controller + PS5 Charging Station + G29 Wheel", description: "PS5 Digital combo with racing wheel setup", price: 19508, category: "PS5 Digital", validUntil: "2026-02-28" },
  { id: "COMBO 17", name: "PS5 Digital + Controller + PS5 Charging Station + G29 Wheel + Logitech Gear Shifter", description: "PS5 Digital ultimate racing combo", price: 20308, category: "PS5 Digital", validUntil: "2026-02-28" },
  { id: "COMBO 18", name: "PS5 Digital + Extra Controller + PS5 Portal", description: "PS5 Digital combo with controller and Portal", price: 18073, category: "PS5 Digital", validUntil: "2026-02-28" },
  { id: "COMBO 19", name: "PS5 Digital + Portal", description: "PS5 Digital and Portal combo", price: 16998, category: "PS5 Digital", validUntil: "2026-02-28" },
  { id: "COMBO 20", name: "Xbox X-Series 1TB + Extra Controller", description: "Xbox X-Series combo with extra controller", price: 16799, category: "Xbox", validUntil: "2026-02-28" },
  { id: "COMBO 21", name: "Xbox S-Series 1TB + Extra Controller", description: "Xbox S-Series combo with extra controller", price: 12799, category: "Xbox", validUntil: "2026-02-28" },
];

export const hpLaptops: Device[] = [
  {
    name: "HP I3 FD00133",
    storage: "8/256GB",
    price: 8999,
    colors: ["Silver"],
    condition: "NEW",
    specs: "Intel Core i3, 8GB RAM, 256GB SSD"
  },
  {
    name: "HP I5 FD0250",
    storage: "16/512GB",
    price: 12999,
    colors: ["Silver"],
    condition: "NEW",
    specs: "Intel Core i5, 16GB RAM, 512GB SSD"
  },
  {
    name: "HP I5 FD0215",
    storage: "16/512GB",
    price: 12999,
    colors: ["Silver"],
    condition: "NEW",
    specs: "Intel Core i5, 16GB RAM, 512GB SSD"
  },
  {
    name: "HP I7 FD0557",
    storage: "16/512GB",
    price: 15999,
    colors: ["Silver"],
    condition: "NEW",
    specs: "Intel Core i7, 16GB RAM, 512GB SSD"
  },
  {
    name: "HP I7 FD0127DX",
    storage: "16/512GB",
    price: 15999,
    colors: ["Silver"],
    condition: "NEW",
    specs: "Intel Core i7, 16GB RAM, 512GB SSD"
  }
];
