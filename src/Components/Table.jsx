// import { useState } from "react";
// // import tableData1 from "../tableData1.json";
// import TableBody from "./TableBody";
// import TableHead from "./TableHead";

// const Table = () => {
//  const [tableData, setTableData] = useState(tableData1);

//  const columns = [
//   { label: "Products", accessor: "product", sortable:true },

//   { label: "Stock", accessor: "stock" , sortable: true },
//  ];

//  const handleSorting = (sortField, sortOrder) => {
//     if (sortField) {
//         const sorted = [...tableData].sort((a, b) => {
//             if (a[sortField] === null) return 1;
//             if (b[sortField] === null) return -1;
//             if (a[sortField] === null && b[sortField] === null) return 0;
//          return (
//           a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
//            numeric: true,
//           }) * (sortOrder === "asc" ? 1 : -1)
//          );
//         });
//         setTableData(sorted);
//        }
//    };


//  return (
//   <>
//    <table className="table">
//     <caption>
//      Developers currently enrolled in this course, column headers are sortable.
//     </caption>
//     <TableHead columns={columns} handleSorting={handleSorting} />
//     <TableBody columns={columns} tableData={tableData} />
//    </table>
//   </>
//  );
// };

// export default Table;