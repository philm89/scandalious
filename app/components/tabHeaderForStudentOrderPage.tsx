import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function TabHeaderForStudentOrderPage() {
    let [categories] = useState({
        Submitted: [
            {
                id: 1,
                name: 'Krapao',
                price: 35,
                count: 1,
                total: 111,
                subItems: [
                    {
                        id: 1711,
                        name: "Fried Egg",
                        price: 15,
                    },
                    {
                        id: 1712,
                        name: "Steamed Rice",
                        price: 11,
                    },
                    {
                        id: 1713,
                        name: "Crispy Pork",
                        price: 50,
                    }
                ],
            },
            {
                id: 2,
                name: 'Coke',
                price: 15,
                count: 2,
                total: 30,
                subItems: [
                    {
                        id: 1821,
                        name: "Extra Ice",
                        price: 15
                    }
                ]
            },
        ],
        Approved: [
            {
                id: 3,
                name: 'Krapao',
                price: 35,
                count: 1,
                total: 111,
                subItems: [
                    {
                        id: 1811,
                        name: "Fried Egg",
                        price: 15,
                    },
                    {
                        id: 1812,
                        name: "Steamed Rice",
                        price: 11,
                    },
                    {
                        id: 1813,
                        name: "Crispy Pork",
                        price: 50,
                    }
                ],
            },
            {
                id: 4,
                name: 'Coke',
                price: 15,
                count: 2,
                total: 30,
                subItems: [
                    {
                        id: 1921,
                        name: "Extra Ice",
                        price: 15
                    }
                ]
            },
        ],
        Completed: [
            {
                id: 5,
                name: 'Krapao',
                price: 35,
                count: 1,
                total: 111,
                subItems: [
                    {
                        id: 2011,
                        name: "Fried Egg",
                        price: 15,
                    },
                    {
                        id: 2012,
                        name: "Steamed Rice",
                        price: 11,
                    },
                    {
                        id: 2013,
                        name: "Crispy Pork",
                        price: 50,
                    }
                ],
            },
            {
                id: 6,
                name: 'Coke',
                price: 15,
                count: 2,
                total: 30,
                subItems: [
                    {
                        id: 2021,
                        name: "Extra Ice",
                        price: 15
                    }
                ]
            },
        ]
    })

    return (
        <div className="w-full max-w-md px-2 py-2 sm:px-0">
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

                            {posts.map((post) => (
                                <div key={post.id} className="border border-slate-700 rounded-xl my-2">
                                    <div className="flex flex-col px-2 my-2">
                                        <div className="flex flex-row justify-between">
                                            <p className="text-lg font-bold text-gray-800 flex-wrap">{post.name}</p>
                                            <p className="pl-4">{post.price}</p>
                                        </div>
                                        <div>
                                            {post.subItems.map((item) => {
                                                return (
                                                    <div key={item.id} className="flex flex-row justify-between">
                                                        <p className="text-md font-medium pl-2 text-gray-800 flex-wrap">{item.name}</p>
                                                        <p className="pl-4">{item.price}</p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="flex flex-row justify-between border-t-2 border-gray-300">
                                            <div className="text-md font-bold">Total</div>
                                            <div className="pl-4 font-bold">
                                                {post.total}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}
