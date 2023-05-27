import { Form, useLocation, Link } from "@remix-run/react";
import { setRandomFallback } from "bcryptjs";
import { useEffect, useState } from "react";

export default function MenuCardForAccordianOnStudentPage({ state, basketItems, setBasketItems }) {
    // console.log(state)

    function addOptionalItem(e) {
        e.target.checked !== false ?
            setBasketItems(basketItems => [...basketItems, e.target.value])
            :
            setBasketItems(basketItems.filter((item) => {
                return item !== e.target.value
            }))

    }

    return (
        <main className="">
            <div className="divide-y divide-gray-200">
                <div className="flex justify-start">
                    <p>Add on</p>
                    <p className="flex items-center pl-2 text-gray-400 text-sm">Optional</p>
                </div>
                <div>
                    {state.subItems !== undefined ?
                        state.subItems.map((item) => {
                            return (
                                <label key={item.id} htmlFor={`subItem_${item.id}`} className="flex justify-between border border-gray-700 rounded-lg px-2 py-2 my-1">
                                    <div className="flex flex-row items-center">
                                        <input type="checkbox" id={`subItem_${item.id}`} value={item.id} onChange={addOptionalItem} className="flex items-center"></input>
                                        <label className="pl-2">{item.name}</label>
                                    </div>
                                    <div className="flex flex-row items-center">
                                        <p className="flex text-lg">+</p>
                                        <p>{item.price}</p>
                                    </div>
                                </label>
                            )
                        }) :
                        null
                    }

                </div>
            </div>
        </main>
    )
}


