import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { BsCartCheckFill } from "react-icons/bs";
import { FaRegSurprise } from "react-icons/fa";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import {
  AiOutlineShoppingCart,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import { useRef } from "react";
import { useRouter } from "next/router";

const Navbar = ({
  logout,
  user,
  cart,
  addToCart,
  removeFromCart,
  clearCart,
  subTotal,
}) => {
  const [dropdown, setDropdown] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const router = useRouter();
  useEffect(() => {
    Object.keys(cart).length !== 0 && setSidebar(true);
    let cool = [
      "/checkout",
      "/",
      "/orders",
      "/order",
      "/myaccount",
      "/forgot",
      "/login",
      "/signup",
    ];
    if (cool.includes(router.pathname)) {
      setSidebar(false);
    }
  }, []);

  // const toggleDropdown = () => {
  //   setDropdown(!dropdown);
  // };
  const toggleCart = () => {
    setSidebar(!sidebar);
    // if (ref.current.classList.contains("translate-x-full")) {
    //   ref.current.classList.remove("translate-x-full");
    //   ref.current.classList.add("translate-x-0");
    // } else if (!ref.current.classList.contains("translate-x-full")) {
    //   ref.current.classList.remove("translate-x-0");
    //   ref.current.classList.add("translate-x-full");
    // }
  };
  const ref = useRef();
  const togglebutttonnav = () => {
    let elems = document.querySelectorAll(".drohnav");
    [].forEach.call(elems, function (el) {
      el.classList.toggle("hidden");
    });
  };
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center shadow-2xl mb-1 sticky py-2 top-0 bg-gray-400 z-10">
      <div className="logo mx-5 flex flex-col justify-center text-center items-center">
        <Link href={"/"}>
          <Image
            src="/army_logo.png"
            alt="asd"
            width={"50"}
            height={"50"}
            priority
          ></Image>
        </Link>
        <Link href={"/"}>
          <p className="text-sm text-white">SERVE NATION</p>
        </Link>
      </div>
      <div className="nav">
        <ul className="flex space-x-10 md:ml-10 my-4 md:mt-0 font-bold md:text-md">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <div>
            <button
              onClick={togglebutttonnav}
              className="text-sm font-bold md:text-base text-center flex items-center"
              type="button"
            >
              About
              <BiChevronDown className="drohnav text-xl" />
              <BiChevronUp className="drohnav hidden text-xl" />
            </button>
            <div className="drohnav z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 flex flex-col absolute mt-2 bg-slate-200 rounded-md w-36">
                <Link
                  href={"/"}
                  className="px-4 py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-black"
                >
                  Indian Army
                </Link>
                <Link
                  href={"/"}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-black"
                >
                  Indian Navy
                </Link>
                <Link
                  href={"/"}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-black"
                >
                  Indian Air Force
                </Link>
              </ul>
            </div>
          </div>
          <Link href={"/tshirts"}>
            <li>Services</li>
          </Link>
          <Link href={"/tshirts"}>
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>
      <div className="cart absolute right-4 top-4 cursor-pointer flex">
        <span
          onMouseOver={() => {
            setDropdown(true);
          }}
          onMouseLeave={() => {
            setDropdown(false);
          }}
        >
          {dropdown && (
            <div
              onMouseOver={() => {
                setDropdown(true);
              }}
              onMouseLeave={() => {
                setDropdown(false);
              }}
              className="absolute right-8 top-7 rounded-md shadow-lg border shadow-slate-500 w-56 px-5 py-2 bg-slate-600"
            >
              <ul>
                <Link href={"/myaccount"}>
                  <li className="py-1 hover:text-white text-blue-100 font-bold">
                    My Account
                  </li>
                </Link>
                <Link href={"/orders"}>
                  <li className="py-1 hover:text-white text-blue-100 font-bold">
                    My Orders
                  </li>
                </Link>
                <li
                  onClick={logout}
                  className="py-1 hover:text-white text-blue-100 font-bold"
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
          {user.value && (
            <MdAccountCircle className=" text-xl md:text-3xl mx-3" />
          )}
        </span>
        {!user.value && (
          <Link href={"/login"}>
            <button className=" text-sm md:text-lg mx-3">Login</button>
          </Link>
        )}
        <AiOutlineShoppingCart
          onClick={toggleCart}
          className=" text-xl md:text-3xl"
        />
      </div>

      {/* Cart is start */}
      <div
        ref={ref}
        className={`sideCart px-2 absolute top-0 bg-slate-400 w-full h-fit md:w-3/5 lg:w-2/5 transform transition-all ${
          sidebar ? "right-0" : "-right-full"
        }`}
      >
        <h2 className="text-2xl font-bold my-5 mx-2">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-2 right-4 cursor-pointer"
        >
          <IoCloseSharp className="text-2xl font-extrabold mt-2" />
        </span>
        <hr />
        <ol className="list-disc ml-4 mr-2 font-serif font-semibold ">
          {Object.keys(cart).length == 0 && (
            <div className="text-2xl flex text-center justify-center mt-5 font-bold text-red-500">
              Oh! <FaRegSurprise className="mx-2 mt-1 " /> Your Cart is Empty...
            </div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="flex">
                  <div className="bg-red-500 w-2/3">
                    {cart[k].name}({cart[k].size}/{cart[k].varient})
                  </div>
                  <div className="bg-green-500 w-1/3 flex items-center justify-center text-lg">
                    <AiOutlineMinusCircle
                      onClick={() => {
                        removeFromCart(
                          k,
                          1,
                          cart[k].name,
                          cart[k].size,
                          cart[k].varient,
                          cart[k].price
                        );
                      }}
                      className="cursor-pointer"
                    />
                    <span className="mx-2">{cart[k].qty}</span>
                    <AiOutlinePlusCircle
                      onClick={() => {
                        addToCart(
                          k,
                          1,
                          cart[k].name,
                          cart[k].size,
                          cart[k].varient,
                          cart[k].price
                        );
                      }}
                      className="cursor-pointer"
                    />{" "}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        {/* <hr /> */}
        <div className="subTotal">Subtotal : ₹{subTotal}</div>
        <div className="flex space-x-5">
          <Link href={"/checkout"}>
            <button
              disabled={Object.keys(cart).length === 0}
              className="disabled:bg-gray-400 flex text-white bg-green-900 border-0 py-2 pl-3 pr-4 my-5 focus:outline-none hover:bg-green-800 rounded"
            >
              <BsCartCheckFill className="mx-1 text-lg" />
              checkout
            </button>
          </Link>
          <button
            disabled={Object.keys(cart).length === 0}
            onClick={clearCart}
            className="disabled:bg-gray-400 flex text-white bg-green-900 border-0 py-2 px-4 my-5 focus:outline-none hover:bg-green-800  rounded"
          >
            clear cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
