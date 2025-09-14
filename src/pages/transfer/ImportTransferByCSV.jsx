import { useState } from "react";
import { FaDownload, FaQuestionCircle } from "react-icons/fa";

export default function ImportTransferByCSV() {
  const [fromWarehouse, setFromWarehouse] = useState("");
  const [toWarehouse, setToWarehouse] = useState("");
  const [status, setStatus] = useState("Completed");
  const [csvFile, setCsvFile] = useState("");
  const [document, setDocument] = useState("");
//   const [csvFile, setCsvFile] = useState<File | null>(null);
//   const [document, setDocument] = useState<File | null>(null);
  const [shippingCost, setShippingCost] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      fromWarehouse,
      toWarehouse,
      status,
      csvFile,
      document,
      shippingCost,
      note,
    });
  };

  return (
    <div className="max-w-8xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-6">Import Transfer</h1>
      <p className="text-sm text-gray-500 mb-6">
        The field labels marked with * are required input fields.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Warehouses & Status */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              From Warehouse *
            </label>
            <select
              value={fromWarehouse}
              onChange={(e) => setFromWarehouse(e.target.value)}
              className="w-full border border-gray-200 rounded-md p-2"
              required
            >
              <option value="">Select warehouse...</option>
              <option value="wh1">Warehouse 1</option>
              <option value="wh2">Warehouse 2</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              To Warehouse *
            </label>
            <select
              value={toWarehouse}
              onChange={(e) => setToWarehouse(e.target.value)}
              className="w-full border border-gray-200 rounded-md p-2"
              required
            >
              <option value="">Select warehouse...</option>
              <option value="wh3">Warehouse 3</option>
              <option value="wh4">Warehouse 4</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border border-gray-200 rounded-md p-2"
            >
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
              <option value="Draft">Draft</option>
            </select>
          </div>
        </div>

        {/* Upload CSV */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Upload CSV File *
          </label>
          <div className="flex items-center gap-4">
            <input
              type="file"
              accept=".csv"
              onChange={(e) => setCsvFile(e.target.files?.[0] || null)}
              className="flex-1 border border-gray-200 rounded-md p-2"
              required
            />
            <button
              type="button"
              className="bg-purple-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-purple-700"
            >
              <FaDownload />
              Download Sample File
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            The correct column order is (product_code, quantity, product_unit,
            product_cost, tax_name) and you must follow this. All columns are
            required.
          </p>
        </div>

        {/* Shipping & Document */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Shipping Cost
            </label>
            <input
              type="number"
              value={shippingCost}
              onChange={(e) => setShippingCost(e.target.value)}
              className="w-full border border-gray-200 rounded-md p-2"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 flex items-center gap-1">
              Attach Document
              <FaQuestionCircle className="text-gray-400" />
            </label>
            <input
              type="file"
              onChange={(e) => setDocument(e.target.files?.[0] || null)}
              className="w-full border border-gray-200 rounded-md p-2"
            />
          </div>
        </div>

        {/* Note */}
        <div>
          <label className="block text-sm font-medium mb-1">Note</label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={4}
            className="w-full border border-gray-200 rounded-md p-2"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
