// import { Link } from "react-router-dom";
// import useFetch from "../../api/useFetch";
// import FormModal from "../../Component/form/FormModal";
// import Table from "../../Component/global/Table";

// const tableColumn = [
//   {
//     accessor: "products-info",
//     title: "Products Info",
//     className: "font-semibold",
//   },
//   {
//     accessor: "Original-Prices",
//     title: "Original/New Prices",
//     className: "font-semibold",
//   },
//   {
//     accessor: "Description",
//     title: "Description",
//     className: "font-semibold",
//   },
//   {
//     accessor: "color",
//     title: "Color",
//     className: "font-semibold",
//   },
// ];

// export const ProductPage = () => {
//   const { data } = useFetch("products");
//   console.log(data);

//   const rowTemplate = (item, i) => {
//     return (
//       <tr
//         key={i}
//         className="even:bg-gray-950 hover:bg-gray-950 border-b border-gray-700"
//       >
//         <td className="table-cell p-1">
//           <div className="flex items-center gap-2 py-2">
//             <img
//               src={`/images/shop/${item.productImages[0]}`}
//               alt={item.name}
//               className="h-8 w-8 rounded-full"
//             />
//             <div>
//               <div className="text-white">{item.productTitle}</div>
//               <div className="text-gray-400 text-xs">
//                 {item.productCategory}
//               </div>
//             </div>
//           </div>
//         </td>
//         <td className="table-cell text-white">{item.price}</td>
//         <td className="table-cell text-white">
//           {item.productDescription?.substring(0, 40)}...
//         </td>
//         <td className="table-cell">
//           <div className="flex items-center gap-2">
//             <FormModal type="delete" id={item?.id} />
//             <FormModal
//               type="update"
//               id={item?.item}
//               data={item}
//               table="product"
//             />
//             <Link
//               to=""
//               className="h-7 w-7 flex items-center justify-center rounded-full"
//             >
//               <img src="/images/view.png" alt="" className="rounded-full " />
//             </Link>
//           </div>
//         </td>
//       </tr>
//     );
//   };

//   return (
//     <div className="bg-black/80 h-[90vh] p-2">
//       <div className="bg-stone-900 w-full h-full overflow-y-scroll rounded-md flex flex-col p-4">
//         <div className="flex justify-between items-center ">
//           <h1 className="text-lg text-stone-400">All Products In Shop</h1>
//           <div className="flex items-center gap-2">
//             <div>
//               <div className="flex gap-2 w-[180px] h-[30px] border-pink-300 border-[1px] rounded-3xl relative">
//                 <input
//                   type="text"
//                   className="h-full w-full rounded-3xl text-black px-5  placeholder-black placeholder:'search'"
//                 />
//                 <img
//                   src="/images/search.png"
//                   alt=""
//                   className="absolute w-[12px] top-[28%] left-[5px]"
//                 />
//               </div>
//             </div>

//             <div className="bg-[#d401f0] border-[1px] rounded-full p-2">
//               <img className="h-4" src="/public/images/filter.png" alt="" />
//             </div>
//             <div className="bg-[#d401f0] border-[1px] rounded-full p-2">
//               <img className="h-4" src="/public/images/sort.png" alt="" />
//             </div>
//             <div className="bg-[#d401f0] border-[1px] rounded-full p-2">
//               <img className="h-4" src="/public/images/upload.png" alt="" />
//             </div>
//           </div>
//         </div>

//         <FormModal type="create" table="product" />

//         <div className="bg-[#181818] rounded-lg p-5 w-full   ">
//           {data && (
//             <Table
//               tableColumn={tableColumn}
//               rowData={data}
//               rowTemplate={rowTemplate}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
