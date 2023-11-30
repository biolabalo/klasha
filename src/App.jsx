import { useState } from "react";
import Logo from "./assets/klasha.png";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="app" className="md:flex antialiased">
        <SideBar />
        <main className="bg-gray-100 h-screen w-full overflow-y-auto">
          <section v-if="active === 'performance'" id="performance">
            <header className="border-b border-solid border-gray-300 bg-white">
              <h2 className="p-6">Performance</h2>
            </header>
            <section className="m-4 bg-white border border-gray-300 border-solid rounded shadow">
              <header className="border-b border-solid border-gray-300 p-4 text-lg font-medium">
                Buildings Overview
              </header>
              <section className=" flex flex-row flex-wrap items-center text-center border-b border-solid border-gray-300">
                <div className="p-4 w-full sm:w-1/2 lg:w-1/4 border-b border-solid border-gray-300 md:border-b-0 sm:border-r">
                  <span className="text-xs font-medium text-gray-500 uppercase">
                    TOTAL REVENUE
                  </span>
                  <div className="py-4 flex items-center justify-center text-center">
                    <span className="mr-4 text-3xl">$485,985</span>
                    <span className="inline-flex items-center bg-green-500 h-6 px-2 rounded text-white text-xs">
                      +9.1%
                    </span>
                  </div>
                </div>
                <div className="p-4 w-full sm:w-1/2 lg:w-1/4 border-b border-solid border-gray-300 md:border-b-0 sm:border-r">
                  <span className="text-xs font-medium text-gray-500 uppercase">
                    PREDICTED MONTHLY REVENUE
                  </span>
                  <div className="py-4 flex items-center justify-center text-center">
                    <span className="mr-4 text-3xl">$6,576</span>
                    <span className="inline-flex items-center bg-green-500 h-6 px-2 rounded text-white text-xs">
                      +12.0%
                    </span>
                  </div>
                </div>
                <div className="p-4 w-full sm:w-1/2 lg:w-1/4 border-b border-solid border-gray-300 md:border-b-0 sm:border-r">
                  <span className="text-xs font-medium text-gray-500 uppercase">
                    ACTIVE RENTERS
                  </span>
                  <div className="py-4 flex items-center justify-center text-center">
                    <span className="mr-4 text-3xl">152</span>
                    <span className="inline-flex items-center bg-red-500 h-6 px-2 rounded text-white text-xs">
                      -12
                    </span>
                  </div>
                </div>
                <div className="p-4 w-full sm:w-1/2 lg:w-1/4 border-b border-solid border-gray-300 md:border-b-0 sm:border-r flex flex-col items-center">
                  <span className="text-xs font-medium text-gray-500 uppercase">
                    PENDING RENTS
                  </span>
                  <span className="block py-4 text-gray-500 text-3xl">
                    $930,10
                  </span>
                </div>
              </section>
              <section id="chart" className="p-4">
                <canvas id="myChart" width={200} height={200} />
              </section>
            </section>
            <div className="flex flex-wrap flex-row">
              <div className="w-full lg:w-1/2">
                <section className="m-4 bg-white border border-gray-300 border-solid rounded shadow">
                  <header className="border-b border-solid border-gray-300 p-4 text-lg font-medium">
                    Most Profitable Renters
                  </header>
                  <section className="overflow-x-auto w-full">
                    <table
                      className="w-full"
                      cellPadding={0}
                      cellSpacing={0}
                      border={0}
                    >
                      <tbody>
                        <tr>
                          <td className="p-2 py-4 border-b border-solid border-gray-300">
                            <div className="pl-4 flex flex-wrap flex-row items-center">
                              <div className="mr-4 h-12 w-12 bg-red-600 rounded-full block flex  flex-row justify-center items-center text-white">
                                A
                              </div>
                              <div className="text-gray-700">Adobe</div>
                            </div>
                          </td>
                          <td className="text-right p-2 pr-4 border-b border-solid border-gray-300 text-gray-700">
                            $35,210.66
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 py-4 border-b border-solid border-gray-300">
                            <div className="pl-4 flex flex-wrap flex-row items-center">
                              <div className="mr-4 h-12 w-12 bg-green-600 rounded-full block flex  flex-row justify-center items-center text-white">
                                B
                              </div>
                              <div className="text-gray-700">
                                Bank of America
                              </div>
                            </div>
                          </td>
                          <td className="text-right p-2 pr-4 border-b border-solid border-gray-300 text-gray-700">
                            $11,456.84
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 py-4 border-b border-solid border-gray-300">
                            <div className="pl-4 flex flex-wrap flex-row items-center">
                              <div className="mr-4 h-12 w-12 bg-blue-600 rounded-full block flex  flex-row justify-center items-center text-white">
                                L
                              </div>
                              <div className="text-gray-700">
                                Lamborghini Automobili
                              </div>
                            </div>
                          </td>
                          <td className="text-right p-2 pr-4 border-b border-solid border-gray-300 text-gray-700">
                            $35,210.66
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 py-4 border-b border-solid border-gray-300">
                            <div className="pl-4 flex flex-wrap flex-row items-center">
                              <div className="mr-4 h-12 w-12 bg-yellow-600 rounded-full block flex  flex-row justify-center items-center text-white">
                                G
                              </div>
                              <div className="text-gray-700">Google London</div>
                            </div>
                          </td>
                          <td className="text-right p-2 pr-4 border-b border-solid border-gray-300 text-gray-700">
                            $9,586.11
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </section>
                </section>
              </div>
              <div className="w-full lg:w-1/2">
                <section className="m-4 bg-white border border-gray-300 border-solid rounded shadow">
                  <header className="border-b border-solid border-gray-300 p-4 text-lg font-medium">
                    Latest Invoices
                  </header>
                  <section className="overflow-x-auto w-full">
                    <table
                      className="w-full"
                      cellPadding={0}
                      cellSpacing={0}
                      border={0}
                    >
                      <tbody>
                        <tr>
                          <td className="p-2 py-4 border-b border-solid border-gray-300">
                            <div className="pl-4 flex flex-wrap flex-row items-center">
                              <div className="mr-4 h-12 w-12 bg-red-600 rounded-full block flex  flex-row justify-center items-center text-white">
                                A
                              </div>
                              <div className="text-gray-700">Adobe</div>
                            </div>
                          </td>
                          <td className="text-right p-2 pr-4 border-b border-solid border-gray-300 text-gray-700">
                            $35,210.66
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 py-4 border-b border-solid border-gray-300">
                            <div className="pl-4 flex flex-wrap flex-row items-center">
                              <div className="mr-4 h-12 w-12 bg-green-600 rounded-full block flex  flex-row justify-center items-center text-white">
                                B
                              </div>
                              <div className="text-gray-700">
                                Bank of America
                              </div>
                            </div>
                          </td>
                          <td className="text-right p-2 pr-4 border-b border-solid border-gray-300 text-gray-700">
                            $11,456.84
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 py-4 border-b border-solid border-gray-300">
                            <div className="pl-4 flex flex-wrap flex-row items-center">
                              <div className="mr-4 h-12 w-12 bg-blue-600 rounded-full block flex  flex-row justify-center items-center text-white">
                                L
                              </div>
                              <div className="text-gray-700">
                                Lamborghini Automobili
                              </div>
                            </div>
                          </td>
                          <td className="text-right p-2 pr-4 border-b border-solid border-gray-300 text-gray-700">
                            $35,210.66
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 py-4 border-b border-solid border-gray-300">
                            <div className="pl-4 flex flex-wrap flex-row items-center">
                              <div className="mr-4 h-12 w-12 bg-yellow-600 rounded-full block flex  flex-row justify-center items-center text-white">
                                G
                              </div>
                              <div className="text-gray-700">Google London</div>
                            </div>
                          </td>
                          <td className="text-right p-2 pr-4 border-b border-solid border-gray-300 text-gray-700">
                            $9,586.11
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </section>
                </section>
              </div>
            </div>
          </section>
          <section v-if="active === 'new'" id="new">
            <header className="border-b border-solid border-gray-300 bg-white">
              <h2 className="p-6">New</h2>
            </header>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;

