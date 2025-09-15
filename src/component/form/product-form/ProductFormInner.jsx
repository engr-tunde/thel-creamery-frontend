import CustomFormik from "../CustomFormik";
import AppInputField from "../AppInputField";
import AppSubmitButton from "../AppSubmitButton";
import { Field } from "formik";

const ProductFormInner = ({
  type,
  handleSubmit,
  initialValues,
  validationSchema,
  disabled,
  data,
}) => {
  return (
    <CustomFormik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <div className="w-full flex flex-col gap-5 p-5">
        <div className="">
          {type == "create"
            ? "Add a new product"
            : `Edit product (${data?.productName})`}
        </div>

        <p className="text-gray-500 mb-3">
          The field labels marked with * are required input fields.
        </p>

        <div className="grid grid-cols-3 gap-4 w-full">
          <div>
            <label className="text-gray-600 text-sm">Product Type *</label>
            <Field
              as="select"
              name="productType"
              className="border rounded-md p-2 w-full"
            >
              <option value="Standard">Standard</option>
              <option value="Standard">Combo</option>
              <option value="Digital">Digital</option>
              <option value="Service">Service</option>
            </Field>
          </div>

          <div>
            <label htmlFor="" className="text-gray-400 text-sm">
              Product Name *
            </label>
            <AppInputField name="productName" />
          </div>

          <div>
            <label htmlFor="" className="text-gray-400 text-sm">
              Product Code *
            </label>
            <AppInputField name="productCode" />
          </div>

          <div>
            <label className="text-gray-600 text-sm">Barcode Symbology *</label>
            <Field
              as="select"
              name="barcodeSymbology"
              className="border rounded-md p-2 w-full"
            >
              <option value="Code 128">Code 128</option>
              <option value="Code 39">Code 39</option>
              <option value="UPC A">UPC A</option>
              <option value="UPC E">UPC E</option>
              <option value="EAN-8">EAN-8</option>
              <option value="EAN-13">EAN-13</option>
            </Field>
          </div>

          <div>
            <label htmlFor="" className="text-gray-400 text-sm">
              Brand *
            </label>
            <AppInputField name="brand" />
          </div>
          <div>
            <label htmlFor="" className="text-gray-400 text-sm">
              Category *
            </label>
            <AppInputField name="category" />
          </div>
          <div>
            <label htmlFor="" className="text-gray-400 text-sm">
              Product Unit *
            </label>
            <AppInputField name="productUnit" />
          </div>
          <div>
            <label htmlFor="" className="text-gray-400 text-sm">
              Sale Unit *
            </label>
            <AppInputField name="saleUnit" />
          </div>
          <div>
            <label htmlFor="" className="text-gray-400 text-sm">
              Purchase Unit *
            </label>
            <AppInputField name="purchaseUnit" />
          </div>
          <div>
            <label htmlFor="" className="text-gray-400 text-sm">
              Product Cost *
            </label>
            <AppInputField name="productCost" />
          </div>
          <div>
            <label htmlFor="" className="text-gray-400 text-sm">
              Profit Margin *
            </label>
            <AppInputField name="profitMargin" />
          </div>
          <div>
            <label htmlFor="" className="text-gray-400 text-sm">
              Product Price *
            </label>
            <AppInputField name="productPrice" />
          </div>
          <div>
            <label htmlFor="" className="text-gray-400 text-sm">
              Wholesale Price *
            </label>
            <AppInputField name="wholesalePrice" />
          </div>
          <div>
            <label htmlFor="" className="text-gray-400 text-sm">
              Daily Sale Objective *
            </label>
            <AppInputField name="dailySaleObjective" />
          </div>
          <div>
            <label htmlFor="" className="text-gray-400 text-sm">
              Alert Quantity *
            </label>
            <AppInputField name="alertQuantity" />
          </div>
          <div>
            <label className="text-gray-600 text-sm">Product Tax</label>
            <Field
              name="productTax"
              as="select"
              className="border rounded-md p-2 w-full"
            >
              <option value="No Tax">No Tax</option>
              <option value="5%">5%</option>
              <option value="10%">10%</option>
            </Field>
          </div>
          <div>
            <label className="text-gray-600 text-sm">Tax Method</label>
            <Field
              name="taxMethod"
              as="select"
              className="border rounded-md p-2 w-full"
            >
              <option value="Exclusive">Exclusive</option>
              <option value="Inclusive">Inclusive</option>
            </Field>
          </div>

          <div className="flex gap-2">
            <div>
              <label htmlFor="" className="text-gray-400 text-sm">
                Warranty
              </label>
              <AppInputField name="warranty" />
            </div>
            <div>
              <label className="text-gray-600 text-sm">&nbsp;</label>
              <Field
                name="warrantyUnit"
                as="select"
                className="border rounded-md p-2 w-full"
              >
                <option value="Months">Months</option>
                <option value="Years">Years</option>
              </Field>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <label htmlFor="" className="text-gray-400 text-sm">
                Guarantee
              </label>
              <AppInputField name="guarantee" />
            </div>
            <div>
              <label className="text-gray-600 text-sm">&nbsp;</label>
              <Field
                name="guaranteeUnit"
                as="select"
                className="border rounded-md p-2 w-full"
              >
                <option value="Months">Months</option>
                <option value="Years">Years</option>
              </Field>
            </div>
          </div>

          {/* {checkboxes} */}
          <div>
            <label className="flex items-center gap-2">
              <Field type="checkbox" name="featured" />
              Featured
            </label>
            <p className="text-gray-500 text-sm italic mt-1">
              This feature will not work for product with variants and batches
            </p>
          </div>

          <div>
            <label className="flex items-center gap-2">
              <Field type="checkbox" name="embeddedBarcode" />
              Embedded Barcode
            </label>
            <p className="text-gray-500 text-sm italic mt-1">
              This feature will not work for product with variants and batches
            </p>
          </div>

          <div>
            <label className="flex items-center gap-2">
              <Field type="checkbox" name="initialStock" />
              Initial Stock
            </label>

            <p className="text-gray-500 text-sm italic mt-1">
              This feature will not work for product with variants and batches
            </p>
          </div>

          {/* product image Upload */}
          <div className="col-span-3">
            <label className="text-gray-600 text-sm">Product Image</label>
            <label
              htmlFor="productImage"
              className="mt-2 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg h-32 cursor-pointer hover:border-purple-500 transition"
            >
              <span className="text-gray-400">
                Drop files here or click to upload
              </span>
              <Field name="productImage">
                {({ form, meta }) => (
                  <>
                    <input
                      id="productImage"
                      name="productImage"
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        form.setFieldValue(
                          "productImage",
                          e.currentTarget.files[0]
                        )
                      }
                    />
                    {meta.touched && meta.error && (
                      <span className="error">{meta.error}</span>
                    )}
                  </>
                )}
              </Field>
            </label>
          </div>
        </div>

        <div className="mt-5 w-full flex">
          <AppSubmitButton
            title={type == "create" ? "Add New Product" : "Update Product"}
            disabled={disabled}
          />
        </div>
      </div>
    </CustomFormik>
  );
};

export default ProductFormInner;
