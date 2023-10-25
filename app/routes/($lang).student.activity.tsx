import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "@remix-run/react";
import { match, P } from 'ts-pattern';
import SideBarStudentActivityPage from "~/components/sideBarStudentActivityPage";
import { useEffect, useState } from "react";
import {
    DateTimeFunctionTH,
    DateTimeFunctionUS,
    studentActivitySortingFunction
} from "~/utilities/reuseableFunctions";
import Navbar from "~/components/navbarStudent";
import GetStudentOrders from "~/utilities/getStudentOrders";

let studentOrders = GetStudentOrders()

export default function ActivityPage() {
    const [orderList, setOrderList] = useState(studentOrders)
    const [sideBarIsOpen, setSideBarIsOpen] = useState(false)
    const [sideBarItem, setSideBarItem] = useState({})

    return (
        <main className="bg-gray-300 overflow-y-auto h-screen max-h-screen">
            <div className="flex w-full">
                <h1 className="flex w-full px-8 justify-start items-center h-16 bg-white font-bold text-2xl">Orders</h1>
            </div>
            <div className=" pt-4">
                {orderList.map((item) => {
                    return (
                        <div className="flex flex-col border border-slate-100 bg-white rounded-lg my-2 mx-2 -z-10"
                            key={item.orderId}
                            onClick={() => { setSideBarIsOpen(true); setSideBarItem(item) }}
                        >
                            <div className="">
                                <div className="divide-y divide-gray-200">
                                    <div className="py-2">
                                        <div className="flex flex-row justify-between">
                                            <div className="flex justify-start text-sm px-2">
                                                {item.orderUUID}
                                            </div>
                                            <div className="flex justify-end text-sm px-2">
                                                {DateTimeFunctionUS(item.createdAt)}
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="flex flex-nowrap max-w-md ml-2">
                                                {item.shopName}
                                            </p>
                                            <div className="flex flex-row px-2">
                                                <div>
                                                    &#3647;{item.orderTotal}
                                                </div>
                                                <div className="flex px-2">
                                                    ({item.items.length} items)
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 py-2 mx-2">
                                        <div className="flex text-sm font-semibold items-center">
                                            {item.orderStatus === "NOTAPPROVED" ?
                                                <p>Wating for Approval</p> :
                                                item.orderStatus === "SUBMITTED" ?
                                                    <p>Waiting For Vendor</p> :
                                                    item.orderStatus === "COMPLETED" ?
                                                        <p>Completed</p> :
                                                        item.orderStatus === "CANCELLED" ?
                                                            <p>Cancelled</p> :
                                                            null
                                            }
                                        </div>
                                        <div className="flex justify-end mx-2">
                                            {item.orderStatus === "NOTAPPROVED" ?
                                                <div className="flex">
                                                    <button
                                                        className="rounded w-16 text-sm font-medium text-blue-700 border border-gray-300 mx-2 px-2 py-1"
                                                        onClick={() => { setSideBarIsOpen(true); setSideBarItem(item) }}
                                                    >
                                                        Edit
                                                    </button>
                                                    <button className="rounded w-16 text-sm font-medium text-blue-700 border border-gray-300 px-2 py-1">Cancel</button>
                                                </div> :
                                                item.orderStatus === "SUBMITTED" ?
                                                    <p className="my-2"></p> :
                                                    item.orderStatus === "COMPLETED" ?
                                                        <div className="flex justify-end">
                                                            <button
                                                                className="rounded w-16 text-sm font-medium text-blue-700 border border-gray-300 mx-2 px-2 py-1"
                                                                onClick={() => { setSideBarIsOpen(true); setSideBarItem(item) }}
                                                            >
                                                                Rating
                                                            </button>
                                                            <button className="rounded w-auto text-sm font-medium text-blue-700 border border-gray-300 px-2 py-1">Reorder</button>
                                                        </div> :
                                                        item.orderStatus === "CANCELLED" ?
                                                            <div className="flex justify-end">
                                                                <button
                                                                    className="rounded w-auto text-sm font-medium text-blue-700 border border-gray-300 px-2 py-1"
                                                                    onClick={() => { setSideBarIsOpen(true); setSideBarItem(item) }}
                                                                >
                                                                    Reorder</button>
                                                            </div> :
                                                            <p className="my-2"></p>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })
                }
            </div>
            <SideBarStudentActivityPage
                open={sideBarIsOpen}
                setOpen={setSideBarIsOpen}
                sideBarItem={sideBarItem}
            />
            <Navbar />
        </main>
    );
}

