import { useState } from "react";
import Logo from "./assets/klasha.png";
import viteLogo from "/vite.svg";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Analytics />
      <div id="app" className="md:flex antialiased">
        <SideBar />
        <main className="bg-white-100 h-screen w-full overflow-y-auto">
          <Header />

          <SalesOverview />
        </main>
      </div>
    </>
  );
}

export default App;

const Component1 = () => (
  <div>
    <p className="font-inter text-sm font-normal">Today's sales</p>
    <h5 className="font-general-sans text-lg font-medium">₦1,652.50</h5>
  </div>
);
const Component2 = () => (
  <div className="text-white ">
    <p>24 Aug - 01 Sep 21</p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={201}
      height={69}
      viewBox="0 0 201 69"
      fill="none"
      className="my-4"
    >
      <path
        d="M11.8083 32.7391L1 1V69H200V1L189.192 21L175.84 17.9565L163.125 41.8696L148.502 44.0435L135.786 41.8696L119.891 51L95.0958 17.9565L79.8371 24.913L67.7572 44.0435L53.77 2.73913L38.5112 11.4348L26.4313 38.3913L11.8083 32.7391Z"
        fill="url(#paint0_linear_2_3725)"
      />
      <path
        d="M1 1L11.8083 32.7391L26.4313 38.3913L38.5112 11.4348L53.77 2.73913L67.7572 44.0435L79.8371 24.913L95.0958 17.9565L119.891 51L135.786 41.8696L148.502 44.0435L163.125 41.8696L175.84 17.9565L189.192 21L200 1"
        stroke="#EF2C5A"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2_3725"
          x1="100.5"
          y1="-103.5"
          x2="100.5"
          y2={69}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EF2C5A" />
          <stop offset={1} stopColor="#EF2C5A" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
    <p className="font-inter text-sm font-normal">This week</p>
    <h5 className="font-general-sans text-lg font-medium">₦1,652.50</h5>
  </div>
);
const Component3 = () => (
  <div className="text-dark ">
    <p>24 Aug - 01 Sep 21</p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={210}
      height={78}
      viewBox="0 0 210 78"
      fill="none"
      className="my-4"
    >
      <g clipPath="url(#clip0_2_3733)">
        <path
          d="M19.6872 37.3125H6.93592L1 32.313V77.7798C70.0692 77.946 208.318 78.1786 208.757 77.7798C209.197 77.3809 208.94 50.6354 208.757 37.3125H206.559L193.368 9.94656L168.745 6.78895L156.433 40.4701L145.001 9.94656L130.931 27.3134L119.499 1L93.5564 9.94656L83.0036 3.10507L57.9409 72.0462H44.7499L19.6872 37.3125Z"
          fill="url(#paint0_linear_2_3733)"
        />
        <path
          d="M1 32.2926L6.94286 37.2889H19.709L44.8011 72H58.0074L83.0995 3.1037L93.6646 9.94074L119.637 1L131.083 27.2963L145.169 9.94074L156.615 40.4444L168.941 6.78519L193.593 9.94074L206.799 37.2889H209"
          stroke="#EF2C5A"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_2_3733"
          x1={105}
          y1="-615.731"
          x2={105}
          y2={78}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EF2C5A" />
          <stop offset={1} stopColor="#EF2C5A" stopOpacity={0} />
        </linearGradient>
        <clipPath id="clip0_2_3733">
          <rect width={210} height={78} fill="white" />
        </clipPath>
      </defs>
    </svg>

    <p className="font-inter text-sm font-normal">This month</p>
    <h5 className="font-general-sans text-lg font-medium">₦1,652.50</h5>
  </div>
);
const Component4 = () => (
  <div className="text-dark ">
    <p>24 Aug - 01 Sep 21</p>
    <svg
  xmlns="http://www.w3.org/2000/svg"
  width={209}
  height={74}
  viewBox="0 0 209 74"
  fill="none"
  className="my-4"
>
  <g clipPath="url(#clip0_2_3741)">
    <path
      d="M208 28.5L194.892 32.5L182.876 16.5L171.406 32.5L156.66 37L143.551 31L132.628 52L111.327 34.5L94.942 27L82.38 52L69.8179 62L58.8945 43.5L44.6939 45.5L31.5858 9.5L19.0237 1L6.46174 43.5L1 37.3806"
      stroke="#EF2C5A"
      strokeLinecap="round"
    />
    <path
      d="M19.0237 1L6.46174 43.5L1 37.3806V74H208V28.5L194.892 32.5L182.876 16.5L171.406 32.5L156.66 37L143.551 31L132.628 52L111.327 34.5L94.942 27L82.38 52L69.8179 62L58.8945 43.5L44.6939 45.5L31.5858 9.5L19.0237 1Z"
      fill="url(#paint0_linear_2_3741)"
    />
  </g>
  <defs>
    <linearGradient
      id="paint0_linear_2_3741"
      x1="104.5"
      y1={-317}
      x2="104.5"
      y2={69}
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#EF2C5A" />
      <stop offset={1} stopColor="#EF2C5A" stopOpacity={0} />
    </linearGradient>
    <clipPath id="clip0_2_3741">
      <rect width={209} height={74} fill="white" />
    </clipPath>
  </defs>
</svg>

    <p className="font-inter text-sm font-normal">Last month</p>
    <h5 className="font-general-sans text-lg font-medium">₦1,652.50</h5>
  </div>
);

