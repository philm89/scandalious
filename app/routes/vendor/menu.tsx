import Navbar from "~/components/navbarVendor";
import { Link } from "@remix-run/react";
import MenuCard from "~/components/menuCard";
import { useState } from "react";
import Modal from "~/components/modal";

const menuItems = [
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


export default function Menu() {
    const [modal, setModal] = useState(false)
    return (
        <main className="h-screen max-h-screen">
            <div className="flex justify-between top-0 px-4">
                <h1 className="flex top-0 px-4 justify-start items-center h-16 bg-white font-bold text-2xl">Menu Items</h1>
                <button onClick={() => { setModal(true) }} className="flex px-4 my-3 justify-end items-center bg-blue-500 hover:bg-blue-700 text-white rounded">Add Item</button>
            </div>

            {menuItems.map((item) => {
                return (
                    <MenuCard item={item} />
                )
            })}
            {modal && <Modal openModal={setModal} />}
            <Navbar />
        </main>
    )
}