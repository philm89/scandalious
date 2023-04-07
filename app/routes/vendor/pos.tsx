import Navbar from "~/components/navbarVendor";
import { Link, NavLink } from "@remix-run/react";

const menuItems = [
    {
        name: "Apple Juice",
        amount: "15฿",
    },
    {
        name: "Krapao",
        amount: "35฿",
    },
    {
        name: "Brownie",
        amount: "15฿",
    },
    {
        name: "Ice Cream",
        amount: "25฿",
    },
    {
        name: "Cake",
        amount: "15฿",
    },
    {
        name: "Dount",
        amount: "15฿",
    },
    {
        name: "Muffin",
        amount: "15฿",
    },
]

export default function Menu() {
    return (
        <main className="h-screen max-h-screen">
            <h1 className="flex sticky top-0 justify-center items-center h-10 bg-gray-400">POS</h1>
            <div className="grid grid-rows-4 grid-flow-col gap-4 m-10 justify-center">
                {menuItems.map((item) => {
                    return (
                        <div className="flex justify-center h-32 w-32 bg-green-500">
                            <h1 className="flex justify-center items-center">
                                {item.name}
                            </h1>
                        </div>
                    )
                })}
            </div>
            <Link to="/vendor/checkout" className="flex justify-end pr-10 w-full">
                <button className="fixed z-90 bottom-20 right-4 p-0 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Checkout</button>
            </Link>
            <Navbar />
        </main>
    )
}