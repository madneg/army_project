import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dropdown } from "@nextui-org/react";
import { v4 as uuidv4 } from "uuid";
const Interest = () => {
  // Dropdow k liye
  // const [ask, setAsk] = React.useState(new Set([""]));
  const [ask, setAsk] = React.useState("");
  const selectedValue = React.useMemo(
    () => Array.from(ask).join("").replaceAll("_", " "),
    [ask]
  );

  const [email, setEmail] = useState("");
  const [user, setUser] = useState({ value: null });
  const [disabled, setDisabled] = useState(true);
  const router = useRouter();
  useEffect(() => {
    console.log("lindsdfdsf;:", ask);
    console.log("lind;:", ask);
    if (ask.anchorKey) {
      setDisabled(false);
      console.log("lllllll");
    } else {
      setDisabled(true);
      console.log("akhiii");
    }
  }, [ask]);
  useEffect(() => {
    const myuser = JSON.parse(localStorage.getItem("myuser"));
    if (myuser && myuser.token) {
      setUser(myuser);
      setEmail(myuser.email);
      fetchData(myuser.token);
    }
    if (!myuser) {
      router.push("/");
    }
  }, []);

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
    setAsk(res.ask);
  };
  const handleUserSubmit = async () => {
    let data = { token: user.token, ask };
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
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <section className="container m-auto">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
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
          <div className="px-2 w-1/2">
            <div className="mb-4">
              <label htmlFor="ask" className="leading-7 text-sm text-gray-600">
                Highest level of Qualification
              </label>
              <Dropdown id={uuidv4()} className="w-24 bg-slate-900">
                <Dropdown.Button
                  flat
                  color="secondary"
                  css={{
                    tt: "capitalize",
                    width: "$30",
                  }}
                >
                  {selectedValue}
                  {/* {ask} */}
                </Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Single selection actions"
                  color="secondary"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={ask}
                  onSelectionChange={setAsk}
                >
                  <Dropdown.Item key="text">Text</Dropdown.Item>
                  <Dropdown.Item key="number">Number</Dropdown.Item>
                  <Dropdown.Item key="date">Date</Dropdown.Item>
                  <Dropdown.Item key="single_date">Single Date</Dropdown.Item>
                  <Dropdown.Item key="iteration">Iteration</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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
