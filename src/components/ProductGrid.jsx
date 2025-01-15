import ProductCard from "./ProductCard";
import SignInCard from "./SignIn";

export default function ProductGrid() {

  const products = [
    {
      category: "Smartphone Accessories",
      items: [
        {
          title: "realme | Up to 70%",
          image: "https://m.media-amazon.com/images/I/71w-6dtBJlL._SX679_.jpg",
          discount: 70,
        },
        {
          title: "Samsung | Up to 60% off",
          image:"https://m.media-amazon.com/images/I/71w-6dtBJlL._SX679_.jpg",
          discount: 60,
        },
      ],
    },
    {
      category: "Home & Kitchen",
      items: [
        {
          title: "Kitchen essentials",
          image: "/kitchen.jpg",
          discount: 50,
        },
        {
          title: "Home decor",
          image: "/decor.jpg",
          discount: 50,
        },
      ],
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {products.map((category) => (
        <div key={category.category}>
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            {category.category}
          </h2>
          <div className="grid gap-4">
            {category.items.map((item) => (
              <ProductCard key={item.title} />
            ))}
          </div>
        </div>
      ))}
      <div className="lg:col-span-1">
        <SignInCard />
      </div>
    </div>
  );
}
