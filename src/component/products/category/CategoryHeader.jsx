import { useState } from "react";
import {
  FaChevronDown,
  FaCopy,
  FaDownload,
  FaEye,
  FaFileWord,
  FaPlus,
  FaPrint,
  FaSearch,
  FaUpload,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";

function CategoryHeader() {
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  return (
    <div className="p-6 border-b border-gray-200">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg transition-colors">
            <FaPlus size={20} />
            Add Category
          </button>
          <button className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors">
            <FaUpload size={20} />
            Import Category
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="border border-gray-300 rounded-lg px-3 py-2 bg-white">
              {recordsPerPage}
            </div>
            <span className="text-gray-600">records per page</span>
          </div>

          <div className="relative">
            <FaSearch
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search"
              // value={searchTerm}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64"
            />
          </div>

          <div className="flex gap-2">
            <button
              className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
              title="Export CSV"
            >
              <FaFileWord size={20} />
            </button>
            <button
              className="p-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
              title="Copy Data"
            >
              <FaCopy size={20} />
            </button>
            <button
              className="p-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition-colors"
              title="Export Excel"
            >
              <FaDownload size={20} />
            </button>
            <button
              className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
              title="Print"
            >
              <FaPrint size={20} />
            </button>
            <button
              className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
              title="Close"
            >
              <FaX size={20} />
            </button>
            <div className="relative">
              <button className="flex items-center gap-1 p-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors">
                <FaEye size={20} />
                <FaChevronDown size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryHeader;
