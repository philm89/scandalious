import { Link } from "@remix-run/react";
import { Form } from "@remix-run/react";

export default function MenuCard(props) {
    return (
        <div className="flex flex-col bg-white py-2">
            <div className="shadow-xl mt-2 px-4 flow-root rounded-lg">
                <div className="flex justify-between content-center">
                    <div className="flex items-start">
                        <div className="flex-1 flex-wrap min-w-0">
                            <p className="text-lg font-bold text-gray-800 truncate">{props.item.name}</p>
                            <p>{props.item.amount}</p>
                        </div>
                    </div>
                    <div className="p-2 flex items-center content-center">
                        <div className="flex flex-wrap justify-start bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                            <label className="flex grow-0 py-2 px-2" htmlFor={props.item.name}>Edit Item</label>
                            <input className="peer appearance-none rounded border text-slate-800 accent-slate-600 opacity-0" type="checkbox" name={props.item.name} id={props.item.name} />
                            <div className="-transparent absolute -translate-y-full scale-75 scale-y-0 px-4 py-3 opacity-0 transition-all peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-white peer-checked:opacity-100">
                                <p className="text-neutral-600 group-open:animate-fadeIn">
                                    <Form method="patch" action="/events">
                                        <div className="">
                                            <label htmlFor="name" className="block mb-2 text-sm font-medium">Item Name</label>
                                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={props.item.name} required></input>
                                        </div>
                                        <div className="mb-2">
                                            <label htmlFor="price" className="block mb-2 text-sm font-medium">Item Price</label>
                                            <input type="number" pattern="[0-9]*" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={props.item.amount} required></input>
                                        </div>
                                        <div>
                                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
                                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Delete Item
                                            </button>
                                        </div>
                                    </Form>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}