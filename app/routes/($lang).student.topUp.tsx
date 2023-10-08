import { Link } from "@remix-run/react";
import { QrCodeIcon } from "@heroicons/react/24/outline";

import Navbar from "~/components/navbarStudent";



export default function Account() {
    return (
        <main className="overflow-y-auto h-screen max-h-screen">
            <h1 className="flex px-8 justify-start items-center h-16 bg-white font-bold text-2xl">Account Information</h1>
            <div className="flex flex-col">
                <div className="flex flex-row justify-center">
                    <h3 className="px-4">Current Balance:</h3>
                    <h3 className="px-4">$1,000</h3>
                </div>
                <div className="flex justify-center items-center h-96">
                    <QrCodeIcon className="h-52 w-52" />
                </div>
            </div>
            <Navbar />
        </main>
    );
}