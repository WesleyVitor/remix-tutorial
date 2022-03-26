import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type {
  MetaFunction,
  ErrorBoundaryComponent,
  LinksFunction,
} from "remix";
import reset from "~/styles/reset.css";
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return (
    <div>
      {error.message}
      <hr />
    </div>
  );
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: reset,
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
