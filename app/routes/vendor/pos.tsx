import { Link } from "@remix-run/react";
import { useState, useEffect } from "react";

import Navbar from "~/components/navbarVendor";
import POSCardNoCount from "~/components/posCardNoCount"
import POSCardWithCount from "~/components/posCardWithCount";
import getMenuItemsUtility from "~/utilities/getMenuItems";

let menuItemsFromUtility = getMenuItemsUtility()

export default function POS() {
    const [itemsFromUtility, setItemsFromUtility] = useState(menuItemsFromUtility)
    const [selectedMenuItems, setSelectedMenuItems] = useState()

    function increaseCount(id: number) {
        setItemsFromUtility(itemsFromUtility.map(menu => menu.id === id ? { ...menu, count: menu.count + 1 } : menu))
    }

    function decreaseCount(id: number) {
        setItemsFromUtility(itemsFromUtility.map(menu => menu.id === id ? { ...menu, count: menu.count - 1 } : menu))
    }

    return (
        <main className="h-screen max-h-screen">
            <h1 className="flex top-0 px-8 justify-start items-center h-16 bg-white font-bold text-2xl">Point of Sale</h1>
            <div className="grid grid-rows-4 grid-flow-col gap-4 m-4 justify-center">
                {itemsFromUtility.map((item, i) => {
                    return (
                        <div key={item.id}>
                            {item.count < 1 ?
                                <POSCardNoCount increaseCount={increaseCount} state={item} /> :
                                <POSCardWithCount increaseCount={increaseCount} decreaseCount={decreaseCount} state={item} />
                            }
                        </div>
                    )
                })}

            </div>
            <Link to="/vendor/checkout" state={itemsFromUtility} className="flex justify-end pr-10 w-full">
                <button className="fixed z-90 bottom-20 right-4 p-0 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Checkout</button>
            </Link>
            <Navbar />
        </main>
    )
}
