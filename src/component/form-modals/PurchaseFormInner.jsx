import {
  currencies,
  orderTax,
  paymentStatus,
  purchaseStatus,
  supplier,
} from "../../data/purchases";
import AppInputField from "../form/AppInputField";
import CustomFormik from "../global/CustomFormik";
import AppSubmitButton from "../form/AppSubmitButton";
import AppSelectField from "../form/AppSelectField";
import AppTextAreaField from "../form/AppTextAreaField";
import { addPurchaseValues } from "../../utility/initialValues";
import { validateAddPurchase } from "../../utility/validations";
import AppFileField from "../form/AppFileField";
import { fetchAllProducts } from "../../api";
import { useEffect, useState } from "react";

const PurchaseFormInner = ({
  type,
  handleSubmit,
  data,
  docText,
  docError,
  handleSetImage,
}) => {
  const initialValues = addPurchaseValues(data);
  const validationSchema = validateAddPurchase();

  const [search, setsearch] = useState();
  const [showProducts, setshowProducts] = useState(false);
  const [selectedProduct, setselectedProduct] = useState([]);
  const [productArr, setproductArr] = useState();
  const { data: productData, error: productError } = fetchAllProducts();

  const handleSearch = (val) => {
    setsearch(val);
    setshowProducts(true);
  };

  useEffect(() => {
    let newArr = productData?.data?.filter(
      (item) =>
        item?.product_name?.toLowerCase().includes(search?.toLowerCase()) ||
        item?.product_code?.toLowerCase().includes(search?.toLowerCase())
    );
    setproductArr(newArr);
    if (!search) {
      setshowProducts(false);
    }
  }, [search]);

  const handleAddProductToSelected = (prod) => {
    let currProducts = selectedProduct;
    currProducts.push({
      product_name: prod.product_name,
      product_code: prod.product_code,
      barcode_format: prod.barcode_format,
      product_price: prod.product_price,
      qunatity: 5,
    });
    setselectedProduct(currProducts);
  };

  console.log("selectedProduct", selectedProduct);

  return (
    <CustomFormik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <input
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
        className="border"
        placeholder="search product"
      />
      {showProducts
        ? productArr?.map((ele, i) => (
            <div
              key={i}
              className="py-2"
              onClick={() => handleAddProductToSelected(ele)}
            >
              {ele.product_name} - {ele.product_code}
            </div>
          ))
        : null}
      <div className="w-full flex flex-col gap-10 p-8">
        <div className="w-full flex flex-col gap-5 p-5 border-[1px] border-[rgb(228,230,252)] rounded-sm">
          <div className="flex flex-col gap-4">
            <div>Add Purchase</div>
            <div>The field labels marked with * are required input fields.</div>
          </div>
          <div className="grid grid-cols-3 gap-3 justify-center">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Date
              </label>
              <AppInputField
                name="purchase_date"
                type="date"
                defaultValue={data?.purchase_date}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Reference No.
              </label>
              <AppInputField
                name="reference_number"
                defaultValue={data?.reference_number}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Purchase Status
              </label>
              <AppSelectField
                name="purchase_status"
                array={purchaseStatus}
                title="Select status"
                defaultValue={data?.purchase_status}
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Supplier
              </label>
              <AppInputField
                name="supplier"
                options={supplier}
                defaultValue={data?.supplier}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-gray-400 text-sm">
                Attach Document
              </label>
              <AppFileField
                label="Purchase document"
                name="supply_document"
                nameText={docText}
                error={docError}
                handleChange={handleSetImage}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Product
              </label>
              <AppInputField name="product" options={supplier} />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-[#785873] text-sm">
                Item Quantity *
              </label>
              <div className="flex">
                <AppInputField name="quantity" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-[#785873] text-sm">
                Currency *
              </label>
              <AppSelectField
                name="currency"
                array={currencies}
                defaultValue={data?.currency}
                title="Select currency"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-[#785873] text-sm">
                Exchange Rate *
              </label>
              <div className="flex">
                <AppInputField
                  name="exchange_rate"
                  type="number"
                  defaultValue={data?.purchase_date}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-[#785873] text-sm">
                Amount in Currency *
              </label>
              <AppInputField name="amount_currrency" type="number" />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Order Tax *
              </label>
              <AppInputField name="order_tax" options={orderTax} />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Discount
              </label>
              <AppInputField name="discount" type="number" />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Shipping Cost
              </label>
              <AppInputField name="shipping_cost" type="number" />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Amount Paid
              </label>
              <AppInputField name="paid" type="number" />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Payment Status *
              </label>
              <AppSelectField
                name="payment_status"
                array={paymentStatus}
                defaultValue={data?.payment_status}
                title="Select status"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="" className="text-[#785873] text-sm">
              Note
            </label>
            <AppTextAreaField
              name="note"
              placeholder="Enter some notes"
              rows="6"
            />
          </div>

          <AppSubmitButton
            title={type == "create" ? "Add Purchase" : "Update Purchase"}
            // disabled={disabled}
          />
        </div>
      </div>
    </CustomFormik>
  );
};

export default PurchaseFormInner;
