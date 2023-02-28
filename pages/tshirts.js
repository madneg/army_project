import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RxCross2 } from "react-icons/rx";
import { BsArrowRight } from "react-icons/bs";
import Interest from "./interest";
import Link from "next/link";
import Product from "@/models/Product";
import mongoose from "mongoose";

const Tshirts = ({ products }) => {
  console.log("pppp", products);
  const [email, setEmail] = useState("");
  const [user, setUser] = useState({ value: null });
  const [disabled, setDisabled] = useState(true);
  const router = useRouter();
  const {
    query: { study, gender, army, agedate, agemonth, ageyear },
  } = router;
  const props = { study, gender, army, agedate, agemonth, ageyear };
  console.log("llmm age:-", props.ageyear);
  console.log("llmm month:-", props.agemonth);
  if (props.ageyear == 16) {
    console.log("agemonth ka test");
  }

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

  // const fetchData = async (token) => {
  //   let data = { token: token };
  //   let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getproducts`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });
  //   console.log("zzzzz", a);
  //   let res = await a.json();
  //   // console.log("res:-", res);
  //   // console.log("res.study:-", res.study);
  //   // setTenth(res.study);
  //   // console.log("tenth", tenth);
  // };
  // toggle content
  function blur() {
    let elems1 = document.querySelectorAll(".lll");
    [].forEach.call(elems1, function (el) {
      el.classList.toggle("blur-lg");
      el.classList.toggle("pointer-events-none");
      if (el.classList.contains("blur-lg")) {
        window.onscroll = function () {
          window.scrollTo(0, 0);
        };
      } else {
        window.onscroll = function () {};
      }
    });
  }
  return (
    <>
      <section className="lll container m-auto">
        <Interest />
        <>
          <section className="text-gray-600 body-font">
            <div className="container px-3 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1">
                  Your Qualification :{props.study}
                </h2>
                <h1 className="sm:text-3xl py-2 text-2xl font-medium title-font mb-4 text-gray-900 dark:text-gray-100">
                  You can achieve the following Goals
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-gray-300">
                  Whatever cardigan tote bag tumblr hexagon brooklyn
                  asymmetrical gentrify, subway tile poke farm-to-table. Franzen
                  you probably haven't heard of them man bun deep jianbing
                  selfies heirloom prism food truck ugh squid celiac humblebrag.
                </p>
              </div>
              <div className="flex flex-wrap justify-center items-center my-5">
                {Object.keys(products).map((item) => {
                  return (
                    (props.army === products[item].army ||
                      props.army === "Forces Type") &&
                    (props.study === products[item].study ||
                      props.study === "Highest Qualification") &&
                    (props.gender === products[item].gender ||
                      props.gender === "Select Gender") &&
                    ((props.ageyear == 16 && props.agemonth >= 6) ||
                      (props.ageyear >= 17 && props.ageyear <= 18) ||
                      (props.ageyear == 19 && props.agemonth <= 5) ||
                      (props.ageyear == 19 &&
                        props.agemonth == 6 &&
                        props.agedate == 0) ||
                      props.ageyear === "-") && (
                      <div
                        key={products[item]._id}
                        onClick={() => {
                          const elems = document.querySelectorAll(
                            `.${products[item].slug}`
                          );
                          [].forEach.call(elems, function (el) {
                            el.classList.toggle("hidden");
                          });
                          blur();
                        }}
                        className="xl:w-1/3 lg:w-1/3 md:w-1/2 w-full px-8 my-2 mx-2 py-6 border-l-2 border-gray-200 border-opacity-60 bg-slate-300 rounded-xl shadow-sm hover:bg-stone-300 hover:shadow-lg hover:rounded-md cursor-pointer"
                      >
                        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                          {products[item].title}
                        </h2>
                        <div className="flex mb-2">
                          <div className="leading-relaxed text-base font-semibold">
                            <b> Age - </b>
                            {products[item].title_age}
                          </div>
                        </div>
                        <div className="flex mb-2">
                          <div className="leading-relaxed text-base">
                            <b>Qualification - </b>
                            {products[item].title_qualification}
                          </div>
                        </div>
                        <div className="flex mb-2">
                          <div className="leading-relaxed text-base">
                            <b>Eligibility - </b>
                            {products[item].title_eligibility}
                          </div>
                        </div>
                        <div className="flex mb-2">
                          <div className="leading-relaxed text-base">
                            <b>Post - </b>
                            {products[item].title_post}
                          </div>
                        </div>
                      </div>
                    )
                  );
                })}
              </div>
              <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
            </div>
          </section>
        </>
      </section>
      {/* pop up data */}
      <div className="flex flex-wrap justify-center items-center my-5">
        {Object.keys(products).map((item) => {
          return (
            <div
              key={products[item]._id}
              className={`container ${products[item].slug} hidden md:mx-auto rounded-xl md:top-1/4 fixed z-50 justify-center text-center md:w-2/3 lg:w-1/2 w-11/12 md:h-auto h-5/6 top-28 overflow-auto shadow-2xl dark:shadow-white shadow-slate-700`}
            >
              <div className="relative bg-white dark:bg-gray-700">
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {products[item].title}
                  </h3>
                  <div
                    onClick={() => {
                      const elems = document.querySelectorAll(
                        `.${products[item].slug}`
                      );
                      [].forEach.call(elems, function (el) {
                        el.classList.toggle("hidden");
                      });
                      blur();
                    }}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-2xl font-bold p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                  >
                    <RxCross2 />
                  </div>
                </div>
                <div className="p-4 ">
                  <div className="text-md font-semibold">Selection Process</div>
                  <p className="text-base mb-3 leading-relaxed justify-start text-left text-gray-500 dark:text-gray-400">
                    The entrance test of the NDA is held twice a year i.e. NDA-I
                    and NDA-II. The first notification is issued in January and
                    the second notification comes around June. The first
                    entrance exam is conducted around April and the second
                    around September. NDA application form comprises of two
                    parts. The examination is conducted by the Union Public
                    Service Commission (UPSC) and the interested candidates can
                    apply online at the official website
                    <Link
                      href={"https://www.upsc.gov.in"}
                      target={"_blank"}
                      className={"text-blue-500 px-2"}
                    >
                      https://www.upsc.gov.in
                    </Link>
                  </p>

                  <div className="text-md font-semibold">
                    Physical and Medical
                  </div>
                  <div className="text-base mb-2 leading-relaxed justify-start text-start text-gray-500 dark:text-gray-400">
                    <ul>
                      <ol className="list-disc ml-2">
                        <li>
                          Good physical and mental health and free from any
                          disease / disability
                        </li>
                        <li>
                          The candidate should not under weight and overweight.
                        </li>
                        <li>
                          Male (157 and 162.5 cm & 42.5 - 66.5 kgs) and Female
                          (152 and 162.5 cm & 40 - 66.5 kgs)
                        </li>
                      </ol>
                    </ul>
                  </div>
                  <div className="text-md font-semibold">
                    Written Requirement
                  </div>
                  <div className="text-base leading-relaxed justify-start text-start text-gray-500 dark:text-gray-400">
                    The entrance for National Defence Academy comprises of a
                    written exam followed by and Intelligence and Personality
                    test. The written test consists of two paper.
                    <ul>
                      <ol className="list-disc ml-2">
                        <li>Mathematics</li>
                        <li>The General Ability Test</li>
                        <li>Test/Interview</li>
                      </ol>
                    </ul>
                  </div>
                </div>

                <Link href={"/nda"}>
                  <span
                    onClick={() => {
                      const elems = document.querySelectorAll(
                        `.${products[item].slug}`
                      );
                      [].forEach.call(elems, function (el) {
                        el.classList.toggle("hidden");
                      });
                      blur();
                    }}
                    className="text-green-500 flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
                  >
                    Learn More <BsArrowRight className="mx-4 text-2xl" />
                  </span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="container tes hidden mx-auto md:top-1/3 fixed z-50 justify-center text-center md:w-2/3 lg:w-1/2 md:h-1/2 w-5/6 h-1/2 top-1/4 overflow-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Terms of Service tes
            </h3>
            <div
              onClick={togglebuttton2}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-2xl font-bold p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <RxCross2 />
            </div>
          </div>
          <div className="p-6 space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>

          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              I accept
            </button>
            <button
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Decline
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
};
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URL);
  }
  let products = await Product.find();
  return {
    props: { products: JSON.parse(JSON.stringify(products)) }, // will be passed to the page component as props
  };
}
export default Tshirts;
