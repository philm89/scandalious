import { Link } from "@remix-run/react";
import { useState } from "react";
import Navbar from "~/components/navbarVendor";
import Pagination from "~/components/pagination";
import getVendorTransactionHistory from "~/utilities/getVendorTransactionHistory";

let vendorTransactionHistoryFromUtility = getVendorTransactionHistory()


export default function Account() {
    const [vendorTransactionHistory, setVendorTransactionHistory] = useState(vendorTransactionHistoryFromUtility)

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
                                    {vendorTransactionHistory.map((item, i) => {
                                        return (
                                            <tr key={item.id} className="even:bg-gray-100 odd:bg-white border-b">
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