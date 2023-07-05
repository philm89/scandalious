import { Fragment, useState } from 'react'
import { Dialog, Transition, Switch } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Form } from '@remix-run/react'

export default function SetLimitSidBar({ open, setOpen, state }) {
    // console.log(state)
    const [counter, setCounter] = useState(0)

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
                                                <Dialog.Title className="text-lg font-medium text-gray-900">Set Menu Limits</Dialog.Title>
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
                                            <div className="mt-4 mb-2">
                                                <Form>
                                                    {state.map((item) => {
                                                        return (
                                                            <div key={item.id} className="divide-y divide-gray-200 my-2">
                                                                <div>
                                                                    <div className="flex flex-row justify-between">
                                                                        <p className="flex w-/4 items-center">{item.name}</p>
                                                                        <input type='number' name='dialylimit' defaultValue={item.quantity} className="flex w-1/4 border border-slate-700 pl-2 p-2 rounded mr-3 text-slate-700"></input>
                                                                    </div>
                                                                </div>
                                                                <div>

                                                                </div>

                                                            </div>
                                                        )
                                                    })}
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
                                                    Submit
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
