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
            },
        ],
        Approved: [
            {
                id: 3,
                title: 'Is tech making coffee better or worse?',
                date: 'Jan 7',
                commentCount: 29,
                shareCount: 16,
            },
            {
                id: 4,
                title: 'The most innovative things happening in coffee',
                date: 'Mar 19',
                commentCount: 24,
                shareCount: 12,
            },
        ],
        Completed: [
            {
                id: 5,
                title: 'Ask Me Anything: 10 answers to your questions about coffee',
                date: '2d ago',
                commentCount: 9,
                shareCount: 5,
            },
            {
                id: 6,
                title: "The worst advice we've ever heard about coffee",
                date: '4d ago',
                commentCount: 1,
                shareCount: 2,
            },
        ],
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
                            <ul>
                                {posts.map((post) => (
                                    <div key={post.id}>
                                        <div className="flex flex-col">
                                            <div className="flex flex-row justify-between">
                                                <p className="text-lg font-bold text-gray-800 flex-wrap">{post.name}</p>
                                                <p className="pl-4">{post.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </ul>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}
