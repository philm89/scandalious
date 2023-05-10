import Navbar from "~/components/navbarVendor";
import { useLocation, Link } from "@remix-run/react";
import { useState, useEffect } from "react";

const staticMenu = [
    {
        id: 1534,
        name: "Apple Juice",
        amount: 15,
        count: 0,
    },
    {
        id: 1535,
        name: "Krapao",
        amount: 35,
        count: 1,
    },
    {
        id: 1536,
        name: "Brownie",
        amount: 15,
        count: 2,
    },
    {
        id: 1537,
        name: "Ice Cream",
        amount: 25,
        count: 1,
    },
    {
        id: 1538,
        name: "Cake",
        amount: 15,
        count: 1,
    },
    {
        id: 1539,
        name: "Dount",
        amount: 15,
        count: 0,
    },
    {
        id: 1540,
        name: "Muffin",
        amount: 15,
        count: 0,
    },
]


export default function Checkout() {
    const location = useLocation()
    const menu = location.state

    const [checkoutMenu, setCheckoutMenu] = useState(staticMenu)



    return (
        <main>
            <h1 className="flex top-0 px-8 justify-start items-center h-16 bg-white font-bold text-2xl">Order Summary</h1>
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className=" inline-block min-w-full">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                {checkoutMenu.map((item, i) => {
                                    return (
                                        <tbody key={item.id}>
                                            {item.count > 0 ?
                                                <tr className="even:bg-gray-100 odd:bg-white border-b">
                                                    <td className="text-sm text-gray-900 font-light px-4 py-4 whitespace-nowrap">
                                                        {item.count}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-4 py-4 whitespace-nowrap">
                                                        {item.name}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-4 py-4 whitespace-nowrap">
                                                        ฿{item.amount}
                                                    </td>
                                                </tr> :
                                                null
                                            }
                                        </tbody>
                                    )
                                })}
                            </table>
                            <h3>Total</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/vendor/pos" className="fixed z-90 bottom-20 left-4 p-0 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Edit Order</Link>
            <Link to="/vendor/scan" className="fixed z-90 bottom-20 right-4 p-0 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Complete Order</Link>
            <Navbar />
        </main >
    )
}