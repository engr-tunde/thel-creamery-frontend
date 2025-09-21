import { RiDeleteBin6Line } from "react-icons/ri";
const Table = ({ tableColumn, rowData, rowTemplate, checkAll, deleIcon }) => {
  return (
    <table className="overflow-x-auto max-w-full my-3">
      <thead className="bg-white mb-3 text-gray-700 w-full border-collapse border-b border-gray-700">
        <tr className="">
          {checkAll && (
            <th className={`p-4 text-start`}>
              <input type="checkbox" className="rounded border-gray-300" />
            </th>
          )}
          {tableColumn?.map((item, i) => (
            <th key={i} className={`p-[8px] ${item.className} text-start text-[13px]  w-full`}>
              <div className="w-max">{item.title}</div>
            </th>
          ))}
          {
            deleIcon && (
              <th><RiDeleteBin6Line/></th>
            )
          }
        </tr>
      </thead>
      <tbody className="mt-20 overflow-y-scroll">
        {rowData?.map((item, i) => rowTemplate(item, i))}
      </tbody>
    </table>
  );
};

export default Table;
