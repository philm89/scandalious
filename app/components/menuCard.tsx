import { Link } from "@remix-run/react";

export default function MenuCard(props) {
    return (
        <div className="bg-white mt-0 mr-auto mb-0 ml-auto sm:py-4 lg:py-4">
            <div className="shadow-xl mt-2 p-4 flow-root rounded-lg sm:py-2">
                <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                    <div className="flex items-center flex-1 min-w-0">
                        <div className="ml-4 flex-1 min-w-0">
                            <p className="text-lg font-bold text-gray-800 truncate">{props.item.name}</p>
                            <p>{props.item.amount}</p>
                        </div>
                    </div>
                    <div className="mt-4 pl-4 flex items-center justify-around sm:space-x-6 sm:pl-0 sm:mt-0">
                        <a
                            href=""
                            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                            Edit Item
                        </a>
                        <a
                            href=""
                            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                            Delete Item
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}