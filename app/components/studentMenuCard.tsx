import { Link } from "@remix-run/react";
import { useState } from "react";

export default function StudentMenuCard({ state, handleDrag, handleDrop }) {

    return (
        <Link to="/student/vendorMenu" state={state} className="my-2">
            <div
                id={state.id}
                draggable={true}
                onDragOver={(ev) => ev.preventDefault()}
                onDragStart={handleDrag}
                onDrop={handleDrop}
                className="border border-slate-700 bg-white mx-2 my-1 px-4 py-2 rounded-lg">
                <div className="flex flex-col">
                    <div className="flex flex-row justify-between">
                        <p className="text-lg font-bold text-gray-800 flex-wrap">{state.name}</p>
                        <p>Queue: 15</p>
                    </div>
                    <p className="pl-4">{state.description}</p>
                </div>
            </div>
        </Link>
    )
}