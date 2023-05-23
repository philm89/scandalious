import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

export default function POSCardWithSubItems({ itemsFromUtility, selectedMenuItems, handleClick }) {
    const white = '#FFFFFF'
    const [bgColor, setBgColor] = useState(white)

    const changeColor = () => {
        let green = '#008000'
        bgColor !== green ?
            setBgColor(green) :
            setBgColor(white)
    }

    return (
        <div className="w-full px-2">
            <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="grid grid-cols-5 w-full rounded-lg border border-slate-700 px-4 py-2 font-medium hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <div className="grid col-span-4">
                                    <p className="grid justify-start">{itemsFromUtility.name}</p>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <p className="">x</p>
                                    <p className="">{itemsFromUtility.count}</p>
                                </div>
                                <div className="col-span-5 w-full -m-2">
                                    <ChevronUpIcon
                                        className={`${open ? 'transform' : 'rotate-180'
                                            } flex justify-center h-5 w-5 text-purple-500`}
                                    />
                                </div>
                            </Disclosure.Button>
                            <Disclosure.Panel className="grid grid-cols-2 gap-4 px-2 py-2">
                                {itemsFromUtility.subItems.map((item) => {
                                    return (
                                        <div key={item.id} onClick={changeColor} style={{ background: bgColor }} className="grid border border-slate-700 h-14 rounded-2xl">
                                            <p className="grid w-full justify-center place-content-center">{item.name}</p>
                                        </div>
                                    )
                                })}
                                <div className="flex col-span-2 justify-center">
                                    <Disclosure.Button className="py-2 px-4 rounded bg-blue-500 hover:bg-blue-700 text-white">
                                        Add to Cart
                                    </Disclosure.Button>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}