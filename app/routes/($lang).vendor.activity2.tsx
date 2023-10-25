import { Fragment, useState } from 'react'
import { Dialog, Tab, Transition } from '@headlessui/react'

import GetVendorOrders from "~/utilities/getVendorOrders";
import getMenuItemsUtility from "~/utilities/getMenuItems";
import { MealTimeTypeEN, MealTimeTypeTH } from '~/utilities/getMealTimeType';

let vendorOrders = async function () {
    const orders = await GetVendorOrders()
    return orders
}
async function vendorOrdersFromUtilityAsync(): Promise<any> {
    const orders = await GetVendorOrders()
    return orders
}
// console.log(`what are all the orders? `, orders)
// return orders.filter(order => order.orderMealtime === mealType)

function filterOrders(ordersArray: [], mealType: string) {
    // let filtered = ordersArray.filter(order => order.orderMealtime === mealType)
}
// console.log(vendorOrdersFromUtility)

let menuItemsFromUtility = getMenuItemsUtility()

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ActivityPage() {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    const [orders, setOrders] = useState(vendorOrders)
    console.log(`What is the async function returning`, orders)

    let [categories] = useState({
        // All: vendorOrdersFromUtility('BREAKFAST' || 'LUNCHA' || 'LUNCHB' || 'DINNER'),
        Breakfast: filterOrders(orders, 'BREAKFAST'),
        LUNCHA: filterOrders(orders, 'LUNCHA'),
        LUNCHB: filterOrders(orders, 'LUNCHB'),
        Dinner: filterOrders(orders, 'DINNER'),
    })

    return (
        <div className="w-full max-w-md px-2 py-16 sm:px-0">
            <div className="flex justify-between bg-white">
                <h1 className="flex px-8 justify-start items-center h-16 bg-white font-bold text-2xl">Activity</h1>
                <button onClick={() => { setIsSideBarOpen(true) }} className="right-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mt-4 mb-2 mx-4 rounded">Set Limits</button>
            </div>
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                    {Object.keys(categories).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                    selected
                                        ? 'bg-white shadow'
                                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    {Object.values(categories).map((orders, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames(
                                'rounded-xl bg-white p-3',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                            )}
                        >
                            {/* <ul>
                                {orders.map(() => {
                                    <li key={orders.id}>
                                        {orders.queueNumber}
                                    </li>
                                })}
                            </ul> */}
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export function OrderCard({ state }) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalState, setModalState] = useState([])

    return (
        <div className="mx-2">
            {state.map((item) => {
                return (
                    <div
                        key={item.orderId}
                        className="grid grid-cols-12 items-center border border-slate-100 rounded-lg my-1"
                        onClick={() => { setIsModalOpen(true); setModalState({ ...item }) }}
                    >
                        <input type="radio" className="grid col-span-1 content-center w-5 scale-150 ml-4" />
                        <div className="grid col-span-11 grid-cols-2 border border-slate-100 h-16 bg-white rounded-md ml-2 px-2">
                            <div className="grid content-center text-3xl font-extrabold">
                                {item.queueNumber}
                            </div>
                            <div className="grid content-center text-lg font-bold">
                                &#3647;{item.orderTotal}
                            </div>
                        </div>
                    </div>
                )
            })}
            <Modal open={isModalOpen} setOpen={setIsModalOpen} state={modalState} />
        </div>
    )
}

export function Modal({ open, setOpen, state }) {

    function closeModal() {
        setOpen(false)
    }

    function openModal() {
        setOpen(true)
    }

    return (
        <>
            <Transition appear show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Order Details
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="">

                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}