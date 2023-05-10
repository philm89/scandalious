import Navbar from "~/components/navbarVendor";
import { Link } from "@remix-run/react";
import MenuCard from "~/components/menuCard";
import { useState } from "react";
import Modal from "~/components/modal";
import getMenuItemsUtility from "~/utilities/getMenuItems";

let menuItemsFromUtility = getMenuItemsUtility()

export default function Menu() {
    const [modal, setModal] = useState(false)
    const [menu, setMenu] = useState(menuItemsFromUtility)

    return (
        <main className="h-screen max-h-screen">
            <div className="flex justify-between top-0 px-4">
                <h1 className="flex top-0 px-4 justify-start items-center h-16 bg-white font-bold text-2xl">Menu Items</h1>
                <button onClick={() => { setModal(true) }} className="flex px-4 my-3 justify-end items-center bg-blue-500 hover:bg-blue-700 text-white rounded">Add Item</button>
            </div>

            {menu.map((item, i) => {
                return (
                    <MenuCard item={item} key={item.id} />
                )
            })}
            {modal && <Modal openModal={setModal} menuItems={menu} />}
            <Navbar />
        </main>
    )
}