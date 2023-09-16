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
    const [sideBarItem, setSideBarItem] = useState()

    return (
        <main className="h-screen max-h-screen">
            <div className="flex">
                <h1 className="flex px-8 justify-start items-center h-16 bg-white font-bold text-2xl">Orders</h1>
            </div>
            <div className="">
                {orderList.map((item) => {
                    return (
                        <div className="flex flex-col border border-slate-700 rounded-lg my-2 mx-2 -z-10"
                            key={item.orderId}
                            onClick={() => { setSideBarIsOpen(true) }}>
                            <div className="grid grid-cols-2">
                                <div>
                                    <div className="flex flex-row text-sm ml-2">
                                        {DateTimeFunctionTH(item.createdAt)}
                                    </div>
                                    <div className="flex ml-2">
                                        {item.shopName}
                                    </div>
                                    <div className="flex ml-2 font-semibold">
                                        {item.orderStatus === "SUBMITTED" ?
                                            <p>Preparing Your Order</p> :
                                            item.orderStatus === "PREPARED" ?
                                                <p>Ready to Collect</p> :
                                                item.orderStatus === "COMPLETED" ?
                                                    <p>Completed</p> :
                                                    null
                                        }
                                    </div>
                                </div>
                                <div className="flex justify-end items-center mr-2">
                                    &#3647;{item.orderTotal}
                                </div>
                            </div>
                            <div className="">
                                {item.orderStatus === "SUBMITTED" ?
                                    <div className="flex flex-row justify-between px-2">
                                        <button
                                            className="w-1/2 rounded-lg p-2 m-2 text-sm font-medium text-blue-700 border border-gray-300"
                                            onClick={() => { setSideBarIsOpen(true); setSideBarItem(item) }}
                                        >
                                            Edit Order
                                        </button>
                                        <button className="w-1/2 rounded-lg p-2 m-2 text-sm font-medium  text-blue-700 border border-gray-300">Cancel Order</button>
                                    </div> :
                                    item.orderStatus === "PREPARED" ?
                                        <p className="my-2"></p> :
                                        item.orderStatus === "COMPLETED" ?
                                            <div className="flex justify-end px-2">
                                                <button className="w-1/2 rounded-lg p-2 m-2 text-sm font-medium text-blue-700 border border-gray-300">Reorder</button>
                                            </div> :
                                            null
                                }
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <SideBarStudentActivityPage
                open={sideBarIsOpen}
                setOpen={setSideBarIsOpen}
                sideBarItem={orderList}
            />
            <Navbar />
        </main>
    );
}

