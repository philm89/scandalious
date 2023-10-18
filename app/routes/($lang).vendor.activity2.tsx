import { Fragment, useState } from 'react'
import { Dialog, Tab, Transition } from '@headlessui/react'

import GetVendorOrders from "~/utilities/getVendorOrders";
import getMenuItemsUtility from "~/utilities/getMenuItems";
import { MealTimeTypeEN, MealTimeTypeTH } from '~/utilities/getMealTimeType';


let vendorOrdersFromUtility = GetVendorOrders()
vendorOrdersFromUtility.filter((orders) => {
    return orders.orderMealtime === "BREAKFAST"
})
let menuItemsFromUtility = getMenuItemsUtility()

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ActivityPage() {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    const [orders, setOrders] = useState(vendorOrdersFromUtility)

    let [categories] = useState({
        All: [
            {
                id: 1,
                title: 'Does drinking coffee make you smarter?',
                date: '5h ago',
                commentCount: 5,
                shareCount: 2,
            },
            {
                id: 2,
                title: "So you've bought coffee... now what?",
                date: '2h ago',
                commentCount: 3,
                shareCount: 2,
            },
        ],
        Breakfast: [
            {
                id: 1,
                title: 'Is tech making coffee better or worse?',
                date: 'Jan 7',
                commentCount: 29,
                shareCount: 16,
            },
            {
                id: 2,
                title: 'The most innovative things happening in coffee',
                date: 'Mar 19',
                commentCount: 24,
                shareCount: 12,
            },
        ],
        Trending: [
            {
                id: 1,
                title: 'Ask Me Anything: 10 answers to your questions about coffee',
                date: '2d ago',
                commentCount: 9,
                shareCount: 5,
            },
            {
                id: 2,
                title: "The worst advice we've ever heard about coffee",
                date: '4d ago',
                commentCount: 1,
                shareCount: 2,
            },
        ],
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
                    {Object.values(categories).map((posts, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames(
                                'rounded-xl bg-white p-3',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                            )}
                        >
                            <ul>
                                {posts.map((post) => (
                                    <li
                                        key={post.id}
                                        className="relative rounded-md p-3 hover:bg-gray-100"
                                    >
                                        <h3 className="text-sm font-medium leading-5">
                                            {post.title}
                                        </h3>

                                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                                            <li>{post.date}</li>
                                            <li>&middot;</li>
                                            <li>{post.commentCount} comments</li>
                                            <li>&middot;</li>
                                            <li>{post.shareCount} shares</li>
                                        </ul>

                                        <a
                                            href="#"
                                            className={classNames(
                                                'absolute inset-0 rounded-md',
                                                'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                                            )}
                                        />
                                    </li>
                                ))}
                            </ul>
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