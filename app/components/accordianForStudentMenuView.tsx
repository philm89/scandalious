import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline'
import { SubItems } from '~/@types/types'
import MenuCardForAccordianOnStudentPage from './menuCardForAccordianViewOnStudentPage'
import { Link } from '@remix-run/react'

export default function SidebarVendorViewForStudentMenu({ open, setOpen, selectedItem, basketItems, setBasketItems }) {
    // console.log(selectedItem)
    // console.log(menuList)
    // function increaseCount(id: number) {
    //     // const hasUnitsTest = menuItems.hasOwnProperty('units')
    //     // hasUnitsTest === false ? setMenu(menuItems.map(((element) => ({ ...element, units: 0 })))) : hasUnitsTest

    //     // setMenu(menuItems.map(menu => !menu.hasOwnProperty('units') ? { ...menu, units: 0 } : menu))
    //     // console.log(menuItems)

    //     setMenu(menuItems.map(menu => menu.id === id ? { ...menu, count: menu.count + 1 } : menu))
    // }

    // function decreaseCount(id: number) {
    //     setMenu(menuItems.map(menu => menu.id === id ? { ...menu, count: menu.count - 1 } : menu))
    // }
    // useEffect(() => {
    //     const basketItems = JSON.parse(localStorage.getItem('basketItems'))
    //     if ('basketItems') {
    //         setBasketItems(basketItems)
    //     }
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem('basketItems', JSON.stringify(basketItems));
    // }, [basketItems]);

    function addItemToBasket(itemId) {
        setBasketItems(basketItems => [...basketItems, itemId])

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
                                                <Dialog.Title className="text-2xl font-bold text-gray-900">{selectedItem.name}</Dialog.Title>
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
                                                <MenuCardForAccordianOnStudentPage state={selectedItem} basketItems={basketItems} setBasketItems={setBasketItems} />
                                            </div>
                                        </div>
                                        <div className="border-t border-gray-200 px-4 py-2">
                                            <div>
                                                <div className="flex flex-row justify-start">
                                                    <h3>Note to Vendor</h3>
                                                    <p className="pl-2 text-gray-400 text-sm">Optional</p>
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
                                                    onClick={() => { setOpen(false); addItemToBasket(selectedItem.id) }}
                                                    className="flex items-center w-full justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                                >
                                                    Add To Basket - {selectedItem.price}
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