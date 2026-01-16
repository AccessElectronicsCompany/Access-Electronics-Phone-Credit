// iPhone images
import iphone17ProMaxImage from "@assets/stock_images/iphone_17_pro_max_of_2abdab8e.jpg";
import iphone17ProImage from "@assets/stock_images/iphone_17_pro_offici_dcc5f7df.jpg";
import iphone16ProMaxImage from "@assets/stock_images/iphone_16_pro_max_of_bb7fe637.jpg";
import iphone16ProImage from "@assets/stock_images/iphone_16_pro_offici_721e661d.jpg";
import iphone16Image from "@assets/stock_images/iphone_16_official_a_ff7fe88f.jpg";
import iphone15ProMaxImage from "@assets/stock_images/iphone_15_pro_max_of_410b8c7d.jpg";
import iphone15ProImage from "@assets/stock_images/iphone_15_pro_offici_714ad6b4.jpg";
import iphone15Image from "@assets/stock_images/iphone_15_official_a_6f4754a9.jpg";
import iphone14ProMaxImage from "@assets/stock_images/iphone_14_pro_max_of_eee4cae6.jpg";
import iphone14Image from "@assets/stock_images/iphone_14_official_a_49c1a2d4.jpg";
import iphone13Image from "@assets/stock_images/iphone_13_official_a_d210eeec.jpg";
import iphone12Image from "@assets/stock_images/iphone_12_official_a_9c299858.jpg";
import iphone11Image from "@assets/stock_images/iphone_11_official_a_f8a16fe0.jpg";

// Samsung phone images
import samsungZFoldImage from "@assets/stock_images/samsung_galaxy_z_fol_11da6ad3.jpg";
import samsungZFlipImage from "@assets/stock_images/samsung_galaxy_z_fli_71ee4610.jpg";
import samsungS25UltraImage from "@assets/stock_images/samsung_galaxy_s25_u_fa0f3e4b.jpg";
import samsungS25Image from "@assets/stock_images/samsung_galaxy_s25_o_42b21620.jpg";
import samsungS24UltraImage from "@assets/stock_images/samsung_galaxy_s24_u_3529b68a.jpg";
import samsungA56Image from "@assets/stock_images/samsung_galaxy_a56_o_bbde3264.jpg";
import samsungA36Image from "@assets/stock_images/samsung_galaxy_a36_o_2a747d8e.jpg";
import samsungA16Image from "@assets/stock_images/samsung_galaxy_a16_o_d191917c.jpg";

// iPad images
import ipadProM4Image from "@assets/stock_images/ipad_pro_m4_official_d7a141b2.jpg";
import ipadAirM2Image from "@assets/stock_images/ipad_air_m2_official_ea9f6f56.jpg";
import ipad10Image from "@assets/stock_images/ipad_10th_generation_ae3e525d.jpg";

// MacBook images
import macbookPro14Image from "@assets/stock_images/macbook_pro_14_inch__72cb9936.jpg";
import macbookPro16Image from "@assets/stock_images/macbook_pro_16_inch__7a29f9d0.jpg";
import macbookAirM4Image from "@assets/stock_images/macbook_air_m4_offic_f94711d2.jpg";
import macbookAirM2Image from "@assets/stock_images/macbook_air_m2_offic_629b9d61.jpg";

// Buds/Earbuds images
import airpodsPro2Image from "@assets/stock_images/apple_airpods_pro_2__62016894.jpg";
import airpods4Image from "@assets/stock_images/apple_airpods_4_offi_d183b288.jpg";
import samsungBuds3ProImage from "@assets/stock_images/samsung_galaxy_buds__ae2c8a82.jpg";
import samsungBudsFEImage from "@assets/stock_images/samsung_galaxy_buds__f25545ab.jpg";

// Watch images
import appleWatchSeries10Image from "@assets/stock_images/apple_watch_series_1_d3667674.jpg";
import appleWatchUltra2Image from "@assets/stock_images/apple_watch_ultra_2__6f9638ad.jpg";
import appleWatchSEImage from "@assets/stock_images/apple_watch_se_offic_ec78b888.jpg";
import samsungWatch7Image from "@assets/stock_images/samsung_galaxy_watch_a45a566e.jpg";
import samsungWatchUltraImage from "@assets/stock_images/samsung_galaxy_watch_d9d9ffdc.jpg";

