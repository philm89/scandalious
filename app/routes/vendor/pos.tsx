import { Link } from "@remix-run/react";
import { useState, useEffect } from "react";

import Navbar from "~/components/navbarVendor";
import getMenuItemsUtility from "~/utilities/getMenuItems";
import TabHeaderForVenderOrderPage from "~/components/tabHeaderForVendorOrdersPage";

let menuItemsFromUtility = getMenuItemsUtility()


export default function POS() {
    const [itemsFromUtility, setItemsFromUtility] = useState(menuItemsFromUtility)
    const [selectedMenuItems, setSelectedMenuItems] = useState()

    return (
        <main className="h-screen max-h-screen">
            <h1 className="flex top-0 px-8 justify-start items-center h-16 bg-white font-bold text-2xl">Orders</h1>
            <TabHeaderForVenderOrderPage />
            <Navbar />
        </main>
    )
}
