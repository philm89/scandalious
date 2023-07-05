import { Link, useLocation } from "@remix-run/react";
import { useEffect } from "react";

import Navbar from "~/components/navbarStudent";

export default function ShoppingCart({ state }) {
    const location = useLocation()
    const basketItems = location.state

    const clearLocalStorage = () => {
        localStorage.clear()
    }


    return (
        <main className="overflow-hidden h-screen max-h-screen">
            <div className="flex justify-between">
                <h1 className="flex px-8 justify-start items-center h-16 bg-white font-bold text-2xl">Shopping Cart</h1>
            </div>
            <div className="border border-slate-700 rounded-xl my-2 mx-2">
                <div className="flex flex-col px-2 my-2">
                    <div className="flex flex-row justify-between">
                        <p className="text-lg font-bold text-gray-800 flex-wrap">Krapao</p>
                        <p className="pl-4">35</p>
                    </div>
                    <div>
                        <div className="flex flex-row justify-between">
                            <p className="text-md font-medium pl-2 text-gray-800 flex-wrap">Fried Egg</p>
                            <p className="pl-4">15</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-row justify-between">
                            <p className="text-md font-medium pl-2 text-gray-800 flex-wrap">Steamed Rice</p>
                            <p className="pl-4">11</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-row justify-between">
                            <p className="text-md font-medium pl-2 text-gray-800 flex-wrap">Crispy Pork</p>
                            <p className="pl-4">50</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between border-t-2 border-gray-300">
                        <div className="text-md font-bold">Total</div>
                        <div className="pl-4 font-bold">
                            111
                        </div>
                    </div>
                    <div className="flex flex-row justify-between px-2">
                        <button className="w-1/2 rounded-lg py-1 px-1 text-sm font-medium text-blue-700 border border-gray-300">Edit Order</button>
                        <button className="w-1/2 rounded-lg py-1 px-1 text-sm font-medium  text-blue-700 border border-gray-300">Cancel Order</button>
                    </div>
                </div>
            </div>
            <div className="border border-slate-700 rounded-xl my-2 mx-2">
                <div className="flex flex-col px-2 my-2">
                    <div className="flex flex-row justify-between">
                        <p className="text-lg font-bold text-gray-800 flex-wrap">Coke</p>
                        <p className="pl-4">15</p>
                    </div>
                    <div>
                        <div className="flex flex-row justify-between">
                            <p className="text-md font-medium pl-2 text-gray-800 flex-wrap">Extra Ice</p>
                            <p className="pl-4">5</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between border-t-2 border-gray-300">
                        <div className="text-md font-bold">Total</div>
                        <div className="pl-4 font-bold">
                            20
                        </div>
                    </div>
                    <div className="flex flex-row justify-between px-2">
                        <button className="w-1/2 rounded-lg py-1 px-1 text-sm font-medium text-blue-700 border border-gray-300">Edit Order</button>
                        <button className="w-1/2 rounded-lg py-1 px-1 text-sm font-medium  text-blue-700 border border-gray-300">Cancel Order</button>
                    </div>
                </div>
            </div>

            <Link to="/student/Activity" state={basketItems} className="grid content-end p-10">
                <button onClick={() => clearLocalStorage} className="fixed z-90 bottom-20 right-4 p-0 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Submit Order</button>
            </Link>
            <Navbar />
        </main>
    );
}