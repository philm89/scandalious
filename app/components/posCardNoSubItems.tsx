
export default function POSCardWithSubItems({ itemsFromUtility, selectedMenuItems }) {
    return (
        <main className="w-full px-2">
            <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
                <div className="grid grid-cols-5 w-full rounded-lg bg-white border border-slate-700 px-4 py-2 font-medium hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <div className="grid col-span-4">
                        <p className="grid justify-start">{itemsFromUtility.name}</p>
                    </div>
                    <div className="flex flex-row justify-between">
                        <p className="">x</p>
                        <p className="">{itemsFromUtility.count}</p>
                    </div>
                </div>
            </div>
        </main >
    )
}
