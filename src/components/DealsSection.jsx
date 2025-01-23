
import { ProductCardData } from "./ProductCardData";

export function DealsSection({ title, products }) {
  return (
    <section className="py-8">
      <div className="container md:px-6">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">{title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {products.map((product, index) => (
            
            <ProductCardData
              key={index}
              title={product.title}
              discount={product.discount}
              imageUrl={product.imageUrl}
              href={product.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

