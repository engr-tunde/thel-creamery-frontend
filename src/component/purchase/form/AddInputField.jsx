import { useFormikContext } from "formik";
import { FaEye } from "react-icons/fa";

const AddInputField = ({name, type, id, placeholder, className, defaultValue, options}) => {

    const { errors, values, touched, handleChange, handleBlur } = useFormikContext();
    console.log(values)
    console.log(errors)
    const value = values[name];
    console.log(value)
    const error = errors[name];
    const isInputTouched = touched[name];
    return ( 
        <div
            className={`flex w-full flex-col gap-1 ${className}`}>
            {options ? (
                <div className=" flex flex-col gap-2 ">
                    <div className="border-[2px] border-[rgb(228,230,252)] rounded-sm">
                        <select
                            name={name}
                            value={value}
                            onChange={handleChange}
                            className="primary-input w-full h-[35px] p-1 bg-[rgb(253,253,255)]"
                        >
                            {options.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                            ))}
                        </select>
                    </div>
                    
                    {error && <span className="error">{error}</span>}
                </div>
        
        
            ) : type === "password" ? (
                <div className=" flex flex-col gap-2">
                    <div className="flex gap-2 items-center primary-input h-[35px]">
                        <input 
                            onChange={handleChange(name)}
                            onBlur={handleBlur(name)}
                            value={value}
                            type="password"
                            placeholder={placeholder} 
                            className="h-full w-[90%] bg-transparent border-0 border-white p-3 "
                        />
                        <FaEye />
                    </div> 
                        {
                            error && isInputTouched && <span className="error">{errors}</span>
                        }
                </div>
                ): (
                    <div className="flex flex-col gap-2">
                        <div className="border-[2px] border-[rgb(228,230,252)] rounded-sm">
                            <input 
                                defaultValue={defaultValue}
                                onChange={handleChange(name)}
                                onBlur={handleBlur(name)}
                                value={value}
                                type={type} 
                                placeholder={placeholder} 
                                className="primary-input w-full h-[35px] p-3 bg-[rgb(253,253,255)]" 
                            />
                        </div>
                    
                    {
                            error && isInputTouched && <span className="error">{error}</span>
                    }

                    </div>
                    )
            }
        </div>
    )
}

export default AddInputField;