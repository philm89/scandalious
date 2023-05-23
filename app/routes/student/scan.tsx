import { Link } from "@remix-run/react";
import Navbar from "~/components/navbarStudent";
import { Html5QrcodeScanner } from 'html5-qrcode'
import { Html5Qrcode } from "html5-qrcode";


export default function Scan() {

    return (
        <main className="overflow-hidden h-screen max-h-screen">
            <div className="flex w-80 justify-center content-center">
                {/* <script src="./dist/html5-qrcode.js"></script> */}
                <img className="flex justify-center content-center" src="https://www.clipartmax.com/png/small/463-4639526_scan-barcode-svg-png-icon-free-download-scan-qr-code-svg.png"></img>
            </div>

            <Navbar />
        </main>
    );
}
