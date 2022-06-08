import React, { useState } from "react";
import { toast } from "react-toastify";

const AddNewUser = () => {
  const [fName, setFName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [userName, setUserName] = useState("");
  // validation
  // const handleFullName = (event) => {
  //   if (event.target.value !== "") {
  //     setFName(event.target.value);
  //   } else {
  //     setFName("");
  //   }
  // };

  const handleEvent = (setValue,event) => {
    if (event.target.value !== "") {
      setValue(event.target.value);
    } else {
      setValue("");
    }
  };

  const handleToSubmit= async(event)=>{
    event.preventDefault()
      await fetch("https://jsonplaceholder.typicode.com/users",{
        method:"POST",
        body:JSON.stringify({
          name:fName,
          email:email,
          phone:phone,
          username:userName,
          address:{
            city:city
          }
        }),headers:{
          "Content-type":"application/json"
        }
      }).then(res=>res.json()).then(data=>{
        toast.success(`${data?.name} Added. Id ${data?.id}`)
        event.target.reset();
      })
      .catch((err)=>console.log(err))
    
  }
  return (
    <>
      <section className="container my-16">
        <h2 className="text-center text-3xl font-bold text-green-600 my-10">
          Add A New User
        </h2>
        <form onSubmit={handleToSubmit} class="w-full mx-auto max-w-lg">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Full Name
              </label>
              <input
                className={`"appearance-none block w-full bg-gray-200 ${fName?"":'border-red-500'}  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"`}
                id="grid-first-name"
                type="text"
                placeholder="Jane Doe"
                onBlur={(e)=>handleEvent(setFName,e)}
              />
              {fName ? (
                ""
              ) : (
                <p class="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              )}
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full  md:w-1/2  px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Email
              </label>
              <input
                className={`"appearance-none block w-full bg-gray-200 text-gray-700 border ${email?"":"border-red-500"} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"`}
                id="grid-first-name"
                type="email"
                placeholder="yourname@mail.com"
                required
                onBlur={(e)=>handleEvent(setEmail,e)}
              />
              { email?"":<p class="text-red-500 text-xs italic">
                Please fill out this field.
              </p>}
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Phone
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="number"
                placeholder="0123456789"
                onBlur={e=>handleEvent(setPhone,e)}
              />
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="userName"
              >
                User Name
              </label>
              <input
                placeholder="ema123"
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                name="phone"
                onBlur={e=>handleEvent(setUserName,e)}

              />
            </div>
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"

              >
                City
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                placeholder="Albuquerque"
                onBlur={e=>handleEvent(setCity,e)}
              />
            </div>
          </div>
          <div class="w-full mx-auto md:w-1/2 px-3 mt-10">
            <button type="submit" disabled={!fName||!email}
            className="btn btn-success text-white">
              Add a new user
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddNewUser;
