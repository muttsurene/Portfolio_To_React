import React from "react";

function Contact() {
  <div className="text-white">
    <img
      className="fixed object-cover inset-0 -z-10"
      src="https://images.unsplash.com/photo-1697300357972-2a37a8995cb4?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Background"
    />
    <div navbar="bg-black/30">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 item-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-items-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus-outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            ></button>
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open main menu</span>
            <svg
              className="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <svg
              className="hidden h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="flex flex-1  px-0 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto mx-3"
                src="../react-2.png"
                alt="react"
              ></img>
              <img className="h-8 w-auto" src="../mark.svg" alt="Tailwindcss" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="hover:bg-black/30 text-white rounded-md px-5 py-5 text-sm font-medium"
                  aria-current="page"
                >
                  Home Page
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-black/30 hover:text-white rounded-md px-5 py-5 text-sm font-medium"
                >
                  Contact Page
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-black/30 hover:text-white rounded-md px-5 py-5 text-sm font-medium"
                >
                  Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col min-h-screen">
        <div className="flex-1 px-0 mx-5">
          <div className="h-screen grid grid-cols-3 gap-5 mx-4">
            <div className="col-span-2">
              <div className="bg-black/30 max-w-4xl rounded-[40px] p-5 h-[75%] mb-[30%] mt-16">
                <h1 className="font-bold font-serif ml-11 p-10">
                  Roman A. Soledad Jr
                </h1>
                <h2 className="font-bold font-serif ml-12 text-4xl p-2">
                  HELLO! I'm Roman
                </h2>
                <div className="flex p-5">
                  <p className="text-1xl text-justify px-10">
                    A Computer Engineer, Graduated at Bulacan State University
                    and I'm 24 years old. I love building tools that are
                    user-friendly, simple, delightful. <br />
                    <br />A dedicated student with a strong work ethics and
                    passion of learning who seeks steady growth in the computer
                    engineering industry where I am fully utilize my skills and
                    knowledge, gained experiences and further enhance them to
                    contribute to my development as an individual.
                  </p>
                  <img
                    className="h-[50%] ml-auto p-2 rounded-[40px] w-[30%]"
                    src="../Roman A. Soledad Jr-2x2Pic.jpg"
                    alt=""
                  />
                </div>
                <div className="flex gap-2 ml-[6%]">
                  <img
                    className="h-[40px]"
                    src="../linkedin.svg"
                    alt="Likedin image"
                  />
                  <a
                    className="font-serif mt-2"
                    href="https://www.linkedin.com/in/soledad-jr-roman-a-14b891209/"
                  >
                    Likedin
                  </a>
                  <img
                    className="h-[40px]"
                    src="../github.svg"
                    alt="Github image"
                  />
                  <a
                    className="font-serif mt-2"
                    href="https://github.com/muttsurene"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="bg-black/30 max-w-4xl rounded-[40px] p-4 h-[75%] mb-[30%] mt-16">
                <h1 className="font-serif text-2xl p-2 text-center">
                  MY SKILLS
                </h1>
                <img
                  className="h-[90px] p-2"
                  src="../react-2.png"
                  alt="This is HTML image"
                />
                <img
                  className="h-[90px]"
                  src="../tailwindcss.png"
                  alt="This is HTML image"
                />
                <img
                  className="h-[80px]"
                  src="../html.png"
                  alt="This is HTML image"
                />
                <img
                  className="h-[110px] p-4"
                  src="../css.png"
                  alt="This is HTML image"
                />
                <img
                  className="h-[110px] p-4"
                  src="../sql.png"
                  alt="This is HTML image"
                />
                <img
                  className="h-[90px] p-2"
                  src="../php.png"
                  alt="This is HTML image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export default Contact;
