import { Form } from "@remix-run/react"
import { useState } from "react"
import { Dialog } from '@headlessui/react'

export default function Modal({ modal, state }) {
    const [inputFields, setInputFields] = useState([])

    function closeModal() {
        modal(false)
    }

    function openModal() {
        modal(true)
    }

    return (
        <Dialog className="">
            <Dialog.Panel className="">
                <Dialog.Title>Add Menu Item</Dialog.Title>
                <Form className="pb-4">
                    <div className="">
                        <h4>Item Name</h4>
                        <input type="text" name="name" defaultValue={state.name} className="border border-slate-700 rounded pl-1 text-slate-700"></input>
                        <h4>Item Amount</h4>
                        <input type="text" name="unitPrice" defaultValue={state.unitPrice} className="border border-slate-700 rounded pl-1 text-slate-700"></input>
                    </div>
                    <div>
                        <h1 className="grid justify-start ml-2 my-2">SubMenu Items</h1>
                        {state.subItems !== undefined ?
                            state.subItems.map((item, id) => {
                                return (
                                    <div key={item.id} className="py-2">
                                        <h4>Item Name</h4>
                                        <input type="text" name="name" defaultValue={item.name} className="border border-slate-700 rounded pl-1 text-slate-700"></input>
                                        <h4>Item Amount</h4>
                                        <input type="text" name="name" defaultValue={item.unitPrice} className="border border-slate-700 rounded pl-1 text-slate-700"></input>
                                        <hr />
                                    </div>
                                )
                            }) : null
                        }
                        <div className="mt-2">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Add SubItems</button>
                        </div>
                    </div>
                </Form>
                <div className="flex justify-between">
                    <button onClick={() => { openModal(false) }} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                        Update
                    </button>
                    <button onClick={() => { openModal(false) }} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                        Delete
                    </button>
                </div>
            </Dialog.Panel>
        </Dialog >
    )
}

