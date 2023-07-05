import { Link } from "@remix-run/react";
import { VendorMenuList, VendorItemList } from "~/@types/types";

export default function StudentMenuCard({ individualVendorObject }) {
    // console.log(individualVendorObject)
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