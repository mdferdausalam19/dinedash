import { useState } from "react";
import CreateOrder from "./CreateOrder";
import OrderSummaryReports from "./OrderSummaryReports";

export default function Order() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderReports, setOrderReports] = useState([]);
  const [totalOrders, setTotalOrders] = useState(0);
  const [pendingOrders, setPendingOrders] = useState(0);
  const [deliveredOrders, setDeliveredOrders] = useState(0);

  const handleSelectedItemsTotalPrice = (itemId, price, operation) => {
    if (operation === "add") {
      const updatedItemsAfterAdd = [...selectedItems, { itemId, price }];
      setSelectedItems(updatedItemsAfterAdd);
      const total = updatedItemsAfterAdd.reduce(
        (sum, item) => sum + item.price,
        0
      );
      setTotalPrice(total);
    } else {
      const removedItemIndex = selectedItems.findIndex(
        (selectedItem) => selectedItem.itemId === itemId
      );
      const updatedItemsAfterRemove = [
        ...selectedItems.slice(0, removedItemIndex),
        ...selectedItems.slice(removedItemIndex + 1),
      ];
      setSelectedItems(updatedItemsAfterRemove);

      const total = updatedItemsAfterRemove.reduce(
        (sum, item) => sum + item.price,
        0
      );
      setTotalPrice(total);
    }
  };

  const handlePlaceOrder = () => {
    if (totalPrice <= 0) {
      return alert("Your order is empty. Please add some items to proceed.");
    } else if (customerName.length <= 0) {
      return alert("Please enter the customer's name to finalize the order.");
    }
    const newOrderReport = {
      id: crypto.randomUUID(),
      customerName: customerName,
      items: selectedItems.length,
      amount: totalPrice,
      status: "PENDING",
    };
    const updatedReports = [newOrderReport, ...orderReports];
    setOrderReports(updatedReports);
    setSelectedItems([]);
    setCustomerName("");
    setTotalPrice(0);
    handleOrderSummary(updatedReports);
  };

  const handleOrderSummary = (reports) => {
    setTotalOrders(reports.length);
    const totalPendingOrders = reports.filter(
      (report) => report.status === "PENDING"
    ).length;
    setPendingOrders(totalPendingOrders);
    const totalDeliveredOrders = reports.filter(
      (report) => report.status === "DELIVERED"
    ).length;
    setDeliveredOrders(totalDeliveredOrders);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
      <CreateOrder
        onSelectItem={handleSelectedItemsTotalPrice}
        customerName={customerName}
        onCustomerName={(name) => setCustomerName(name)}
        selectedItems={selectedItems}
        totalPrice={totalPrice}
        onPlaceOrder={handlePlaceOrder}
      />
      <OrderSummaryReports
        orderReports={orderReports}
        totalOrder={totalOrders}
        pendingOrders={pendingOrders}
        deliveredOrders={deliveredOrders}
      />
    </div>
  );
}
