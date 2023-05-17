import { Form } from "@remix-run/react";

import Navbar from "~/components/navbarVendor";


export default function EditMenuItem() {
    return (
        <main className="h-screen max-h-screen">
            <div className="flex justify-between top-0 px-4">
                <h1 className="flex top-0 px-4 justify-start items-center h-16 bg-white font-bold text-2xl">Edit Item Page</h1>
            </div>

            <Form>
                <div className="grid grid-cols-2">
                    <input type="text" name="name" placeholder="SubItem Name" className="grid justify-items-start border border-slate-700 rounded w-52 pl-1 text-slate-700"></input>
                    <input type="text" name="unitPrice" placeholder="Price" className="grid justify-items-end border border-slate-700 rounded w-14 pl-1 text-slate-700"></input>
                </div>
            </Form>
            <Navbar />
        </main>
    )
}









{/* <div className="grid justify-items-end p-2">
<button onClick={() => setIsEditingItemActive(true)} className="grid z-90 right-4 p-2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Edit Item</button>
</div> */}