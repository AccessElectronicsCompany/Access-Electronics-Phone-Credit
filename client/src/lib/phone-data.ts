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
    price: 31999,
    colors: ["Cosmic Orange", "Deep Blue", "Silver"],
    condition: "NEW"
  },
  {
    name: "iPhone 17 Pro Max",
    storage: "256GB",
    price: 28999,
    colors: ["Cosmic Orange", "Deep Blue", "Silver"],
    condition: "NEW"
  },
  {
    name: "iPhone 17 Pro",
    storage: "512GB",
    price: 29999,
    colors: ["Cosmic Orange", "Deep Blue", "Silver"],
    condition: "NEW"
  },
  {
    name: "iPhone 17 Pro",
    storage: "256GB",
    price: 25999,
    colors: ["Cosmic Orange", "Deep Blue", "Silver"],
    condition: "NEW"
  },
  {
    name: "iPhone 16 Pro",
    storage: "128GB",
    price: 20999,
    colors: ["Black Titanium", "White Titanium", "Natural Titanium", "Desert Titanium"],
    condition: "NEW"
  },
  {
    name: "iPhone 17",
    storage: "256GB",
    price: 18999,
    colors: ["Lavender", "Sage", "Mist Blue", "White", "Black"],
    condition: "NEW"
  },
  {
    name: "iPhone 16 Plus",
    storage: "256GB",
    price: 17999,
    colors: ["Black", "White", "Pink", "Teal", "Ultramarine"],
    condition: "NEW"
  },
  {
    name: "iPhone 16 Plus",
    storage: "128GB",
    price: 16999,
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
    storage: "128GB",
    price: 12999,
    colors: ["Black", "Blue", "Green", "Pink", "Yellow"],
    condition: "NEW"
  },
  {
    name: "iPhone 14",
    storage: "256GB",
    price: 12999,
    colors: ["Midnight", "Starlight", "Blue", "Purple", "Yellow", "(PRODUCT)RED"],
    condition: "NEW"
  },
  {
    name: "iPhone 14",
    storage: "128GB",
    price: 10999,
    colors: ["Midnight", "Starlight", "Blue", "Purple", "Yellow", "(PRODUCT)RED"],
    condition: "NEW"
  },
  {
    name: "iPhone 13",
    storage: "128GB",
    price: 9999,
    colors: ["Midnight", "Starlight", "Blue", "Pink", "Green", "(PRODUCT)RED"],
    condition: "NEW"
  },
];

