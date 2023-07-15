import { Switch } from "@headlessui/react";
import { Form, useLocation } from "@remix-run/react";
import { useState } from "react";

import Navbar from "~/components/navbarVendor";

export default function EditMenuItem({ state }) {
    const location = useLocation()
    const menuItem = location.state
    const [toggleSwitch, setToggleSwitch] = useState(false)

    return (
        <main className="h-screen max-h-screen">
            <div className="flex justify-between top-0 px-4">
                <h1 className="flex top-0 px-4 justify-start items-center h-16 bg-white font-bold text-2xl">Edit Item </h1>
            </div>
            <Form>
                <div className="px-4 divide-y divide-gray-200">
                    <div>
                        <h1 className="text-md font-medium text-gray-900">Main Item</h1>
                        <div className="grid grid-cols-3 mt-2 border-t border-gray-200">
                            <h4 className="col-span-2 mt-2 text-xs max-w-max px-1 bg-white z-10 ml-2">Item Name</h4>
                            <h4 className="mt-2 text-xs max-w-max px-1 bg-white z-10 ml-2">Item Price</h4>
                            <input type="text" name="name" defaultValue={menuItem.name} className="col-span-2 border border-slate-700 pl-2 p-2 rounded -mt-2 mr-3 text-slate-700"></input>
                            <input type="number" name="unitPrice" defaultValue={menuItem.price} className="border border-slate-700 rounded pl-2 p-2 -mt-2 text-slate-700"></input>
                        </div>
                        <div className="flex flex-row justify-between">
                            <p className="flex justify-start items-center w-3/4 ml-2">Default Daily Limit</p>
                            <input type="number" name="limit" defaultValue={menuItem.quantity} className="border border-slate-700 rounded pl-2 p-2 my-2 text-slate-700 w-1/4"></input>
                        </div>
                        <div className="flex flex-row justify-between my-2">
                            <p className="mt-2">Recommended Item</p>
                            <Switch
                                checked={toggleSwitch}
                                onChange={setToggleSwitch}
                                className={`${toggleSwitch ? 'bg-blue-600' : 'bg-gray-200'
                                    } relative inline-flex h-6 w-11 mt-2 items-center rounded-full`}
                            >
                                <span className="sr-only">Enable notifications</span>
                                <span
                                    className={`${toggleSwitch ? 'translate-x-6' : 'translate-x-1'
                                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                />
                            </Switch>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-md font-medium text-gray-900 mt-4">Sub Items</h1>
                        {menuItem.subItems !== undefined ?
                            menuItem.subItems.map((item) => {
                                return (
                                    <div key={item.id} className="">
                                        <div className="grid grid-cols-3 mt-2 border-t border-gray-200">
                                            <h4 className="col-span-2 mt-2 text-xs max-w-max px-1 bg-white z-10 ml-2">Name</h4>
                                            <h4 className="mt-2 text-xs max-w-max px-1 bg-white z-10 ml-2">Price</h4>
                                            <input type="text" name="name" defaultValue={item.name} className="col-span-2 border border-slate-700 pl-2 p-2 -mt-2 rounded mr-3 text-slate-700"></input>
                                            <input type="number" name="unitPrice" defaultValue={item.price} className="border border-slate-700 rounded pl-2 p-2 -mt-2 text-slate-700"></input>
                                        </div>
                                        <div className="flex flex-row justify-between">
                                            <p className="flex justify-start items-center w-3/4 ml-2">Default Daily Limit</p>
                                            <input type="number" name="limit" defaultValue={item.quantity} className="border border-slate-700 rounded pl-2 p-2 my-2 text-slate-700 w-1/4"></input>
                                        </div>
                                    </div>

                                )
                            }) :
                            undefined
                        }
                        <div className="flex justify-end mt-2">
                            <button className="flex bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Add Sub Item</button>
                        </div>
                    </div>
                </div>
            </Form>
            <Navbar />
        </main>
    )
}









{/* <div className="grid justify-items-end p-2">
<button onClick={() => setIsEditingItemActive(true)} className="grid z-90 right-4 p-2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Edit Item</button>
</div> */}