import { useState } from "react";
import { FaBarcode, FaTrash } from "react-icons/fa";

export default function AddTransfer() {
    const [date, setDate] = useState("14-09-2025");
    const [fromWarehouse, setFromWarehouse] = useState("");
    const [toWarehouse, setToWarehouse] = useState("");
    const [status, setStatus] = useState("Completed");
    const [products, setProducts] = useState([]);

    const handleAddProduct = (product) => {
        setProducts([...products, product]);
    };

    const handleDeleteProduct = (index) => {
        setProducts(products.filter((_, i) => i !== index));
    };

    return (
        <div className="max-w-8xl mx-auto p-6 bg-white rounded-xl shadow-md">
            <h1 className="text-2xl font-bold mb-6">Add Transfer</h1>
            <p className="text-sm text-gray-500 mb-6">
                The field labels marked with * are required input fields.
            </p>

            {/* Top Form */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                    <label className="block text-sm font-medium mb-1">Date</label>
                    <input
                        type="text"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full border border-gray-400 rounded-md p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">
                        From Warehouse *
                    </label>
                    <select
                        value={fromWarehouse}
                        onChange={(e) => setFromWarehouse(e.target.value)}
                        className="w-full border border-gray-400 rounded-md p-2"
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
                        className="w-full border border-gray-400 rounded-md p-2"
                    >
                        <option value="">Select warehouse...</option>
                        <option value="wh3">Warehouse 3</option>
                        <option value="wh4">Warehouse 4</option>
                    </select>
                </div>
            </div>

            {/* Status */}
            <div className="mb-6">
                <label className="block text-sm font-medium mb-1">Status</label>
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full border border-gray-400 rounded-md p-2"
                >
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                    <option value="Draft">Draft</option>
                </select>
            </div>

            {/* Product Selector */}
            <div className="mb-6 flex items-center border border-gray-400 rounded-md overflow-hidden">
                <div className="bg-gray-500 p-3 text-white">
                    <FaBarcode />
                </div>
                <input
                    type="text"
                    placeholder="Please type product code and select"
                    className="flex-1 p-2 outline-none"
                />
            </div>

            {/* Order Table */}
            <h2 className="font-semibold mb-2">Order Table *</h2>
            <table className="w-full border border-gray-400 text-sm">
                <thead className="bg-gray-100 text-left">
                    <tr>
                        <th className="p-2">Name</th>
                        <th className="p-2">Code</th>
                        <th className="p-2">Batch No</th>
                        <th className="p-2">Quantity</th>
                        <th className="p-2">Net Unit Cost</th>
                        <th className="p-2">Tax</th>
                        <th className="p-2">SubTotal</th>
                        <th className="p-2"></th>
                    </tr>
                </thead>
                <tbody>
                    {products.length === 0 ? (
                        <tr>
                            <td colSpan={8} className="text-center p-4 text-gray-500">
                                No products added.
                            </td>
                        </tr>
                    ) : (
                        products.map((p, i) => (
                            <tr key={i} className="border-t border-gray-400">
                                <td className="p-2">{p.name}</td>
                                <td className="p-2">{p.code}</td>
                                <td className="p-2">{p.batch}</td>
                                <td className="p-2">{p.quantity}</td>
                                <td className="p-2">{p.unitCost}</td>
                                <td className="p-2">{p.tax}</td>
                                <td className="p-2">{p.subTotal}</td>
                                <td className="p-2">
                                    <button
                                        onClick={() => handleDeleteProduct(i)}
                                        className="text-red-500"
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                    <tr className="border-t border-gray-400 font-bold">
                        <td className="p-2">Total</td>
                        <td></td>
                        <td></td>
                        <td className="p-2">
                            {products.reduce((sum, p) => sum + p.quantity, 0)}
                        </td>
                        <td></td>
                        <td className="p-2">
                            {products.reduce((sum, p) => sum + p.tax, 0).toFixed(2)}
                        </td>
                        <td className="p-2">
                            {products.reduce((sum, p) => sum + p.subTotal, 0).toFixed(2)}
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                    <label className="block text-sm font-medium mb-1">Shipping Cost</label>
                    <input
                        type="text"
                        value=""
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full border border-gray-400 rounded-md p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Attach Document</label>
                    <input
                        type="text"
                        value=""
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full border border-gray-400 rounded-md p-2"
                    />
                </div>
            </div>
        </div>
    );
}
