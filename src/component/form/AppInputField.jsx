import { FaEye } from "react-icons/fa";

const AppInputField = ({
  name,
  label,
  type,
  placeholder,
  error,
  className,
  defaultValue,
  onChange,
}) => {
  return (
    <div className={`flex w-full flex-col gap-1 ${className}`}>
      {type == "password" ? (
        <div className=" flex flex-col gap-2">
          <div className="flex gap-2 items-center primary-input h-[35px]">
            <input
              type="password"
              placeholder={placeholder}
              className="h-full w-[90%] bg-transparent border-0 border-white p-3"
            />
            <FaEye />
          </div>
          {error && <span className="error">{error}</span>}
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <input
            defaultValue={defaultValue}
            type={type}
            placeholder={placeholder}
            className="primary-input w-full h-[35px] p-3"
            onChange={onChange}
          />
          {error && <span className="error">{error}</span>}
        </div>
      )}
    </div>
  );
};

export default AppInputField;
