import { Link, useLocation } from "@remix-run/react";
import Navbar from "~/components/navbarStudent";
import TabHeaderForStudentOrderPage from "~/components/tabHeaderForStudentOrderPage";

export default function OrderPage() {
    const location = useLocation()
    const menuList = location.state

    return (
        <main className="overflow-hidden h-screen max-h-screen">
            <div className="flex justify-between">
                <h1 className="flex px-8 justify-start items-center h-16 bg-white font-bold text-2xl">Orders</h1>
            </div>
            <TabHeaderForStudentOrderPage />
            <Link to="/vendor" className="grid content-end p-10">
                <button className="fixed z-90 bottom-20 right-4 p-0 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Vendor Home</button>
            </Link>
            <Navbar />
        </main>
    );
}