import { recentProducts } from '../../utils/data';


const RecentlyAddedProducts = () => (
  <div className="bg-[#181818] rounded-lg p-5 w-full   ">
    <div className="text-white font-semibold text-lg mb-4 ">Recently Added Products</div>
    <table className="w-full text-left ">
      <thead>
        <tr className="text-gray-400 text-sm">
          <th>Product Info</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {recentProducts.map((product, idx) => (
          <tr key={idx} className="border-b border-gray-700">
            <td className="flex items-center gap-2 py-2">
              <img src={product.image} alt={product.name} className="h-8 w-8 rounded-full" />
              <div>
                <div className="text-white">{product.name}</div>
                <div className="text-gray-400 text-xs">{product.category}</div>
              </div>
            </td>
            <td className="text-white">{product.price}</td>
            <td>
              <button className="bg-[#222] rounded-full p-2">
                <img src="/imgs/view.png" alt="View" className="h-4 w-4 rounded-full" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default RecentlyAddedProducts;