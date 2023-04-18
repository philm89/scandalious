import { Link } from "@remix-run/react";
import Navbar from "~/components/navbarStudent";


const purchases = [
    {
        vendor: "Drink Shop",
        item: "Apple Juice",
        amount: "15฿",
        date: "15/5/2022",
        position: 1,
    },
    {
        vendor: "Thai Food",
        item: "Grapao",
        amount: "35฿",
        date: "17/5/2022",
        position: 2,
    },
    {
        vendor: "Ice Cream Shop",
        item: "Ice Cream",
        amount: "15฿",
        date: "1/5/2022",
        position: 3,
    },
    {
        vendor: "Dessert Shop",
        item: "Cake",
        amount: "25฿",
        date: "15/4/2022",
        position: 4,
    },
    {
        vendor: "Bake Shop",
        item: "Dount",
        amount: "15฿",
        date: "16/6/2022",
        position: 5,
    },
    {
        vendor: "Bake Shop",
        item: "Dount",
        amount: "15฿",
        date: "16/6/2022",
        position: 6,
    }
]


export default function Account() {
    return (
        <main className="overflow-hidden h-screen max-h-screen">
            <h1 className="flex flex-col items-center pt-4 text-xl">Past Purchases</h1>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                    <div className="py-2 inline-block min-w-full sm:px-4 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="bg-gray-100 border-b">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-4 text-left">
                                            Vendor
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-4 text-left">
                                            Item
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-4 text-left">
                                            Amount
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-4 text-left">
                                            Date
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {purchases.map((item) => {
                                        return (
                                            <tr className="even:bg-gray-100 odd:bg-white border-b">
                                                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.vendor}</td>
                                                <td className="text-sm text-gray-900 font-light px-4 py-4 whitespace-nowrap">
                                                    {item.item}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-4 py-4 whitespace-nowrap">
                                                    {item.amount}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-4 py-4 whitespace-nowrap">
                                                    {item.date}
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar />
        </main>
    );
}