import { useState } from "react";
import Navbar from "~/components/navbarVendor";
import Pagination from "~/components/pagination";
import getVendorTransactionHistory from "~/utilities/getVendorTransactionHistory";
import VendorTransactionModal from '~/components/vendorTransactionModal'

let vendorTransactionHistoryFromUtility = getVendorTransactionHistory()


export default function Account() {
    const [vendorTransactionHistory, setVendorTransactionHistory] = useState(vendorTransactionHistoryFromUtility)
    const [individualTransactionDetails, setIndividualTransactionDetails] = useState<object>()
    const [modal, setModal] = useState<boolean>(false)

    return (
        <main className="h-screen max-h-screen">
            <h1 className="flex top-0 px-8 justify-start items-center h-16 bg-white font-bold text-2xl">Order History</h1>
            <table className="min-w-full">
                <thead className="bg-gray-100 border-b">
                    <tr>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-4 text-left">
                            Student
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-4 text-center">
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
                            <tr key={item.transactionId} onClick={() => { setModal(true); setIndividualTransactionDetails(item) }}
                                className="even:bg-gray-100 odd:bg-white border-b">
                                <td className="text-sm text-gray-900 font-light px-4 py-4 whitespace-nowrap">
                                    {item.student}
                                </td>
                                <td className="text-sm text-gray-900 font-light pr-1 py-4 whitespace-nowrap text-center">
                                    ฿{item.total}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-4 py-4 whitespace-nowrap">
                                    {item.date}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {modal && <VendorTransactionModal openModal={setModal} individualTransactionDetails={individualTransactionDetails} />}
            <Pagination />
            <Navbar />
        </main>
    );
}

