import { Link } from "@remix-run/react";
import { Form } from "@remix-run/react";
import Modal from "./modal";
import { useState } from "react";


export default function MenuCard({ state, handleDrag, handleDrop }) {
    const [modal, setModal] = useState(false)

    return (
        <div
            draggable={true}
            id={state.id}
            onDragOver={(ev) => ev.preventDefault()}
            onDragStart={handleDrag}
            onDrop={handleDrop}
            className="flex flex-col bg-white py-2"
        >
            <div className="shadow-xl mt-4 px-4 flow-root rounded-lg">
                <div className="flex justify-between items-center">
                    <div className="flex items-start">
                        <div className="flex-1 flex-wrap min-w-0">
                            <p className="text-lg font-bold text-gray-800 truncate">{state.name}</p>
                            <p>฿{state.amount}</p>
                        </div>
                    </div>
                    <button type="submit" onClick={() => { setModal(true) }} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" >
                        Edit Item
                    </button>
                    {modal && <Modal openModal={setModal} menuItems={state} />}
                </div>
            </div>
        </div>
    )
}