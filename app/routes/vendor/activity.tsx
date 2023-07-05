import { Link } from "@remix-run/react";
import { useState, useEffect } from "react";

import Navbar from "~/components/navbarVendor";
import OrderCard from "~/components/orderCardVendor"
import SetLimitSidBar from "~/components/sideBarVendorSetLimits";
import calcVendorOrders from "~/utilities/calcVendorOrders";
import getMenuItemsUtility from "~/utilities/getMenuItems";
import GetVendorOrders from "~/utilities/getVendorOrders";

let vendorOrdersFromUtility = GetVendorOrders()
let menuItemsFromUtility = getMenuItemsUtility()

/*
I am planning on utilizing 2 different states here.  The main one will be for calculating order totals and the other is for displaying and editing the daily limits on the sidebar.
*/

export default function POS() {
    const [isOpen, setIsOpen] = useState(false)
    const [menuItems, setMenuItems] = useState(menuItemsFromUtility)
    const [orders, setOrders] = useState(vendorOrdersFromUtility)

    return (
        <main className="h-screen max-h-screen">
            <div className="flex justify-between">
                <h1 className="flex px-8 justify-start items-center h-16 bg-white font-bold text-2xl">Activity</h1>
                <button onClick={() => { setIsOpen(true) }} className="right-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mt-4 mb-2 mx-4 rounded">Set Limits</button>
            </div>
            <OrderCard state={menuItems} />
            <SetLimitSidBar open={isOpen} setOpen={setIsOpen} state={menuItems} />
            <Navbar />
        </main>
    )
}
