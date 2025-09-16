import Table from "../components/Table";
import { returnSaleTableCol, returnSaleRowData} from "../../../data/returnSaleData";
import {ReturnSaleRowTemplate} from "../../../pages/return/ReturnSaleRowTemplate";

const ReturnSaleTable = () => {
  const [actionOpen, setActionOpen] = useState(null);

  const handleActionClick = (i) => {
    setActionOpen(actionOpen === i ? null : i);
  };

  return (
    <Table
      tableColumn={returnSaleTableCol}
      rowData={returnSaleRowData}
      rowTemplate={(item, i) =>
        ReturnSaleRowTemplate(item, i, handleActionClick, actionOpen)
      }
      checkAll={true}
    />
  );
};

export default ReturnSaleTable;
