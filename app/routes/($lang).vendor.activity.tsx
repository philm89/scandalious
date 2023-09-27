import { Link } from "@remix-run/react";
import { useState, useEffect } from "react";

import Navbar from "~/components/navbarVendor";
import SetLimitSidBar from "~/components/sideBarVendorSetLimits";
import calcVendorOrders from "~/utilities/calcVendorOrders";
import getMenuItemsUtility from "~/utilities/getMenuItems";
import GetVendorOrders from "~/utilities/getVendorOrders";

let vendorOrdersFromUtility = GetVendorOrders()
let menuItemsFromUtility = getMenuItemsUtility()
let mealTimeTypeEN = ["Breakfast", "Lunch A", "Lunch B", "After School"]
let mealTimeTypeTH = ["ข้าวเช้า", "ข้าวเที่ยง A", "ข้าวเที่ยง B", "หลังเลิกเรียน"]


/*
I am planning on utilizing 2 different states here.  The main one will be for calculating order totals and the other is for displaying and editing the daily limits on the sidebar.
*/

export default function POS() {
    const [isOpen, setIsOpen] = useState(false)
    const [menuItems, setMenuItems] = useState(menuItemsFromUtility)
    const [orders, setOrders] = useState(vendorOrdersFromUtility)
    const [filteredOrders, setFilteredOrders] = useState([])

    function handleChange(event) {
        if (event.target.checked === "true") {
            const filtered = orders.filter((mealType) => mealType.orderMealtime === event.target.id)
        }
    }

    return (
        <main className="bg-gray-300 overscroll-y-contain overflow-hidden">
            <div className="flex justify-between w-full bg-white">
                <h1 className="flex px-8 justify-start items-center h-16 bg-white font-bold text-2xl">Activity</h1>
                <button onClick={() => { setIsOpen(true) }} className="right-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mt-4 mb-2 mx-4 rounded">Set Limits</button>
            </div>
            <ButtonGroup handleChange={handleChange} />
            <OrderCard state={filtered} />
            <SetLimitSidBar open={isOpen} setOpen={setIsOpen} state={menuItems} />
            <Navbar />
        </main>
    )
}

export function OrderCard({ state }) {

    return (
        <main className="">
            {state.map((item) => {
                return (
                    <Link key={item.orderId} state={state} to="/vendor/orders" >
                        <div className="flex flex-col border border-slate-100 bg-white rounded-lg my-2 mx-2 -z-10">
                            <div>
                                {item.queueNumber}
                            </div>
                        </div>
                    </Link>
                )
            })}
        </main>
    )
}

export function ButtonGroup({ handleChange }) {

    return (
        <form className="bg-white border border-slate-200 rounded-lg my-1 py-1">
            <div className="flex py-2 justify-center flex-row space-x-1 sm:space-x-2">
                {mealTimeTypeEN.map((item) => {
                    return (
                        <div className="">
                            <input
                                type="checkbox"
                                id={item}
                                onChange={handleChange}
                                className="peer hidden"
                            />
                            <label
                                htmlFor={item}
                                className="select-none cursor-pointer rounded-lg w-auto text-sm font-medium text-blue-700 border border-gray-300 px-2 py-2 transision-colors duration-100 ease-in-out peer-checked:bg-blue-400"
                            >
                                {item}
                            </label>
                        </div>
                    )
                })}
            </div>
        </form>
    )
}