export const samsungPhones: Phone[] = [
  {
    name: "Samsung Z Fold 7",
    storage: "512GB",
    price: 43999,
    colors: ["Phantom Black", "Icy Blue", "Cream", "Gray", "Blue", "Crafted Black", "Silver Shadow"],
    condition: "NEW"
  },
  {
    name: "Samsung Z Fold 7",
    storage: "256GB",
    price: 39999,
    colors: ["Phantom Black", "Icy Blue", "Cream", "Gray", "Blue", "Crafted Black", "Silver Shadow"],
    condition: "NEW"
  },
  {
    name: "Samsung Z Flip 7",
    storage: "512GB",
    price: 25999,
    colors: ["Mint", "Graphite", "Cream", "Lavender", "Yellow", "Blue", "Green", "Gray", "Peach", "Indigo"],
    condition: "NEW"
  },
  {
    name: "Samsung Z Flip 7",
    storage: "256GB",
    price: 23999,
    colors: ["Mint", "Graphite", "Cream", "Lavender", "Yellow", "Blue", "Green", "Gray", "Peach", "Indigo"],
    condition: "NEW"
  },
  {
    name: "Samsung S25 Ultra",
    storage: "512GB",
    price: 25999,
    colors: ["Titanium Silver Blue", "Titanium Black", "Titanium White Silver", "Titanium Gray"],
    condition: "NEW"
  },
  {
    name: "Samsung S25 Ultra",
    storage: "256GB",
    price: 22999,
    colors: ["Titanium Silver Blue", "Titanium Black", "Titanium White Silver", "Titanium Gray"],
    condition: "NEW"
  },
  {
    name: "Samsung S25 Plus",
    storage: "256GB",
    price: 17999,
    colors: ["Icy Blue", "Mint", "Navy", "Silver Shadow"],
    condition: "NEW"
  },
  {
    name: "Samsung S25",
    storage: "256GB",
    price: 15999,
    colors: ["Icy Blue", "Mint", "Navy", "Silver Shadow"],
    condition: "NEW"
  },
  {
    name: "Samsung S24 Ultra",
    storage: "512GB",
    price: 21999,
    colors: ["Titanium Black", "Titanium Gray", "Titanium Violet", "Titanium Yellow", "Titanium Green", "Titanium Blue", "Titanium Orange"],
    condition: "NEW"
  },
  {
    name: "Samsung S24 Ultra",
    storage: "256GB",
    price: 19999,
    colors: ["Titanium Black", "Titanium Gray", "Titanium Violet", "Titanium Yellow", "Titanium Green", "Titanium Blue", "Titanium Orange"],
    condition: "NEW"
  },
  {
    name: "Samsung S24 Plus",
    storage: "256GB",
    price: 15999,
    colors: ["Onyx Black", "Marble Gray", "Cobalt Violet", "Amber Yellow", "Jade Green", "Sapphire Blue"],
    condition: "NEW"
  },
  {
    name: "Samsung S24",
    storage: "256GB",
    price: 13999,
    colors: ["Onyx Black", "Marble Gray", "Cobalt Violet", "Amber Yellow", "Jade Green", "Sapphire Blue"],
    condition: "NEW"
  },
  {
    name: "Samsung A56",
    storage: "256GB",
    price: 8999,
    colors: ["Awesome Iceblue", "Awesome Lilac", "Awesome Navy", "Awesome White"],
    condition: "NEW"
  },
  {
    name: "Samsung A36",
    storage: "256GB",
    price: 6499,
    colors: ["Awesome Navy", "Awesome Lilac", "Awesome Mint", "Awesome White"],
    condition: "NEW"
  },
  {
    name: "Samsung A17",
    storage: "128GB",
    price: 3500,
    colors: ["Black", "Light Blue", "Light Green", "Gold"],
    condition: "NEW"
  },
  {
    name: "Samsung A07",
    storage: "128GB",
    price: 2299,
    colors: ["Black", "Light Blue", "Light Green"],
    condition: "NEW"
  },
  {
    name: "Samsung A06",
    storage: "64GB",
    price: 1699,
    colors: ["Black", "Light Blue", "Light Green"],
    condition: "NEW"
  },
  {
    name: "Samsung A16",
    storage: "128GB",
    price: 2499,
    colors: ["Black", "Light Blue", "Light Green", "Gold"],
    condition: "NEW"
  },
  {
    name: "Samsung Z Flip",
    storage: "256GB",
    price: 24999,
    colors: ["Mint", "Graphite", "Cream", "Lavender", "Yellow", "Blue", "Green", "Gray", "Peach", "Indigo"],
    condition: "NEW"
  },

  {
    name: "Samsung Note Ultra",
    storage: "256GB",
    price: 12999,
    colors: ["Mystic Bronze", "Mystic Black", "Mystic White"],
    condition: "NEW"
  },
];

