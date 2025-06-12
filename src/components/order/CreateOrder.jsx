import chickenImg from "../../assets/chicken.svg";
import hamburgerImg from "../../assets/hamburger.svg";
import pizzaImg from "../../assets/pizza.svg";
import submarineImg from "../../assets/submarine.svg";
import MenuItemsList from "./MenuItemsList";

export default function CreateOrder({
  onSelectItem,
  onCustomerName,
  customerName,
  onPlaceOrder,
  totalPrice,
  selectedItems,
}) {
  const menuItems = [
    {
      id: "hamburger",
      name: "Hamburger",
      price: 300,
      imageURL: hamburgerImg,
    },
    {
      id: "chicken-nuggets",
      name: "Chicken Nuggets",
      price: 300,
      imageURL: chickenImg,
    },
    {
      id: "submarine-sandwich",
      name: "Submarine Sandwich",
      price: 300,
      imageURL: submarineImg,
    },
    {
      id: "pizza-slices",
      name: "Pizza slices",
      price: 300,
      imageURL: pizzaImg,
    },
  ];
  return (
    <div className="bg-cardbg rounded-lg p-6 max-h-fit">
      <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
      <p className="text-gray-400 text-sm mb-4">
        Accurately fulfill customer orders based on a precise understanding of
        their requirements.
      </p>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Customer Name</label>
        <input
          value={customerName}
          onChange={(e) => onCustomerName(e.target.value)}
          type="text"
          name="customerName"
          required
          className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Choose Items</label>
        <div className="items-container">
          {menuItems.map((item) => (
            <MenuItemsList
              key={item.id}
              id={item.id}
              image={item.imageURL}
              name={item.name}
              price={item.price}
              onSelectItem={onSelectItem}
              selectedItems={selectedItems}
            />
          ))}
        </div>
      </div>

      <button
        disabled={totalPrice <= 0}
        onClick={onPlaceOrder}
        className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 cursor-pointer disabled:cursor-not-allowed"
      >
        Place Order (BDT {totalPrice})
      </button>
    </div>
  );
}
