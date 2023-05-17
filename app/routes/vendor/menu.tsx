import { useState } from "react";

import Modal from "~/components/modal";
import Navbar from "~/components/navbarVendor";
import MenuCard from "~/components/menuCard";
import getMenuItemsUtility from "~/utilities/getMenuItems";

let menuItemsFromUtility = getMenuItemsUtility()


export default function Menu() {
    const [dragId, setDragId] = useState(0)
    const [modal, setModal] = useState(false)
    const [menu, setMenu] = useState(menuItemsFromUtility)

    /* 
    I accomplished the ordering of the menu items by adding a count variable to the sample data.  I will need to refactor this when we get the db connected to ensure that the data persists across load.  most likely have to have an order variable in the db.  
    */
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
            <div className="flex justify-between top-0 px-4">
                <h1 className="flex top-0 px-4 justify-start items-center h-16 bg-white font-bold text-2xl">Menu Items</h1>
                <button onClick={() => { setModal(true) }} className="fixed z-90 top-4 right-4 p-0 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Add Item</button>
            </div>
            {menu
                .sort((a, b) => a.order - b.order)
                .map((item, id) => {
                    return (
                        <MenuCard
                            state={item}
                            key={item.id}
                            handleDrag={handleDrag}
                            handleDrop={handleDrop}
                        />
                    )
                })}
            {/* {modal && <Modal openModal={setModal} state={menu} />} */}
            <Navbar />
        </main>
    )
}