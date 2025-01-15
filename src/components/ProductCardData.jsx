

export function ProductCardData({ title, discount, imageUrl, href }) {
    {console.log(title, discount, imageUrl, href);}
  return (
    
      <div className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md">
        <div className="relative aspect-square">
          <img
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105 h-[200px]"
          />
        </div>
        <div className="">
          <h3 className="text-sm font-medium text-gray-900">{title}</h3>
          {discount && (
            <p className="mt-1 text-sm font-medium text-green-600">
              {discount}
            </p>
          )}
        </div>
      </div>
  
  );
}
