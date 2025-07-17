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
    name: "iPhone 16 Pro Max",
    storage: "256GB",
    price: 27999,
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
    price: 25999,
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
    price: 17999,
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
    price: 27999,
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
    price: 16499,
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
    price: 12999,
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
    price: 14400,
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
    price: 13999,
    colors: ["Graphite", "Silver", "Gold", "Pacific Blue"],
    condition: "NEW"
  },
  {
    name: "iPhone 12 Pro Max",
    storage: "128GB",
    price: 12999,
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
  }
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
    price: 26999,
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
    price: 18499,
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
    price: 18499,
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
    price: 10499,
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
  }
];

export const ipads: Device[] = [
  {
    name: "iPad Pro 13-inch M4",
    storage: "256GB",
    price: 23999,
    colors: ["Space Black", "Silver"],
    condition: "NEW",
    specs: "M4 chip, 13-inch Liquid Retina XDR display"
  },
  {
    name: "iPad Pro 13-inch M4",
    storage: "512GB",
    price: 26999,
    colors: ["Space Black", "Silver"],
    condition: "NEW",
    specs: "M4 chip, 13-inch Liquid Retina XDR display"
  },
  {
    name: "iPad Pro 11-inch M4",
    storage: "256GB",
    price: 18999,
    colors: ["Space Black", "Silver"],
    condition: "NEW",
    specs: "M4 chip, 11-inch Liquid Retina display"
  },
  {
    name: "iPad Pro 11-inch M4",
    storage: "512GB",
    price: 21999,
    colors: ["Space Black", "Silver"],
    condition: "NEW",
    specs: "M4 chip, 11-inch Liquid Retina display"
  },
  {
    name: "iPad Air 13-inch M2",
    storage: "128GB",
    price: 14999,
    colors: ["Space Gray", "Starlight", "Pink", "Purple", "Blue"],
    condition: "NEW",
    specs: "M2 chip, 13-inch Liquid Retina display"
  },
  {
    name: "iPad Air 13-inch M2",
    storage: "256GB",
    price: 16999,
    colors: ["Space Gray", "Starlight", "Pink", "Purple", "Blue"],
    condition: "NEW",
    specs: "M2 chip, 13-inch Liquid Retina display"
  },
  {
    name: "iPad Air 11-inch M2",
    storage: "128GB",
    price: 12999,
    colors: ["Space Gray", "Starlight", "Pink", "Purple", "Blue"],
    condition: "NEW",
    specs: "M2 chip, 11-inch Liquid Retina display"
  },
  {
    name: "iPad Air 11-inch M2",
    storage: "256GB",
    price: 14999,
    colors: ["Space Gray", "Starlight", "Pink", "Purple", "Blue"],
    condition: "NEW",
    specs: "M2 chip, 11-inch Liquid Retina display"
  },
  {
    name: "iPad 10th Gen",
    storage: "64GB",
    price: 8999,
    colors: ["Silver", "Pink", "Blue", "Yellow"],
    condition: "NEW",
    specs: "A14 Bionic chip, 10.9-inch Liquid Retina display"
  },
  {
    name: "iPad 10th Gen",
    storage: "256GB",
    price: 10999,
    colors: ["Silver", "Pink", "Blue", "Yellow"],
    condition: "NEW",
    specs: "A14 Bionic chip, 10.9-inch Liquid Retina display"
  }
];

