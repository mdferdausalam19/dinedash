import CreateOrder from "./CreateOrder";
import OrderSummaryReports from "./OrderSummaryReports";

export default function Order() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
      <CreateOrder />
      <OrderSummaryReports />
    </div>
  );
}
