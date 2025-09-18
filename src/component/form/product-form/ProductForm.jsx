import { useEffect, useState } from "react";
import { addProductValues } from "../../../utility/initialValues";
import { validateAddProduct } from "../../../utility/validations";
import ProductFormInner from "./ProductFormInner";
import axios from "axios";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "../../../constants/constants";
import { errorMessage, successMessage } from "../../../utility/helpers";

const ProductForm = ({ type, data, setopen }) => {
  const initialValues = addProductValues(data);
  const validationSchema = validateAddProduct();
  const [disabled, setdisabled] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log("values", values);
    const res =
      type === "create"
        ? await axios.post(CREATE_PRODUCT, values)
        : type === "update"
        ? await axios.put(`${UPDATE_PRODUCT}/${data.id}`, values)
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
          <ProductFormInner
            handleSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
            disabled={disabled}
            type={type}
            data={data}
          />
        )
      ) : (
        <ProductFormInner
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

export default ProductForm;
