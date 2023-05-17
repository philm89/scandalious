import { Link } from "@remix-run/react";

export default function POSCardWithCount({ increaseCount, decreaseCount, state }) {
    return (
        <main onClick={() => increaseCount(state.id)} className="grid grid-rows-1 h-32 w-32 border border-slate-400 rounded-md bg-green-400">
            <h1 className="grid place-content-center">
                {state.name}
            </h1>
            <div className="grid grid-cols-3 place-content-end ">
                {/* The Subtract Div */}
                <div className="grid place-content-start bg-slate-500">
                    <button onClick={() => decreaseCount(state.id)} className="pl-4 text-2xl">-</button>
                </div>
                {/* The Count Div */}
                <div className="grid place-content-center ">
                    <h3 className="grid place-content-center text-xl">{state.count}</h3>
                </div>
                {/* The Addition Div */}
                <div className="grid place-content-end bg-slate-500">
                    <button onClick={() => increaseCount(state.id)} className="pr-4 text-2xl">+</button>
                </div>
            </div>
        </main>

    )
}