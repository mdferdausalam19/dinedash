import { useState } from "react";
import CreateOrder from "./CreateOrder";
import OrderSummaryReports from "./OrderSummaryReports";

export default function Order() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const initialOrders = JSON.parse(localStorage.getItem("orders")) || [];
  const [orderReports, setOrderReports] = useState(initialOrders);
  const [totalOrders, setTotalOrders] = useState(initialOrders.length || 0);
  const [pendingOrders, setPendingOrders] = useState(
    initialOrders.filter((r) => r.status === "PENDING").length || 0
  );
  const [deliveredOrders, setDeliveredOrders] = useState(
    initialOrders.filter((r) => r.status === "DELIVERED").length || 0
  );
  const [filterOrder, setFilterOrder] = useState("All");

  const updateLocalStorage = (updatedOrders) => {
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

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
    updateLocalStorage(updatedReports);
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

  const handleOrderDelivered = (itemId) => {
    const updatedReports = orderReports.map((orderReport) => {
      if (orderReport.id === itemId && orderReport.status === "PENDING") {
        return { ...orderReport, status: "DELIVERED" };
      }
      return orderReport;
    });
    setOrderReports(updatedReports);
    handleOrderSummary(updatedReports);
    updateLocalStorage(updatedReports);
  };

  const handleOrderDelete = (itemId) => {
    const updatedReports = orderReports.filter(
      (orderReport) => orderReport.id !== itemId
    );
    setOrderReports(updatedReports);
    handleOrderSummary(updatedReports);
    updateLocalStorage(updatedReports);
  };

  const handleFilterOrder = (filterBy) => {
    setFilterOrder(filterBy);
  };
  const filteredOrderReports =
    filterOrder === "All"
      ? orderReports
      : orderReports.filter((order) => order.status === filterOrder);

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
        orderReports={filteredOrderReports}
        totalOrder={totalOrders}
        pendingOrders={pendingOrders}
        deliveredOrders={deliveredOrders}
        onOrderDelivered={handleOrderDelivered}
        onOrderDelete={handleOrderDelete}
        filterOrder={filterOrder}
        onFilterOrder={handleFilterOrder}
      />
    </div>
  );
}
