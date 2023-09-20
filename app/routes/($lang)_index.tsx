import { Link } from "@remix-run/react";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export default function Index() {
  return (
    <main>
      <div className="w-full h-screen">
        {/* <!-- <section id="bottom-navigation" className="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> // if shown only tablet/mobile--> */}
        <section className="block fixed inset-x-0 bottom-0 z-10 bg-lime-500">
          <div className="flex justify-between">
            <Link to="/student" className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
              <UserCircleIcon className="inline-block justify-items-center h-8 w-8" />
              <span className="block text-xs">Student</span>
            </Link>
            <Link to="/vendor" className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
              <UserCircleIcon className="inline-block justify-items-center h-8 w-8" />
              <span className="block text-xs">Vendor</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
