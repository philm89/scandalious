import { Link } from "@remix-run/react";
import { Form, useLocation } from "@remix-run/react";
import { Menu, Transition } from '@headlessui/react'
import { useState } from "react";

export default function MenuCard({ state, handleDrag, handleDrop }) {
    const [isDropdownActive, setIsDropdownActive] = useState(false)

    return (
        <main className="px-2">
            <div
                draggable={true}
                id={state.id}
                onDragOver={(ev) => ev.preventDefault()}
                onDragStart={handleDrag}
                onDrop={handleDrop}
                // onTouchMove={(ev) => ev.preventDefault()}
                // onTouchStart={handleDrag}
                // onTouchEnd={handleDrop}
                className="relative border border-slate-700 bg-white m-1 px-4 py-2 rounded-lg"
            >
                <div className="grid grid-cols-3">
                    <p className="grid justify-items-start text-lg font-bold text-gray-800 flex-wrap">{state.name}</p>
                    <p className="grid justify-items-end">฿</p>
                    <p className="grid justify-items-end text-md fond-bold pr-6 text-gray-800">{state.price}</p>
                </div>
                <div>
                    {state.subItems !== undefined ?
                        state.subItems.map((item, id) => {
                            return (
                                <div key={item.id} className="grid grid-cols-3">
                                    <p className="grid justify-items-start text-md text-gray-800 ml-4 flex-wrap">{item.name}</p>
                                    <p className="grid justify-items-end">฿</p>

                                    <p className="grid justify-items-end text-md fond-bold text-gray-800 pr-6">{item.price}</p>
                                </div>
                            )
                        }) :
                        undefined
                    }
                    <button onClick={() => setIsDropdownActive(true)} className="absolute top-2 right-4">
                        <svg width={6} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" /></svg>
                    </button>
                    {isDropdownActive !== false ?
                        <div>
                            <button className="grid justify-items-end">
                                <Link to="/vendor/editMenuItem" className="grid z-90 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Edit Item</Link>
                            </button>
                            <button className="grid z-90 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                                Delete
                            </button>
                        </div>
                        :
                        null
                    }
                </div>
            </div>
        </main>
    )
}

