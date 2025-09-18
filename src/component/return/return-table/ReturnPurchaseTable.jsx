import Table from "../components/Table";
import { returnPurchaseTableCol, returnPurchaseRowData} from "../../../data/returnPurchaseData";
import {ReturnPurchaseRowTemplate} from "../../../pages/return/ReturnPurchaseRowTemplate";

const ReturnPurchaseTable = () => {
  const [actionOpen, setActionOpen] = useState(null);

  const handleActionClick = (i) => {
    setActionOpen(actionOpen === i ? null : i);
  };

  return (
    <Table
      tableColumn={returnPurchaseTableCol}
      rowData={returnPurchaseRowData}
      rowTemplate={(item, i) =>
        ReturnPurchaseRowTemplate(item, i, handleActionClick, actionOpen)
      }
      checkAll={true}
    />
  );
};

export default ReturnPurchaseTable;
