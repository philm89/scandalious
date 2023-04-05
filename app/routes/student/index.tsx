import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Navbar from "./navbar";

export const meta: V2_MetaFunction = () => [{ title: "SCANdalous" }];

export default function Index() {
    return (
        <main className="flex flex-col pt-28 overflow-hidden h-screen max-h-screen">
            <div className="flex justify-center h-56 py-4 content-center">
                <div className="flex justify-center h-32 w-44 bg-green-500">
                    <h1 className="flex justify-center items-center">
                        Student Name
                    </h1>
                </div>
            </div>
            <div className="flex justify-center h-56">
                <div className="flex flex-col justify-center h-32 w-44 px-5 bg-green-500">
                    <h1 className="flex justify-center">
                        Account Balance
                    </h1>
                    <h1 className="flex justify-center">
                        $1,000
                    </h1>
                </div>
            </div>
            <Link to="/vendor" className="grid content-end p-10">
                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Vendor Home</button>
            </Link>
            <Link to="/student" className="grid content-end p-20">
                <button className="fixed z-90 bottom-20 right-4 p-0 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Top Up</button>
            </Link>
            <Link to="/student" className="grid content-end p-20">
                <button className="fixed z-90 bottom-20 left-4 p-0 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Refund</button>
            </Link>
            <Navbar />
        </main>
    );
}
