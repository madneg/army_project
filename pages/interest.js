import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dropdown } from "@nextui-org/react";
const Interest = () => {
  // Dropdow k liye
  const [ask, setAsk] = React.useState(
    new Set(["Highest Level Of Qualification"])
  );
  const [army, setArmy] = React.useState(new Set(["Select from here..."]));
  const [gender, setGender] = React.useState(new Set(["Select from here..."]));
  const [age, setAge] = React.useState(new Set(["Select from here..."]));

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
    console.log("lind;:", ask.anchorKey);
    if (ask.anchorKey && army.anchorKey && gender.anchorKey && age.anchorKey) {
      setDisabled(false);
      console.log("lllllll");
    } else {
      setDisabled(true);
      console.log("akhiii");
    }
  }, [ask, army, gender, age]);

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
    setAge(res.age);
    setGender(res.gender)
    setArmy(res.army)
  };
  const handleUserSubmit = async () => {
    let data = { token: user.token, ask, age, gender, army };
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
          <div className="md:flex md:space-x-5 px-2 w-1/2">
            <div className="mb-4">
              <div className="flex justify-center items-center leading-7 text-sm text-gray-600">
                Highest level of Qualification
              </div>
              <Dropdown>
                <Dropdown.Button
                  flat
                  color="secondary"
                  css={{
                    tt: "capitalize",
                  }}
                >
                  {selectedValue}
                </Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Single selection actions"
                  color="secondary"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={ask}
                  onSelectionChange={setAsk}
                >
                  <Dropdown.Item key="10th/ITI">10th / ITI</Dropdown.Item>
                  <Dropdown.Item key="12th">12th</Dropdown.Item>
                  <Dropdown.Item key="Diploma">Diploma</Dropdown.Item>
                  <Dropdown.Item key="Graduate">Graduate</Dropdown.Item>
                  <Dropdown.Item key="LAW Graduate">LAW Graduate</Dropdown.Item>
                  <Dropdown.Item key="BE/BTech/B.Arch">
                    BE / BTech / B.Arch
                  </Dropdown.Item>
                  <Dropdown.Item key="BA/BSC/BCA">BA / BSC / BCA</Dropdown.Item>
                  <Dropdown.Item key="MSC Computer">MSC Computer</Dropdown.Item>
                  <Dropdown.Item key="MA/MSc/MCA">MA / MSc / MCA</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="mb-4">
              <div className="flex justify-center items-center leading-7 text-sm text-gray-600">
                Forces type
              </div>
              <Dropdown>
                <Dropdown.Button
                  flat
                  color="secondary"
                  css={{
                    tt: "capitalize",
                  }}
                >
                  {army}
                </Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Single selection actions"
                  color="secondary"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={army}
                  onSelectionChange={setArmy}
                >
                  <Dropdown.Item key="Indian Army">Indian Army</Dropdown.Item>
                  <Dropdown.Item key="Indian Navy">Indian Navy</Dropdown.Item>
                  <Dropdown.Item key="Indian Air Force">
                    Indian Air Force
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="mb-4">
              <div className="flex justify-center items-center leading-7 text-sm text-gray-600">
                Select Gender
              </div>
              <Dropdown>
                <Dropdown.Button
                  flat
                  color="secondary"
                  css={{
                    tt: "capitalize",
                  }}
                >
                  {gender}
                </Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Single selection actions"
                  color="secondary"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={gender}
                  onSelectionChange={setGender}
                >
                  <Dropdown.Item key="Male">Male</Dropdown.Item>
                  <Dropdown.Item key="Female">Female</Dropdown.Item>
                  <Dropdown.Item key="Others">Others</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="mb-4">
              <div className="flex justify-center items-center leading-7 text-sm text-gray-600">
                Your Age
              </div>
              <Dropdown>
                <Dropdown.Button
                  flat
                  color="secondary"
                  css={{
                    tt: "capitalize",
                  }}
                >
                  {age}
                </Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Single selection actions"
                  color="secondary"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={age}
                  onSelectionChange={setAge}
                >
                  <Dropdown.Item key="Male">Male</Dropdown.Item>
                  <Dropdown.Item key="Female">Female</Dropdown.Item>
                  <Dropdown.Item key="Others">Others</Dropdown.Item>
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
