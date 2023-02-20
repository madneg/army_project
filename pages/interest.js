import React from "react";
import "flowbite";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dropdown } from "@nextui-org/react";
const Interest = () => {
  const [agedate, setAgeDate] = useState("-");
  const [agemonth, setAgeMonth] = useState("-");
  const [ageyear, setAgeYear] = useState("-");
  // age calculator
  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function ageCalculate() {
    let today = new Date();
    let inputDate = new Date(document.getElementById("date-input").value);
    let birthMonth, birthDate, birthYear;
    let birthDetails = {
      date: inputDate.getDate(),
      month: inputDate.getMonth() + 1,
      year: inputDate.getFullYear(),
    };
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDate = today.getDate();

    leapChecker(currentYear);

    if (
      birthDetails.year > currentYear ||
      (birthDetails.month > currentMonth && birthDetails.year == currentYear) ||
      (birthDetails.date > currentDate &&
        birthDetails.month == currentMonth &&
        birthDetails.year == currentYear)
    ) {
      alert("Not Born Yet");
      displayResult("-", "-", "-");
      return;
    }

    birthYear = currentYear - birthDetails.year;

    if (currentMonth >= birthDetails.month) {
      birthMonth = currentMonth - birthDetails.month;
    } else {
      birthYear--;
      birthMonth = 12 + currentMonth - birthDetails.month;
    }

    if (currentDate >= birthDetails.date) {
      birthDate = currentDate - birthDetails.date;
    } else {
      birthMonth--;
      let days = months[currentMonth - 2];
      birthDate = days + currentDate - birthDetails.date;
      if (birthMonth < 0) {
        birthMonth = 11;
        birthYear--;
      }
    }
    displayResult(birthDate, birthMonth, birthYear);
    setAgeDate(birthDate);
    setAgeMonth(birthMonth);
    setAgeYear(birthYear);
    console.log("dfgdfg", birthDate, birthMonth, birthYear);
    console.log("ah: ", birthDate, birthMonth, birthYear);
  }

  function displayResult(bDate, bMonth, bYear) {
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("days").textContent = bDate;
  }

  function leapChecker(year) {
    if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
      months[1] = 29;
    } else {
      months[1] = 28;
    }
  }
  // Dropdow k liye
  const [study, setStudy] = useState("Highest Level Of Qualification");
  const [gender, setGender] = useState("Select Gender");
  const [army, setArmy] = useState("Forces Type");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState({ value: null });
  const [disabled, setDisabled] = useState(true);
  const router = useRouter();

  useEffect(() => {
    console.log("study;:", study);
    console.log("gender;:", gender);
    console.log("army;:", army);
    console.log("agedate", agedate);
    console.log("agemonth", agemonth);
    console.log("ageyear", ageyear);
    if (
      study !== "Highest Level Of Qualification" &&
      army !== "Forces Type" &&
      gender !== "Select Gender" &&
      agedate !== "-" &&
      agemonth !== "-" &&
      ageyear !== "-"
    ) {
      setDisabled(false);
      console.log("lllllll");
    } else {
      setDisabled(true);
      console.log("akhiii");
    }
  }, [study, army, gender, agedate, agemonth, ageyear]);

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
    setStudy(res.study);
    setAgeDate(res.agedate);
    setAgeMonth(res.agemonth);
    setAgeYear(res.ageyear);
    setGender(res.gender);
    setArmy(res.army);
  };
  const handleUserSubmit = async () => {
    let data = {
      token: user.token,
      study,
      agedate,
      agemonth,
      ageyear,
      gender,
      army,
    };
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateinterest`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log("zzzzz", a);
    let res = await a.json();
    console.log(res);
    if (res.success) {
      toast.success("Sucessfully Updated...", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeonClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const handleItemClick = (itemName) => {
    setStudy(itemName);
    togglebuttton1();
  };
  const handleItemClickgender = (itemName) => {
    setGender(itemName);
    togglebuttton11();
  };
  const handleItemClickarmy = (itemName) => {
    setArmy(itemName);
    togglebuttton111();
  };
  const togglebuttton1 = () => {
    let elems = document.querySelectorAll(".droh1");
    [].forEach.call(elems, function (el) {
      el.classList.toggle("hidden");
    });
    let elems1 = document.querySelectorAll(".droh2");
    [].forEach.call(elems1, function (el) {
      el.classList.add("hidden");
    });
    let elems2 = document.querySelectorAll(".droh3");
    [].forEach.call(elems2, function (el) {
      el.classList.add("hidden");
    });
  };
  const togglebuttton11 = () => {
    let elems = document.querySelectorAll(".droh11");
    [].forEach.call(elems, function (el) {
      el.classList.toggle("hidden");
    });
    let elems1 = document.querySelectorAll(".droh22");
    [].forEach.call(elems1, function (el) {
      el.classList.add("hidden");
    });
    let elems2 = document.querySelectorAll(".droh33");
    [].forEach.call(elems2, function (el) {
      el.classList.add("hidden");
    });
  };
  const togglebuttton111 = () => {
    let elems = document.querySelectorAll(".droh111");
    [].forEach.call(elems, function (el) {
      el.classList.toggle("hidden");
    });
    let elems1 = document.querySelectorAll(".droh222");
    [].forEach.call(elems1, function (el) {
      el.classList.add("hidden");
    });
    let elems2 = document.querySelectorAll(".droh333");
    [].forEach.call(elems2, function (el) {
      el.classList.add("hidden");
    });
  };
  const togglebuttton2 = () => {
    let elems = document.querySelectorAll(".droh2");
    [].forEach.call(elems, function (el) {
      el.classList.toggle("hidden");
    });
    let elems1 = document.querySelectorAll(".droh3");
    [].forEach.call(elems1, function (el) {
      el.classList.add("hidden");
    });
  };
  const togglebuttton3 = () => {
    let elems = document.querySelectorAll(".droh3");
    [].forEach.call(elems, function (el) {
      el.classList.toggle("hidden");
    });
    let elems1 = document.querySelectorAll(".droh2");
    [].forEach.call(elems1, function (el) {
      el.classList.add("hidden");
    });
  };
  return (
    <>
      <section className="container m-auto">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeonClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <h1 className="flex justify-center items-center font-bold text-2xl my-5 md:mt-10">
          Enter your interest
        </h1>
        <h2 className="font-bold text-xl">1. Your current details </h2>
        <div className="mx-auto flex my-2">
          <div className="md:flex md:space-x-5 px-2 w-1/2">
            <div className="mb-4">
              <div className="flex justify-center items-center leading-7 text-sm text-gray-600">
                Highest level of Qualification
              </div>
              <button
                onClick={togglebuttton1}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                {study}
                <svg
                  className="w-4 h-4 ml-2"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div className="droh1 my-2 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => handleItemClick("10th / ITI")}
                  >
                    10th / ITI
                  </li>
                  <li
                    onClick={() => handleItemClick("12th")}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    12th
                  </li>
                  <li
                    onClick={() => handleItemClick("Diploma")}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Diploma
                  </li>
                  <li>
                    <button
                      onClick={togglebuttton2}
                      type="button"
                      className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      U.G
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <div className="droh2 absolute mx-36 -my-6 z-10 hidden bg-white rounded-lg shadow w-36 dark:bg-gray-700">
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        <li
                          onClick={() => handleItemClick("Graduate")}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Graduate
                        </li>
                        <li
                          onClick={() => handleItemClick("LAW Graduate")}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          LAW Graduate
                        </li>
                        <li
                          onClick={() => handleItemClick("BE / BTech / B.Arch")}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          BE / BTech / B.Arch
                        </li>
                        <li
                          onClick={() => handleItemClick("BA / BSC / BCA")}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          BA / BSC / BCA
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <button
                      onClick={togglebuttton3}
                      type="button"
                      className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      P.G
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <div className="droh3 absolute mx-36 -my-6 z-10 hidden bg-white rounded-lg shadow w-36 dark:bg-gray-700">
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        <li
                          onClick={() => handleItemClick("MSC Computer")}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          MSC Computer
                        </li>
                        <li
                          onClick={() => handleItemClick("MA / MSc / MCA")}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          MA / MSc / MCA
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-center items-center leading-7 text-sm text-gray-600">
                Select Gender
              </div>
              <button
                onClick={togglebuttton11}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                {gender}
                <svg
                  className="w-4 h-4 ml-2"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div className="droh11 my-2 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-28 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => handleItemClickgender("Male")}
                  >
                    Male
                  </li>
                  <li
                    onClick={() => handleItemClickgender("Female")}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Female
                  </li>
                  <li
                    onClick={() => handleItemClickgender("Others")}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Others
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-center items-center leading-7 text-sm text-gray-600">
                Forces Type
              </div>
              <button
                onClick={togglebuttton111}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                {army}
                <svg
                  className="w-4 h-4 ml-2"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div className="droh111 my-2 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => handleItemClickarmy("Indian Army")}
                  >
                    Indian Army
                  </li>
                  <li
                    onClick={() => handleItemClickarmy("Indian Navy")}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Indian Navy
                  </li>
                  <li
                    onClick={() => handleItemClickarmy("Indian AirForce")}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Indian AirForce
                  </li>
                </ul>
              </div>
            </div>
            <div className="inputs-wrapper">
              <input type="date" id="date-input" />
              <button onClick={ageCalculate}>Calculate</button>
            </div>
            <div className="outputs-wrapper">
              <div>
                <span id="years">{ageyear}</span>
                <p>Years</p>
              </div>
              <div>
                <span id="months">{agemonth}</span>
                <p>Months</p>
              </div>
              <div>
                <span id="days">{agedate}</span>
                <p>Days</p>
              </div>
            </div>
          </div>
        </div>

        <button
          disabled={disabled}
          onClick={handleUserSubmit}
          className="flex text-white disabled:bg-green-400 bg-green-700 border-0 py-2 pl-3 pr-4 mt-3 mb-6 mx-2 focus:outline-none hover:bg-green-800 rounded"
        >
          submit
        </button>
      </section>
    </>
  );
};

export default Interest;
