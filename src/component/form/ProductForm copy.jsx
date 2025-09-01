import { useForm } from "react-hook-form";
import AppInputField from "./AppInputField";
import AppSubmitButton from "./AppSubmitButton";
import { zodResolver } from "@hookform/resolvers/zod";

const ProductForm = ({ type, data, setopen }) => {
  // const handleSubmit = () => {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver() });

  const onSubmit = (values) => {};

  return (
    <div onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 p-5">
      <div className="">
        {type == "create"
          ? "Add a new product ddddd"
          : `Edit product (${data?.productTitle})`}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1 w-[45%]">
          <label htmlFor="" className="text-gray-400 text-sm">
            Product Title
          </label>
          <AppInputField
            defaultValue={data?.productTitle}
            name="productTitle"
          />
        </div>
        <div className="flex flex-col gap-1 w-[45%]">
          <label htmlFor="" className="text-gray-400 text-sm">
            Product Category
          </label>
          <AppInputField
            defaultValue={data?.productCategory}
            name="productCategory"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1 w-[45%]">
          <label htmlFor="" className="text-gray-400 text-sm">
            Product Title
          </label>
          <AppInputField
            defaultValue={data?.productTitle}
            name="productTitle"
          />
        </div>
        <div className="flex flex-col gap-1 w-[45%]">
          <label htmlFor="" className="text-gray-400 text-sm">
            Product Category
          </label>
          <AppInputField
            defaultValue={data?.productCategory}
            name="productCategory"
          />
        </div>
      </div>
      <AppSubmitButton
        title={type == "create" ? "Add New Product" : "Update Product"}
      />
    </div>
  );
};

export default ProductForm;
