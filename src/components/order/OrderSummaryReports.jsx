import OrderReports from "./OrderReports";
import OrderSummary from "./OrderSummary";

export default function OrderSummaryReports({
  orderReports,
  totalOrder,
  pendingOrders,
  deliveredOrders,
  onOrderDelivered,
  onOrderDelete,
}) {
  return (
    <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
      <OrderSummary
        totalOrder={totalOrder}
        pendingOrders={pendingOrders}
        deliveredOrders={deliveredOrders}
      />
      <OrderReports
        orderReports={orderReports}
        onOrderDelivered={onOrderDelivered}
        onOrderDelete={onOrderDelete}
      />
    </div>
  );
}
