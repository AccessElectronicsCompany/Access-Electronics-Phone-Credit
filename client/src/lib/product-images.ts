import iphoneImage from "@assets/stock_images/iphone_smartphone_mo_6af1fad6.jpg";
import samsungImage from "@assets/stock_images/samsung_galaxy_smart_93a590c1.jpg";
import ipadImage from "@assets/stock_images/ipad_tablet_device_p_2b972e4f.jpg";
import macbookImage from "@assets/stock_images/macbook_laptop_profe_a150e10b.jpg";
import budsImage from "@assets/stock_images/wireless_earbuds_air_13fcca70.jpg";
import watchImage from "@assets/stock_images/smartwatch_apple_wat_61671735.jpg";
import tabletImage from "@assets/stock_images/samsung_galaxy_table_3a7557eb.jpg";
import ps5Image from "@assets/stock_images/playstation_5_ps5_ga_c15e7b48.jpg";
import speakerImage from "@assets/stock_images/jbl_bluetooth_speake_437ea004.jpg";
import usedPhoneImage from "@assets/stock_images/used_refurbished_sma_d2fdc493.jpg";

export function getProductImage(productName: string, category?: string): string {
  const name = productName.toLowerCase();
  
  if (name.includes("used") || category === "used") {
    return usedPhoneImage;
  }
  
  if (name.includes("iphone")) {
    return iphoneImage;
  }
  
  if (name.includes("samsung") || name.includes("galaxy")) {
    if (name.includes("tab") || category === "tablet") {
      return tabletImage;
    }
    if (name.includes("watch")) {
      return watchImage;
    }
    if (name.includes("buds")) {
      return budsImage;
    }
    return samsungImage;
  }
  
  if (name.includes("ipad") || category === "ipad") {
    return ipadImage;
  }
  
  if (name.includes("macbook") || category === "macbook") {
    return macbookImage;
  }
  
  if (name.includes("airpods") || name.includes("buds") || category === "buds") {
    return budsImage;
  }
  
  if (name.includes("watch") || category === "watch") {
    return watchImage;
  }
  
  if (name.includes("tab") || category === "tablet") {
    return tabletImage;
  }
  
  if (name.includes("ps5") || name.includes("playstation") || name.includes("dualsense") || name.includes("portal")) {
    return ps5Image;
  }
  
  if (name.includes("jbl") || name.includes("harman") || name.includes("speaker") || name.includes("flip") || name.includes("charge") || name.includes("clip")) {
    return speakerImage;
  }
  
  if (category === "gaming") {
    return ps5Image;
  }
  
  return iphoneImage;
}

export const categoryImages = {
  iphone: iphoneImage,
  samsung: samsungImage,
  used: usedPhoneImage,
  ipad: ipadImage,
  macbook: macbookImage,
  buds: budsImage,
  watch: watchImage,
  tablet: tabletImage,
  gaming: ps5Image,
  speaker: speakerImage,
};
