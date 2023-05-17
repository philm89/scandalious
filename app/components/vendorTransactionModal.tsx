import { Link } from "@remix-run/react"
import { useState } from "react"

export default function VendorTransactionModal({ openModal, individualTransactionDetails }) {
    const [refundDetails, setRefundDetails] = useState<object[]>()

    const refundCalculation = (item: object) => {
        refundDetails === undefined ?
            setRefundDetails(item) :
            setRefundDetails(prevArr => [{ ...prevArr }, item])
    }
    // console.log(individualTransactionDetails)
    console.log(refundDetails)

    return (
        <main className="flex justify-center items-center backdrop-opacity-80 bg-slate-50/80 fixed inset-0 z-50">
            <div className="flex flex-col justify-center py-10 px-10 bg-white  border border-slate-700 rounded-xl">
                {/* <button onClick={() => { openModal(false) }} className="">X</button> */}
                <h1>Transaction Details</h1>
                <table>
                    <thead>
                        <tr>
                            <th scope="col" className="text-left">Item</th>
                            <th>Amount</th>
                            <th>Units</th>
                            <th>Refund</th>
                        </tr>
                    </thead>
                    <tbody>
                        {individualTransactionDetails.items.map((item, id) => {
                            return (
                                <tr key={item.itemId}>
                                    <td className="text-sm text-gray-900 font-light text-left pr-4">
                                        {item.itemName}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-4 py-4 whitespace-nowrap">
                                        ฿{item.unitPrice}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-4 py-4 whitespace-nowrap">
                                        x{item.unitsSold}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-4 py-4 whitespace-nowrap">
                                        <input type="checkbox" onChange={() => refundCalculation(individualTransactionDetails)}></input>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className="flex justify-between pt-4">
                    <button onClick={() => { openModal(false) }} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Close</button>
                    <Link to="../vendor/scan" state={refundDetails} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                        Refund
                    </Link>
                </div>
            </div>
        </main >
    )
}

