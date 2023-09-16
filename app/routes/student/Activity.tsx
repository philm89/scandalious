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
                        item.orderStatus === "PREPARED" ?
                            <PreparedCard
                                key={item.orderId}
                                individualOrderObject={item}
                                open={sideBarIsOpen}
                                setOpen={setSideBarIsOpen}
                                setSideBarItem={setSideBarItem}
                            /> :
                            item.orderStatus === "SUBMITTED" ?
                                <SubmittedCard
                                    key={item.orderId}
                                    individualOrderObject={item}
                                    open={sideBarIsOpen}
                                    setOpen={setSideBarIsOpen}
                                    setSideBarItem={setSideBarItem}
                                /> :
                                <CompletedOrdersCard
                                    key={item.orderId}
                                    individualOrderObject={item}
                                    open={sideBarIsOpen}
                                    setOpen={setSideBarIsOpen}
                                    setSideBarItem={setSideBarItem}
                                />
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

function PreparedCard({ individualOrderObject, open, setOpen, setSideBarItem }) {
    const transDate = DateTimeFunctionTH(individualOrderObject.transDate)
    console.log(transDate)
    return (
        <div className="my-2">
            <div
                className="flex flex-col border border-slate-700 rounded-lg my-2 mx-2 -z-10"
                key={individualOrderObject.orderId}
                onClick={() => { setOpen(true) }}
            >
                <div className="grid grid-cols-2">
                    <div>
                        <div className="flex flex-row text-sm ml-2">
                            {transDate}
                        </div>
                        <div className="flex ml-2">
                            {individualOrderObject.shopName}
                        </div>
                        <div className="flex ml-2 font-semibold">
                            Ready to Collect
                        </div>
                    </div>
                    <div className="flex justify-end items-center mr-2">
                        &#3647;{individualOrderObject.orderTotal}
                    </div>

                </div>
                <div className="flex flex-row justify-between px-2">
                    <button className="w-1/2 rounded-lg p-2 m-2 text-sm font-medium text-blue-700 border border-gray-300">
                        Edit Order
                    </button>
                    <button className="w-1/2 rounded-lg p-2 m-2 text-sm font-medium  text-blue-700 border border-gray-300">Cancel Order</button>
                </div>
            </div>
        </div>
    )
}

function SubmittedCard({ individualOrderObject, open, setOpen, setSideBarItem }) {
    const transDate = DateTimeFunctionTH(individualOrderObject.transDate)
    return (
        <div className="my-2">
            <div
                key={individualOrderObject.orderId}
                className="flex flex-col border border-slate-700 rounded-lg my-2 mx-2 -z-10"
                onClick={() => { setOpen(true) }}
            >
                <div className="grid grid-cols-2">
                    <div>
                        <div className="flex flex-row text-sm ml-2">
                            {transDate}
                        </div>
                        <div className="flex flex-row">
                            <div className="flex ml-2">
                                {individualOrderObject.shopName}
                            </div>
                        </div>
                        <div className="flex ml-2 font-semibold">
                            Preparing
                        </div>
                    </div>
                    <div className="flex justify-end items-center mr-2">
                        &#3647;{individualOrderObject.orderTotal}
                    </div>

                </div>
                <div className="flex flex-row justify-between px-2">
                    <button className="w-1/2 rounded-lg p-2 m-2 text-sm font-medium text-blue-700 border border-gray-300">Edit Order</button>
                    <button className="w-1/2 rounded-lg p-2 m-2 text-sm font-medium  text-blue-700 border border-gray-300">Cancel Order</button>
                </div>
            </div>
        </div>
    )
}

function CompletedOrdersCard({ individualOrderObject, open, setOpen, setSideBarItem }) {
    const transDate = DateTimeFunctionTH(individualOrderObject.transDate)
    console.log(transDate)
    return (
        <div className="my-2">
            <div
                className="flex flex-col border border-slate-700 rounded-lg my-2 mx-2 -z-10"
                key={individualOrderObject.orderId}
                onClick={() => { setOpen(true) }}
            >
                <div className="grid grid-cols-2">
                    <div>
                        <div className="flex flex-row text-sm ml-2">
                            {transDate}
                        </div>
                        <div className="flex ml-2">
                            {individualOrderObject.shopName}
                        </div>
                        <div className="flex ml-2 font-semibold">
                            Completed
                        </div>
                    </div>
                    <div className="flex justify-end items-center mr-2">
                        &#3647;{individualOrderObject.orderTotal}
                    </div>

                </div>
                <div className="flex justify-end px-2">
                    <button className="w-1/2 rounded-lg p-2 m-2 text-sm font-medium text-blue-700 border border-gray-300">Reorder</button>
                </div>
            </div>
        </div>
    )
}