export const usedPhones: Phone[] = [
  {
    name: "Used iPhone 16 Pro Max",
    storage: "256GB",
    price: 19999,
    colors: ["Black Titanium", "White Titanium", "Natural Titanium", "Desert Titanium"],
    condition: "USED"
  },
  {
    name: "Used iPhone 15 Pro",
    storage: "256GB",
    price: 14999,
    colors: ["Black Titanium", "White Titanium", "Blue Titanium", "Natural Titanium"],
    condition: "USED"
  },
  {
    name: "Used iPhone 15",
    storage: "256GB",
    price: 11999,
    colors: ["Black", "Blue", "Green", "Pink", "Yellow"],
    condition: "USED"
  },
  {
    name: "Used iPhone 14 Pro",
    storage: "256GB",
    price: 12999,
    colors: ["Deep Purple", "Space Black"],
    condition: "USED"
  },
  {
    name: "Used iPhone 14 Pro",
    storage: "128GB",
    price: 11999,
    colors: ["Deep Purple", "Space Black"],
    condition: "USED"
  },
  {
    name: "Used iPhone 13 Pro Max",
    storage: "256GB",
    price: 11999,
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
    name: "Used iPhone 15",
    storage: "128GB",
    price: 10999,
    colors: ["Black", "Blue", "Green", "Pink", "Yellow"],
    condition: "USED"
  },
  {
    name: "Used iPhone 12 Pro Max",
    storage: "128GB",
    price: 8999,
    colors: ["Graphite", "Silver", "Gold", "Pacific Blue"],
    condition: "USED"
  },
  {
    name: "Used iPhone 14",
    storage: "128GB",
    price: 8499,
    colors: ["Midnight", "Starlight", "Blue", "Purple", "Yellow", "(PRODUCT)RED"],
    condition: "USED"
  },
  {
    name: "Used iPhone 13",
    storage: "256GB",
    price: 8499,
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
    name: "Used iPhone 12",
    storage: "128GB",
    price: 6999,
    colors: ["Black", "White", "Blue", "Green", "Purple", "(PRODUCT)RED"],
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
    name: "Used Samsung S24 Ultra",
    storage: "256GB",
    price: 15999,
    colors: ["Titanium Black", "Titanium Gray", "Titanium Violet", "Titanium Yellow"],
    condition: "USED"
  },
  {
    name: "Used Samsung S23 Ultra",
    storage: "512GB",
    price: 14499,
    colors: ["Phantom Black", "Cream", "Green", "Lavender", "Graphite", "Lime", "Sky Blue", "Red"],
    condition: "USED"
  },
  {
    name: "Used Samsung S23 Ultra",
    storage: "256GB",
    price: 13499,
    colors: ["Phantom Black", "Cream", "Green", "Lavender", "Graphite", "Lime", "Sky Blue", "Red"],
    condition: "USED"
  },
  {
    name: "Used Samsung Note 20 Ultra",
    storage: "256GB",
    price: 8499,
    colors: ["Mystic Bronze", "Mystic Black", "Mystic White"],
    condition: "USED"
  },
  {
    name: "Used Samsung S23",
    storage: "256GB",
    price: 8499,
    colors: ["Phantom Black", "Cream", "Green", "Lavender", "Graphite", "Lime"],
    condition: "USED"
  },
  {
    name: "Used Samsung S22",
    storage: "256GB",
    price: 6499,
    colors: ["Phantom Black", "Phantom White", "Green", "Pink Gold", "Graphite", "Sky Blue", "Violet", "Cream"],
    condition: "USED"
  },
  {
    name: "Used Samsung Note 20",
    storage: "256GB",
    price: 5999,
    colors: ["Mystic Bronze", "Mystic Gray", "Mystic Green"],
    condition: "USED"
  },
];