const SideBar = () => (
  // <aside className="w-full md:h-screen md:w-64 bg-[#FFFBF7] md:flex md:flex-col px-12">
  //   <div className="flex-grow h-50 w-50">
  //     <img src={Logo} alt="Logo" className="object-cover" />
  //   </div>
  //   <nav className="overflow-y-auto h-full flex-grow">
  //     <header>
  //       <span className="text-xs text-gray-500 block py-6 px-6">Main Pages</span>
  //     </header>
  //     <ul className="font-medium px-4 text-left"></ul>
  //   </nav>
  //   <section id="user" className="p-4 border-t border-solid border-gray-800">
  //     <div className="flex">
  //       <img
  //         src="http://preview.janlosert.com/static/media/a07.f7e8bebd.jpg"
  //         className="rounded-full h-10"
  //         alt=""
  //       />
  //       <div className="flex flex-col p-2">
  //         <span className="text-white pb-1">Kara Johnson</span>
  //         <span className="text-xs text-gray-500">HR Specialist</span>
  //       </div>
  //     </div>
  //   </section>
  //   <footer className="p-4 border-t border-solid border-gray-800">
  //     <h4 className="pb-2 text-gray-100 text-sm">© Buildings Ltd. 2018</h4>
  //     <p className="text-gray-600 text-xs leading-normal">
  //       Created with love for the environment. By designers and develodivers who
  //       love to work together in offices!
  //     </p>
  //   </footer>
  // </aside>
  <div className="w-[280px] bg-[#FFFBF7] px-12">
    <div className="flex items-center space-x-4  my-5">
      <img src={Logo} alt="Logo" className="object-cover" />
    </div>
    <ul className="space-y-2 text-sm">
      <span class="font-sans font-normal font-medium text-gray-500">
        Main Pages
      </span>
      <li>
        <a
          href="#"
          className="flex items-center space-x-3 text-[#EF2C5A] p-2 ont-inter font-normal font-semibold hover:text-[#EF2C5A] focus:shadow-outline"
        >
          <span className="text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_3901_256)">
                <path
                  d="M12 12V3"
                  stroke="#EF2C5A"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.7906 7.5L4.20935 16.5"
                  stroke="#EF2C5A"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.14997 13.65C3.04765 13.106 2.99742 12.5535 2.99997 12C2.99878 10.1387 3.57533 8.32287 4.65004 6.80317C5.72475 5.28346 7.24464 4.13477 8.99997 3.51562V10.2656L3.14997 13.65Z"
                  stroke="#EF2C5A"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 3C13.577 3.00018 15.1263 3.41474 16.4927 4.20215C17.8591 4.98957 18.9946 6.12219 19.7854 7.48658C20.5763 8.85096 20.9948 10.3992 20.9989 11.9762C21.0031 13.5533 20.5928 15.1037 19.8092 16.4722C19.0255 17.8408 17.896 18.9794 16.5338 19.774C15.1716 20.5686 13.6245 20.9914 12.0475 20.9999C10.4705 21.0084 8.91897 20.6024 7.54827 19.8225C6.17757 19.0426 5.03586 17.9163 4.23749 16.5563"
                  stroke="#EF2C5A"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_3901_256">
                  <rect width={24} height={24} fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <span>Dashboard</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center space-x-3 text-[#0A0A0A] p-2 font-medium hover:text-[#EF2C5A] focus:text-[#EF2C5A] focus:shadow-outline"
        >
          <span className="text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3.37685 5.92566L3.375 18.5C3.375 18.8978 3.375 19.625 3.37596 20C3.74874 20 4.47717 20 4.875 20H19.875C20.0739 20 20.625 20 20.625 20C20.625 19.625 20.625 19.4489 20.625 19.25V8.75C20.625 8.55109 20.625 8 20.625 8C20.625 8 20.0739 8 19.875 8H4.875C4.058 8 3.37685 6.87434 3.37685 5.92566ZM3.37685 5.92566C3.37685 4.97698 4.058 4 4.875 4H17.625"
                stroke="#0A0A0A"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5 15.125C17.1213 15.125 17.625 14.6213 17.625 14C17.625 13.3787 17.1213 12.875 16.5 12.875C15.8787 12.875 15.375 13.3787 15.375 14C15.375 14.6213 15.8787 15.125 16.5 15.125Z"
                fill="#0A0A0A"
              />
            </svg>
          </span>
          <span>Balances</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center space-x-3  p-2  font-medium "
        >
          <span className="">
            <svg
              className="h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
          </span>
          <span>Transactions</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
        >
          <span className="text-gray-600">
            <svg
              className="h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </span>
          <span>My profile</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
        >
          <span className="">
            <svg
              className="h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </span>
          <span>My orders</span>
        </a>
      </li>
      <li>
        <a
          href=""
          className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
        >
          <span className=" text-gray-600">
            <svg
              className="h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </span>
          <span>My wishlist</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
        >
          <span className="text-gray-600">
            <svg
              className="h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </span>
          <span>Settings</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
        >
          <span className="text-gray-600">
            <svg
              className="h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </span>
          <span>Change password</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
        >
          <span className="text-gray-600">
            <svg
              className="h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </span>
          <span>Logout</span>
        </a>
      </li>
    </ul>
  </div>
);
