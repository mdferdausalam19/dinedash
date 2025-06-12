export default function OrderReportsList({
  id,
  customerName,
  items,
  amount,
  status,
  onOrderDelivered,
  onOrderDelete,
}) {
  return (
    <tr className="border-t border-gray-700">
      <td className="py-3">{id.slice(0, 8)}</td>
      <td className="py-3">{customerName}</td>
      <td className="py-3">{items}</td>
      <td className="py-3">{amount}</td>
      <td className="py-3">
        <span
          className={`${
            status === "PENDING" ? "text-red-500" : "text-green-500"
          }`}
        >
          {status}
        </span>
      </td>
      <td className="py-3">
        <button
          onClick={() => onOrderDelete(id)}
          className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300 cursor-pointer"
        >
          Delete
        </button>
        <button
          onClick={() => onOrderDelivered(id)}
          className={`bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 mt-2 rounded-full transition-colors duration-300 cursor-pointer ${
            status === "DELIVERED" ? "hidden" : ""
          } `}
        >
          Deliver
        </button>
      </td>
    </tr>
  );
}
