import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import styles from "./styles/app.css";
import spotlightCss from '@stoplight/elements-dev-portal/styles.min.css';
import { ExternalScripts } from "remix-utils";
import { Navbar } from "./components/Navbar";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => ([
  {
    rel: "stylesheet",
    href: spotlightCss
  },
  {
    rel: "stylesheet",
    href: styles
  }
])

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-screen flex flex-col">
        <Navbar />
        <Outlet />
        <ScrollRestoration />
        <ExternalScripts />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
