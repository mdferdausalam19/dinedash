export default function OrderReportsList({
  id,
  customerName,
  items,
  amount,
  status,
}) {
  return (
    <tr className="border-t border-gray-700">
      <td className="py-3">{id.slice(0, 8)}</td>
      <td className="py-3">{customerName}</td>
      <td className="py-3">{items}</td>
      <td className="py-3">{amount}</td>
      <td className="py-3">
        <span className="text-red-500">{status}</span>
      </td>
      <td className="py-3">
        <button className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300 cursor-pointer">
          Delete
        </button>
        <button className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300 cursor-pointer">
          DELIVER
        </button>
      </td>
    </tr>
  );
}
