// import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Navbar from "~/components/navbarVendor";

export default function Index() {
    return (
        <main className="flex flex-col pt-28 overflow-y-auto h-screen max-h-screen">
            <div className="flex justify-center h-56 py-4 content-center">
                <div className="flex justify-center h-32 w-44 border border-slate-700 rounded-xl flex-wrap">
                    <h1 className="flex justify-center items-center text-center px-5">
                        Praews' Amazing Drink Shop
                    </h1>
                </div>
            </div>
            <div className="flex justify-center h-56">
                <div className="flex flex-col justify-center h-32 w-44 px-5 border border-slate-700 rounded-xl">
                    <h1 className="flex justify-center">
                        Daily Sales
                    </h1>
                    <h1 className="flex justify-center">
                        ฿1,000
                    </h1>
                </div>
            </div>
            <Link to="/student" className="grid content-end p-20">
                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Student Home</button>
            </Link>
            <Navbar />
        </main>
    );
}