const componentsArray = [Component1, Component2, Component3, Component4];

const colorsArray = ["#FFFFFF", "#000000", "#FFFFFF", "#FFFFFF"];

const SalesOverview = () => (
  <section className="px-6 pt-20">
    <h5 className="text-[#1A1A1A] font-sans font-normal font-medium text-xl my-10">
      Sales overview
    </h5>

    <div className="flex flex-wrap justify-between">
      {componentsArray.map((Component, index) => (
        <div
          key={index}
          className="w-64 h-60 border-2 border-solid border-black rounded-lg flex flex-col  gap-8 p-4"
          style={{ backgroundColor: colorsArray[index] }}
        >
          <Component />
        </div>
      ))}
    </div>
  </section>
);

const Header = () => (
  <header className="border-b-2 border-solid border-[#EDEDED] bg-white">
    <div className="flex justify-end  gap-1 pr-6 py-4">
      <UserIcon />

      <DownArrow />

      <En />

      <DownArrow />
    </div>
  </header>
);
const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    className="mb-0"
  >
    <path
      d="M28.8434 15.9995C28.8434 23.0803 22.8319 28.8435 15.9995 28.8435C9.16708 28.8435 3.15552 23.0803 3.15552 15.9995C3.15552 8.90598 8.90595 3.15555 15.9995 3.15555C23.093 3.15555 28.8434 8.90598 28.8434 15.9995Z"
      stroke="#0A0A0A"
      strokeWidth={2}
    />
    <circle
      cx="15.9991"
      cy="10.8089"
      r="3.32624"
      stroke="#0A0A0A"
      strokeWidth={2}
    />
    <path
      d="M22.7872 20.7606C22.7872 21.2529 22.362 21.9679 21.0591 22.6193C19.816 23.2409 18.0287 23.6542 15.9999 23.6542C13.9711 23.6542 12.1838 23.2409 10.9407 22.6193C9.63784 21.9679 9.21271 21.2529 9.21271 20.7606C9.21271 20.2847 9.26521 19.9215 9.38689 19.6282C9.49973 19.3562 9.69298 19.093 10.0733 18.8467C10.9008 18.3107 12.5908 17.8669 15.9999 17.8669C19.409 17.8669 21.0991 18.3107 21.9266 18.8467C22.3069 19.093 22.5001 19.3562 22.613 19.6282C22.7347 19.9215 22.7872 20.2847 22.7872 20.7606Z"
      stroke="#0A0A0A"
      strokeWidth={2}
    />
  </svg>
);
const DownArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M6 10L12 16L18 10"
      stroke="#0A0A0A"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const En = () => (
  <span className="font-inter font-normal font-semibold font-size-4">En</span>
);

