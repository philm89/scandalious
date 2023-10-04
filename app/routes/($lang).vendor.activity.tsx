import { Form, Link } from "@remix-run/react";
import { useState, useEffect } from "react";
import { Dialog } from '@headlessui/react'


import Navbar from "~/components/navbarVendor";
import SetLimitSidBar from "~/components/sideBarVendorSetLimits";
import getMenuItemsUtility from "~/utilities/getMenuItems";
import GetVendorOrders from "~/utilities/getVendorOrders";

let vendorOrdersFromUtility = GetVendorOrders()
let menuItemsFromUtility = getMenuItemsUtility()
let mealTimeTypeEN = [{ id: 122, name: "All" }, { id: 123, name: "Breakfast" }, { id: 124, name: "Lunch A" }, { id: 125, name: "Lunch B" }, { id: 126, name: "After School" }]
let mealTimeTypeTH = [{ id: 122, name: "All" }, { id: 123, name: "ข้าวเช้า" }, { id: 124, name: "ข้าวเที่ยง A" }, { id: 125, name: "ข้าวเที่ยง B" }, { id: 126, name: "หลังเลิกเรียน" }]

/*
I am planning on utilizing 2 different states here.  The main one will be for calculating order totals and the other is for displaying and editing the daily limits on the sidebar.
*/

export default function POS() {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    const [filteredCategories, setFilteredCategories] = useState(mealTimeTypeEN)
    const [menuItems, setMenuItems] = useState(menuItemsFromUtility)
    const [orders, setOrders] = useState(vendorOrdersFromUtility)

    function handleChange(event) {
        // filteredCategories.includes(event.target.id) ?
        // setFilteredCategories(filteredCategories.reduce((acc, cv) => {...acc, [cv.id] : cv.name})
        // if (event.target.checked === "true") {
        //     const filtered = orders.filter((mealType) => mealType.orderMealtime === event.target.id)
        // }
    }

    return (
        <main className="bg-gray-300 overscroll-y-contain overflow-hidden">
            <div className="flex justify-between w-full bg-white">
                <h1 className="flex px-8 justify-start items-center h-16 bg-white font-bold text-2xl">Activity</h1>
                <button onClick={() => { setIsSideBarOpen(true) }} className="right-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mt-4 mb-2 mx-4 rounded">Set Limits</button>
            </div>
            <ButtonGroup handleChange={handleChange} />
            <OrderCard state={orders} />
            <SetLimitSidBar open={isSideBarOpen} setOpen={setIsSideBarOpen} state={menuItems} />
            <Navbar />
        </main>
    )
}

export function OrderCard({ state }) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div className="grid grid-cols-2 mx-2">
            {state.map((item) => {
                return (
                    <button key={item.orderId} onClick={() => { setIsModalOpen(true) }}>
                        <div className=" border border-slate-100 bg-white rounded-lg mt-2 mx-1 -z-10">
                            <div className="flex flex-col">
                                <p className="flex justify-center text-lg font-bold">
                                    {item.queueNumber}
                                </p>
                                <p className="flex justify-center">
                                    &#3647;{item.orderTotal}
                                </p>

                            </div>
                        </div>
                    </button>
                )
            })}
            <Modal open={isModalOpen} setOpen={setIsModalOpen} state={state} />

        </div>
    )
}

export function ButtonGroup({ handleChange }) {

    return (
        <form className="bg-white border border-slate-200 rounded-lg my-1 py-1">
            <div className="flex px-2 py-2 justify-between flex-row break-after-auto space-x-1 sm:space-x-2">
                {mealTimeTypeEN.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className=""
                        >
                            <input
                                type="checkbox"
                                id={item.name}
                                onChange={handleChange}
                                className="peer hidden"
                            />
                            <label
                                htmlFor={item.name}
                                className="select-none cursor-pointer rounded-lg w-auto min-w-max text-xs font-medium text-blue-700 border border-gray-300 px-2 py-2 transision-colors duration-100 ease-in-out peer-checked:bg-blue-400"
                            >
                                {item.name}
                            </label>
                        </div>
                    )
                })}
            </div>
        </form>
    )
}

export function Modal({ open, setOpen, state }) {

    return (
        <Dialog open={open} onClose={() => { setOpen(false) }} className="flex h-screen justify-center items-center backdrop-opacity-80 bg-slate-50/80 fixed inset-0 z-50">
            <Dialog.Panel>
                <Dialog.Title>Order Details</Dialog.Title>
                <Dialog.Description>
                    <p>{state.orderId}</p>
                </Dialog.Description>
                <div>
                    <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => { setOpen(false) }}
                    >
                        Cancel Order
                    </button>
                </div>
            </Dialog.Panel>
        </Dialog >
    )
}
