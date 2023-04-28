import Navbar from "~/components/navbarVendor";
import { Link } from "@remix-run/react";
import MenuCard from "~/components/menuCard";
import { Form } from "@remix-run/react";

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
            <h1 className="flex top-0 px-4 justify-start items-center h-16 bg-white font-bold">Menu Items</h1>

            {menuItems.map((item) => {
                return (
                    <MenuCard item={item} />
                )
            })}
            <Navbar />
        </main>
    )
}