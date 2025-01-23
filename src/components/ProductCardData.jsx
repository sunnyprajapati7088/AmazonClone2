

export function ProductCardData({ title, discount, imageUrl, href }) {
    
  return (
    
      <div className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md">
        <div className="relative ">
          <img
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105 h-[180px]"
          />
        </div>
        <div className="pl-3 mt-1">
          <h3 className="text-sm font-medium text-gray-900">{title}</h3>
          {discount && (
            <p className=" text-sm font-medium text-green-600">
              {discount}
            </p>
          )}
        </div>
      </div>
  
  );
}
