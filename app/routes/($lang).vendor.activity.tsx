import { Form, Link } from "@remix-run/react";
import { useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react'


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
        <main className="bg-gray-300 overflow-y-auto h-screen max-h-screen">
            <div className="flex justify-between bg-white">
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
    const [modalState, setModalState] = useState([])

    return (
        <div className="mx-2">
            {state.map((item) => {
                return (
                    <div
                        key={item.orderId}
                        className="grid grid-cols-12 items-center border border-slate-100 rounded-lg my-1"
                        onClick={() => { setIsModalOpen(true); setModalState({ ...item }) }}
                    >
                        <input type="radio" className="grid col-span-1 content-center w-5 scale-150 ml-4" />
                        <div className="grid col-span-11 grid-cols-2 border border-slate-100 h-16 bg-white rounded-md ml-2 px-2">
                            <div className="grid content-center text-3xl font-extrabold">
                                {item.queueNumber}
                            </div>
                            <div className="grid content-center text-lg font-bold">
                                &#3647;{item.orderTotal}
                            </div>
                        </div>
                    </div>
                )
            })}
            <Modal open={isModalOpen} setOpen={setIsModalOpen} state={modalState} />
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

    function closeModal() {
        setOpen(false)
    }

    function openModal() {
        setOpen(true)
    }

    return (
        <>
            <Transition appear show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Order Details
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="">

                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

// export function Modal({ open, setOpen, state }) {
//     console.log(state)

//     return (
//         <Dialog open={open} onClose={() => { setOpen(false) }} className="flex h-screen justify-center items-center backdrop-opacity-80 bg-slate-50/80 fixed inset-0 z-50">
//             <Dialog.Panel>
//                 <Dialog.Title>Order Details</Dialog.Title>
//                 <div>
//                     <div>
//                         <p>{state.shopName}</p>
//                         <p>{state.orderUUID}</p>
//                     </div>
//                     <div>
//                         <button
//                             type="button"
//                             className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
//                             onClick={() => { setOpen(false) }}
//                         >
//                             Cancel Order
//                         </button>
//                     </div>
//                 </div>
//             </Dialog.Panel>
//         </Dialog >
//     )
// }

// {state.map((item) => {
//     return (
//         <div className="flex flex-row">
//             <div className="basis-1/12">
//                 <input
//                     className="content-center w-5 scale-150 ml-4 my-2"
//                     type="radio"
//                 >
//                 </input>
//             </div>
//             <div className="grow basis-11/12">
//                 <button key={item.orderId} onClick={() => { setIsModalOpen(true) }}>
//                     <div className="border border-slate-100 bg-white rounded-lg mt-1 mx-2 -z-10">
//                         <div className="flex mx-2">
//                             <p className="text-xl font-bold px-1">
//                                 {item.queueNumber}
//                             </p>
//                             <p className="px-1">
//                                 {item.orderTotal}
//                             </p>
//                         </div>
//                     </div>
//                 </button>
//             </div>
//         </div>
//     )
// })}