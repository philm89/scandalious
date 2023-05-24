import { Form, useLocation, Link } from "@remix-run/react";
import { useEffect, useState } from "react";

export default function MenuCardForAccordianOnStudentPage({ state }) {
    console.log(state)
    return (
        <main className="">
            <div className="divide-y divide-gray-200">
                <div>
                    {state !== undefined ?
                        <div key={state.id}>
                            <h1 className="flex pl-2 justify-start items-center h-16 bg-white font-bold text-lg">
                                Menu Items
                            </h1>
                            {state.items.subItems !== undefined ?
                                state.items.subItems.map((item) => {
                                    return (
                                        <div key={item.id} className="flex flex-row justify-between border border-slate-700 rounded-md px-2 py-2 my-2">
                                            <div className="">
                                                {item.name}
                                            </div>
                                            <div>
                                                ฿ {item.price}
                                            </div>
                                        </div>
                                    )
                                }
                                ) : null}
                        </div>
                        :
                        null
                    }
                </div>
            </div>

        </main>
    )
}