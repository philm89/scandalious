import { useLocation } from "@remix-run/react";
import Navbar from "~/components/navbarStudent";
import {
    SignedIn,
    SignedOut,
    RedirectToSignIn,
  } from "@clerk/remix"

export default function OrderPage({ state }) {
    const location = useLocation()
    const menuList = location.state

    return (
        <div>
            <SignedIn>
                <main className="overflow-hidden h-screen max-h-screen">
                    <div className="flex justify-between">
                        <h1 className="flex px-8 justify-start items-center h-16 bg-white font-bold text-2xl">Orders</h1>
                    </div>

                    <Navbar />
                </main>
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </div>
    );
}