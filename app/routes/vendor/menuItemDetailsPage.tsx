import { Form, Link } from "@remix-run/react"
import Navbar from "~/components/navbarVendor"

export default function MenuItemDetails(state) {
    return (
        <main className="h-screen max-h-screen">
            <div className="flex justify-between top-0 px-4">
                <h1 className="flex top-0 px-4 justify-start items-center h-16 bg-white font-bold text-2xl">Menu Item Details</h1>
            </div>
            <Form className="pb-4">
                <div>Item Name</div>
                <input type="text" name="name" defaultValue={state.name} className="border border-slate-700 rounded pl-1 text-slate-700"></input>
                <div>Item Amount</div>
                <input type="text" name="unitPrice" defaultValue={state.unitPrice} className="border border-slate-700 rounded pl-1 text-slate-700"></input>
                <h3>Additional Items</h3>
                {state.subItems !== undefined ?
                    state.subItems.map((item, id) => {
                        return (
                            <div key={item.id}>
                                <div>Item Name</div>
                                <input type="text" name="name" defaultValue={item.name} className="border border-slate-700 rounded pl-1 text-slate-700"></input>
                                <div>Item Amount</div>
                                <input type="text" name="name" defaultValue={item.unitPrice} className="border border-slate-700 rounded pl-1 text-slate-700"></input>
                            </div>
                        )
                    }) :
                    <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Add SubItems</button>
                }
            </Form>
            <div className="flex justify-between">
                <Link to="/vendor/menu" className="fixed z-90 left-4 bottom-20 bg-blue-500 hover:bg-blue-700 text-white ml-4 py-2 px-4 rounded">
                    Delete
                </Link>
                <Link to="/vendor/menu" className="fixed z-90 bottom-20 right-4 bg-blue-500 hover:bg-blue-700 text-white mr-4 py-2 px-4 rounded">
                    Update
                </Link>
            </div>
            <Navbar />
        </main>
    )
}