export const macbooks: Device[] = [
  {
    name: "MacBook Pro 16-inch M4 Pro",
    storage: "512GB",
    price: 49999,
    colors: ["Space Black", "Silver"],
    condition: "NEW",
    specs: "M4 Pro chip, 16-inch Liquid Retina XDR display"
  },
  {
    name: "MacBook Pro 16-inch M4 Pro",
    storage: "1TB",
    price: 54999,
    colors: ["Space Black", "Silver"],
    condition: "NEW",
    specs: "M4 Pro chip, 16-inch Liquid Retina XDR display"
  },
  {
    name: "MacBook Pro 14-inch M4",
    storage: "512GB",
    price: 39999,
    colors: ["Space Black", "Silver"],
    condition: "NEW",
    specs: "M4 chip, 14-inch Liquid Retina XDR display"
  },
  {
    name: "MacBook Pro 14-inch M4",
    storage: "1TB",
    price: 44999,
    colors: ["Space Black", "Silver"],
    condition: "NEW",
    specs: "M4 chip, 14-inch Liquid Retina XDR display"
  },
  {
    name: "MacBook Air 15-inch M3",
    storage: "256GB",
    price: 27999,
    colors: ["Midnight", "Starlight", "Space Gray", "Silver"],
    condition: "NEW",
    specs: "M3 chip, 15.3-inch Liquid Retina display"
  },
  {
    name: "MacBook Air 15-inch M3",
    storage: "512GB",
    price: 31999,
    colors: ["Midnight", "Starlight", "Space Gray", "Silver"],
    condition: "NEW",
    specs: "M3 chip, 15.3-inch Liquid Retina display"
  },
  {
    name: "MacBook Air 13-inch M3",
    storage: "256GB",
    price: 24999,
    colors: ["Midnight", "Starlight", "Space Gray", "Silver"],
    condition: "NEW",
    specs: "M3 chip, 13.6-inch Liquid Retina display"
  },
  {
    name: "MacBook Air 13-inch M3",
    storage: "512GB",
    price: 28999,
    colors: ["Midnight", "Starlight", "Space Gray", "Silver"],
    condition: "NEW",
    specs: "M3 chip, 13.6-inch Liquid Retina display"
  },
  {
    name: "MacBook Air 13-inch M2",
    storage: "256GB",
    price: 22999,
    colors: ["Midnight", "Starlight", "Space Gray", "Silver"],
    condition: "NEW",
    specs: "M2 chip, 13.6-inch Liquid Retina display"
  },
  {
    name: "MacBook Air 13-inch M2",
    storage: "512GB",
    price: 26999,
    colors: ["Midnight", "Starlight", "Space Gray", "Silver"],
    condition: "NEW",
    specs: "M2 chip, 13.6-inch Liquid Retina display"
  }
];

export const buds: Device[] = [
  {
    name: "AirPods Pro 2nd Gen",
    price: 5999,
    colors: ["White"],
    condition: "NEW",
    specs: "H2 chip, Active Noise Cancellation, USB-C"
  },
  {
    name: "AirPods 3rd Gen",
    price: 4499,
    colors: ["White"],
    condition: "NEW",
    specs: "H1 chip, Spatial Audio, Lightning"
  },
  {
    name: "AirPods Max",
    price: 12999,
    colors: ["Space Gray", "Silver", "Pink", "Green", "Sky Blue"],
    condition: "NEW",
    specs: "H1 chip, Active Noise Cancellation, Premium over-ear"
  },
  {
    name: "Samsung Galaxy Buds3 Pro",
    price: 4999,
    colors: ["Silver", "White"],
    condition: "NEW",
    specs: "Adaptive Active Noise Cancellation, 360 Audio"
  },
  {
    name: "Samsung Galaxy Buds3",
    price: 3999,
    colors: ["Silver", "White"],
    condition: "NEW",
    specs: "Adaptive EQ, 360 Audio"
  },
  {
    name: "Samsung Galaxy Buds2 Pro",
    price: 3499,
    colors: ["Bora Purple", "Graphite", "White"],
    condition: "NEW",
    specs: "Intelligent Active Noise Cancellation, 360 Audio"
  },
  {
    name: "Samsung Galaxy Buds2",
    price: 2999,
    colors: ["Graphite", "White", "Olive", "Lavender"],
    condition: "NEW",
    specs: "Active Noise Cancellation, 360 Audio"
  }
];