export const ipads: Device[] = [
  {
    name: "iPad Air 11-inch WiFi",
    storage: "128GB",
    price: 13999,
    colors: ["Blue", "Purple", "Starlight", "Space Gray"],
    condition: "NEW",
    specs: "M2 chip, 11-inch Liquid Retina display"
  },
  {
    name: "iPad Air 13-inch WiFi",
    storage: "128GB",
    price: 17999,
    colors: ["Blue", "Purple", "Starlight", "Space Gray"],
    condition: "NEW",
    specs: "M2 chip, 13-inch Liquid Retina display"
  },
  {
    name: "iPad Air 13-inch WiFi",
    storage: "256GB",
    price: 19999,
    colors: ["Blue", "Purple", "Starlight", "Space Gray"],
    condition: "NEW",
    specs: "M2 chip, 13-inch Liquid Retina display"
  },
  {
    name: "iPad 10",
    storage: "64GB WiFi",
    price: 6999,
    colors: ["Silver", "Blue", "Pink", "Yellow"],
    condition: "NEW",
    specs: "A14 Bionic chip, 10.9-inch Liquid Retina display"
  },
  {
    name: "iPad 11",
    storage: "128GB WiFi",
    price: 7999,
    colors: ["Silver", "Space Gray"],
    condition: "NEW",
    specs: "A14 Bionic chip, 10.9-inch Liquid Retina display"
  },
  {
    name: "iPad Pro M4 11-inch",
    storage: "256GB WiFi",
    price: 21999,
    colors: ["Silver", "Space Black"],
    condition: "NEW",
    specs: "M4 chip, 11-inch Liquid Retina XDR display"
  },
  {
    name: "iPad Pro M4 11-inch",
    storage: "256GB Cellular",
    price: 26999,
    colors: ["Silver", "Space Black"],
    condition: "NEW",
    specs: "M4 chip, 11-inch Liquid Retina XDR display"
  },
  {
    name: "iPad Pro M4 13-inch",
    storage: "256GB WiFi",
    price: 24999,
    colors: ["Silver", "Space Black"],
    condition: "NEW",
    specs: "M4 chip, 13-inch Liquid Retina XDR display"
  },
  {
    name: "iPad Pro M4 13-inch",
    storage: "256GB Cellular",
    price: 25999,
    colors: ["Silver", "Space Black"],
    condition: "NEW",
    specs: "M4 chip, 13-inch Liquid Retina XDR display"
  },
  {
    name: "iPad Air M4 13-inch",
    storage: "256GB WiFi",
    price: 19999,
    colors: ["Blue", "Purple", "Starlight", "Space Gray"],
    condition: "NEW",
    specs: "M4 chip, 13-inch Liquid Retina display"
  },
  {
    name: "iPad A16",
    storage: "128GB",
    price: 7299,
    colors: ["Silver", "Space Gray"],
    condition: "NEW",
    specs: "A16 Bionic chip, 10.9-inch Liquid Retina display"
  },
  {
    name: "iPad A16",
    storage: "256GB",
    price: 9499,
    colors: ["Silver", "Space Gray"],
    condition: "NEW",
    specs: "A16 Bionic chip, 10.9-inch Liquid Retina display"
  },
  {
    name: "iPad 10th Gen",
    storage: "256GB WiFi",
    price: 8499,
    colors: ["Silver", "Blue", "Pink", "Yellow"],
    condition: "NEW",
    specs: "A14 Bionic chip, 10.9-inch Liquid Retina display"
  }
];

export const macbooks: Device[] = [
  {
    name: "MacBook Pro 14-inch M4",
    storage: "512GB (MW2W3)",
    price: 35999,
    colors: ["Silver"],
    condition: "NEW",
    specs: "M4 chip, 14-inch Liquid Retina XDR display"
  },
  {
    name: "MacBook Pro 14-inch M4",
    storage: "1TB (MW2V3)",
    price: 39999,
    colors: ["Space Black"],
    condition: "NEW",
    specs: "M4 chip, 14-inch Liquid Retina XDR display"
  },
  {
    name: "MacBook Pro 14-inch M4 Pro",
    storage: "512GB (MX2H3)",
    price: 42999,
    colors: ["Space Black"],
    condition: "NEW",
    specs: "M4 Pro chip, 14-inch Liquid Retina XDR display"
  },
  {
    name: "MacBook Pro 16-inch M4 Pro",
    storage: "512GB",
    price: 54999,
    colors: ["Space Black"],
    condition: "NEW",
    specs: "M4 Pro chip, 16-inch Liquid Retina XDR display"
  },
  {
    name: "MacBook Air 13-inch M1",
    storage: "8/256",
    price: 11999,
    colors: ["Silver", "Space Gray", "Gold"],
    condition: "NEW",
    specs: "M1 chip, 13.3-inch Liquid Retina display"
  },
  {
    name: "MacBook Air 13-inch M2",
    storage: "16/256",
    price: 15999,
    colors: ["Midnight", "Starlight", "Silver", "Space Gray"],
    condition: "NEW",
    specs: "M2 chip, 13.6-inch Liquid Retina display"
  },
  {
    name: "MacBook Air 13-inch M4",
    storage: "16/256GB",
    price: 18499,
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
    price: 24999,
    colors: ["Midnight", "Starlight", "Silver", "Space Gray"],
    condition: "NEW",
    specs: "M4 chip, 15.3-inch Liquid Retina display"
  },
  {
    name: "MacBook Air 15-inch M4",
    storage: "16/512GB",
    price: 29999,
    colors: ["Midnight", "Starlight", "Silver", "Space Gray"],
    condition: "NEW",
    specs: "M4 chip, 15.3-inch Liquid Retina display"
  }
];

