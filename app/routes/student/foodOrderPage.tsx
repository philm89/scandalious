// import { Link } from "@remix-run/react";
// import { useState } from "react";

// import Navbar from "~/components/navbarStudent";
// import SidebarVendorViewForStudentMenu from "~/components/accordiaForStudentMenuView";
// import SearchBox from "~/components/searchBox";
// import getVendorMenuLists from "~/utilities/getVendorMenusListForStudents";
// import { VendorMenuList } from "~/@types/types";

// let vendorList: VendorMenuList[] = getVendorMenuLists()

// export default function MenuPage() {
//     const [isOpen, setIsOpen] = useState(false)
//     const [menuItems, setMenuItems] = useState(vendorList)

//     return (
//         <main className="overflow-y-auto h-screen max-h-screen">
//             <div className="flex justify-between">
//                 <h1 className="flex px-8 justify-start items-center h-16 bg-white font-bold text-2xl">Menu Items</h1>
//                 <div className="flex items-center">
//                     <p className="flex px-4 mr-4 py-2 justify-end items-center border border-slate-700 rounded-lg">Balance: $1,000</p>
//                 </div>
//             </div>
//             {menuItems.map((item) => {
//                 return (
//                     <div onClick={(item) => setIsOpen(true)} key={item.id} className="relative border border-slate-700 bg-white m-1 px-4 py-2 rounded-lg">
//                         <div className="flex">
//                             <div className="flex">
//                                 <p className="text-lg font-bold text-gray-800 flex-wrap">{item.name}</p>
//                             </div>
//                             {/* <p>{state.description}</p> */}
//                         </div>
//                         <SidebarVendorViewForStudentMenu open={isOpen} setOpen={setIsOpen} state={item} />
//                     </div>
//                 )
//             })}
//             <Navbar />
//         </main>
//     );
// }
