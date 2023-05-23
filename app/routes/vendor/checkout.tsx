import Navbar from "~/components/navbarVendor";
import { useLocation, Link } from "@remix-run/react";
import { useState, useEffect } from "react";
import getMenuItemsUtility from "~/utilities/getMenuItems";

let menuItemsFromUtility = getMenuItemsUtility()

export default function Checkout(state) {
    const location = useLocation()
    const menu = location.state

    // This needs to change to the state variable being passed in.  I have it set to static for now for testing purposes
    const [checkoutMenu, setCheckoutMenu] = useState(menuItemsFromUtility)

    const calcTotal = checkoutMenu.reduce((total: number, menu) => {
        return total + (menu.count * menu.price)
    }, 0);

    return (
        <main>
            <h1 className="flex top-0 px-8 justify-start items-center h-16 bg-white font-bold text-2xl">Order Summary</h1>
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className=" inline-block min-w-full">
                        <div className="overflow-hidden">
                            <table className="min-w-full ml-4">
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
                                                        ฿{item.price}
                                                    </td>
                                                </tr> :
                                                null
                                            }
                                        </tbody>
                                    )
                                })}
                                <tfoot>
                                    <tr>
                                        <td></td>
                                        <td className="text-md text-gray-900 font-bold px-4 py-4 whitespace-nowrap">Total</td>
                                        <td className="text-md text-gray-900 font-bold px-4 py-4 whitespace-nowrap">฿{calcTotal}</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/vendor/pos" className="fixed z-90 bottom-20 left-4 p-0 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Edit Order</Link>
            <Link to="/vendor/scan" state={checkoutMenu} className="fixed z-90 bottom-20 right-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Complete Order</Link>
            <Navbar />
        </main >
    )
}