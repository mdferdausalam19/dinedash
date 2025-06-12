import NoOrdersFound from "./NoOrdersFound";
import OrderReportsList from "./OrderReportsList";

export default function OrderReports({
  orderReports,
  onOrderDelivered,
  onOrderDelete,
  filterOrder,
  onFilterOrder,
}) {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-4">Order Reports</h2>
        <div className="flex gap-4 items-center border border-orange-500 mb-2 px-2 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-funnel-icon lucide-funnel"
          >
            <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
          </svg>
          <select
            defaultValue={filterOrder}
            onChange={(e) => onFilterOrder(e.target.value)}
            className="rounded-sm border-2 border-white"
          >
            <option value={"All"}>All</option>
            <option value={"PENDING"}>Pending</option>
            <option value={"DELIVERED"}>Delivered</option>
          </select>
        </div>
      </div>
      <div className="bg-cardbg rounded-lg p-4">
        <div className="reports-container">
          <table className="table-fixed overflow-auto xl:w-full border-separate border-spacing-x-4">
            <thead>
              <tr className="text-left text-sm">
                <th className="pb-3 font-medium w-1/4">ID</th>
                <th className="pb-3 font-medium w-1/4">Customer Name</th>
                <th className="pb-3 font-medium w-1/4">Items</th>
                <th className="pb-3 font-medium w-1/4">Amount</th>
                <th className="pb-3 font-medium w-1/4">Status</th>
                <th className="pb-3 font-medium w-1/4">Action</th>
              </tr>
            </thead>

            <tbody className="text-sm">
              {orderReports.map((orderReport) => (
                <OrderReportsList
                  key={orderReport.id}
                  id={orderReport.id}
                  customerName={orderReport.customerName}
                  items={orderReport.items}
                  amount={orderReport.amount}
                  status={orderReport.status}
                  onOrderDelivered={onOrderDelivered}
                  onOrderDelete={onOrderDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {orderReports.length <= 0 && <NoOrdersFound />}
    </div>
  );
}
