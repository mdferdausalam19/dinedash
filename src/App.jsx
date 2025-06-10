import Header from "./components/Header";
import Order from "./components/order/Order";

export default function App() {
  return (
    <div className="container mx-auto px-4 h-screen flex flex-col">
      <Header />
      <Order />
    </div>
  );
}
