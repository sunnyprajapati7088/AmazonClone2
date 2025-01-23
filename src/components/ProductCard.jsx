export default function ProductCard({ title, image, discount, category }) {
  return (
    <div className="flex flex-col overflow-hidden w-[150px] pt-4  h-[160px] rounded-lg border bg-white  shadow-sm">
      <div className="relative h-20">
        <img src={image} alt={title} className="h-full w-full object-contain" />
      </div>

      <div className="text-center">
        <p className=" text-sm text-gray-500 m-0 ">{title}</p>
        {discount && (
          <p className="text-sm font-semibold text-red-600 ">
            Up to {discount}% off
          </p>
        )}
      </div>
    </div>
  );
}
