import { FaTimesCircle } from "react-icons/fa";

const ReturnPurchaseFormModal = ({ open, setOpen, children }) => {
  if (!open) return null;

  return (
    <div className="w-screen h-screen bg-black/65 fixed top-0 left-0 z-50 flex items-start pt-8 justify-center">
      <div className="bg-white w-[60%] h-[45vh] relative rounded-md shadow-lg">
        {/* Close button */}
        <div
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <FaTimesCircle
            size={30}
            className="text-gray-600 hover:text-red-500"
          />
        </div>

        {/* Scrollable form area */}
        <div className="max-h-[80vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default ReturnPurchaseFormModal;