export const buds: Device[] = [
  {
    name: "Samsung Buds 3 Pro",
    price: 2999,
    colors: ["Graphite", "Silver"],
    condition: "NEW",
    specs: "Adaptive Active Noise Cancellation, 360 Audio"
  },
  {
    name: "Buds FE",
    price: 1199,
    colors: ["Graphite", "White"],
    condition: "NEW",
    specs: "Enhanced audio experience, comfortable fit"
  },
  {
    name: "AirPods Pro 3rd Gen",
    price: 5199,
    colors: ["White"],
    condition: "NEW",
    specs: "H3 chip, Active Noise Cancellation, USB-C"
  },
  {
    name: "AirPods 4 ANC",
    price: 3299,
    colors: ["White"],
    condition: "NEW",
    specs: "H2 chip, Active Noise Cancellation"
  },
  {
    name: "AirPods 4",
    price: 2499,
    colors: ["White"],
    condition: "NEW",
    specs: "H2 chip, Spatial Audio"
  }
];

export const watches: Device[] = [
  {
    name: "Apple Watch Ultra 3",
    storage: "49mm",
    price: 16999,
    colors: ["Natural Titanium"],
    condition: "NEW",
    specs: "S10 chip, 49mm Titanium case"
  },
  {
    name: "Samsung Watch 8 Ultra",
    storage: "47mm",
    price: 8999,
    colors: ["Titanium Gray"],
    condition: "NEW",
    specs: "Exynos W1100, 47mm Titanium case"
  },
  {
    name: "Apple Watch 11",
    storage: "46mm",
    price: 7999,
    colors: ["Midnight", "Silver", "Starlight"],
    condition: "NEW",
    specs: "S11 chip, 46mm Aluminum case"
  },
  {
    name: "Samsung Watch Ultra",
    storage: "47mm",
    price: 7499,
    colors: ["Titanium Gray"],
    condition: "NEW",
    specs: "Exynos W1000, 47mm Titanium case"
  },
  {
    name: "Samsung Watch Classic",
    storage: "43mm",
    price: 7499,
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
    name: "Apple Watch SE 3rd Gen",
    storage: "40mm",
    price: 5499,
    colors: ["Midnight", "Silver", "Starlight"],
    condition: "NEW",
    specs: "S9 chip, 40mm Aluminum case"
  },
  {
    name: "Samsung Watch 8",
    storage: "44mm",
    price: 5499,
    colors: ["Graphite", "Silver", "Gold"],
    condition: "NEW",
    specs: "Exynos W1100, 44mm Aluminum case"
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
    name: "Samsung Watch 8",
    storage: "40mm",
    price: 4999,
    colors: ["Graphite", "Silver", "Gold"],
    condition: "NEW",
    specs: "Exynos W1100, 40mm Aluminum case"
  },
  {
    name: "Samsung Watch 7",
    storage: "44mm",
    price: 3999,
    colors: ["Green", "Silver", "Graphite"],
    condition: "NEW",
    specs: "Exynos W1000, 44mm Aluminum case"
  },
  {
    name: "Samsung Watch 7",
    storage: "40mm",
    price: 3499,
    colors: ["Green", "Cream", "Graphite", "Silver"],
    condition: "NEW",
    specs: "Exynos W1000, 40mm Aluminum case"
  },
  {
    name: "Apple Watch SE 2nd Gen",
    storage: "40mm",
    price: 3499,
    colors: ["Midnight", "Silver", "Starlight"],
    condition: "NEW",
    specs: "S8 chip, 40mm Aluminum case"
  }
];

