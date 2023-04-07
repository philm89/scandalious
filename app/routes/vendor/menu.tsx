import Navbar from "~/components/navbarVendor";
import { Link } from "@remix-run/react";
import MenuCard from "~/components/menuCard";

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
            <h1 className="flex sticky top-0 justify-center items-center h-10 bg-gray-400">Menu Options</h1>
            <div className="py-2 px-4">
                <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span>Add Menu Item</span>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                        SAAS platform is a cloud-based software service that allows users to access
                        and use a variety of tools and functionality.
                    </p>
                </details>
            </div>
            {menuItems.map((item) => {
                return (
                    <MenuCard item={item} />
                )
            })}
            <Navbar />
        </main>
    )
}