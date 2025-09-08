import { FaChevronDown } from "react-icons/fa";
import { currencyFormatter, saleDateFormatter } from "../../../utility/helpers";

const SaleListRowTemplate = (sale) => {
  return (
    <tr key={sale.id} className="border-t border-gray-200 hover:bg-gray-50 border">
      <td className="p-4">
        <input type="checkbox" className="rounded border-gray-300" />
      </td>
      <td className="p-4">
        <div className="relative">
          <button className="flex items-center gap-1 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded border">
            Action
            <FaChevronDown size={16} />
          </button>
        </div>
      </td>
      <td className="p-4 text-gray-600">{sale.date ? saleDateFormatter(sale.date) : "N/A"}</td>
      <td className="p-4 text-gray-600">{sale.referenceNo ? sale.referenceNo : "N/A"}</td>
      <td className="p-4">{sale.customer ? sale.customer : "N/A"}</td>
      <td className="p-4">{sale.warehouse ? sale.warehouse : "N/A"}</td>
      <td className="p-4">{sale.saleStatus ? sale.saleStatus : "N/A"}</td>
      <td className="p-4">{sale.paymentStatus ? sale.paymentStatus : "N/A"}</td>
      <td className="p-4">{sale.paymentMethod}</td>
      <td className="p-4">{sale.deliveryStatus}</td>
      <td className="p-4">{sale.grandTotal ? sale.grandTotal: ""}</td>
      <td className="p-4">{sale.amountReturned ? sale.amountReturned: ""}</td>
      <td className="p-4">{sale.paid ? sale.paid : ""}</td>
      <td className="p-4">{sale.due ? sale.due : ""}</td>
    </tr>
  );
}

export default SaleListRowTemplate;