// Samsung Tablet images
import samsungTabS10Image from "@assets/stock_images/samsung_galaxy_tab_s_041830c4.jpg";
import samsungTabS9Image from "@assets/stock_images/samsung_galaxy_tab_s_fa851862.jpg";

// Gaming & Sound images
import ps5ProImage from "@assets/stock_images/playstation_5_pro_co_298503ab.jpg";
import ps5SlimImage from "@assets/stock_images/playstation_5_slim_d_08870e04.jpg";
import psPortalImage from "@assets/stock_images/playstation_portal_h_7a4f4a0c.jpg";
import dualsenseImage from "@assets/stock_images/dualsense_ps5_contro_0c87233c.jpg";
import jblFlip7Image from "@assets/stock_images/jbl_flip_7_bluetooth_eb78f465.jpg";
import jblCharge5Image from "@assets/stock_images/jbl_charge_5_bluetoo_460dd1f5.jpg";
import harmanKardonImage from "@assets/stock_images/harman_kardon_onyx_s_8bc05d64.jpg";
import jblHeadphonesImage from "@assets/stock_images/jbl_headphones_wirel_d8377af2.jpg";
import ps5PulseImage from "@assets/stock_images/ps5_pulse_headset_of_44a9b4be.jpg";

// Fallback images
import usedPhoneImage from "@assets/stock_images/used_refurbished_sma_d2fdc493.jpg";

