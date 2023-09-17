import type { LinksFunction, LoaderFunction } from "@remix-run/node"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import { rootAuthLoader } from "@clerk/remix/ssr.server"
import { ClerkApp, V2_ClerkErrorBoundary } from "@clerk/remix"
import tailwindStylesheetUrl from "./styles/tailwind.css"

export const loader: LoaderFunction = (args) => rootAuthLoader(args)
export const ErrorBoundary = V2_ClerkErrorBoundary()
export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }]
}

function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">

        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export default ClerkApp(App)
