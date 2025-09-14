import { addPurchaseValues } from "../../../../utility/initialValues";
import { validateAddPurchase } from "../../../../utility/validations";
import { useState, useEffect } from "react";
import ImportInner from "./ImportInner";


// const [productImage,setproductImages ] = useState()
// const [productSpecification,setproductSpecification ] = useState()
 
const ImportForm = ({type, data, setopen, }) => {
    const [itemData, setItemData] = useState(null);

    const initialValues = addPurchaseValues(itemData)
    console.log(initialValues)
    const validationSchema = validateAddPurchase()
    const [disabled, setDisabled ] = useState(false)

    const handleSubmit = () => {
        Cconsole.log("is coming")
    }
    
    
    return (
            <>
                {type == "Import" ? (
                    
                    <ImportInner
                        handleSubmit={handleSubmit}
                        initialValues = {initialValues}
                        validationSchema = {validationSchema}
                        disabled= {disabled}
                        itemData={itemData}
                        type={type}
                    />
                    
                    ): (
                    <ImportInner
                        handleSubmit={handleSubmit}
                        initialValues = {initialValues}
                        disabled={disabled}
                        type={type}
                        validationSchema={validationSchema}
                    />
                    )
                }
            </>
    )
    
}
export default ImportForm;