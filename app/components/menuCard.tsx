import { Link } from "@remix-run/react";
import { Form, useLocation } from "@remix-run/react";
import { useState } from "react";

export default function MenuCard({ state, handleDrag, handleDrop }) {
    const [isAccordianActive, setIsAccordianActive] = useState(false)
    const [isEditingItemActive, setIsEditingItemActive] = useState(false)

    return (
        <main>
            <div
                draggable={true}
                id={state.id}
                onDragOver={(ev) => ev.preventDefault()}
                onDragStart={handleDrag}
                onDrop={handleDrop}
                onClick={() => { setIsAccordianActive(!isAccordianActive) }}
                // onTouchMove={(ev) => ev.preventDefault()}
                // onTouchStart={handleDrag}
                // onTouchEnd={handleDrop}
                className="border border-slate-700 bg-white m-1 px-4 py-2 rounded-lg"
            >
                <div className="grid grid-cols-2">
                    <p className="grid justify-items-start text-lg font-bold text-gray-800 flex-wrap">{state.name}</p>
                    <p className="grid justify-items-end text-md fond-bold text-gray-800">฿{state.unitPrice}</p>
                </div>

                {isAccordianActive === false ?
                    <div>
                        {state.subItems !== undefined ?
                            state.subItems.map((item, id) => {
                                return (
                                    <div key={item.id} className="grid grid-cols-2">
                                        <p className="grid justify-items-start text-md text-gray-800 ml-4 flex-wrap">{item.name}</p>
                                        <p className="grid justify-items-end text-md fond-bold text-gray-800">฿{item.unitPrice}</p>
                                    </div>
                                )
                            }) :
                            null
                        }
                        <div className="grid justify-items-end p-2">
                            <button onClick={() => setIsEditingItemActive(true)} className="grid z-90 right-4 p-2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Edit Item</button>
                        </div>
                    </div> :
                    <div>
                        {state.subItems !== undefined ?
                            state.subItems.map((item, id) => {
                                return (
                                    <Form key={item.id} className="grid grid-cols-2">
                                        <input type="text" name="name" defaultValue={item.name} className="grid justify-items-start text-md text-gray-800 ml-4 flex-wrap"></input>
                                        <input type="text" name="unitPrice" defaultValue={item.unitPrice} className="grid justify-items-end text-md fond-bold text-gray-800"></input>
                                    </Form>
                                )
                            }) :
                            null
                        }
                        <div className="grid justify-items-end p-2">
                            <button onClick={() => setIsEditingItemActive(true)} className="grid z-90 right-4 p-2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Edit Item</button>
                        </div>
                    </div>
                }
            </div>
        </main>
    )
}

{/* <Form>
<div className="grid grid-cols-2">
    <input type="text" name="name" placeholder="SubItem Name" className="grid justify-items-start border border-slate-700 rounded w-52 pl-1 text-slate-700"></input>
    <input type="text" name="unitPrice" placeholder="Price" className="grid justify-items-end border border-slate-700 rounded w-14 pl-1 text-slate-700"></input>
</div>
</Form> */}

{/* <div className="grid justify-items-end p-2">
<button onClick={() => setIsEditingItemActive(true)} className="grid z-90 right-4 p-2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Edit Item</button>
</div> */}