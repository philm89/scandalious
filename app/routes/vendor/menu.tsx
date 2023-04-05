import Navbar from "./navbar";
import { Link } from "@remix-run/react";
import MenuCard from "./menuCard";
import AddItemModal from "./modal";

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
            {menuItems.map((item) => {
                return (
                    <MenuCard item={item} />
                )
            })}
            <button
                onClick={AddItemModal}
                className="fixed z-90 bottom-20 right-4 p-0 w-10 h-10 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
                <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="w-6 h-6 inline-block">
                    <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z" />
                </svg>
            </button>
            <Navbar />
        </main>
    )
}