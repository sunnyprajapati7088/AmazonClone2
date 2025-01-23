import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const products = [
    {
      category: "Smartphone Accessories",
      items: [
        {
          title: "realme ",
          image: "https://m.media-amazon.com/images/I/71w-6dtBJlL._SX679_.jpg",
          discount: 70,
        },
        {
          title: "Samsung ",
          image: "https://m.media-amazon.com/images/I/71w-6dtBJlL._SX679_.jpg",
          discount: 60,
        },
      ],
    },
    {
      category: "Home & Kitchen",
      items: [
        {
          title: "Kitchen essentials",
          image:
            "https://m.media-amazon.com/images/I/511kS5yUxFL._SX300_SY300_QL70_FMwebp_.jpg",
          discount: 50,
        },
        {
          title: "Home decor",
          image:
            "https://m.media-amazon.com/images/I/511kS5yUxFL._SX300_SY300_QL70_FMwebp_.jpg",
          discount: 50,
        },
      ],
    },
    {
      category: "Smartphone Accessories",
      items: [
        {
          title: "realme ",
          image: "https://m.media-amazon.com/images/I/71w-6dtBJlL._SX679_.jpg",
          discount: 70,
        },
        {
          title: "Samsung ",
          image: "https://m.media-amazon.com/images/I/71w-6dtBJlL._SX679_.jpg",
          discount: 60,
        },
      ],
    },
    {
      category: "Home & Kitchen",
      items: [
        {
          title: "Kitchen essentials",
          image:
            "https://m.media-amazon.com/images/I/511kS5yUxFL._SX300_SY300_QL70_FMwebp_.jpg",
          discount: 50,
        },
        {
          title: "Home decor",
          image:
            "https://m.media-amazon.com/images/I/511kS5yUxFL._SX300_SY300_QL70_FMwebp_.jpg",
          discount: 50,
        },
      ],
    },
    {
      category: "Smartphone Accessories",
      items: [
        {
          title: "realme ",
          image: "https://m.media-amazon.com/images/I/71w-6dtBJlL._SX679_.jpg",
          discount: 70,
        },
        {
          title: "Samsung ",
          image: "https://m.media-amazon.com/images/I/71w-6dtBJlL._SX679_.jpg",
          discount: 60,
        },
      ],
    },
    {
      category: "Home & Kitchen",
      items: [
        {
          title: "Kitchen essentials",
          image:
            "https://m.media-amazon.com/images/I/511kS5yUxFL._SX300_SY300_QL70_FMwebp_.jpg",
          discount: 50,
        },
        {
          title: "Home decor",
          image:
            "https://m.media-amazon.com/images/I/511kS5yUxFL._SX300_SY300_QL70_FMwebp_.jpg",
          discount: 50,
        },
      ],
    },
    {
      category: "Smartphone Accessories",
      items: [
        {
          title: "realme ",
          image: "https://m.media-amazon.com/images/I/71w-6dtBJlL._SX679_.jpg",
          discount: 70,
        },
        {
          title: "Samsung ",
          image: "https://m.media-amazon.com/images/I/71w-6dtBJlL._SX679_.jpg",
          discount: 60,
        },
      ],
    },
    {
      category: "Smartphone Accessories",
      items: [
        {
          title: "realme ",
          image: "https://m.media-amazon.com/images/I/71w-6dtBJlL._SX679_.jpg",
          discount: 70,
        },
        {
          title: "Samsung ",
          image: "https://m.media-amazon.com/images/I/71w-6dtBJlL._SX679_.jpg",
          discount: 60,
        },
      ],
    },
  ];

  return (
    <div className="flex gap-2 p-3">
      {products.map((item, index) => (
        <div className="gap-2 flex flex-col">
          {item.items.map((info, i) => (
            <ProductCard
              key={info.title}
              title={info.title}
              image={info.image}
              discount={info.discount}
              category={info.category}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
