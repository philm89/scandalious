import { Link, useLocation } from "@remix-run/react";
import { useEffect, useState } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

import Navbar from "~/components/navbarStudent";
import { VendorMenuList } from "~/@types/types";
import CheckoutButton from "~/components/checkoutButton";
import SidebarVendorViewForStudentMenu from "~/components/accordianForStudentMenuView"



export default function VendorMenuPage({ state }) {
    const location = useLocation()
    const menuList = location.state
    const [isOpen, setIsOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState([])
    const [basketItems, setBasketItems] = useState()
    console.log(basketItems)

    useEffect(() => {
        const basketItems = JSON.parse(localStorage.getItem('basketItems'))
        if ('basketItems') {
            setBasketItems(basketItems)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('basketItems', JSON.stringify(basketItems));
    }, [basketItems]);


    return (
        <main className="overflow-y-auto h-screen max-h-screen">
            <div className="flex flex-col border border-gray-200 rounded-xl m-2">
                <h1 className="flex my-4 px-8 justify-start items-center bg-white font-bold text-2xl">{menuList.name}</h1>
                <p className="pl-10 mb-2">{menuList.description}</p>
            </div>
            <div>
                <div className="m-2">
                    {menuList !== undefined ?
                        <div key={menuList.id} className="">
                            <div className="border border-gray-200 rounded-xl">
                                <h1 className="flex pl-2 justify-start items-center bg-white font-bold text-lg m-2">
                                    Menu Items
                                </h1>
                            </div>
                            {menuList.items !== undefined ?
                                menuList.items.map((item) => {
                                    return (
                                        <div key={item.id} onClick={() => { setIsOpen(true); setSelectedItem(item) }} className="flex flex-col border border-gray-700 rounded-lg px-2 py-2 my-1">
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
            <SidebarVendorViewForStudentMenu open={isOpen} setOpen={setIsOpen} selectedItem={selectedItem} basketItems={basketItems} setBasketItems={setBasketItems} />
            <Link to='/student/shoppingCart' state={basketItems}>
                <ShoppingBagIcon className="fixed z-50 bottom-20 right-8 h-8 w-8" />
            </Link>
            <Navbar />
        </main >
    );
}
