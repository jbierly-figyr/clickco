import type { MetaFunction } from '@remix-run/node';
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLocation,
} from '@remix-run/react';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
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

export default function App() {
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
        <div className="bg-white font-kumbh-sans">
          <div className="relative overflow-hidden">
            <Navbar />
            <Outlet />
            <Footer />
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  const location = useLocation();
  console.error('CatchBoundary', caught);
  if (caught.status === 404) {
    return (
      <html lang="en">
        <head>
          <Meta />
          <style
            dangerouslySetInnerHTML={{
              __html: fontFaceDeclaration,
            }}
          />
          <title>Sorry, No Bueno!</title>
          <Links />
        </head>
        <body>
          <div className="bg-white font-kumbh-sans">
            <div className="relative overflow-hidden">
              <Navbar />
              <div className="flex items-center justify-center">
                <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6">
                  <div className="text-center my-24">
                    <h1 className="text-3xl leading-9 font-bold text-gray-900">
                      404 - Page Not Found
                    </h1>
                    <p className="text-gray-500">
                      The page you are looking for does not exist.
                    </p>
                    <div className="mt-8">
                      <Link
                        to={location.pathname}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        {' '}
                        Go back to the previous page{' '}
                      </Link>{' '}
                      or{' '}
                      <Link
                        to="/"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        {' '}
                        go back to the homepage{' '}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </div>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
  throw new Error(`Unhandled error: ${caught.status}`);
}
