import Navbar from "~/components/navbarStudent";
import { UserCircleIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

export default function ProfilePage() {

    return (
        <main className="overflow-hidden h-screen max-h-screen">
            <h1 className="flex px-8 justify-start items-center h-16 bg-white font-bold text-2xl">Profile Page</h1>
            <div className="flex flex-row">
                <UserCircleIcon className="inline-block justify-items-center h-20 w-20 mx-6" />
                <h2 className="flex px-4 my-2">Student Name</h2>
            </div>
            <div className="flex flex-col divide-y divide-gray-400 mx-2">
                <div className="flex flex-row justify-between py-2">
                    <button className="flex justify-start mx-2 px-2">Reset Password</button>
                    <ChevronRightIcon className="inline-block h-4 w-4" />
                </div>
                <div className="flex flex-row justify-between py-2">
                    <button className="flex justify-start mx-2 px-2">Contact Support</button>
                    <ChevronRightIcon className="inline-block h-4 w-4" />
                </div>
                <div className="flex flex-row justify-between py-2">
                    <button className="flex justify-start mx-2 px-2">Top Up</button>
                    <ChevronRightIcon className="inline-block h-4 w-4" />
                </div>
            </div>
            <Navbar />
        </main>
    );
}
