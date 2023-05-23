import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { Link } from '@remix-run/react';

export default function Dropdown() {
    return (
        <div className="absolute top-0 right-0 w-40 text-right">
            <Menu as="div" className="relative z-40 inline-block text-left">
                <Menu.Button className="">
                    <EllipsisVerticalIcon className='relative top-2 right-0 h-7 w-7' />
                </Menu.Button>
                <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                >
                    <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    to="/vendor/editMenuItem"
                                >
                                    {active ? (
                                        <EditActiveIcon
                                            className="mr-2 h-5 w-5"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <EditInactiveIcon
                                            className="mr-2 h-5 w-5"
                                            aria-hidden="true"
                                        />
                                    )}
                                    Edit Item
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    to="/vendor/editMenuItem"
                                >
                                    {active ? (
                                        <DeleteActiveIcon
                                            className="mr-2 h-5 w-5 text-violet-400"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <DeleteInactiveIcon
                                            className="mr-2 h-5 w-5 text-violet-400"
                                            aria-hidden="true"
                                        />
                                    )}
                                    Delete Item
                                </Link>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}

function EditInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
        </svg>
    )
}

function EditActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
        </svg>
    )
}

function DeleteInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="6"
                width="10"
                height="10"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
            <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

function DeleteActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="6"
                width="10"
                height="10"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
        </svg>
    )
}

// {({ open }) => (
//     <EllipsisVerticalIcon
//         className={`${open ? 'z-0' : 'z-50'
//             } group relative top-2 right-0 h-7 w-7`}
//     >
//         {open ? (
//             <EllipsisActiveIcon
//             />
//         ) : (
//             <EllipsisInactiveIcon
//             />
//         )}
//     </EllipsisVerticalIcon>
// )}
// function EllipsisActiveIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke-width="1.5"
//             stroke="currentColor"
//             className="w-6 h-6"
//         >
//             <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
//         </svg>
//     )
// }

// function EllipsisInactiveIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke-width="1.5"
//             stroke="currentColor"
//             className="w-6 h-6"
//         >
//             <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
//         </svg>
//     )
// }