export function getProductImage(productName: string, category?: string): string {
  const name = productName.toLowerCase();
  
  // Used phones
  if (name.includes("used") || category === "used") {
    if (name.includes("iphone 11")) return iphone11Image;
    if (name.includes("iphone 12")) return iphone12Image;
    if (name.includes("iphone 13")) return iphone13Image;
    if (name.includes("iphone x")) return iphone11Image;
    if (name.includes("samsung s23") || name.includes("s23")) return samsungS24UltraImage;
    if (name.includes("samsung s22") || name.includes("s22")) return samsungS24UltraImage;
    if (name.includes("samsung s21") || name.includes("s21")) return samsungS25Image;
    if (name.includes("samsung s20") || name.includes("s20")) return samsungS25Image;
    return usedPhoneImage;
  }
  
  // iPhone specific models
  if (name.includes("iphone 17 pro max")) return iphone17ProMaxImage;
  if (name.includes("iphone 17 pro")) return iphone17ProImage;
  if (name.includes("iphone 17") || name.includes("iphone air")) return iphone17ProImage;
  if (name.includes("iphone 16 pro max")) return iphone16ProMaxImage;
  if (name.includes("iphone 16 pro")) return iphone16ProImage;
  if (name.includes("iphone 16 plus") || name.includes("iphone 16")) return iphone16Image;
  if (name.includes("iphone 15 pro max")) return iphone15ProMaxImage;
  if (name.includes("iphone 15 pro")) return iphone15ProImage;
  if (name.includes("iphone 15")) return iphone15Image;
  if (name.includes("iphone 14 pro max")) return iphone14ProMaxImage;
  if (name.includes("iphone 14 pro")) return iphone14ProMaxImage;
  if (name.includes("iphone 14")) return iphone14Image;
  if (name.includes("iphone 13")) return iphone13Image;
  if (name.includes("iphone 12")) return iphone12Image;
  if (name.includes("iphone 11")) return iphone11Image;
  if (name.includes("iphone")) return iphone16Image;
  
  // Samsung phone specific models
  if (name.includes("z fold 7") || name.includes("z fold")) return samsungZFoldImage;
  if (name.includes("z flip 7") || name.includes("z flip")) return samsungZFlipImage;
  if (name.includes("s25 ultra")) return samsungS25UltraImage;
  if (name.includes("s25 plus") || name.includes("s25+") || name.includes("s25")) return samsungS25Image;
  if (name.includes("s24 ultra")) return samsungS24UltraImage;
  if (name.includes("s24 plus") || name.includes("s24+") || name.includes("s24")) return samsungS24UltraImage;
  if (name.includes("a56")) return samsungA56Image;
  if (name.includes("a36")) return samsungA36Image;
  if (name.includes("a16") || name.includes("a26") || name.includes("a06")) return samsungA16Image;
  
  // iPad specific models
  if (name.includes("ipad pro") || name.includes("ipad 11")) return ipadProM4Image;
  if (name.includes("ipad air")) return ipadAirM2Image;
  if (name.includes("ipad 10") || name.includes("ipad")) return ipad10Image;
  
  // MacBook specific models
  if (name.includes("macbook pro 16") || name.includes("16-inch")) return macbookPro16Image;
  if (name.includes("macbook pro 14") || name.includes("14-inch") || name.includes("macbook pro")) return macbookPro14Image;
  if (name.includes("macbook air m4") || name.includes("m4 air")) return macbookAirM4Image;
  if (name.includes("macbook air m2") || name.includes("m2 air")) return macbookAirM2Image;
  if (name.includes("macbook air m1") || name.includes("m1 air")) return macbookAirM2Image;
  if (name.includes("macbook air")) return macbookAirM4Image;
  if (name.includes("macbook")) return macbookPro14Image;
  
  // Buds/Earbuds specific models
  if (name.includes("airpods pro")) return airpodsPro2Image;
  if (name.includes("airpods 4") || name.includes("airpods")) return airpods4Image;
  if (name.includes("buds 3 pro") || name.includes("samsung buds 3")) return samsungBuds3ProImage;
  if (name.includes("buds fe") || name.includes("buds")) return samsungBudsFEImage;
  
  // Watch specific models
  if (name.includes("apple watch ultra")) return appleWatchUltra2Image;
  if (name.includes("watch series 10") || name.includes("series 10")) return appleWatchSeries10Image;
  if (name.includes("watch se") || name.includes("apple watch se")) return appleWatchSEImage;
  if (name.includes("apple watch")) return appleWatchSeries10Image;
  if (name.includes("samsung watch ultra") || name.includes("watch ultra")) return samsungWatchUltraImage;
  if (name.includes("samsung watch 7") || name.includes("galaxy watch 7") || name.includes("watch 7")) return samsungWatch7Image;
  if (name.includes("samsung watch") || name.includes("galaxy watch")) return samsungWatch7Image;
  
  // Samsung Tablet specific models
  if (name.includes("tab s10") || name.includes("s10 ultra") || name.includes("s10 fe")) return samsungTabS10Image;
  if (name.includes("tab s9") || name.includes("s9")) return samsungTabS9Image;
  if (name.includes("tab a9") || name.includes("tab a")) return samsungTabS9Image;
  if (name.includes("tab") || category === "tablet") return samsungTabS10Image;
  
  // Gaming & Sound specific models
  if (name.includes("ps5 pro") || name.includes("playstation 5 pro")) return ps5ProImage;
  if (name.includes("ps5 slim") || name.includes("ps5 disc") || name.includes("ps5 digital") || name.includes("playstation 5")) return ps5SlimImage;
  if (name.includes("portal")) return psPortalImage;
  if (name.includes("dualsense") || name.includes("controller")) return dualsenseImage;
  if (name.includes("pulse") || name.includes("ps5 headset")) return ps5PulseImage;
  if (name.includes("flip 7") || name.includes("jbl flip")) return jblFlip7Image;
  if (name.includes("charge 5") || name.includes("jbl charge")) return jblCharge5Image;
  if (name.includes("clip") || name.includes("jbl clip")) return jblFlip7Image;
  if (name.includes("harman") || name.includes("onyx")) return harmanKardonImage;
  if (name.includes("tune") || name.includes("live") || name.includes("jbl headphone")) return jblHeadphonesImage;
  
  // Category fallbacks
  if (category === "ipad") return ipadAirM2Image;
  if (category === "macbook") return macbookPro14Image;
  if (category === "buds") return airpodsPro2Image;
  if (category === "watch") return appleWatchSeries10Image;
  if (category === "gaming") return ps5SlimImage;
  
  // Default fallback
  return iphone16Image;
}

export const categoryImages = {
  iphone: iphone16Image,
  samsung: samsungS25UltraImage,
  used: usedPhoneImage,
  ipad: ipadAirM2Image,
  macbook: macbookPro14Image,
  buds: airpodsPro2Image,
  watch: appleWatchSeries10Image,
  tablet: samsungTabS10Image,
  gaming: ps5SlimImage,
  speaker: jblFlip7Image,
};
