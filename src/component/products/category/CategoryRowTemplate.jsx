import { FaChevronDown } from "react-icons/fa";
import { currencyFormatter } from "../../../utility/helpers";

function CategoryRowTemplate(category) {
  return (
    <tr key={category.id} className="border-t border-gray-200 hover:bg-gray-50">
      <td className="p-4">
        <input type="checkbox" className="rounded border-gray-300" />
      </td>
      <td className="p-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-sm">
            {category.image || "📦"}
          </div>
          <span className="font-medium">{category.category}</span>
        </div>
      </td>
      <td className="p-4 text-gray-600">{category.parentCategory}</td>
      <td className="p-4">{category.numberOfProducts}</td>
      <td className="p-4">{category.stockQuantity}</td>
      <td className="p-4">
        {currencyFormatter(category.stockWorthPrice)}
        {currencyFormatter(category.stockWorthCost)}
      </td>
      <td className="p-4">
        <div className="relative">
          <button className="flex items-center gap-1 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded border">
            action
            <FaChevronDown size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default CategoryRowTemplate;
