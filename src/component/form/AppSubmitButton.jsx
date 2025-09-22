import { useFormikContext } from "formik";

const AppSubmitButton = ({ title, disabled }) => {
  const { handleSubmit, isSubmitting } = useFormikContext();
  return (
    <button type="button" onClick={handleSubmit} disabled={disabled? true : isSubmitting ? true : false} className={
        disabled
          ? "w-fit primary-btn p-2 opacity-50"
          : "w-fit primary-btn p-2 "
      }>
      {isSubmitting ? "Submitting..." : title}
    </button>
  );
};

export default AppSubmitButton;
