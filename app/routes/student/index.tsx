import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Navbar from "./navbar";

export const meta: V2_MetaFunction = () => [{ title: "SCANdalous" }];

export default function Index() {
    return (
        <main className="overflow-hidden h-screen max-h-screen bg-red-600">
            <div className="h-56 grid grid-cols-3 gap-2 content-center">
                <div></div>
                <div className="flex h-32 w-36 px-5 bg-slate-500">
                    <h1 className="flex items-center">
                        Student Name
                    </h1>
                </div>
                <div></div>
            </div>
            <div className="h-56 grid grid-cols-3 gap-2 content-center">
                <div></div>
                <div className="flex h-32 w-36 px-5 bg-slate-500">
                    <h1 className="flex items-center">
                        $1,000
                    </h1>
                </div>
                <div></div>
            </div>
            <Navbar />
        </main>
    );
}
