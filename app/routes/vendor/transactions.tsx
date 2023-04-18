import { Link } from "@remix-run/react";
import Navbar from "~/components/navbarVendor";
import Pagination from "~/components/pagination";

const purchases = [
    {
        vendor: "Drink Shop",
        student: "Josh",
        amount: "15฿",
        date: "15/5/2022",
        position: 1,
    },
    {
        vendor: "Thai Food",
        student: "Billy",
        amount: "35฿",
        date: "17/5/2022",
        position: 2,
    },
    {
        vendor: "Ice Cream Shop",
        student: "Franklin",
        amount: "15฿",
        date: "1/5/2022",
        position: 3,
    },
    {
        vendor: "Dessert Shop",
        student: "Josiah",
        amount: "25฿",
        date: "15/4/2022",
        position: 4,
    },
    {
        vendor: "Bake Shop",
        student: "Lynn",
        amount: "15฿",
        date: "16/6/2022",
        position: 5,
    },
    {
        vendor: "Bake Shop",
        student: "Spencer",
        amount: "15฿",
        date: "16/6/2022",
        position: 6,
    },

]


export default function Account() {
    return (
        <main className="h-screen max-h-screen">
            <h1 className="flex sticky top-0 justify-center items-center h-10 bg-gray-400">Transaction History</h1>
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className=" inline-block min-w-full">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="bg-gray-100 border-b">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-4 text-left">
                                            Student
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
                                                <td className="text-sm text-gray-900 font-light px-4 py-4 whitespace-nowrap">
                                                    {item.student}
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
            <Pagination />
            <Navbar />
        </main>
    );
}