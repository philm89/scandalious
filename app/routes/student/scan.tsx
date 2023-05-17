import { Link } from "@remix-run/react";
import Navbar from "~/components/navbarStudent";
import { Html5QrcodeScanner } from 'html5-qrcode'
import { Html5Qrcode } from "html5-qrcode";


export default function Scan() {

    return (
        <main className="overflow-hidden h-screen max-h-screen">
            <div className="flex w-80">
                <script src="./dist/html5-qrcode.js"></script>
            </div>

            <Navbar />
        </main>
    );
}
