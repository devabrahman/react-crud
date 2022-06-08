import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const fetchURL = `https://jsonplaceholder.typicode.com/users/${id}`;

  const [fName, setFName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    await fetch(fetchURL)
      .then((res) => res.json())
      .then((data) => {
        setFName(data.name);
        setEmail(data?.email);
        setPhone(data?.phone);
        setUserName(data.username);
        setCity(data?.address?.city);
      });
  };

  const handleEvent = (setValue, event) => {
    if (event.target.value !== "") {
      setValue(event.target.value);
    } else {
      setValue("");
    }
  };

  const handleToSubmit = async (event) => {
    event.preventDefault();
    await fetch(fetchURL, {
      method: "PUT",
      body: JSON.stringify({
        name: fName,
        email: email,
        phone: phone,
        username: userName,
        address: {
          city: city,
        },
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success(`${data?.name} Updated. Id ${data?.id}`);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <section className="container my-16">
        <h2 className="text-center text-3xl font-bold text-green-600 my-10">
          Hello {fName}
        </h2>
        <form onSubmit={handleToSubmit} className="w-full mx-auto max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Full Name
              </label>
              <input
                className={`"appearance-none block w-full bg-gray-200 ${
                  fName ? "" : "border-red-500"
                }  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"`}
                id="grid-first-name"
                type="text"
                value={fName}
                placeholder="Jane Doe"
                onChange={(e) => handleEvent(setFName, e)}
              />
              {fName ? (
                ""
              ) : (
                <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full  md:w-1/2  px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Email
              </label>
              <input
                className={`"appearance-none block w-full bg-gray-200 text-gray-700 border ${
                  email ? "" : "border-red-500"
                } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"`}
                id="grid-first-name"
                type="email"
                placeholder="yourname@mail.com"
                required
                value={email}
                onChange={(e) => handleEvent(setEmail, e)}
              />
              {email ? (
                ""
              ) : (
                <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              )}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Phone
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="0123456789"
                value={phone}
                onChange={(e) => handleEvent(setPhone, e)}
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="userName"
              >
                User Name
              </label>
              <input
                placeholder="ema123"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                name="phone"
                value={userName}
                onChange={(e) => handleEvent(setUserName, e)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                City
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                placeholder="Albuquerque"
                value={city}
                onChange={(e) => handleEvent(setCity, e)}
              />
            </div>
          </div>
          <div className="w-full mx-auto md:w-1/2 px-3 mt-10">
            <button
              type="submit"
              disabled={!fName || !email}
              className="btn btn-success text-white"
            >
              Update user
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default EditUser;
