import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillHome, AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/fontawesome.min.css"
/>;

const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="bg-white items-center w-full">
          <footer className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
              <div className="md:mx-0 mx-auto text-center md:text-left">
                <Link href={"/"}>
                  <Image
                    src="/army_logo.png"
                    alt="asd"
                    width={"70"}
                    height={"70"}
                  ></Image>
                </Link>
                <p className="mt-2 text-sm text-gray-500">SERVENATION</p>
              </div>
              <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h2 className="title-font font-bold text-yellow-700 tracking-widest text-base mb-3">
                    ABOUT
                  </h2>
                  <nav className="list-none mb-10">
                    <div className="mt-2">
                      <Link
                        href={"/"}
                        className="text-gray-600 hover:text-gray-800"
                      >
                        Indian Army
                      </Link>
                    </div>
                    <div className="mt-2">
                      <Link
                        href={"/"}
                        className="text-gray-600 hover:text-gray-800"
                      >
                        Indian Navy
                      </Link>
                    </div>
                    <div className="mt-2">
                      <Link
                        href={"/"}
                        className="text-gray-600 hover:text-gray-800"
                      >
                        Indian Air Force
                      </Link>
                    </div>
                  </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h2 className="title-font font-bold text-yellow-700 tracking-widest text-base mb-3">
                    SERVICES
                  </h2>
                  <nav className="list-none mb-10">
                    <div className="mt-2">
                      <Link
                        href={"/tshirts"}
                        className="text-gray-600 hover:text-gray-800"
                      >
                        Armed services
                      </Link>
                    </div>
                  </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h2 className="title-font font-extrabold tracking-widest text-base mb-3 text-yellow-700">
                    USEFULL LINKS
                  </h2>
                  <nav className="list-none mb-10">
                    <div className="mt-2">
                      <Link
                        href={"/"}
                        className="text-gray-600 hover:text-gray-800"
                      >
                        Home
                      </Link>
                    </div>
                    <div className="mt-2">
                      <Link
                        href={"/"}
                        className="text-gray-600 hover:text-gray-800"
                      >
                        Contact Us
                      </Link>
                    </div>
                    <div className="mt-2">
                      <Link
                        href={"/"}
                        className="text-gray-600 hover:text-gray-800"
                      >
                        Indian Air Force
                      </Link>
                    </div>
                  </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h2 className="title-font font-bold text-yellow-700 tracking-widest text-base mb-3">
                    Contact Us
                  </h2>
                  <div className="list-none">
                    <div>
                      <AiFillHome />
                      Pilani,Rajasthan-333031,India
                    </div>
                    <p>
                      <AiOutlineMail />
                      asassociates0412@gmail.com
                    </p>
                    <p>
                      <BsFillTelephoneFill />
                      +91 7988505655
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-2 md:overflow-hidden" />
            <div className="bg-gray-100 flex flex-wrap flex-row sm:flex-col">
              <div className="flex flex-col justify-center items-center mt-3 space-y-2 md:mx-[50px] md:flex-row md:justify-between">
                <div className="text-center text-lg md:space-x-1">
                  {" "}
                  <a
                    className="w-9 h-10 pt-1 m-2 md:ml-2 md:mr-0 inline-block border-1 rounded-lg text-white bg-blue-500 hover:bg-white hover:text-blue-500"
                    href="https://twitter.com/ASassociates041"
                    target={"_blank"}
                  >
                    <li className="fa fa-twitter"></li>
                  </a>{" "}
                  <a
                    className="w-9 h-10 pt-1 m-2 inline-block border-1 rounded-lg text-white bg-orange-500 hover:bg-white hover:text-orange-500"
                    href="https://www.instagram.com/asassociates0412/"
                    target={"_blank"}
                  >
                    <li className="fa fa-lg fa-instagram"></li>
                  </a>{" "}
                  <a
                    className="w-9 h-10 pt-1 m-2 inline-block border-1 rounded-lg text-white bg-red-500 hover:bg-white hover:text-red-500"
                    href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                    target={"_blank"}
                  >
                    <li className="fa fa-linkedin"></li>
                  </a>{" "}
                  <a
                    className="w-9 h-10 pt-[5px] m-2 inline-block border-1 rounded-lg text-white bg-purple-500 hover:bg-white hover:text-purple-500"
                    href="https://t.me/happykamboj001"
                    target={"_blank"}
                  >
                    <li className="fa fa-lg fa-telegram"></li>
                  </a>{" "}
                  <a
                    className="w-9 h-10 pt-[5px] m-2 inline-block border-1 rounded-lg text-white bg-cyan-500 hover:bg-white hover:text-cyan-500"
                    href="https://www.facebook.com/people/AS-Associates/100088730226561/?is_tour_completed=true"
                    target={"_blank"}
                  >
                    <li className="fa fa-facebook"></li>
                  </a>{" "}
                </div>
                <p className="text-gray-500 text-sm text-center ml-4 sm:text-left md:absolute md:right-10">
                  Copyright © 2023 All right reserved by —
                  <a
                    href="/"
                    target="_blank"
                    className="text-yellow-400 font-extrabold px-2 text-base cursor-pointer"
                  >
                    serveind.com
                  </a>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
    </>
  );
};

export default Footer;
