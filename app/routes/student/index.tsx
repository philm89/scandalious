import { Link } from "@remix-run/react";
import { useState, useContext, createContext } from "react";
import SearchBox from "~/components/searchBox";

import Navbar from "~/components/navbarStudent";
import getVendorMenuLists from "~/utilities/getVendorMenusListForStudents";
import { VendorMenuList } from "~/@types/types";
import StudentMenuCard from "~/components/studentMenuCard";

let vendorList: VendorMenuList[] = getVendorMenuLists()

export default function MenuPage() {
    const [menuItems, setMenuItems] = useState(vendorList)

    return (
        <main className="overflow-y-auto h-screen max-h-screen">
            <div className="flex justify-between">
                <h1 className="flex px-8 justify-start items-center h-16 bg-white font-bold text-2xl">Vendor List</h1>
                <div className="flex items-center">
                    <Link to="/student/Account" className="flex px-4 mr-4 py-2 justify-end items-center border border-slate-700 rounded-lg">Balance: ฿1,000</Link>
                </div>
            </div>
            {/* <SearchBox /> */}
            {menuItems.map((item) => {
                return (
                    <div key={item.id} >
                        <StudentMenuCard
                            state={item}
                        />
                    </div>
                )
            })}
            <Navbar />
        </main>
    );
}
