export default function ProductCard({ title, image, discount, category }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border bg-white p-4 shadow-sm">
      <div className="relative h-48">
        <img src={image} alt={title} className="h-full w-full object-contain" />
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-900">{category}</h3>
        <p className="mt-1 text-sm text-gray-500">{title}</p>
        {discount && (
          <p className="mt-1 text-sm font-semibold text-red-600">
            Up to {discount}% off
          </p>
        )}
      </div>
    </div>
  );
}
