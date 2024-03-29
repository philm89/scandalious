import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline'
import { Link } from '@remix-run/react'

import { SubItems } from '~/@types/types'

export default function SidebarVendorViewForStudentMenu({ open, setOpen, sideBarItem, basketItems, setBasketItems }) {

    function addItemToBasket(itemId: number) {
        setBasketItems(basketItems => ([...basketItems, itemId]))
    }
    console.log(basketItems)

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
                                                <Dialog.Title className="text-2xl font-bold text-gray-900">{sideBarItem.name}</Dialog.Title>
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
                                                    basketItems={basketItems}
                                                    setBasketItems={setBasketItems}
                                                />
                                            </div>
                                        </div>
                                        <div className="border-t border-gray-200 px-4 py-2">
                                            <div>
                                                <div className="flex flex-row justify-start">
                                                    <h3>Note to Vendor</h3>
                                                    <p className="flex items-center pl-2 text-gray-400 text-sm">Optional</p>
                                                </div>
                                                <input type='text' name='notesToVendor' placeholder='Add your request to the vendor' className="w-full text-sm h-8 border border-gray-100 my-2"></input>
                                                <div className="flex flex-row justify-center my-2">
                                                    <MinusIcon className="text-md h-8 border border-slate-300 rounded-md">-</MinusIcon>
                                                    <div className="flex items-center px-4 text-xl">2</div>
                                                    <PlusIcon className="text-md h-8 border border-slate-300 rounded-md">+</PlusIcon>
                                                </div>
                                            </div>
                                            <div className="">
                                                <button
                                                    onClick={() => { setOpen(false); addItemToBasket(sideBarItem.id) }}
                                                    className="flex items-center w-full justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                                >
                                                    Add To Basket - {sideBarItem.price}
                                                </button>
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

function MenuCard({ sideBarItem, basketItems, setBasketItems }) {

    function addOptionalItem(e) {
        console.log(e.target.value)
        e.target.checked !== false ?
            setBasketItems(basketItems => [...basketItems, +e.target.value])
            :
            setBasketItems(basketItems.filter((item) => {
                return item !== e.target.value
            }))
    }

    return (
        <main className="">
            <div className="divide-y divide-gray-200">
                <div className="flex justify-start">
                    <p>Add on</p>
                    <p className="flex items-center pl-2 text-gray-400 text-sm">Optional</p>
                </div>
                <div>
                    {sideBarItem.subItems !== undefined ?
                        sideBarItem.subItems.map((item) => {
                            return (
                                <label key={item.id} htmlFor={`subItem_${item.id}`} className="flex justify-between border border-gray-300 rounded-lg px-2 py-2 my-1">
                                    <div className="flex flex-row items-center">
                                        <input type="checkbox" id={`subItem_${item.id}`} value={item.id} onChange={addOptionalItem} className="flex items-center"></input>
                                        <label className="pl-2">{item.name}</label>
                                    </div>
                                    <div className="flex flex-row items-center">
                                        <p className="flex text-lg">+</p>
                                        <p>{item.price}</p>
                                    </div>
                                </label>
                            )
                        }) :
                        null
                    }
                </div>
            </div>
        </main>
    )
}