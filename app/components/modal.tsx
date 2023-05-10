import { Form } from "@remix-run/react"

export default function Modal({ openModal }, props) {
    console.log(props.item)

    return (
        <main className="bg-zinc-200 opacity-100 fixed inset-0 z-50">
            <div className="flex h-screen justify-center items-center opacity-100">
                <div className="flex-col justify-center  bg-white py-10 px-10 border-4 border-sky-500 rounded-xl">
                    <h1></h1>
                    <Form className="pb-4">
                        <div>Item Name</div>
                        <input type="text" name="name" className="border-4 border-sky-500"></input>
                        <div>Item Amount</div>
                        <input type="text" name="amount" className="border-4 border-sky-500"></input>
                    </Form>
                    <div className="flex justify-between">
                        <button onClick={() => { openModal(false) }} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                            Update
                        </button>
                        <button onClick={() => { openModal(false) }} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </main >
    )
}