export const samsungTablets: Device[] = [
  {
    name: "Tab S10 Ultra X926",
    storage: "256GB 5G",
    price: 24999,
    colors: ["Graphite", "Beige"],
    condition: "NEW",
    specs: "MediaTek Dimensity 9300+, 14.6-inch AMOLED display"
  },
  {
    name: "Tab S10 FE X526",
    storage: "12/256GB 5G",
    price: 16999,
    colors: ["Mint", "Lavender", "Gray", "Silver"],
    condition: "NEW",
    specs: "MediaTek Dimensity 9300+, 12.4-inch AMOLED display"
  },
  {
    name: "Tab S10 FE X526",
    storage: "8/128GB 5G",
    price: 14999,
    colors: ["Mint", "Lavender", "Gray", "Silver"],
    condition: "NEW",
    specs: "MediaTek Dimensity 9300+, 12.4-inch AMOLED display"
  },
  {
    name: "Tab S9 WiFi",
    storage: "256GB",
    price: 11999,
    colors: ["Graphite", "Beige"],
    condition: "NEW",
    specs: "Snapdragon 8 Gen 2, 11-inch AMOLED display"
  },
  {
    name: "Tab A9",
    storage: "64GB WiFi",
    price: 2499,
    colors: ["Graphite", "Silver"],
    condition: "NEW",
    specs: "Snapdragon 695, 8.7-inch TFT display"
  },
  {
    name: "Tab A9 Plus WiFi",
    storage: "128GB",
    price: 4499,
    colors: ["Graphite", "Silver"],
    condition: "NEW",
    specs: "Snapdragon 695, 11-inch TFT display"
  },
  {
    name: "Tab A9 Plus Cellular",
    storage: "128GB",
    price: 5999,
    colors: ["Graphite", "Silver"],
    condition: "NEW",
    specs: "Snapdragon 695, 11-inch TFT display, 5G"
  }
];

