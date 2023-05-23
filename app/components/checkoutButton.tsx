import { Link } from "@remix-run/react";


export default function CheckoutButton({ state }) {
    return (
        <Link to="/vendor/checkout" state={state} className="flex justify-end pr-10 w-full">
            <button className="fixed z-90 bottom-20 right-4 p-0 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Checkout</button>
        </Link>
    )
}
