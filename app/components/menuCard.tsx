import { Link } from "@remix-run/react";
import { Form } from "@remix-run/react";
import Modal from "./modal";
import { useState } from "react";


export default function MenuCard(props) {
    const [modal, setModal] = useState(false)

    const showModal = () => {
        setModal(true)
    }

    return (
        <div className="flex flex-col bg-white py-2">
            <div className="shadow-xl mt-3 px-4 flow-root rounded-lg">
                <div className="flex justify-between content-center">
                    <div className="flex items-start">
                        <div className="flex-1 flex-wrap min-w-0">
                            <p className="text-lg font-bold text-gray-800 truncate">{props.item.name}</p>
                            <p>{props.item.amount}</p>
                        </div>
                    </div>
                    <button type="submit" onClick={showModal} className="" >
                        Edit Item
                    </button>
                </div>
            </div>
        </div>
    )
}