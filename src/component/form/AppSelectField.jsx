import { Field, useFormikContext } from "formik";

const AppSelectField = ({ name, placeholder, array, title, ...rest }) => {
  const { errors, values, touched, handleBlur, handleChange } =
    useFormikContext();

  const value = values[name];
  const error = errors[name];
  const isInputTouched = touched[name];

  return (
    <div className="col-span-1">
      {/* <select
        value={value}
        onChange={handleChange(name)}
        onBlur={handleBlur(name)}
        placeholder={placeholder}
        className="border rounded-md bg-transparent font-[400] primary-input w-full h-[35px] p-1"
        // defaultValue={"hi"}
        {...rest}
      >
        {title ? <option value="">{title}</option> : null}
        {array.map((item, i) => (
          <option className="" key={i} value={item}>
            {item}
          </option>
        ))}
      </select> */}
      <Field name={name} as="select" className="border rounded-md p-2 w-full">
        {title ? <option value="">{title}</option> : null}
        {array.map((item, i) => (
          <option className="" key={i} value={item}>
            {item}
          </option>
        ))}
        {/* <option value="No Tax">No Tax</option>
                    <option value="5%">5%</option>
                    <option value="10%">10%</option> */}
      </Field>
      {error && isInputTouched ? (
        <div className="text-red-500 text-[12px] font-400 lowercase">
          {error}
        </div>
      ) : null}
    </div>
  );
};

export default AppSelectField;
