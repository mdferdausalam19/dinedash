import OrderReports from "./OrderReports";
import OrderSummary from "./OrderSummary";

export default function OrderSummaryReports() {
  return (
    <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
      <OrderSummary />
      <OrderReports />
    </div>
  );
}
