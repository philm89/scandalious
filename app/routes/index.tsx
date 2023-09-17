import { Link } from "@remix-run/react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { LoaderFunction, redirect } from "@remix-run/node";
import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  UserButton,
} from "@clerk/remix"

export default function Index() {
  return (
    <main>
      <div className="w-full h-screen">
        <SignedIn>
          <div className="flex justify-between">
            <h1 className="flex-row">Index route</h1>
            <p>You are signed in!</p>
          </div>
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
              <Link to={``} className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
                <div className="inline-block justify-items-center h-8 w-8"> 
                  <UserButton />
                  <span className="block text-xs">Profile</span>
                </div>
              </Link>
            </div>
          </section>
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </div>
    </main>
  );
}