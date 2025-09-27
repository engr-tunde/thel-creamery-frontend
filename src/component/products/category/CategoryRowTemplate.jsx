import { currencyFormatter } from "../../../utility/helpers";
import { fetchAllProducts } from "../../../api";
import { useEffect, useState } from "react";
import FormModal from "../../form/FormModal";
import { RiArrowDownSFill } from "react-icons/ri";

function CategoryRowTemplate(item, i) {
  const { data } = fetchAllProducts();
  const [catProductsCount, setcatProductsCount] = useState();
  const [catProductsQTY, setcatProductsQTY] = useState(0);
  const [catProductsPrice, setcatProductsPrice] = useState(0);
  const [catProductsCost, setcatProductsCost] = useState(0);
  const [actionOpen, setActionOpen] = useState(false);
  const handleActionClick = () => {
    setActionOpen(!actionOpen);
  };
  useEffect(() => {
    if (data) {
      let catPros = data?.data?.filter(
        (prod) => prod.category.toLowerCase() === item?.category?.toLowerCase()
      );
      setcatProductsCount(catPros?.length);
      let stockQ = 0;
      let stockP = 0;
      let stockC = 0;
      catPros.forEach((element) => {
        stockQ += element.quantity;
        stockP += Number(element.product_price * element.quantity);
        stockC += Number(element.product_cost * element.quantity);
      });
      setcatProductsQTY(stockQ);
      setcatProductsPrice(stockP);
      setcatProductsCost(stockC);
    }
  }, [data]);
  return (
    <tr
      key={i}
      className="border-t border-gray-200 hover:bg-gray-50 text-gray-500 text-sm"
    >
      <td className="p-4">
        <input type="checkbox" className="rounded border-gray-300" />
      </td>
      <td className="py-4">
        <div className="flex items-center gap-3">
          {item.image ? (
            <img src={item?.image} className="w-6" />
          ) : (
            <div className="">📦</div>
          )}
          <span className="font-medium">{item?.category}</span>
        </div>
      </td>
      <td className="table-cell text-start">
        {item?.parent_category ? item?.parent_category : "N/A"}
      </td>
      <td className="table-cell text-start">{catProductsCount}</td>
      <td className="table-cell text-start">{catProductsQTY}</td>
      <td className="table-cell text-start">
        {currencyFormatter(catProductsPrice)} /{" "}
        {currencyFormatter(catProductsCost)}
      </td>
      <td className="relative">
        <div
          className="cursor-pointer flex gap-2 items-center border-[1px] text-[#7c5cc4] border-[#7c5cc4] p-2 rounded-sm w-fit"
          onClick={() => handleActionClick(i)}
        >
          <span>action</span>
          <RiArrowDownSFill />
        </div>
        <div>
          {actionOpen && (
            <div className="absolute z-10 w-[150px] text-sm rounded-md flex flex-col p-3 gap-3 top-9 right-0 bg-white shadow-2xl text-[#7c5cc4] transition-transform ease-in duration-700">
              <div className="flex items-center gap-1">
                <FormModal
                  table="category"
                  id={item?._id}
                  type="update"
                  title="Edit"
                  data={item}
                  closeAction={handleActionClick}
                  actionOpen={actionOpen}
                />
              </div>
              <div className="flex items-center gap-1">
                <FormModal
                  type="delete"
                  id={item?._id}
                  table="category"
                  title="Delete"
                />
              </div>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
}

export default CategoryRowTemplate;
