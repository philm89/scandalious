import { useEffect, useState } from "react";
import Modal from "~/components/modal";
import Navbar from "~/components/navbarVendor";
import MenuCard from "~/components/menuCardVendor";
import getMenuItemsUtility from "~/utilities/getMenuItems";
import { MenuItems } from "~/@types/types";
import AddMenuItemSideBar from "~/components/sideBarVendorAddItem";
import {
    SignedIn,
    SignedOut,
    RedirectToSignIn,
  } from "@clerk/remix";

let menuItemsFromUtility = getMenuItemsUtility()

let menuItemsWithOrderAdded = []
menuItemsFromUtility.map((item, i) =>
    menuItemsWithOrderAdded.push({ ...item, order: i })
)

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false)
    const [menu, setMenu] = useState(menuItemsWithOrderAdded)

    return (
        <div>
            <SignedIn>
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
                                />
                            )
                        })}
                    {/* {isOpen && <Modal openModal={setIsOpen} state={menu} />} */}
                    <AddMenuItemSideBar open={isOpen} setOpen={setIsOpen} />
                    <Navbar />
                </main>
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </div>
    )
}