


export default function StudentMenuCard({ state, handleDrag, handleDrop }) {

    return (
        <main className="px-2">
            <div
                id={state.id}
                draggable={true}
                onDragOver={(ev) => ev.preventDefault()}
                onDragStart={handleDrag}
                onDrop={handleDrop}
                // onClick={() => setOpen(true)}
                className="relative border border-slate-700 bg-white m-1 px-4 py-2 rounded-lg">
                <div className="flex">
                    <div className="flex">
                        <p className="text-lg font-bold text-gray-800 flex-wrap">{state.name}</p>
                    </div>
                    {/* <p>{state.description}</p> */}
                </div>
            </div>
        </main>
    )
}