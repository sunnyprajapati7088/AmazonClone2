import { DealsSection } from "../components/DealsSection";


export default function ProcuctsSectionPage() {
  const fashionDeals = [
    {
      title: "Crocs",
      imageUrl: "https://m.media-amazon.com/images/I/31Tz8DcmevL._MCnd_AC_.jpg",
      href: "/category/crocs",
    },
    {
      title: "Adidas",
      imageUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/JanART/BTF/PCQC/1x/Adidas_372x232._SY116_CB552679973_.jpg",
      href: "/category/adidas",
    },
    {
      title: "Skechers",
      imageUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/JanART/BTF/PCQC/1x/Skechers_372x232._SY116_CB552679973_.jpg",
      href: "/category/skechers",
    },
    {
      title: "Lavie",
      imageUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/JanART/BTF/PCQC/1x/Handbags__Lavie_Zouk__more_372x232._SY116_CB552679973_.jpg",
      href: "/category/lavie",
    },
  ];

  const accessoryDeals = [
    {
      title: "realme",
      discount: "Up to 70% off",
      imageUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/debarsh/MSO/CC/Jan_ART/PC_CC_379x304._SY304_CB552809131_.jpg",
      href: "/brand/realme",
    },
    {
      title: "Samsung",
      discount: "Up to 60% off",
      imageUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/debarsh/MSO/CC/Jan_ART/PC_CC_379x304._SY304_CB552809131_.jpg",
      href: "/brand/samsung",
    },
    {
      title: "Oneplus",
      discount: "Up to 35% off",
      imageUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/debarsh/MSO/CC/Jan_ART/PC_CC_379x304._SY304_CB552809131_.jpg",
      href: "/brand/oneplus",
    },
    {
      title: "Xiaomi",
      discount: "Up to 70% off",
      imageUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/debarsh/MSO/CC/Jan_ART/PC_CC_379x304._SY304_CB552809131_.jpg",
      href: "/brand/xiaomi",
    },
  ];

  const homeDeals = [
    {
      title: "Kitchen essentials",
      discount: "Minimum 50% off",
      imageUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img24/PB/JAN2025/22-1x-kitche._SY116_CB553018991_.jpg",
      href: "/category/kitchen",
    },
    {
      title: "Home decor",
      discount: "Minimum 50% off",
      imageUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img24/PB/JAN2025/21-1x._SY116_CB553014500_.jpg",
      href: "/category/home-decor",
    },
    {
      title: "Furniture",
      discount: "Minimum 50% off",
      imageUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img24/PB/JAN2025/21-1x._SY116_CB553014500_.jpg",
      href: "/category/furniture",
    },
    {
      title: "Home improvement",
      discount: "Minimum 50% off",
      imageUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img24/PB/JAN2025/1x-desktop._SY116_CB553014500_.jpg",
      href: "/category/home-improvement",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <DealsSection
        title="Starting ₹299 | Latest styles from top brands"
        products={fashionDeals}
      />
      <DealsSection
        title="Deals on accessories for your top smartphone"
        products={accessoryDeals}
      />
      <DealsSection
        title="Minimum 50% off | Home, kitchen & more"
        products={homeDeals}
      />
    </main>
  );
}