const SideBar = () => (
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
        <a href="#" className="flex items-center space-x-3  p-2  font-medium ">
          <span className="">
            <svg
              width={19}
              height={18}
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group 735">
                <path
                  id="Rectangle 146"
                  d="M4.46875 16.1563L4.46875 1.53125M4.46875 1.53125L1.46875 4.53125M4.46875 1.53125L7.46875 4.53125"
                  stroke="#0A0A0A"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Rectangle 147"
                  d="M14.1562 1.53125V16.1562M14.1562 16.1562L11.1562 13.1562M14.1562 16.1562L17.1562 13.1562"
                  stroke="#0A0A0A"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
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
              width={22}
              height={20}
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group 733">
                <rect
                  id="Rectangle 145"
                  x="1.25"
                  y="10.75"
                  width="4.5"
                  height="7.5"
                  stroke="#0A0A0A"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  id="Rectangle 146"
                  x="8.75"
                  y={7}
                  width="4.5"
                  height="11.25"
                  stroke="#0A0A0A"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  id="Rectangle 147"
                  x="16.25"
                  y="1.75"
                  width="4.5"
                  height="16.5"
                  stroke="#0A0A0A"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </span>
          <span>Analytics</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
        >
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8.22214 8.7627L10.6097 20.1111C10.6365 20.2329 10.6321 20.3594 10.597 20.479C10.5619 20.5986 10.4971 20.7074 10.4088 20.7953L9.5405 21.6773C9.45646 21.7632 9.35304 21.8276 9.23894 21.8651C9.12483 21.9026 9.00338 21.9122 8.88479 21.893C8.76621 21.8739 8.65397 21.8265 8.55752 21.7549C8.46106 21.6833 8.38322 21.5896 8.33053 21.4816L6.09658 16.8741"
                stroke="#0A0A0A"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.09685 16.8735C5.1236 17.0782 4.10886 16.888 3.27588 16.3446C2.4429 15.8012 1.8599 14.9491 1.65514 13.9759C1.45038 13.0026 1.64063 11.9879 2.18403 11.1549C2.72744 10.3219 3.5795 9.73891 4.55275 9.53415L8.22241 8.7621C8.22241 8.7621 13.2223 7.71018 17.1823 2.67134C17.2706 2.56036 17.3885 2.4767 17.5225 2.43006C17.6564 2.38342 17.8008 2.37571 17.939 2.40782C18.0771 2.43994 18.2033 2.51056 18.3029 2.6115C18.4026 2.71245 18.4715 2.83957 18.5018 2.97812L21.5051 17.2531C21.5332 17.3921 21.5213 17.5363 21.4708 17.6688C21.4203 17.8013 21.3332 17.9168 21.2198 18.0019C21.1063 18.0869 20.971 18.138 20.8296 18.1493C20.6882 18.1606 20.5466 18.1316 20.421 18.0656C14.7664 15.0495 9.76652 16.1014 9.76652 16.1014L6.09685 16.8735Z"
                stroke="#0A0A0A"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span>Marketing</span>
        </a>
      </li>
      <li>
        <a
          href=""
          className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
        >
          <span className=" text-gray-600">
            <svg
              width={18}
              height={24}
              viewBox="0 0 18 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group 699">
                <path
                  id="Vector 271"
                  d="M1.125 12.75V12.75C1.125 8.40076 4.65076 4.875 9 4.875H16.875M16.875 4.875L14.0956 1.5M16.875 4.875L14.0956 8.25"
                  stroke="#0A0A0A"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector 272"
                  d="M16.875 11.25V11.25C16.875 15.5992 13.3492 19.125 9 19.125H1.125M1.125 19.125L3.90441 22.5M1.125 19.125L3.90441 15.75"
                  stroke="#0A0A0A"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </span>
          <span>Exchange rates</span>
        </a>
      </li>

      <div className="text-gray-500 font-sans font-normal font-medium line-height-6 tracking-tight my-24">
        Accept payments
      </div>
      <li>
        <a
          href="#"
          className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
        >
          <span className="text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_3901_297)">
                <path
                  d="M7.5 21.75C8.32843 21.75 9 21.0784 9 20.25C9 19.4216 8.32843 18.75 7.5 18.75C6.67157 18.75 6 19.4216 6 20.25C6 21.0784 6.67157 21.75 7.5 21.75Z"
                  fill="#0A0A0A"
                />
                <path
                  d="M17.25 21.75C18.0784 21.75 18.75 21.0784 18.75 20.25C18.75 19.4216 18.0784 18.75 17.25 18.75C16.4216 18.75 15.75 19.4216 15.75 20.25C15.75 21.0784 16.4216 21.75 17.25 21.75Z"
                  fill="#0A0A0A"
                />
                <path
                  d="M3.96562 6.75H20.7844L18.3094 15.4125C18.2211 15.7269 18.032 16.0036 17.7711 16.2C17.5103 16.3965 17.1922 16.5019 16.8656 16.5H7.88437C7.55783 16.5019 7.2397 16.3965 6.97886 16.2C6.71803 16.0036 6.52893 15.7269 6.44062 15.4125L3.04688 3.54375C3.00203 3.38696 2.9073 3.24905 2.77704 3.15093C2.64677 3.05282 2.48808 2.99983 2.325 3H0.75"
                  stroke="#0A0A0A"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_3901_297">
                  <rect width={24} height={24} fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <span>Checkout</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
        >
          <span className="text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_3901_304)">
                <path
                  d="M11.4662 6.69381L13.3225 4.83756C14.1084 4.12124 15.1401 3.73529 16.2032 3.7599C17.2663 3.78451 18.279 4.2178 19.0309 4.96972C19.7829 5.72164 20.2161 6.73438 20.2408 7.79747C20.2654 8.86057 19.8794 9.89227 19.1631 10.6782L16.51 13.3219C16.1276 13.7057 15.6732 14.0103 15.1729 14.2181C14.6725 14.4259 14.1361 14.5328 13.5943 14.5328C13.0526 14.5328 12.5161 14.4259 12.0158 14.2181C11.5155 14.0103 11.0611 13.7057 10.6787 13.3219"
                  stroke="#0A0A0A"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.5344 17.3048L10.6782 19.1611C9.89228 19.8774 8.86057 20.2634 7.79748 20.2387C6.73438 20.2141 5.72164 19.7808 4.96972 19.0289C4.2178 18.277 3.78451 17.2643 3.7599 16.2012C3.73529 15.1381 4.12124 14.1064 4.83756 13.3205L7.49069 10.6767C7.87306 10.2929 8.32744 9.98837 8.82778 9.78058C9.32811 9.57279 9.86455 9.46582 10.4063 9.46582C10.9481 9.46582 11.4845 9.57279 11.9849 9.78058C12.4852 9.98837 12.9396 10.2929 13.3219 10.6767"
                  stroke="#0A0A0A"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_3901_304">
                  <rect width={24} height={24} fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <span>Payment Links</span>
        </a>
      </li>

      <div className="text-gray-500 font-sans font-normal font-medium line-height-6 tracking-tight my-24">
        Send payments
      </div>

      <li>
        <a
          href="#"
          className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
        >
          <span className="text-gray-600">
            <svg
              width={17}
              height={18}
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group 735">
                <path
                  id="Rectangle 146"
                  d="M1 4L15.625 4M15.625 4L12.625 0.999999M15.625 4L12.625 7"
                  stroke="#0A0A0A"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Rectangle 147"
                  d="M15.625 13.6875L1 13.6875M1 13.6875L4 10.6875M1 13.6875L4 16.6875"
                  stroke="#0A0A0A"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </span>
          <span>Wire</span>
        </a>
      </li>
    </ul>
  </div>
);
