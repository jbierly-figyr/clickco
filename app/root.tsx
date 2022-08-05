import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import kumbhSans400 from '../fonts/kumbh-sans-all-400-normal.woff';
import kumbhSans700 from '../fonts/kumbh-sans-all-700-normal.woff';
import styles from '../app/tailwind.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
];

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  const fontFaceDeclaration = `
  @font-face {
    font-family: "Kumbh-Sans";
    src: url(${kumbhSans400}) format('woff');
    font-weight: 400;
  }
  @font-face {
    font-family: "Kumbh-Sans";
    src: url(${kumbhSans700}) format('woff');
    font-weight: 700;
  }
`;
  return (
    <html lang="en">
      <head>
        <Meta />
        <style
          dangerouslySetInnerHTML={{
            __html: fontFaceDeclaration,
          }}
        />
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
