import Navbar from "~/components/navbarVendor";
import MenuCard from "~/components/menuCard";
import { useState } from "react";
import Modal from "~/components/modal";
import getMenuItemsUtility from "~/utilities/getMenuItems";

let menuItemsFromUtility = getMenuItemsUtility()

export default function Menu() {
    const [dragId, setDragId] = useState()
    const [modal, setModal] = useState(false)
    const [menu, setMenu] = useState(menuItemsFromUtility)

    const handleDrag = (ev) => {
        setDragId(ev.currentTarget.id)
    }

    const handleDrop = (ev) => {
        // const currentTarget = ev.currentTarget.id
        const dragBox = menu.find((menu) => menu.id === dragId);
        const dropBox = menu.find((menu) => menu.id === ev.currentTarget.id);

        const dragBoxOrder = dragBox.order;
        const dropBoxOrder = dropBox.order;

        const newMenuOrder = menu.map((box) => {
            if (box.id === dragId) {
                box.order = dropBoxOrder;
            }
            if (box.id === ev.currentTarget.id) {
                box.order = dragBoxOrder;
            }
            return box;
        });
        setMenu(newMenuOrder)
    }



    return (
        <main className="h-screen max-h-screen">
            <div className="flex justify-between top-0 px-4">
                <h1 className="flex top-0 px-4 justify-start items-center h-16 bg-white font-bold text-2xl">Menu Items</h1>
                <button onClick={() => { setModal(true) }} className="flex px-4 my-3 justify-end items-center bg-blue-500 hover:bg-blue-700 text-white rounded">Add Item</button>
            </div>
            {menu
                .sort((a, b) => a.order - b.order)
                .map((item, i) => {
                    return (
                        <MenuCard
                            state={item}
                            key={item.id}
                            handleDrag={handleDrag}
                            handleDrop={handleDrop}
                        />
                    )
                })}
            {modal && <Modal openModal={setModal} menuItems={menu} />}
            <Navbar />
        </main>
    )
}