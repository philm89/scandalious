import { Link } from "@remix-run/react";
import { ShoppingCartIcon, RectangleStackIcon, UserCircleIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
    return (
        <div className="w-full h-screen">
            <section className="block fixed inset-x-0 bottom-0 z-50 bg-lime-500">
                <div className="flex justify-between">
                    <Link to="/vendor/" className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
                        <RectangleStackIcon className="inline-block justify-items-center h-8 w-8" />
                        <span className="block text-xs">Menu</span>
                    </Link>
                    <Link to="/vendor/activity" className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
                        <ShoppingCartIcon className="inline-block justify-items-center h-8 w-8" />
                        <span className="block text-xs">Orders</span>
                    </Link>
                    <Link to="/vendor/profile" className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
                        <UserCircleIcon className="inline-block justify-items-center h-8 w-8" />
                        <span className="block text-xs">Profile</span>
                    </Link>
                </div>
            </section>
        </div>
    )
}
