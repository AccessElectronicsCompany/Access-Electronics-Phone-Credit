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
    storage: "256GB",
    price: 29999,
    colors: ["Cosmic Orange", "Deep Blue", "Silver"],
    condition: "NEW"
  },
  {
    name: "iPhone 17 Pro",
    storage: "256GB",
    price: 27299,
    colors: ["Cosmic Orange", "Deep Blue", "Silver"],
    condition: "NEW"
  },
  {
    name: "iPhone Air",
    storage: "256GB",
    price: 24699,
    colors: ["Sky Blue", "Light Gold", "Cloud White", "Space Black"],
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
    name: "iPhone 16 Pro Max",
    storage: "256GB",
    price: 26999,
    colors: ["Black Titanium", "White Titanium", "Natural Titanium", "Desert Titanium"],
    condition: "NEW"
  },
  {
    name: "iPhone 16 Pro",
    storage: "128GB",
    price: 23999,
    colors: ["Black Titanium", "White Titanium", "Natural Titanium", "Desert Titanium"],
    condition: "NEW"
  },
  {
    name: "iPhone 16 Pro",
    storage: "256GB",
    price: 24999,
    colors: ["Black Titanium", "White Titanium", "Natural Titanium", "Desert Titanium"],
    condition: "NEW"
  },
  {
    name: "iPhone 16",
    storage: "256GB",
    price: 19999,
    colors: ["Black", "White", "Pink", "Teal", "Ultramarine"],
    condition: "NEW"
  },
  {
    name: "iPhone 16",
    storage: "128GB",
    price: 16999,
    colors: ["Black", "White", "Pink", "Teal", "Ultramarine"],
    condition: "NEW"
  },
  {
    name: "iPhone 16 Plus",
    storage: "128GB",
    price: 20499,
    colors: ["Black", "White", "Pink", "Teal", "Ultramarine"],
    condition: "NEW"
  },
  {
    name: "iPhone 16 Plus",
    storage: "256GB",
    price: 23999,
    colors: ["Black", "White", "Pink", "Teal", "Ultramarine"],
    condition: "NEW"
  },
  {
    name: "iPhone 15 Pro Max",
    storage: "256GB",
    price: 25999,
    colors: ["Black Titanium", "White Titanium", "Blue Titanium", "Natural Titanium"],
    condition: "NEW"
  },
  {
    name: "iPhone 15 Pro",
    storage: "128GB",
    price: 21999,
    colors: ["Black Titanium", "White Titanium", "Blue Titanium", "Natural Titanium"],
    condition: "NEW"
  },
  {
    name: "iPhone 15 Pro",
    storage: "256GB",
    price: 24999,
    colors: ["Black Titanium", "White Titanium", "Blue Titanium", "Natural Titanium"],
    condition: "NEW"
  },
  {
    name: "iPhone 15",
    storage: "128GB",
    price: 14999,
    colors: ["Black", "Blue", "Green", "Pink", "Yellow"],
    condition: "NEW"
  },
  {
    name: "iPhone 15",
    storage: "256GB",
    price: 17800,
    colors: ["Black", "Blue", "Green", "Pink", "Yellow"],
    condition: "NEW"
  },
  {
    name: "iPhone 14 Pro Max",
    storage: "256GB",
    price: 19999,
    colors: ["Deep Purple", "Space Black"],
    condition: "NEW"
  },
  {
    name: "iPhone 14 Pro",
    storage: "256GB",
    price: 16999,
    colors: ["Deep Purple", "Space Black"],
    condition: "NEW"
  },
  {
    name: "iPhone 14 Pro",
    storage: "128GB",
    price: 15999,
    colors: ["Deep Purple", "Space Black"],
    condition: "NEW"
  },
  {
    name: "iPhone 14 Plus",
    storage: "128GB",
    price: 14400,
    colors: ["Midnight", "Starlight", "Blue", "Purple", "Yellow", "(PRODUCT)RED"],
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
    name: "iPhone 13 Pro Max",
    storage: "256GB",
    price: 15999,
    colors: ["Graphite", "Silver", "Gold", "Sierra Blue", "Alpine Green"],
    condition: "NEW"
  },
  {
    name: "iPhone 13 Pro",
    storage: "256GB",
    price: 14999,
    colors: ["Graphite", "Silver", "Gold", "Sierra Blue", "Alpine Green"],
    condition: "NEW"
  },
  {
    name: "iPhone 13 Pro Max",
    storage: "128GB",
    price: 14999,
    colors: ["Graphite", "Silver", "Gold", "Sierra Blue", "Alpine Green"],
    condition: "NEW"
  },
  {
    name: "iPhone 13",
    storage: "256GB",
    price: 11499,
    colors: ["Midnight", "Starlight", "Blue", "Pink", "Green", "(PRODUCT)RED"],
    condition: "NEW"
  },
  {
    name: "iPhone 13",
    storage: "128GB",
    price: 10499,
    colors: ["Midnight", "Starlight", "Blue", "Pink", "Green", "(PRODUCT)RED"],
    condition: "NEW"
  },
  {
    name: "iPhone 12 Pro Max",
    storage: "256GB",
    price: 12999,
    colors: ["Graphite", "Silver", "Gold", "Pacific Blue"],
    condition: "NEW"
  },
  {
    name: "iPhone 12 Pro Max",
    storage: "128GB",
    price: 11999,
    colors: ["Graphite", "Silver", "Gold", "Pacific Blue"],
    condition: "NEW"
  },
  {
    name: "iPhone 12 Pro",
    storage: "256GB",
    price: 11999,
    colors: ["Graphite", "Silver", "Gold", "Pacific Blue"],
    condition: "NEW"
  },
  {
    name: "iPhone 12",
    storage: "128GB",
    price: 9500,
    colors: ["Black", "White", "Blue", "Green", "Purple", "(PRODUCT)RED"],
    condition: "NEW"
  },
  {
    name: "iPhone 11 Pro Max",
    storage: "256GB",
    price: 11300,
    colors: ["Space Gray", "Silver", "Midnight Green", "Gold"],
    condition: "NEW"
  },
  {
    name: "iPhone 11 Pro",
    storage: "256GB",
    price: 9800,
    colors: ["Space Gray", "Silver", "Midnight Green", "Gold"],
    condition: "NEW"
  },
  {
    name: "iPhone 11",
    storage: "128GB",
    price: 8500,
    colors: ["Black", "White", "Green", "Purple", "Yellow", "(PRODUCT)RED"],
    condition: "NEW"
  },
  {
    name: "iPhone 15 Plus",
    storage: "256GB",
    price: 19999,
    colors: ["Black", "Blue", "Green", "Yellow", "Pink"],
    condition: "NEW"
  },
  {
    name: "iPhone 15 Plus",
    storage: "128GB",
    price: 17999,
    colors: ["Black", "Blue", "Green", "Yellow", "Pink"],
    condition: "NEW"
  },
  {
    name: "iPhone XS Max",
    storage: "256GB",
    price: 6999,
    colors: ["Space Gray", "Silver", "Gold"],
    condition: "NEW"
  },
  {
    name: "iPhone XR",
    storage: "256GB",
    price: 6700,
    colors: ["Black", "White", "Blue", "Coral", "Yellow", "(PRODUCT)RED"],
    condition: "NEW"
  },
  {
    name: "iPhone X",
    storage: "256GB",
    price: 5850,
    colors: ["Space Gray", "Silver"],
    condition: "NEW"
  },
  {
    name: "iPhone X",
    storage: "64GB",
    price: 5500,
    colors: ["Space Gray", "Silver"],
    condition: "NEW"
  }
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
    price: 26999,
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
    price: 21999,
    colors: ["Icy Blue", "Mint", "Navy", "Silver Shadow"],
    condition: "NEW"
  },
  {
    name: "Samsung S25",
    storage: "256GB",
    price: 17499,
    colors: ["Icy Blue", "Mint", "Navy", "Silver Shadow"],
    condition: "NEW"
  },
  {
    name: "Samsung S24 Ultra",
    storage: "512GB",
    price: 26999,
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
    price: 17499,
    colors: ["Onyx Black", "Marble Gray", "Cobalt Violet", "Amber Yellow", "Jade Green", "Sapphire Blue"],
    condition: "NEW"
  },
  {
    name: "Samsung S24",
    storage: "256GB",
    price: 14499,
    colors: ["Onyx Black", "Marble Gray", "Cobalt Violet", "Amber Yellow", "Jade Green", "Sapphire Blue"],
    condition: "NEW"
  },
  {
    name: "Samsung Z Fold",
    storage: "256GB",
    price: 31999,
    colors: ["Phantom Black", "Icy Blue", "Cream", "Gray", "Blue", "Crafted Black", "Silver Shadow"],
    condition: "NEW"
  },
  {
    name: "Samsung S23 Ultra",
    storage: "256GB",
    price: 19999,
    colors: ["Phantom Black", "Cream", "Green", "Lavender", "Graphite", "Lime", "Sky Blue", "Red"],
    condition: "NEW"
  },
  {
    name: "Samsung S23 Plus",
    storage: "256GB",
    price: 16999,
    colors: ["Phantom Black", "Cream", "Green", "Lavender", "Graphite", "Lime"],
    condition: "NEW"
  },
  {
    name: "Samsung S23",
    storage: "512GB",
    price: 13999,
    colors: ["Phantom Black", "Cream", "Green", "Lavender", "Graphite", "Lime"],
    condition: "NEW"
  },
  {
    name: "Samsung S23",
    storage: "256GB",
    price: 12999,
    colors: ["Phantom Black", "Cream", "Green", "Lavender", "Graphite", "Lime"],
    condition: "NEW"
  },
  {
    name: "Samsung S22 Ultra",
    storage: "512GB",
    price: 16999,
    colors: ["Phantom Black", "Phantom White", "Green", "Burgundy", "Graphite", "Sky Blue", "Red"],
    condition: "NEW"
  },
  {
    name: "Samsung S22 Ultra",
    storage: "256GB",
    price: 15999,
    colors: ["Phantom Black", "Phantom White", "Green", "Burgundy", "Graphite", "Sky Blue", "Red"],
    condition: "NEW"
  },
  {
    name: "Samsung S22 Plus",
    storage: "256GB",
    price: 11999,
    colors: ["Phantom Black", "Phantom White", "Green", "Pink Gold", "Graphite", "Sky Blue", "Violet", "Cream"],
    condition: "NEW"
  },
  {
    name: "Samsung S22",
    storage: "256GB",
    price: 9500,
    colors: ["Phantom Black", "Phantom White", "Green", "Pink Gold", "Graphite", "Sky Blue", "Violet", "Cream"],
    condition: "NEW"
  },
  {
    name: "Samsung A56",
    storage: "256GB",
    price: 9999,
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
  {
    name: "Samsung S21 Ultra",
    storage: "128GB",
    price: 10999,
    colors: ["Phantom Black", "Phantom Silver"],
    condition: "NEW"
  },
  {
    name: "Samsung S21",
    storage: "256GB",
    price: 9500,
    colors: ["Phantom Gray", "Phantom White", "Phantom Violet", "Phantom Pink"],
    condition: "NEW"
  },
  {
    name: "Samsung S21",
    storage: "128GB",
    price: 8500,
    colors: ["Phantom Gray", "Phantom White", "Phantom Violet", "Phantom Pink"],
    condition: "NEW"
  },
  {
    name: "Samsung S20 Ultra",
    storage: "128GB",
    price: 8499,
    colors: ["Cosmic Gray", "Cosmic Black"],
    condition: "NEW"
  },
  {
    name: "Samsung S20",
    storage: "256GB",
    price: 6999,
    colors: ["Cosmic Gray", "Cloud Blue", "Cloud White"],
    condition: "NEW"
  },
  {
    name: "Samsung S20",
    storage: "128GB",
    price: 6700,
    colors: ["Cosmic Gray", "Cloud Blue", "Cloud Pink"],
    condition: "NEW"
  }
];

