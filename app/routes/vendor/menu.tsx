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
            <h1 className="flex sticky top-0 justify-center items-center h-10 bg-gray-400">Menu Options</h1>
            <div className="flex justify-center pt-4">
                <div className="flex flex-col justify-center p-3 overflow-hidden bg-blue-500 hover:bg-blue-700 text-white rounded">
                    <label className="grow-0 font-medium" htmlFor="collapse">Add Menu Item</label>
                    <input className="peer appearance-none rounded border text-white accent-slate-600 opacity-0" type="checkbox" name="collapse" id="collapse" />
                    <div className="-transparent absolute -translate-y-full scale-100 px-4 py-3 opacity-0 transition-all duration-200 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:opacity-100">
                        <Form method="post" action="/events">
                            <div className="mb-2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium">Item Name</label>
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Krapao" required></input>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="price" className="block mb-2 text-sm font-medium">Item Price</label>
                                <input type="number" pattern="[0-9]*" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="45฿" required></input>
                            </div>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </Form>
                    </div>
                </div>

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