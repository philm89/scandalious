

import { useLocation } from "@remix-run/react";
import { useState } from "react";
import Navbar from "~/components/navbarVendor";
import GetVendorOrders from "~/utilities/getVendorOrders";

let vendorOrdersFromUtility = GetVendorOrders()

export default function Orders() {
    // const location = useLocation()
    // const menuItem = location.state
    // console.log(menuItem)
    const [orders, setOrders] = useState(vendorOrdersFromUtility)
    // console.log(orders)

    return (
        <main>
            <h1 className="flex px-8 justify-start items-center h-16 bg-white font-bold text-2xl">Orders</h1>
            {orders.map((item => {
                return (
                    <main key={item.orderId}>
                        <div className="border border-slate-700 bg-white m-1 px-4 py-2 rounded-lg">
                            {item.items.map((item) => {
                                return (
                                    <div key={item.id} className="flex flex-row justify-between">
                                        <div className="flex flex-row">
                                            <p className="flex pr-2">{item.units} x </p>
                                            <p className="flex">{item.name}</p>
                                        </div>
                                        <div className="flex flex-row">
                                            {/* <p className="flex">&#3647;</p> */}
                                            <p className="flex">{item.price}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </main>
                )
            }))}
            <Navbar />
        </main>
    )
}