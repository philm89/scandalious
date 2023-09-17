import { Link, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import SearchBox from "~/components/searchBox";
import Navbar from "~/components/navbarStudent";
import getVendorMenuLists from "~/utilities/getVendorMenusListForStudents";
import { VendorMenuList, VendorItemList } from "~/@types/types";
// import StudentMenuCard from "~/components/studentMenuCard";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import {
    SignedIn,
    SignedOut,
    RedirectToSignIn,
  } from "@clerk/remix";

let vendorList: VendorMenuList[] = getVendorMenuLists()

export default function MenuPage() {
    const [menuItems, setMenuItems] = useState(vendorList)

    return (
        <div>
            <SignedIn>
                <main className="overflow-y-auto h-screen max-h-screen">
                    <div className="flex justify-between">
                        <h1 className="flex px-8 justify-start items-center h-16 bg-white font-bold text-2xl">Vendor List</h1>
                        <div className="flex items-center">
                            <Link to="/student/Account" className="flex px-4 mr-4 py-2 justify-end items-center border border-slate-700 rounded-lg">Balance: ฿1,000</Link>
                        </div>
                    </div>
                    {/* <SearchBox /> */}
                    {menuItems.map((item) => {
                        return (
                            <div key={item.id} >
                                <StudentMenuCard
                                    individualVendorObject={item}
                                    />
                            </div>
                        )
                    })}
                    <Link to='/student/shoppingCart'>
                        <ShoppingBagIcon className="fixed z-50 bottom-20 bg-slate-50 border border-slate-300 right-8 h-10 w-10" />
                    </Link>
                    <Navbar />
                </main>
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </div>
    );
}

function StudentMenuCard({ individualVendorObject }) {
    return (
            <Link to="/student/vendorMenuPage" state={individualVendorObject} className="my-2 z-20">
                <div className="border border-slate-700 bg-white mx-2 my-2 px-4 py-2 rounded-lg">
                    <div className="flex flex-col">
                        <div className="flex flex-row justify-between">
                            <p className="text-lg font-bold text-gray-800 flex-wrap">{individualVendorObject.name}</p>
                        </div>
                        <div className="flex flex-row justify-start">
                            {individualVendorObject.items.map((item: VendorItemList) => {
                                return (
                                    item.promoted !== false ?
                                        <div key={item.id} className="flex flex-row justify-between w-1/2 m-2 border border-slate-700 rounded-md z-10">
                                            <div className="flex truncate p-2">
                                                {item.name}
                                            </div>
                                            <div className="flex p-2">
                                                {item.price}
                                            </div>
                                        </div> :
                                        null
                                        )
                                    })}
                        </div>
                    </div>
                </div>
            </Link>
    )
}