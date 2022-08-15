import { Fragment } from 'react';
import { Link } from '@remix-run/react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Logo from '../../app/images/logo.png';
import LogoWhite from '../../app/images/logo-white.png';

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Insights', href: '/insights' },
  { name: 'Contact', href: '/contact' },
];

function Navbar() {
  return (
    <Popover as="header" className="relative">
      <div className="bg-clickco-blue-500 py-6">
        <nav
          className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
          aria-label="Global"
        >
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link to="/">
                <span className="sr-only">ClickCo</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src={LogoWhite}
                  alt=""
                />
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="bg-clickco-blue-500 rounded-md p-2 inline-flex items-center justify-center text-clickco-gray-400 hover:bg-clickco-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="hidden font-kumbh-sans space-x-8 md:flex md:ml-10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-base font-bold text-white hover:text-clickco-turquoise-400"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link
              to="/consultation"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-bold rounded-md text-white bg-clickco-turquoise-600 hover:bg-clickco-turquoise-700"
            >
              Free Consultation
            </Link>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <img className="h-8 w-auto" src={Logo} alt="" />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-clickco-gray-400 hover:bg-clickco-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-clickco-turquoise-600">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="pt-5 pb-6">
              <div className="px-2 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-clickco-blue-500 hover:bg-clickco-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="mt-6 px-5">
                <Link
                  to="#"
                  className="block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-clickco-turquoise-500 to-clickco-turquoise-600 text-white font-medium hover:from-clickco-turquoise-600 hover:to-clickco-turquoise-700"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
export { Navbar };
