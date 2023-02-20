import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dropdown } from "@nextui-org/react";
import Interest from "./interest";
import Link from "next/link";
const Tshirts = () => {
  const [tenth, setTenth] = useState("Select from here...");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState({ value: null });
  const [disabled, setDisabled] = useState(true);
  const router = useRouter();

  // useEffect(() => {
  //   const myuser = JSON.parse(localStorage.getItem("myuser"));
  //   if (myuser && myuser.token) {
  //     setUser(myuser);
  //     setEmail(myuser.email);
  //     fetchData(myuser.token);
  //   }
  //   if (!myuser) {
  //     router.push("/");
  //   }
  // }, []);

  const fetchData = async (token) => {
    let data = { token: token };
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log("zzzzz", a);
    let res = await a.json();
    console.log("res:-", res);
    console.log("res.ask:-", res.ask);
    setTenth(res.ask);
  };
  return (
    <>
      <section className="container m-auto">
        <Interest />
        {tenth === "10th/ITI" && (
          <>
            <section className="text-gray-600 body-font">
              <div className="container px-3 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                  <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1">
                    Your Qualification :{tenth}
                  </h2>
                  <h1 className="sm:text-3xl py-2 text-2xl font-medium title-font mb-4 text-gray-900">
                    You can achieve the following Goals
                  </h1>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Whatever cardigan tote bag tumblr hexagon brooklyn
                    asymmetrical gentrify, subway tile poke farm-to-table.
                    Franzen you probably haven't heard of them man bun deep
                    jianbing selfies heirloom prism food truck ugh squid celiac
                    humblebrag.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center items-center my-5">
                  <div className="xl:w-1/3 lg:w-1/3 md:w-1/2 max-w-md px-8 my-2 mx-2 py-6 border-l-2 border-gray-200 border-opacity-60 bg-slate-300 rounded-xl shadow-sm hover:bg-stone-300 hover:shadow-lg hover:rounded-md">
                    <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                      National Defence Academy
                    </h2>
                    <div className="flex mb-2">
                      <div className="leading-relaxed text-base font-semibold">
                        <b> Age - </b>16½-19½ Years
                      </div>
                    </div>
                    <div className="flex mb-2">
                      <div className="leading-relaxed text-base">
                        <b>Qualification - </b> 10+2 Fingerstache flexitarian
                        street art 8-bit waistcoat. Distillery hexagon disrupt
                        edison bulbche.
                      </div>
                    </div>
                    <Link
                      href={"/"}
                      className="text-indigo-500 inline-flex items-center"
                    >
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                  <div className="xl:w-1/3 lg:w-1/3 md:w-1/2 max-w-md px-8 my-2 mx-2 py-6 border-l-2 border-gray-200 border-opacity-60  bg-slate-300 rounded-xl shadow-sm hover:bg-stone-300 hover:rounded-md">
                    <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                      The Catalyzer
                    </h2>
                    <p className="leading-relaxed text-base mb-4">
                      Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.
                    </p>
                    <a className="text-indigo-500 inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                  <div className="xl:w-1/3 lg:w-1/3 md:w-1/2 max-w-md px-8 my-2 mx-2 py-6 border-l-2 border-gray-200 border-opacity-60 bg-slate-300 rounded-xl shadow-sm hover:bg-stone-300 hover:rounded-md">
                    <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                      Neptune
                    </h2>
                    <p className="leading-relaxed text-base mb-4">
                      Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.
                    </p>
                    <a className="text-indigo-500 inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                  <div className="xl:w-1/3 lg:w-1/3 md:w-1/2 max-w-md px-8 my-2 mx-2 py-6 border-l-2 border-gray-200 border-opacity-60 bg-slate-300 rounded-xl shadow-sm hover:bg-stone-300 hover:rounded-md">
                    <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                      Neptune
                    </h2>
                    <p className="leading-relaxed text-base mb-4">
                      Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.
                    </p>
                    <a className="text-indigo-500 inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                  {/* <div className="xl:w-1/3 lg:w-1/3 md:w-1/2 max-w-md px-8 my-2 py-6 border-l-2 border-gray-200 border-opacity-60 bg-slate-300 rounded-xl shadow-sm hover:bg-stone-300 hover:rounded-md">
                    <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                      Neptune
                    </h2>
                    <p className="leading-relaxed text-base mb-4">
                      Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.
                    </p>
                    <a className="text-indigo-500 inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div> */}
                </div>

                <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Button
                </button>
              </div>
            </section>
          </>
        )}
      </section>
    </>
  );
};

export default Tshirts;
