import { useEffect, useState } from "react";

import Modal from "~/components/modal";
import Navbar from "~/components/navbarVendor";
import MenuCard from "~/components/menuCard";
import getMenuItemsUtility from "~/utilities/getMenuItems";
import { MenuItems } from "~/@types/types";
import AddMenuItemSideBar from "~/components/accordianForPOS";

let menuItemsFromUtility = getMenuItemsUtility()

let menuItemsWithOrderAdded = []
menuItemsFromUtility.map((item, i) =>
    menuItemsWithOrderAdded.push({ ...item, order: i })
)

export default function Menu() {
    const [dragId, setDragId] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [menu, setMenu] = useState(menuItemsWithOrderAdded)

    /* 
        The handle and drop code below is converting the event.currentTarget to a number to match the state ID
        I need to add touch events to the drag and drop functionality 
    */
    const handleDrag = (ev: Event) => {
        const currentTarget = +ev.currentTarget.id
        setDragId(currentTarget)
    }

    const handleDrop = (ev) => {
        const currentTarget = +ev.currentTarget.id
        setDragId(currentTarget)

        const dragMenu = menu.find((menu) => menu.id === dragId);
        const dropMenu = menu.find((menu) => menu.id === currentTarget);

        const dragMenuOrder: number = dragMenu.order;
        const dropMenuOrder: number = dropMenu.order;

        const newMenuOrder = menu.map((menu) => {
            if (menu.id === dragId) {
                menu.order = dropMenuOrder;
            }
            if (menu.id === currentTarget) {
                menu.order = dragMenuOrder;
            }
            return menu;
        });
        setMenu(newMenuOrder)
    }

    return (
        <main className="h-screen max-h-screen">
            <div className="flex justify-between">
                <h1 className="flex px-8 justify-start items-center h-16 bg-white font-bold text-2xl">Menu Items</h1>
                <button onClick={() => { setIsOpen(true) }} className="right-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mt-4 mb-2 mx-4 rounded">Add Item</button>
            </div>
            {menu
                .sort((a, b) => a.order - b.order)
                .map((item) => {
                    return (
                        <MenuCard
                            state={item}
                            key={item.id}
                            handleDrag={handleDrag}
                            handleDrop={handleDrop}
                        />
                    )
                })}
            {/* {isOpen && <Modal openModal={setIsOpen} state={menu} />} */}
            <AddMenuItemSideBar open={isOpen} setOpen={setIsOpen} />
            <Navbar />
        </main>
    )
}