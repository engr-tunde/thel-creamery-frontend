import { useState } from "react";
import { ImFilesEmpty } from "react-icons/im";
import { LiaTimesSolid } from "react-icons/lia";

const stockCountRowTemplate = (item, i) => {
  const [actionOpen, setActionOpen] = useState(null);

  const handleActionClick = (i) => {
    setActionOpen(actionOpen === i ? null : i);
  };

  return (
    <tr
      key={i}
      className={`text-xs text-gray-400 border-t-gray-200 border-t-[1px] hover:bg-[#f8f9fa] cursor-pointer ${
        i % 2 === 0 ? "bg-white" : "bg-[#f8f9fa]"
      }`}
    >
      <td className="py-3 pr-2 text-start">
        <input type="checkbox" />
      </td>
      <td className="flex flex-col gap-1 justify-center py-3 pr-3 text-start">
        <span>{item?.date?.day}</span>
        <span>{item?.date?.time}</span>
      </td>
      <td className="py-3 pr-3 table-cell text-start">
        <div className="">{item?.reference}</div>
      </td>
      <td className="py-3 pr-3 table-cell text-start">{item?.warehouse}</td>
      <td className="py-3 pr-3 table-cell text-start">{item?.category}</td>
      <td className="py-3 pr-3 table-cell text-start">{item?.brand}</td>
      <td className="py-3 pr-3 table-cell text-start">
        <span className="text-white bg-[#7c5cc4] py-1 px-2 rounded-sm">
          {item?.type}
        </span>
      </td>
      <td className="py-3 pr-3 table-cell text-start">{item?.initialFile}</td>
      <td className="py-3 pr-3 table-cell text-start">
        <ImFilesEmpty />
      </td>
      <td className="">
        <div
          className="border-[1px] text-white bg-[#7c5cc4] py-1 px-2 rounded-sm w-fit"
          onClick={() => handleActionClick(i)}
        >
          <span>{item?.action}</span>

          <div>
            {actionOpen === i && (
              <div className="w-full h-full absolute top-0 left-0 z-20 bg-black/40">
                <div className="w-[55%] py-5 mx-auto mt-10 bg-white rounded-md flex flex-col items-center justify-center gap-5 shadow-2xl">
                  <div className="w-full px-3 pb-5 border-[#8d5ccd1f] border-b-[1px] flex justify-between">
                    <span className="text-[15px] text-stone-900 text-extrabold">
                      Finalize Stock Count
                    </span>
                    <span onClick={() => handleActionClick()}>
                      <LiaTimesSolid className="text-stone-500 text-2xl trigger_times cursor-pointer" />
                    </span>
                  </div>
                  <div className="w-full px-3 flex flex-col gap-3 text-stone-500">
                    <span className="text-xs italic">
                      The field labels marked with * are required input fields.{" "}
                      <span className="font-bold">
                        You just need to update the Counted column in the
                        initial file
                      </span>
                    </span>

                    <div className="flex flex-col gap-1  p-2 w-full">
                      <span>Upload File *</span>
                      <input
                        type="file"
                        className="text-sm border-[1px] border-[#858c85] rounded-sm p-3"
                      />
                    </div>
                    <div className="flex flex-col gap-1  p-2 w-full">
                      <span>Note</span>
                      <textarea
                        name="text"
                        id=""
                        className="border-[1px] border-[#858c85] rounded-sm p-3 h-20"
                      ></textarea>
                    </div>

                    <button className="bg-[#7c5cc4] px-3 py-2 w-fit text-white rounded-sm">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </td>
    </tr>
  );
};

export default stockCountRowTemplate;
