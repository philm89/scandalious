import { Link } from "@remix-run/react";
import { useState, useEffect } from "react";

import Navbar from "~/components/navbarVendor";
import CheckoutButton from "~/components/checkoutButton";
import getMenuItemsUtility from "~/utilities/getMenuItems";
import POSCardWithSubItems from "~/components/posCardWithSubItems";
import POSCardNoSubItems from "~/components/posCardNoSubItems";

let menuItemsFromUtility = getMenuItemsUtility()

let menuItemsWithCountAdded = []
menuItemsFromUtility.map((item, i) =>
    menuItemsWithCountAdded.push({ ...item, count: 1 })
)

export default function POS() {
    const [itemsFromUtility, setItemsFromUtility] = useState(menuItemsWithCountAdded)
    const [selectedMenuItems, setSelectedMenuItems] = useState()

    const handleSubItemSelectionFromClick = (item) => {
        const newItem = itemsFromUtility.find((item) => item === itemsFromUtility.subItems.id)
        console.log(newItem)
    }

    return (
        <main className="h-screen max-h-screen">
            <h1 className="flex top-0 px-8 justify-start items-center h-16 bg-white font-bold text-2xl">Point of Sale</h1>
            {itemsFromUtility
                .map((item, id) => {
                    return (
                        item.subItems !== undefined ?
                            <POSCardWithSubItems
                                itemsFromUtility={item}
                                handleClick={handleSubItemSelectionFromClick}
                                setItemsFromUtility={setItemsFromUtility}
                                selectedMenuItems={selectedMenuItems}
                                key={item.id}
                            />
                            :
                            <POSCardNoSubItems
                                itemsFromUtility={item}
                                selectedMenuItems={selectedMenuItems}
                                key={item.id}
                            />
                    )
                })}
            <CheckoutButton state={itemsFromUtility} />
            <Navbar />
        </main>
    )
}

    // function increaseCount(id: number) {
    //     setItemsFromUtility(itemsFromUtility.map(menu => menu.id === id ? { ...menu, count: menu.count + 1 } : menu))
    // }

    // function decreaseCount(id: number) {
    //     setItemsFromUtility(itemsFromUtility.map(menu => menu.id === id ? { ...menu, count: menu.count - 1 } : menu))
    // }