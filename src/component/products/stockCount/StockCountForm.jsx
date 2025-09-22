import { useEffect, useState } from "react";
import { addStockCountValues } from "../../../utility/initialValues";
import { validateStockCount } from "../../../utility/validations";
import axios from "axios";
import { CREATE_STOCKCOUNT, UPDATE_STOCKCOUNT } from "../../../constants/constants";
import { errorMessage, successMessage } from "../../../utility/helpers";
import StockCountFormInner from "./StockCountFormInner";

const StockCountForm = ({ type, data, setopen }) => {
  const initialValues = addStockCountValues(data);
  const validationSchema = validateStockCount();
  const [disabled, setdisabled] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {

    console.log("values", values);
    const res =
      type === "create"
        ? await axios.post(CREATE_STOCKCOUNT, values)
        : type === "update"
        ? await axios.put(`${UPDATE_STOCKCOUNT}/${data.id}`, values)
        : null;
    if (res.status.toString().includes("20")) {
      successMessage("Successfully completed your request");
      setopen(false);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      errorMessage("Unable to complete your request");
    }
    setSubmitting(false);
    setdisabled(false);
  };

  return (
    <>
      {type == "update" ? (
        data && (
          <StockCountFormInner 
            handleSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
            disabled={disabled}
            type={type}
            data={data}
          />
        )
      ) : (
        <StockCountFormInner
          handleSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
          disabled={disabled}
          type={type}
        />
      )}
    </>
  );
};

export default StockCountForm;
