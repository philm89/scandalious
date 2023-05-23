import { Form, useLocation, Link } from "@remix-run/react";
import { useEffect, useState } from "react";

import Dropdown from "./dropdownForMenuPage";

export default function MenuCard({ state, handleDrag, handleDrop }) {

    // I still need to fix the grid layout below.  I need the price and currency symbol to flex align to the right

    return (
        <main className="px-2">
            <div
                id={state.id}
                draggable={true}
                onDragOver={(ev) => ev.preventDefault()}
                onDragStart={handleDrag}
                onDrop={handleDrop}
                // onTouchMove={(ev) => ev.preventDefault()}
                // onTouchStart={handleDrag}
                // onTouchEnd={handleDrop}
                className="relative border border-slate-700 bg-white m-1 px-4 py-2 rounded-lg"
            >
                <div className="grid grid-cols-6 pr-3">
                    <div className="grid justify-items-start col-span-5">
                        <p className="text-lg font-bold text-gray-800 flex-wrap">{state.name}</p>
                    </div>
                    <div className="grid grid-cols-2 w-14">
                        <p className="grid justify-items-start">&#3647;</p>
                        <p className="grid justify-items-end text-md fond-bold pr-1 text-gray-800">{state.price}</p>
                    </div>
                </div>
                <div>
                    {state.subItems !== undefined ?
                        state.subItems.map((item) => {
                            return (
                                <div key={item.id} className="grid grid-cols-6 pr-3">
                                    <div className="grid justify-items-start col-span-5">
                                        <p className="text-md text-gray-800 ml-4 flex-wrap">{item.name}</p>
                                    </div>
                                    <div className="grid grid-cols-2 w-14">
                                        <p className="grid">&#3647;</p>
                                        <p className="grid justify-items-end text-md fond-bold text-gray-800 pr-1">{item.price}</p>
                                    </div>
                                </div>
                            )
                        }) :
                        undefined
                    }
                    <Dropdown />
                </div>
            </div>
        </main>
    )
}

