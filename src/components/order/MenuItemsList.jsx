export default function MenuItemsList({
  id,
  image,
  name,
  price,
  onSelectItem,
  selectedItems,
}) {
  return (
    <div className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex md:flex-col lg:flex-row justify-between items-center hover:bg-opacity-40 transition-all duration-300">
      <div className="flex items-center">
        <div className="w-12 h-12   flex items-center justify-center mr-3">
          <img src={image} alt="item image" className="w-10 h-10" />
        </div>
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-xs text-gray-400">BDT {price}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 md:mt-3 lg:mt-0">
        <button
          disabled={
            !selectedItems.find((selectedItem) => selectedItem.itemId === id)
          }
          onClick={() => onSelectItem(id, price, "remove")}
          className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer disabled:cursor-not-allowed"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-red-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          onClick={() => onSelectItem(id, price, "add")}
          className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-green-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
