import CreateOrder from "./CreateOrder";

export default function Order() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
        <CreateOrder />
    </div>
  );
}
