import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import Header from "./layout/Header";

export const links: Route.LinksFunction = () => [
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <section className="w-4/5 bg-white m-auto p-5 pt-44 pb-8 border-x-2">
          {children}
        </section>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
  <>
    <Outlet />
  </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {

  return (
    <main className="pt-16 p-4 container mx-auto">
        <h1>error</h1>
    </main>
  );
}
