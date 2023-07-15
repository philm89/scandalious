import { Fragment, useState } from 'react'
import { Dialog, Transition, Switch } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Form } from '@remix-run/react'

export default function AddMenuItemSideBar({ open, setOpen }) {
    const [counter, setCounter] = useState(0)
    const [toggleSwitch, setToggleSwitch] = useState(false)

    const addMoreInputFieldsButtonClick = () => {
        setCounter(counter + 1)
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-lg font-medium text-gray-900">Add Menu Item</Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        <span className="sr-only">Close panel</span>
                                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <Form method="post">
                                                    <div className="divide-y divide-gray-200">
                                                        <div>
                                                            <h1 className="text-md font-medium text-gray-900">Main Item</h1>
                                                            <div className="grid grid-cols-3 mt-2 border-t border-gray-200">
                                                                <h4 className="col-span-2 mt-2 text-xs max-w-max px-1 bg-white z-10 ml-2">Item Name</h4>
                                                                <h4 className="mt-2 text-xs max-w-max px-1 bg-white z-10 ml-2">Item Price</h4>
                                                                <input type="text" name="name" placeholder='Krapao' className="col-span-2 border border-slate-700 pl-2 p-2 rounded -mt-2 mr-3 text-slate-700"></input>
                                                                <input type="number" name="unitPrice" placeholder='35' className="border border-slate-700 rounded pl-2 p-2 -mt-2 text-slate-700"></input>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row justify-between">
                                                            <p className="flex justify-start items-center w-3/4 ml-2">Default Daily Limit</p>
                                                            <input type="number" name="limit" defaultValue="100" className="border border-slate-700 rounded pl-2 p-2 my-2 text-slate-700 w-1/4"></input>
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
                                                        <div>
                                                            <h1 className="text-md font-medium text-gray-900 mt-4">Sub Items</h1>
                                                            <div className="grid grid-cols-3 mt-2 border-t border-gray-200">
                                                                <h4 className="col-span-2 mt-2 text-xs max-w-max px-1 bg-white z-10 ml-2">Item Name</h4>
                                                                <h4 className="mt-2 text-xs max-w-max px-1 bg-white z-10 ml-2">Item Price</h4>
                                                                <input type="text" name="name" placeholder='Extra Rice' className="col-span-2 border border-slate-700 pl-2 p-2 rounded -mt-2 mr-3 text-slate-700"></input>
                                                                <input type="number" name="unitPrice" placeholder='15' className="border border-slate-700 rounded pl-2 p-2 -mt-2 text-slate-700"></input>
                                                            </div>
                                                            <div className="flex flex-row justify-between">
                                                                <p className="flex justify-start items-center w-3/4 ml-2">Default Daily Limit</p>
                                                                <input type="number" name="limit" defaultValue="100" className="border border-slate-700 rounded pl-2 p-2 my-2 text-slate-700 w-1/4"></input>
                                                            </div>
                                                            <div className="flex justify-end mt-2">
                                                                <button className="flex bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Add Sub Item</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Form>
                                            </div>
                                        </div>
                                        <div className="border-t border-gray-200 px-4 py-2">
                                            <div className="">
                                                <a
                                                    onClick={() => setOpen(false)}
                                                    href="#"
                                                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                                >
                                                    Add Item
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
