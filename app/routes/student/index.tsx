import { Link } from "@remix-run/react";
import { useState } from "react";

import Navbar from "~/components/navbarStudent";
import SidebarVendorViewForStudentMenu from "~/components/accordiaForStudentMenuView";
import SearchBox from "~/components/searchBox";
import getVendorMenuLists from "~/utilities/getVendorMenusListForStudents";
import { VendorMenuList } from "~/@types/types";
import StudentMenuCard from "~/components/studentMenuCard";

let vendorList: VendorMenuList[] = getVendorMenuLists()

let menuItemsWithOrderAdded = []
vendorList.map((item, i) =>
    menuItemsWithOrderAdded.push({ ...item, order: i })
)

export default function MenuPage() {
    const [menuItems, setMenuItems] = useState(menuItemsWithOrderAdded)
    const [dragId, setDragId] = useState(0)

    /* 
        The handle and drop code below is converting the event.currentTarget to a number to match the state ID
        I need to add touch events to the drag and drop functionality 
    */
    const handleDrag = (ev: Event) => {
        const currentTarget = +ev.currentTarget.id
        setDragId(currentTarget)
        // console.log(currentTarget)
    }

    const handleDrop = (ev) => {
        const currentTarget = +ev.currentTarget.id
        setDragId(currentTarget)

        const dragMenu = menuItems.find((menu) => menu.id === dragId);
        const dropMenu = menuItems.find((menu) => menu.id === currentTarget);

        const dragMenuOrder: number = dragMenu.order;
        const dropMenuOrder: number = dropMenu.order;

        const newMenuOrder = menuItems.map((menu) => {
            if (menu.id === dragId) {
                menu.order = dropMenuOrder;
            }
            if (menu.id === currentTarget) {
                menu.order = dragMenuOrder;
            }
            return menu;
        });
        setMenuItems(newMenuOrder)
    }

    return (
        <main className="overflow-y-auto h-screen max-h-screen">
            <div className="flex justify-between">
                <h1 className="flex px-8 justify-start items-center h-16 bg-white font-bold text-2xl">Vendor List</h1>
                <div className="flex items-center">
                    <p className="flex px-4 mr-4 py-2 justify-end items-center border border-slate-700 rounded-lg">Balance: $1,000</p>
                </div>
            </div>
            {/* <SearchBox /> */}
            {menuItems
                .sort((a, b) => a.order - b.order)
                .map((item) => {
                    return (
                        <div key={item.id} >
                            <StudentMenuCard
                                state={item}
                                handleDrag={handleDrag}
                                handleDrop={handleDrop}
                            />
                        </div>
                    )
                })}
            <Navbar />
        </main>
    );
}
