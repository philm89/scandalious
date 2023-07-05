import { Link } from "@remix-run/react"


export default function OrderCard({ state }) {
    // console.log(state)
    return (
        <main className="px-2">
            {state.map((item) => {
                return (
                    <Link key={item.id} state={state} to="/vendor/orders" >
                        <div className="relative border border-slate-700 bg-white m-1 px-4 py-2 rounded-lg">
                            <div className="flex flex-row justify-between items-center">
                                <p className="font-semibold">{item.name}</p>
                                <p className="font-semibold">{item.quantity}</p>
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-sm ml-4 italic">Group A</p>
                                <p className="text-sm italic">{item.quantity}</p>
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-sm ml-4 italic">Group B</p>
                                <p className="text-sm italic">{item.quantity}</p>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </main>
    )
}