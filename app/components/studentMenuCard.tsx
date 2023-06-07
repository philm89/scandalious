import { Link } from "@remix-run/react";
import { useState } from "react";

export default function StudentMenuCard({ state }) {
    console.log(state)
    return (
        <Link to="/student/VendorMenus" prefetch="intent" state={state} className="my-2 z-20">
            <div className="border border-slate-700 bg-white mx-2 my-1 px-4 py-2 rounded-lg">
                <div className="flex flex-col">
                    <div className="flex flex-row justify-between">
                        <p className="text-lg font-bold text-gray-800 flex-wrap">{state.name}</p>
                    </div>
                    <div className="flex flex-row justify-start">
                        {state.items.map((item) => {
                            return (
                                item.promoted !== false ?
                                    <Link to="/student/Orders" className="flex flex-row justify-between w-1/2 mx-2 border border-slate-700 rounded-md z-10">
                                        <div className="flex truncate p-2">
                                            {item.name}
                                        </div>
                                        <div className="flex p-2">
                                            {item.price}
                                        </div>
                                    </Link> :
                                    null
                            )
                        })}
                    </div>
                </div>
            </div>
        </Link>
    )
}