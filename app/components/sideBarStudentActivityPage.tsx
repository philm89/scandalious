import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline'
import { Link } from '@remix-run/react'

import { SubItems } from '~/@types/types'

export default function SideBarStudentActivityPage({ open, setOpen, sideBarItem }) {
    // console.log(sideBarItem)

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
                                                <Dialog.Title className="text-2xl font-bold text-gray-900">
                                                    Order Number: <br />
                                                    <div className="flex text-lg font-normal">
                                                        {sideBarItem.orderUUID}
                                                    </div>
                                                    <div>
                                                        <p className="flex flex-nowrap text-lg font-semibold">
                                                            {sideBarItem.shopName}
                                                        </p>
                                                    </div>
                                                </Dialog.Title>
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
                                            <div className="mt-2 divide-y divide-gray-200">
                                                <MenuCard
                                                    sideBarItem={sideBarItem}
                                                />
                                            </div>
                                        </div>
                                        <div className="border-t border-gray-200 px-4 py-2">
                                            <div>
                                                <div className="flex flex-row justify-between mb-4">
                                                    <h3>Order Total</h3>
                                                    <p className="flex justify-end">{sideBarItem.orderTotal}</p>
                                                </div>

                                            </div>
                                            /**
                                            I need to adjust the Link below to redirect to the dynamic page routing of the vendor name page thingy.
                                            */
                                            <div className="">
                                                {sideBarItem.orderStatus === "SUBMITTED" ?
                                                    <Link
                                                        to="/student/vendorMenuPage"
                                                        state={sideBarItem}
                                                        className="flex items-center w-full justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                                    >
                                                        Update Order
                                                    </Link> :
                                                    sideBarItem.orderStatus === "PREPARING" ?
                                                        <button
                                                            className="flex items-center w-full justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                                        >
                                                            Contact Vendor
                                                        </button> :
                                                        sideBarItem.orderStatus === "PREPARED" ?
                                                            <button
                                                                className="flex items-center w-full justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                                            >
                                                                Contact Vendor
                                                            </button> :
                                                            sideBarItem.orderStatus === "COMPLETED" ?
                                                                <button
                                                                    className="flex items-center w-full justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                                                >
                                                                    Reorder
                                                                </button> :
                                                                <button
                                                                    className="flex items-center w-full justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                                                >
                                                                    Contact Us
                                                                </button>

                                                }

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

function MenuCard({ sideBarItem }) {
    return (
        <main className="">
            <div className="divide-y divide-gray-200">
                <div className="flex justify-start">
                    <p>Order Details</p>
                </div>
                <div className="">
                    {sideBarItem.items.map((item) => {
                        return (
                            <div key={item.id} className="pt-2">
                                <div className='grid grid-cols-5'>
                                    <p className="grid col-span-1">
                                        {item.units}x
                                    </p>
                                    <p className="grid col-span-3">
                                        {item.name}
                                    </p>
                                    <p className="grid col-span-1 justify-end">
                                        {item.price}
                                    </p>
                                </div>
                                <div>
                                    {item.subItems.map((subItem) => {
                                        return (
                                            <div key={subItem.id} className="grid grid-cols-5">
                                                <p className="col-start-2 col-span-3 font-light">
                                                    {subItem.name}
                                                </p>
                                                <p className="grid col-start-5 col-span-1 font-light justify-end">
                                                    {subItem.price}
                                                </p>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="grid grid-cols-5">
                                    <p className="col-start-2 col-span-3 italic font-light">
                                        {item.requests}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}