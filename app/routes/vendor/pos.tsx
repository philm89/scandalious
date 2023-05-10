import Navbar from "~/components/navbarVendor";
import { Link } from "@remix-run/react";
import { useState } from "react";

export default function POS() {

    const [menu, setMenu] = useState([
        {
            id: 1534,
            name: "Apple Juice",
            amount: "15฿",
            count: 0,
        },
        {
            id: 1535,
            name: "Krapao",
            amount: "35฿",
            count: 1,
        },
        {
            id: 1536,
            name: "Brownie",
            amount: "15฿",
            count: 0,
        },
        {
            id: 1537,
            name: "Ice Cream",
            amount: "25฿",
            count: 1,
        },
        {
            id: 1538,
            name: "Cake",
            amount: "15฿",
            count: 0,
        },
        {
            id: 1539,
            name: "Dount",
            amount: "15฿",
            count: 0,
        },
        {
            id: 1540,
            name: "Muffin",
            amount: "15฿",
            count: 0,
        },
    ])

    function increaseCount(id: number) {
        setMenu(menu.map(menu => {
            if (menu.id === id) {
                return { ...menu, count: menu.count + 1 }
            } else {
                return menu
            }
        }))
    }

    function decreaseCount(id: number) {
        setMenu(menu.map(menu => {
            if (menu.id === id) {
                return { ...menu, count: menu.count - 1 }
            } else {
                return menu
            }
        }))
    }

    return (

        <main className="h-screen max-h-screen">
            <h1 className="flex top-0 px-8 justify-start items-center h-16 bg-white font-bold text-2xl">Point of Sale</h1>
            <div className="grid grid-rows-4 grid-flow-col gap-4 m-4 justify-center">
                {menu.map((item, i) => {
                    return (
                        <div key={item.id}>
                            {item.count < 1 ?
                                <div onClick={() => increaseCount(item.id)} className="flex justify-center h-32 w-32 bg-green-500">
                                    <h1 className="flex justify-center items-center">
                                        {item.name}
                                    </h1>
                                </div> :
                                <div className="grid grid-rows-1 h-32 w-32 bg-green-500">
                                    <h1 className="grid place-content-center">
                                        {item.name}
                                    </h1>
                                    <div className="grid grid-cols-3 place-content-end ">
                                        <div className="grid place-content-start bg-slate-500">
                                            <button onClick={() => decreaseCount(item.id)} className="pl-4 text-2xl">-</button>
                                        </div>
                                        <div className="grid place-content-center ">
                                            <h3 className="grid place-content-center text-xl bg-green-500">{item.count}</h3>
                                        </div>
                                        <div className="grid place-content-end bg-slate-500">
                                            <button onClick={() => increaseCount(item.id)} className="pr-4 text-2xl">+</button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    )
                })}
            </div>
            <Link to="/vendor/checkout" state={menu} className="flex justify-end pr-10 w-full">
                <button className="fixed z-90 bottom-20 right-4 p-0 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Checkout</button>
            </Link>
            <Navbar />
        </main>
    )
}

// This goes in the Link to the checkout page.  I removed it for testing purposes.  
// 