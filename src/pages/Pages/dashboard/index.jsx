import {
  cards,
  category,
  pendinOrders,
  recentProducts,
} from "../../utility/dataArr";
// import RecentlyAddedProducts from "./RecentlyAddedProducts";

const DashboardPage = () => {
  return (
    <div className="flex gap-[5px]">
      {/*left hand  main  */}
      <div className="w-[65%] flex flex-col gap-6 ">
        <div className="gap-3 grid grid-cols-4 w-full h-[100px]">
          {cards &&
            cards.map((items, i) => (
              <div
                className={
                  i % 2 == 0 || i == 0
                    ? "p-1 flex flex-col gap-2 rounded-md bg-stone-900"
                    : "p-1 flex flex-col rounded-md gap-2 bg-stone-600"
                }
              >
                <div className="flex justify-between">
                  <span className="bg-indigo-300 text-[10px] text-black p-[3px] rounded-3xl">{`as at ${items.year}`}</span>
                  <img
                    src={`/images/${items.more}`}
                    alt=""
                    className="w-[12px]"
                  />
                </div>
                <span className="text-sm font-semibold">{items.counts}</span>
                <p className="text-sm text-pink-400 font font-semibold">
                  {items.title}
                </p>
              </div>
            ))}
        </div>
        <div className="flex gap-3 w-full">
          <div className="w-[30%] p-3 pl-4 bg-stone-700 rounded-md">
            <h2 className="text-white font-semibold text-lg mb-3">
              Categories
            </h2>
            <div className="flex w-full justify-between text-pink-500 font-semibold text-sm">
              <span>Category</span>
              <span>Actions</span>
            </div>
            <div className="w-full flex flex-col gap-2 text-white  mt-1">
              {category &&
                category.map((items, i) => (
                  <div
                    className={
                      i % 2 == 0 || i == 0
                        ? "flex justify-between w-full py-[8px] pl-1"
                        : "flex justify-between w-full py-[9px] bg-black pl-1"
                    }
                  >
                    <div className="text-sm font-normal">{items.title}</div>
                    <div className="flex gap-2">
                      <div className="size-[22px] bg-pink-300 rounded-full p-[5px]">
                        <img
                          src={`images/${items.img1}`}
                          alt=""
                          className="size-full"
                        />
                      </div>
                      <div className="size-[22px] bg-pink-300 rounded-full p-[5px]">
                        <img
                          src={`images/${items.img2}`}
                          alt=""
                          className="size-full"
                        />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="flex flex-col w-[70%] bg-stone-700 rounded-sm p-2">
            <h2 className="text-white font-semibold text-lg mb-3">
              Pending Orders
            </h2>
            <div className="grid grid-cols-4 w-full justify-between text-pink-500 font-semibold text-sm">
              <span className="catitalize">items</span>
              <span className="catitalize">By</span>
              <span className="catitalize ml-1">Location</span>
              <span className="catitalize flex justify-center">Actions</span>
            </div>
            <div className="flex w-full p-1 flex-col items-center overflow-y-scroll">
              {pendinOrders &&
                pendinOrders.map((items, i) => (
                  <div
                    className={
                      i % 2 == 0 || i == 0
                        ? "w-full grid grid-cols-4 justify-between"
                        : "w-full grid grid-cols-4 justify-between bg-stone-900"
                    }
                  >
                    <div className="flex gap-[5px] items-center mb-3">
                      <img
                        src={`images/shop/${items.img}`}
                        alt=""
                        className="size-7 rounded-full"
                      />
                      <p className="text-white font-normal text-[12px] items-center">
                        {items.title} <br />
                        <span className="font-light text-2px">
                          {items.counts}
                        </span>
                      </p>
                    </div>
                    <div className="flex ">
                      <span className="text-sm font-medium flex my-2">
                        {items.orderby}
                      </span>
                    </div>

                    <div className="flex my-2">
                      <div className="text-sm capitalize font-normal pl-3">
                        {items.location}
                      </div>
                    </div>
                    <div className=" flex justify-center items-center pl-6">
                      <div className="flex items-center justify-center p-[3px] bg-pink-100 rounded-full size-[18px]">
                        <img
                          src={`images/${items.fullImg}`}
                          alt=""
                          className="size-full rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* righthand main */}
      <div className="mx-2 w-[35%] bg-stone-500 rounded-md p-1">
        {/* <RecentlyAddedProducts /> */}
        <div className="bg-[#181818] rounded-lg p-5 w-full   ">
          <div className="text-white font-semibold text-lg mb-4 ">
            Recently Added Products
          </div>
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
                    <img
                      src={`/images/shop/${product.image}`}
                      alt={product.name}
                      className="h-8 w-8 rounded-full"
                    />
                    <div>
                      <div className="text-white">{product.name}</div>
                      <div className="text-gray-400 text-xs">
                        {product.category}
                      </div>
                    </div>
                  </td>
                  <td className="text-white">{product.price}</td>
                  <td>
                    <button className="bg-[#222] rounded-full p-2">
                      <img
                        src="/public/images/view.png"
                        alt="View"
                        className="h-4 w-4 rounded-full"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
