import { Link, useLocation } from "@remix-run/react";
import { useEffect, useState } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

import Navbar from "~/components/navbarStudent";
import { VendorItemList, VendorMenuList } from "~/@types/types";
import CheckoutButton from "~/components/checkoutButton";
import SideBar from "~/components/sideBarStudent"


export default function VendorMenuPage({ state }) {
    const location = useLocation()
    const vendorObject = location.state

    const [sideBarIsOpen, setSideBarIsOpen] = useState(false)
    const [selectedItemForSideBar, setSelectedItemForSideBar] = useState([])
    const [basketItems, setBasketItems] = useState()

    // useEffect(() => {
    //     const basketItems = JSON.parse(localStorage.getItem('basketItems'))
    //     if ('basketItems') {
    //         setBasketItems(basketItems)
    //     }
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem('basketItems', JSON.stringify(basketItems));
    // }, [basketItems]);


    return (
        <main className="overflow-y-auto h-screen max-h-screen">
            <div className="flex flex-col border border-gray-200 rounded-xl m-2">
                <h1 className="flex my-4 px-8 justify-start items-center bg-white font-bold text-2xl">{vendorObject.name}</h1>
                <p className="pl-10 mb-2">{vendorObject.description}</p>
            </div>
            <div>
                <div className="m-2">
                    {vendorObject !== undefined ?
                        <div key={vendorObject.id} className="">
                            <div className="border border-gray-200 rounded-xl">
                                <h1 className="flex pl-2 justify-start items-center bg-white font-bold text-lg m-2">
                                    Menu Items
                                </h1>
                            </div>
                            {vendorObject.items !== undefined ?
                                vendorObject.items.map((item) => {
                                    return (
                                        <div
                                            key={item.id}
                                            onClick={() => { setSideBarIsOpen(true); setSelectedItemForSideBar(item) }}
                                            className="flex flex-col border border-gray-700 rounded-lg px-2 py-2 my-1"
                                        >
                                            <div className="flex flex-row justify-between">
                                                <div className="flex items-center w-4/5">
                                                    <div>
                                                        {item.name}
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    ฿ {item.price}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                ) : null
                            }
                        </div>
                        :
                        null
                    }
                </div>
            </div>
            <SideBar
                open={sideBarIsOpen}
                setOpen={setSideBarIsOpen}
                sideBarItem={selectedItemForSideBar}
                basketItems={basketItems}
                setBasketItems={setBasketItems}
            />
            <Link to='/student/shoppingCart' state={basketItems}>
                <ShoppingBagIcon className="fixed z-50 bottom-20 bg-slate-50 border border-slate-300 right-8 h-10 w-10" />
            </Link>
            <Navbar />
        </main >
    );
}
