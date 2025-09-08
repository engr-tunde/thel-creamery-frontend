const Table = ({ tableColumn, rowData, rowTemplate, checkAll }) => {
  return (
    <table className="overflow-x-auto max-w-full">
      <thead className="bg-gray-50 mb-3 text-gray-700 w-full border-collapse">
        <tr className="">
          {checkAll && (
            <th className={`p-4 text-start`}>
              <input type="checkbox" className="rounded border-gray-300" />
            </th>
          )}
          {tableColumn?.map((item, i) => (
            <th key={i} className={`p-4 ${item.className} text-start`}>
              <span>{item.title}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="mt-20 overflow-y-scroll">
        {rowData?.map((item, i) => rowTemplate(item, i))}
      </tbody>
    </table>
  );
};

export default Table;