export const gamingSound: Device[] = [
  {
    name: "JBL Flip 7",
    price: 2799,
    colors: ["Blue", "Black"],
    condition: "NEW",
    specs: "Portable Bluetooth Speaker"
  },
  {
    name: "JBL Charge 5",
    price: 2999,
    colors: ["Pink", "White", "Black"],
    condition: "NEW",
    specs: "Portable Bluetooth Speaker with Powerbank"
  },
  {
    name: "JBL Live 670NC",
    price: 2299,
    colors: ["Sandstone"],
    condition: "NEW",
    specs: "Wireless Over-Ear Headphones with Active Noise Cancelling"
  },
  {
    name: "JBL Tune 520BT",
    price: 799,
    colors: ["White", "Black"],
    condition: "NEW",
    specs: "Wireless On-Ear Headphones"
  },
  {
    name: "JBL Tune 670NC",
    price: 1999,
    colors: ["Black"],
    condition: "NEW",
    specs: "Wireless Over-Ear Headphones with Active Noise Cancelling"
  },
  {
    name: "JBL Clip 5",
    price: 1299,
    colors: ["White", "Red"],
    condition: "NEW",
    specs: "Ultra-Portable Bluetooth Speaker with Carabiner"
  },
  {
    name: "Harman Kardon Onyx Studio 9",
    price: 5499,
    colors: ["Grey", "Black"],
    condition: "NEW",
    specs: "Premium Bluetooth Speaker"
  },
  {
    name: "DualSense Charging Station",
    price: 599,
    colors: ["White"],
    condition: "NEW",
    specs: "PS5 Controller Charging Station"
  },
  {
    name: "PlayStation Portal Remote Player",
    price: 4499,
    colors: ["White"],
    condition: "NEW",
    specs: "PS5 Remote Play Device"
  },
  {
    name: "DualSense Edge Wireless Controller",
    price: 3999,
    colors: ["Midnight Black"],
    condition: "NEW",
    specs: "PS5 Pro Controller"
  },
  {
    name: "DualSense Wireless Controller",
    price: 1399,
    colors: ["White"],
    condition: "NEW",
    specs: "PS5 Standard Controller"
  },
  {
    name: "PULSE Elite Wireless Headset",
    price: 3999,
    colors: ["Midnight Black", "White"],
    condition: "NEW",
    specs: "PS5 Premium Gaming Headset"
  },
  {
    name: "PULSE Explore Wireless Earbuds",
    price: 4999,
    colors: ["Midnight Black", "White"],
    condition: "NEW",
    specs: "PS5 Gaming Earbuds"
  },
  {
    name: "PlayStation 5 Digital Console",
    storage: "825GB",
    price: 10999,
    colors: ["White"],
    condition: "NEW",
    specs: "PS5 Digital Console (No Disc Drive)"
  },
  {
    name: "PlayStation 5 Disc Console",
    storage: "1TB",
    price: 12499,
    colors: ["White"],
    condition: "NEW",
    specs: "PS5 with Ultra HD Blu-ray Disc Drive"
  },
  {
    name: "PlayStation 5 Pro Console",
    storage: "2TB",
    price: 16499,
    colors: ["White"],
    condition: "NEW",
    specs: "PS5 Pro with Advanced Graphics and Performance"
  },
  {
    name: "Xbox Series X Console",
    storage: "1TB",
    price: 14999,
    colors: ["Black"],
    condition: "NEW",
    specs: "Xbox Series X with 4K Gaming"
  },
  {
    name: "Xbox Series S Console",
    storage: "1TB",
    price: 11499,
    colors: ["White"],
    condition: "NEW",
    specs: "Xbox Series S with Digital Gaming"
  },
  {
    name: "Xbox Wireless Controller",
    price: 1399,
    colors: ["Black", "White", "Blue"],
    condition: "NEW",
    specs: "Xbox Wireless Controller"
  },
  {
    name: "BackBone One PlayStation",
    price: 1999,
    colors: ["White"],
    condition: "NEW",
    specs: "Mobile Gaming Controller for PlayStation"
  },
  {
    name: "BackBone One USB-C",
    price: 1999,
    colors: ["Black"],
    condition: "NEW",
    specs: "Mobile Gaming Controller USB-C"
  },
  {
    name: "BackBone One Lightning",
    price: 1999,
    colors: ["White"],
    condition: "NEW",
    specs: "Mobile Gaming Controller Lightning"
  },
  {
    name: "Nintendo Switch",
    price: 6999,
    colors: ["Neon Blue/Red", "Gray"],
    condition: "NEW",
    specs: "Nintendo Switch Console"
  },
  {
    name: "Nintendo Switch with Game",
    price: 10999,
    colors: ["Neon Blue/Red", "Gray"],
    condition: "NEW",
    specs: "Nintendo Switch Console with Game Bundle"
  },
  {
    name: "Nintendo Switch Lite",
    price: 3800,
    colors: ["Yellow", "Gray", "Turquoise", "Coral"],
    condition: "NEW",
    specs: "Nintendo Switch Lite Handheld Console"
  },
  {
    name: "Nintendo Switch 2",
    price: 9999,
    colors: ["Black"],
    condition: "NEW",
    specs: "Nintendo Switch 2 Console"
  },
  {
    name: "Logitech G29 Racing Wheel",
    price: 4999,
    colors: ["Black"],
    condition: "NEW",
    specs: "Racing Wheel and Pedals for PlayStation and PC"
  },
  {
    name: "Logitech Gear Shifter",
    price: 1299,
    colors: ["Black"],
    condition: "NEW",
    specs: "Driving Force Shifter for Racing Wheels"
  }
];

export const hpLaptops: Device[] = [
  {
    name: "HP I3 FD00133",
    storage: "8/256GB",
    price: 7999,
    colors: ["Silver"],
    condition: "NEW",
    specs: "Intel Core i3, 8GB RAM, 256GB SSD"
  },
  {
    name: "HP I5 FD0250",
    storage: "16/512GB",
    price: 11999,
    colors: ["Silver"],
    condition: "NEW",
    specs: "Intel Core i5, 16GB RAM, 512GB SSD"
  },
  {
    name: "HP I5 FD0215",
    storage: "16/512GB",
    price: 11999,
    colors: ["Silver"],
    condition: "NEW",
    specs: "Intel Core i5, 16GB RAM, 512GB SSD"
  },
  {
    name: "HP I7 FD0557",
    storage: "16/512GB",
    price: 14999,
    colors: ["Silver"],
    condition: "NEW",
    specs: "Intel Core i7, 16GB RAM, 512GB SSD"
  },
  {
    name: "HP I7 FD0127DX",
    storage: "16/512GB",
    price: 14999,
    colors: ["Silver"],
    condition: "NEW",
    specs: "Intel Core i7, 16GB RAM, 512GB SSD"
  }
];
