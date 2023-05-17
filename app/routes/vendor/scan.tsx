import { Link } from "@remix-run/react";
import Navbar from "~/components/navbarVendor";
import { useState, useEffect, useRef } from "react";
import QRCode from 'qrcode'


export default function Scan(state) {
    const [qrInformation, setQrInformation] = useState("")
    const canvasRef = useRef()
    console.log(state)

    useEffect(() => {
        QRCode.toCanvas(
            canvasRef.current,
            qrInformation || " ",
            {
                scale: 10

            },
            (error) => error && console.log(error)
        )
    }, [qrInformation])

    return (
        <main className="overflow-hidden h-screen max-h-screen">
            <div>
                <input
                    value={qrInformation}
                    onChange={(e) => setQrInformation(e.target.value)}
                    className="flex justify-center  m-10"
                />
                <br />
                <div className="flex flex-col-1 justify-center">
                    <canvas ref={canvasRef} />
                </div>
            </div>
            <Link to="/vendor/checkout" className="fixed z-90 bottom-20 left-4 p-0 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Manual Checkout</Link>
            <Link to="/vendor/pos" className="fixed z-90 bottom-20 right-4 p-0 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Finish Order</Link>
            <Navbar />
        </main>
    );
}