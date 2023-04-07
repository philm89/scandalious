import { Link } from "@remix-run/react"
import Navbar from "~/components/navbarVendor"
import { Form } from "@remix-run/react"


export default function AddMenuItem() {
    return (
        <main className="h-screen max-h-screen">
            <h1 className="flex sticky top-0 justify-center items-center h-10 bg-gray-400">Add Menu Item</h1>
            <div>
                <Form>
                    <div>
                        <label
                            htmlFor=""
                            className="block text-sm font-medium text-gray-700"
                        >
                            Item Name
                        </label>
                        <div>
                            <input>
                            </input>
                        </div>
                    </div>
                </Form>
            </div>
            <Navbar />
        </main>
    )
}