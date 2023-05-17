import { Link } from "@remix-run/react";

export default function POSCardWithCount({ increaseCount, state }) {
    return (
        <main onClick={() => increaseCount(state.id)} className="flex justify-center h-32 w-32 border border-slate-400 rounded-md bg-green-500">
            <h1 className="flex justify-center items-center">
                {state.name}
            </h1>
        </main>
    )
}

