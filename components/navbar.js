import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, PhoneIcon, XMarkIcon,WhatsappIcon } from "@heroicons/react/24/outline";
import { SiWhatsapp } from "react-icons/si";
import Image from "next/legacy/image";
import { useRouter } from "next/router";
import Link from "next/link";


const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects", current: false },
  { name: "Blog", href: "/blog", current: false },
  { name: "Contact", href: "/contact", current: false },
  { name: "Services", href: "/services", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const router = useRouter();

  return (
    <Disclosure as="nav" className="bg-blue-200">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  
                  <Image
                    className="hidden h-12 w-24 lg:block"
                    src="/images/logo3.png"
                    alt="Jojo"
                    height={48}
                    width={96}
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block flex-1 justify-center self-center">
                  <div className="flex space-x-4 flex-1 justify-center align-middle text-black-800">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-800 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <Link href="https://wa.me/2348032516519" target="_blank" rel="noopener noreferrer"><SiWhatsapp className="h-6 w-6" aria-hidden="true" /></Link>

                  
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className="h-8 w-8 rounded-full"
                        src="/images/Joe-square.jpg"
                        alt="Your Company"
                        height={32}
                        width={32}
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none self-center">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            target="_blank" 
                            href="/JOSEPH_ANSELM Profile.pdf" download
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Profile Download
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Quick Contact
                          </a>
                        )}
                      </Menu.Item>
                      
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-800 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}


// import { Fragment } from "react";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { Bars3Icon, PhoneIcon, XMarkIcon } from "@heroicons/react/24/outline";
// import Image from "next/legacy/image";
// import { useRouter } from "next/router";

// const navigation = [
//   { name: "Home", href: "/", current: true },
//   { name: "About Me", href: "/about", current: false },
//   { name: "Projects", href: "/projects", current: false },
//   { name: "My Blog", href: "/blog", current: false },
//   { name: "Contact me", href: "/contact", current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Navbar() {
//   const router = useRouter();

//   return (
//     <Disclosure as="nav" className="bg-blue-200">
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//             <div className="relative flex h-16 items-center justify-between">
//               <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                 {/* Mobile menu button */}
//                 <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//               <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//                 <div className="flex flex-shrink-0 items-center">
//                   <Image
//                     className="hidden h-12 w-24 lg:block"
//                     src="/images/logo3.png"
//                     alt="Jojo"
//                     height={48}
//                     width={96}
//                   />
//                 </div>
//                 <div className="hidden sm:ml-6 sm:block flex-1 justify-center self-center">
//                   <div className="flex space-x-4 flex-1 justify-center align-middle text-black-800">
//                     {navigation.map((item) => (
//                       <a
//                         key={item.name}
//                         href={item.href}
//                         className={classNames(
//                           item.current
//                             ? "bg-gray-900 text-white"
//                             : "text-gray-800 hover:bg-gray-700 hover:text-white",
//                           "px-3 py-2 rounded-md text-sm font-medium"
//                         )}
//                         aria-current={item.current ? "page" : undefined}
//                       >
//                         {item.name}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//                 <button
//                   type="button"
//                   className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                 >
//                   <span className ="sr-only">View notifications</span>
//                     <PhoneIcon className="h-6 w-6" aria-hidden="true" />
//                 </button>
//             {/* Profile dropdown */}
//             <Menu as="div" className="relative ml-3">
//               <div>
//                 <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                   <span className="sr-only">Open user menu</span>
//                   <Image
//                     className="h-8 w-8 rounded-full"
//                     src="/images/Joe-square.jpg"
//                     alt="Your Company"
//                     height={32}
//                     width={32}
//                   />
//                 </Menu.Button>
//               </div>
//               <Transition
//                 as={Fragment}
//                 enter="transition ease-out duration-100"
//                 enterFrom="transform opacity-0 scale-95"
//                 enterTo="transform opacity-100 scale-100"
//                 leave="transition ease-in duration-75"
//                 leaveFrom="transform opacity-100 scale-100"
//                 leaveTo="transform opacity-0 scale-95"
//               >
//                 <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none self-center">
//                   <Menu.Item>
//                     {({ active }) => (
//                       <a
//                         href="#"
//                         className={classNames(
//                           active ? "bg-gray-100" : "",
//                           "block px-4 py-2 text-sm text-gray-700"
//                         )}
//                       >
//                         Profile Download
//                       </a>
//                     )}
//                   </Menu.Item>
//                   <Menu.Item>
//                     {({ active }) => (
//                       <a
//                         href="#"
//                         className={classNames(
//                           active ? "bg-gray-100" : "",
//                           "block px-4 py-2 text-sm text-gray-700"
//                         )}
//                       >
//                         Quick Contact
//                       </a>
//                     )}
//                   </Menu.Item>
//                 </Menu.Items>
//               </Transition>
//             </Menu>
//           </div>
//         </div>
//       </div>

//       <Disclosure.Panel className="sm:hidden">
//         <div className="space-y-1 px-2 pt-2 pb-3">
//         {navigation.map((item) => (
//           <a
//             key={item.name}
//             href={item.href}
//             className={classNames(
//               item.href === router.pathname
//                 ? "bg-gray-900 text-white"
//                 : "text-gray-800 hover:bg-gray-700 hover:text-white",
//               "px-3 py-2 rounded-md text-sm font-medium"
//             )}
//             aria-current={item.href === router.pathname ? "page" : undefined}
//           >
//             {item.name}
//           </a>
//         ))}
//         </div>
//       </Disclosure.Panel>
//     </>
//   )}
// </Disclosure>
// );
// }