export const watches: Device[] = [
  {
    name: "Apple Watch Ultra 2",
    storage: "64GB",
    price: 17999,
    colors: ["Natural Titanium"],
    condition: "NEW",
    specs: "S9 chip, 49mm Titanium case, Action Button"
  },
  {
    name: "Apple Watch Series 10",
    storage: "64GB",
    price: 8999,
    colors: ["Jet Black", "Rose Gold", "Silver"],
    condition: "NEW",
    specs: "S10 chip, 45mm Aluminum case"
  },
  {
    name: "Apple Watch Series 10",
    storage: "64GB",
    price: 7999,
    colors: ["Jet Black", "Rose Gold", "Silver"],
    condition: "NEW",
    specs: "S10 chip, 41mm Aluminum case"
  },
  {
    name: "Apple Watch SE",
    storage: "32GB",
    price: 5999,
    colors: ["Midnight", "Starlight", "Silver"],
    condition: "NEW",
    specs: "S8 chip, 44mm Aluminum case"
  },
  {
    name: "Apple Watch SE",
    storage: "32GB",
    price: 5499,
    colors: ["Midnight", "Starlight", "Silver"],
    condition: "NEW",
    specs: "S8 chip, 40mm Aluminum case"
  },
  {
    name: "Samsung Galaxy Watch7",
    storage: "32GB",
    price: 6999,
    colors: ["Green", "Cream"],
    condition: "NEW",
    specs: "Exynos W1000, 44mm Aluminum case"
  },
  {
    name: "Samsung Galaxy Watch7",
    storage: "32GB",
    price: 6499,
    colors: ["Green", "Cream"],
    condition: "NEW",
    specs: "Exynos W1000, 40mm Aluminum case"
  },
  {
    name: "Samsung Galaxy Watch Ultra",
    storage: "32GB",
    price: 12999,
    colors: ["Titanium Gray", "Titanium White", "Titanium Silver"],
    condition: "NEW",
    specs: "Exynos W1000, 47mm Titanium case"
  }
];

export const samsungTablets: Device[] = [
  {
    name: "Samsung Galaxy Tab S10 Ultra",
    storage: "256GB",
    price: 24999,
    colors: ["Moonstone Gray", "Platinum Silver"],
    condition: "NEW",
    specs: "MediaTek Dimensity 9300+, 14.6-inch AMOLED display"
  },
  {
    name: "Samsung Galaxy Tab S10 Ultra",
    storage: "512GB",
    price: 27999,
    colors: ["Moonstone Gray", "Platinum Silver"],
    condition: "NEW",
    specs: "MediaTek Dimensity 9300+, 14.6-inch AMOLED display"
  },
  {
    name: "Samsung Galaxy Tab S10+",
    storage: "256GB",
    price: 19999,
    colors: ["Moonstone Gray", "Platinum Silver"],
    condition: "NEW",
    specs: "MediaTek Dimensity 9300+, 12.4-inch AMOLED display"
  },
  {
    name: "Samsung Galaxy Tab S10+",
    storage: "512GB",
    price: 22999,
    colors: ["Moonstone Gray", "Platinum Silver"],
    condition: "NEW",
    specs: "MediaTek Dimensity 9300+, 12.4-inch AMOLED display"
  },
  {
    name: "Samsung Galaxy Tab S9 Ultra",
    storage: "256GB",
    price: 22999,
    colors: ["Beige", "Graphite"],
    condition: "NEW",
    specs: "Snapdragon 8 Gen 2, 14.6-inch AMOLED display"
  },
  {
    name: "Samsung Galaxy Tab S9+",
    storage: "256GB",
    price: 17999,
    colors: ["Beige", "Graphite"],
    condition: "NEW",
    specs: "Snapdragon 8 Gen 2, 12.4-inch AMOLED display"
  },
  {
    name: "Samsung Galaxy Tab S9",
    storage: "128GB",
    price: 14999,
    colors: ["Beige", "Graphite"],
    condition: "NEW",
    specs: "Snapdragon 8 Gen 2, 11-inch AMOLED display"
  },
  {
    name: "Samsung Galaxy Tab S9",
    storage: "256GB",
    price: 16999,
    colors: ["Beige", "Graphite"],
    condition: "NEW",
    specs: "Snapdragon 8 Gen 2, 11-inch AMOLED display"
  },
  {
    name: "Samsung Galaxy Tab A9+",
    storage: "128GB",
    price: 5999,
    colors: ["Graphite", "Silver", "Navy"],
    condition: "NEW",
    specs: "Snapdragon 695, 11-inch TFT display"
  },
  {
    name: "Samsung Galaxy Tab A9",
    storage: "128GB",
    price: 4999,
    colors: ["Graphite", "Silver", "Navy"],
    condition: "NEW",
    specs: "Snapdragon 695, 8.7-inch TFT display"
  }
];
