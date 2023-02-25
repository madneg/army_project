import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Interest from "./interest";
import Link from "next/link";

// import Product from "@/models/Product";
// import mongoose from "mongoose";
const Tshirts = () => {
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
    console.log("res.study:-", res.study);
    // setTenth(res.study);
    // console.log("tenth", tenth);
  };
  // toggle content
  const togglebuttton1 = () => {
    let elems = document.querySelectorAll(".nda");
    [].forEach.call(elems, function (el) {
      el.classList.toggle("hidden");
    });

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
  };
  const togglebuttton2 = () => {
    let elems = document.querySelectorAll(".tes");
    [].forEach.call(elems, function (el) {
      el.classList.toggle("hidden");
    });

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
  };
  return (
    <>
      <section className="lll container m-auto">
        <Interest />
        {(props.army === "Indian Army" || props.army === "Forces Type") && (
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
                    asymmetrical gentrify, subway tile poke farm-to-table.
                    Franzen you probably haven't heard of them man bun deep
                    jianbing selfies heirloom prism food truck ugh squid celiac
                    humblebrag.
                  </p>
                </div>
                {(props.study === "12th" ||
                  props.study === "Highest Qualification") &&
                  (props.gender === "Male" ||
                    props.gender === "Select Gender") &&
                  ((props.ageyear == 16 && props.agemonth >= 6) ||
                    (props.ageyear >= 17 && props.ageyear <= 18) ||
                    (props.ageyear == 19 && props.agemonth <= 5) ||
                    (props.ageyear == 19 &&
                      props.agemonth == 6 &&
                      props.agedate == 0) ||
                    props.ageyear === "-") && (
                    <div className="flex flex-wrap justify-center items-center my-5">
                      <div
                        onClick={togglebuttton1}
                        className="xl:w-1/3 lg:w-1/3 md:w-1/2 w-full px-8 my-2 mx-2 py-6 border-l-2 border-gray-200 border-opacity-60 bg-slate-300 rounded-xl shadow-sm hover:bg-stone-300 hover:shadow-lg hover:rounded-md cursor-pointer"
                      >
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
                            <b>Qualification - </b> 10+2
                          </div>
                        </div>
                      </div>
                      <div
                        onClick={togglebuttton2}
                        className="xl:w-1/3 lg:w-1/3 md:w-1/2 w-full px-8 my-2 mx-2 py-6 border-l-2 border-gray-200 border-opacity-60 bg-slate-300 rounded-xl shadow-sm hover:bg-stone-300 hover:shadow-lg hover:rounded-md cursor-pointer"
                      >
                        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                          Technical Entry Scheme
                        </h2>
                        <div className="flex mb-2">
                          <div className="leading-relaxed text-base font-semibold">
                            <b> Age - </b>16½-19½ Years
                          </div>
                        </div>
                        <div className="flex mb-2">
                          <div className="leading-relaxed text-base">
                            <b>Qualification - </b> 10+2 (70% marks with PCM)
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Button
                </button>
              </div>
            </section>
          </>
        )}
      </section>
      {/* pop up data */}
      <div className="flex flex-wrap justify-center items-center my-5">
        <div className="container nda hidden border border-black mx-auto md:top-1/3 bg-slate-400 fixed z-50 justify-center text-center md:w-2/3 lg:w-1/2 md:h-1/2 w-5/6 h-1/2 top-1/4 overflow-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
          hic velit veniam cum minima aliquam at. Consequatur tenetur fugit eos
          sed dolor corporis, blanditiis minima provident, voluptatum eligendi
          adipisci atque repellendus veritatis reprehenderit. Impedit, hic neque
          temporibus architecto nulla voluptatum unde consequatur repellendus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          deleniti ex Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Aut odio ipsa fugiat quis tempore possimus, recusandae dolor obcaecati
          iure! Ipsa dolores pariatur est necessitatibus tenetur! Delectus
          tenetur hic placeat excepturi? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Odio dignissimos animi, doloremque distinctio
          corrupti aut quia nostrum suscipit excepturi impedit recusandae iste
          unde rerum eius exercitationem, molestias quis libero repellat
          officiis officia! Iure animi repellat odio sapiente aliquid
          cupiditate! Dolore quia porro ea aspernatur accusantium iure ratione
          illum eius expedita!
          <div onClick={togglebuttton1}> xxxx</div>
        </div>
        <div className="container tes hidden border border-black mx-auto md:top-1/3 bg-slate-400 fixed z-50 justify-center text-center md:w-2/3 lg:w-1/2 md:h-1/2 w-5/6 h-1/2 top-1/4 overflow-auto">
          tes Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Similique hic velit veniam cum minima aliquam at. Consequatur tenetur
          fugit eos sed dolor corporis, blanditiis minima provident, voluptatum
          eligendi adipisci atque repellendus veritatis reprehenderit. Impedit,
          hic neque temporibus architecto nulla voluptatum unde consequatur
          repellendus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Numquam deleniti ex Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Aut odio ipsa fugiat quis tempore possimus,
          recusandae dolor obcaecati iure! Ipsa dolores pariatur est
          necessitatibus tenetur! Delectus tenetur hic placeat excepturi? Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Odio dignissimos
          animi, doloremque distinctio corrupti aut quia nostrum suscipit
          excepturi impedit recusandae iste unde rerum eius exercitationem,
          molestias quis libero repellat officiis officia! Iure animi repellat
          odio sapiente aliquid cupiditate! Dolore quia porro ea aspernatur
          accusantium iure ratione illum eius expedita!
          <div onClick={togglebuttton2}> xxxx</div>
        </div>
      </div>
    </>
  );
};
// export async function getServerSideProps(context) {
//   if (!mongoose.connections[0].readyState) {
//     await mongoose.connect(process.env.MONGO_URL);
//   }
//   let products = await Product.find({ study: "10th / ITI" });
//   let tshirts = {};
//   for (let item of products) {
//     if (item.title in tshirts) {
//       if (
//         !tshirts[item.title].color.includes(item.color) &&
//         item.availableQty > 0
//       ) {
//         tshirts[item.title].color.push(item.color);
//       }
//       if (
//         !tshirts[item.title].size.includes(item.size) &&
//         item.availableQty > 0
//       ) {
//         tshirts[item.title].size.push(item.size);
//       }
//     } else {
//       tshirts[item.title] = JSON.parse(JSON.stringify(item));
//       if (item.availableQty > 0) {
//         tshirts[item.title].color = [item.color];
//         tshirts[item.title].size = [item.size];
//       } else {
//         tshirts[item.title].color = [];
//         tshirts[item.title].size = [];
//       }
//     }
//   }
//   return {
//     props: { products: JSON.parse(JSON.stringify(tshirts)) }, // will be passed to the page component as props
//   };
// }
export default Tshirts;