export const usedPhones: Phone[] = [
  // Used iPhones
  {
    name: "Used iPhone XR",
    storage: "128GB",
    price: 4999,
    colors: ["Black", "White", "Blue", "Coral", "Yellow", "(PRODUCT)RED"],
    condition: "USED"
  },
  {
    name: "Used iPhone 11",
    storage: "64GB",
    price: 5999,
    colors: ["Black", "White", "Green", "Purple", "Yellow", "(PRODUCT)RED"],
    condition: "USED"
  },
  {
    name: "Used iPhone 11",
    storage: "128GB",
    price: 6999,
    colors: ["Black", "White", "Green", "Purple", "Yellow", "(PRODUCT)RED"],
    condition: "USED"
  },
  {
    name: "Used iPhone 11 Pro",
    storage: "256GB",
    price: 7799,
    colors: ["Space Gray", "Silver", "Midnight Green", "Gold"],
    condition: "USED"
  },
  {
    name: "Used iPhone 11 Pro Max",
    storage: "256GB",
    price: 7999,
    colors: ["Space Gray", "Silver", "Midnight Green", "Gold"],
    condition: "USED"
  },
  {
    name: "Used iPhone 12",
    storage: "64GB",
    price: 6999,
    colors: ["Black", "White", "Blue", "Green", "Purple", "(PRODUCT)RED"],
    condition: "USED"
  },
  {
    name: "Used iPhone 12",
    storage: "128GB",
    price: 7699,
    colors: ["Black", "White", "Blue", "Green", "Purple", "(PRODUCT)RED"],
    condition: "USED"
  },
  {
    name: "Used iPhone 12 Pro",
    storage: "256GB",
    price: 8999,
    colors: ["Graphite", "Silver", "Gold", "Pacific Blue"],
    condition: "USED"
  },
  {
    name: "Used iPhone 13",
    storage: "128GB",
    price: 8499,
    colors: ["Midnight", "Starlight", "Blue", "Pink", "Green", "(PRODUCT)RED"],
    condition: "USED"
  },
  {
    name: "Used iPhone 13 Pro",
    storage: "256GB",
    price: 11999,
    colors: ["Graphite", "Silver", "Gold", "Sierra Blue", "Alpine Green"],
    condition: "USED"
  },
  {
    name: "Used iPhone 13 Pro Max",
    storage: "256GB",
    price: 13499,
    colors: ["Graphite", "Silver", "Gold", "Sierra Blue", "Alpine Green"],
    condition: "USED"
  },
  {
    name: "Used iPhone 14",
    storage: "128GB",
    price: 9999,
    colors: ["Midnight", "Starlight", "Blue", "Purple", "Yellow", "(PRODUCT)RED"],
    condition: "USED"
  },
  {
    name: "Used iPhone 14 Pro",
    storage: "256GB",
    price: 13999,
    colors: ["Deep Purple", "Space Black"],
    condition: "USED"
  },
  {
    name: "Used iPhone 15",
    storage: "128GB",
    price: 13999,
    colors: ["Black", "Blue", "Green", "Pink", "Yellow"],
    condition: "USED"
  },
  // Used Samsung Phones
  {
    name: "Used Samsung S22 Ultra",
    storage: "256GB",
    price: 11999,
    colors: ["Phantom Black", "Phantom White", "Burgundy", "Green"],
    condition: "USED"
  },
  {
    name: "Used Samsung S22 Ultra",
    storage: "512GB",
    price: 12999,
    colors: ["Phantom Black", "Phantom White", "Burgundy", "Green"],
    condition: "USED"
  },
  {
    name: "Used Samsung S24 Ultra",
    storage: "256GB",
    price: 17999,
    colors: ["Titanium Black", "Titanium Gray", "Titanium Violet", "Titanium Yellow"],
    condition: "USED"
  },
  {
    name: "Used Samsung S23 Ultra",
    storage: "256GB",
    price: 14999,
    colors: ["Phantom Black", "Cream", "Green", "Lavender", "Graphite", "Lime", "Sky Blue", "Red"],
    condition: "USED"
  },
  {
    name: "Used Samsung S20+",
    storage: "256GB",
    price: 6499,
    colors: ["Cosmic Gray", "Cloud Blue", "Cosmic Black"],
    condition: "USED"
  },
  {
    name: "Used Samsung S23 Plus (Single Sim)",
    storage: "512GB",
    price: 11999,
    colors: ["Phantom Black", "Cream", "Green", "Lavender", "Graphite", "Lime"],
    condition: "USED"
  },
  {
    name: "Used Samsung S20 Ultra (Dual Sim)",
    storage: "256GB",
    price: 7499,
    colors: ["Cosmic Gray", "Cosmic Black"],
    condition: "USED"
  },
  {
    name: "Used Samsung S22 Ultra",
    storage: "512GB",
    price: 12999,
    colors: ["Phantom Black", "Phantom White", "Green", "Burgundy", "Graphite", "Sky Blue", "Red"],
    condition: "USED"
  },
  {
    name: "Used Samsung S22 (1 Sim)",
    storage: "256GB",
    price: 6999,
    colors: ["Phantom Black", "Phantom White", "Green", "Pink Gold", "Graphite", "Sky Blue", "Violet", "Cream"],
    condition: "USED"
  }
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
    price: 12999,
    colors: ["Silver", "Space Gray", "Gold"],
    condition: "NEW",
    specs: "M1 chip, 13.3-inch Liquid Retina display"
  },
  {
    name: "MacBook Air 13-inch M2",
    storage: "16/256",
    price: 16999,
    colors: ["Midnight", "Starlight", "Silver", "Space Gray"],
    condition: "NEW",
    specs: "M2 chip, 13.6-inch Liquid Retina display"
  },
  {
    name: "MacBook Air 13-inch M4",
    storage: "16/256GB",
    price: 20999,
    colors: ["Midnight", "Starlight", "Silver", "Space Gray"],
    condition: "NEW",
    specs: "M4 chip, 13.6-inch Liquid Retina display"
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
    name: "AirPods Pro 2",
    price: 5499,
    colors: ["White"],
    condition: "NEW",
    specs: "H2 chip, Active Noise Cancellation, USB-C"
  },
  {
    name: "AirPods 4 ANC",
    price: 4299,
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
    name: "Samsung Watch Ultra",
    price: 9999,
    colors: ["Titanium Gray"],
    condition: "NEW",
    specs: "Exynos W1000, 47mm Titanium case"
  },
  {
    name: "Samsung Watch 7",
    storage: "44mm",
    price: 5499,
    colors: ["Green", "Silver", "Graphite"],
    condition: "NEW",
    specs: "Exynos W1000, 44mm Aluminum case"
  },
  {
    name: "Samsung Watch 7",
    storage: "40mm",
    price: 4999,
    colors: ["Green", "Cream", "Graphite", "Silver"],
    condition: "NEW",
    specs: "Exynos W1000, 40mm Aluminum case"
  },
  {
    name: "Apple Watch SE",
    storage: "40mm",
    price: 5299,
    colors: ["Midnight", "Silver", "Starlight"],
    condition: "NEW",
    specs: "S8 chip, 40mm Aluminum case"
  },
  {
    name: "Apple Watch SE",
    storage: "44mm",
    price: 5999,
    colors: ["Midnight", "Silver", "Starlight"],
    condition: "NEW",
    specs: "S8 chip, 44mm Aluminum case"
  },
  {
    name: "Apple Watch Series 10",
    storage: "46mm",
    price: 9999,
    colors: ["Midnight", "Silver", "Blue", "Starlight"],
    condition: "NEW",
    specs: "S10 chip, 46mm Aluminum case"
  },
  {
    name: "Apple Watch Ultra (2nd Gen)",
    price: 18999,
    colors: ["Natural Titanium"],
    condition: "NEW",
    specs: "S9 chip, 49mm Titanium case, Action Button"
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
    name: "Tab S9 X710",
    storage: "256GB WiFi",
    price: 16999,
    colors: ["Graphite", "Beige"],
    condition: "NEW",
    specs: "Snapdragon 8 Gen 2, 11-inch AMOLED display"
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
