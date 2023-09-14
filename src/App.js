import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <div className="flex flex-col items-center w-full mx-auto  ">
      <h1 className="font-bold text-5xl text-center my-4">React Form </h1>
      <form onSubmit={submitHandler} className="w-[60%] my-4 mx-auto ">
        <label htmlFor="firstName" className="font-semibold text-xl">
          First Name:
        </label>
        <br />
        <input
          type="text"
          placeholder="Pranjali"
          name="firstName"
          value={formData.firstName}
          id="firstName"
          onChange={changeHandler}
          className=" w-[100%] px-2 py-1 rounded-md border-2 active:bg-gray-200 focus:outline-sky-500 mb-2  transition-all duration-500 mt-1"
        />
        <br />
        <label htmlFor="lastName" className="font-semibold text-xl">
          Last Name:
        </label>
        <br />
        <input
          type="text"
          placeholder="Sargar"
          name="lastName"
          value={formData.lastName}
          id="lastName"
          onChange={changeHandler}
          className=" w-[100%] px-2 py-1 rounded-md border-2 active:bg-gray-200 focus:outline-sky-500 mb-2  transition-all duration-500 mt-1"
        />
        <br />
        <label htmlFor="email" className="font-semibold text-xl">
          Email:
        </label>
        <br />
        <input
          type="text"
          placeholder="xyz@abcd.com"
          name="email"
          value={formData.email}
          id="email"
          onChange={changeHandler}
          className=" w-[100%] px-2 py-1 rounded-md border-2 active:bg-gray-200 focus:outline-sky-500 mb-2  transition-all duration-500 mt-1"
        />
        <br />
        <label htmlFor="country" className="font-semibold text-xl">
          Country:
        </label>
        <br />
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className=" w-[100%] px-2 py-1 rounded-md border-2 active:bg-gray-200 focus:outline-sky-500 mb-2 transition-all duration-500 mt-1"
        >
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
        </select>

        <br />
        <label htmlFor="streetAddress" className="font-semibold text-xl">
          Street Address:
        </label>
        <br />
        <input
          type="text"
          placeholder="1234 Main St"
          name="streetAddress"
          value={formData.streetAddress}
          id="streetAddress"
          onChange={changeHandler}
          className=" w-[100%] px-2 py-1 rounded-md border-2 active:bg-gray-200 focus:outline-sky-500 mb-2  transition-all duration-500 mt-1"
        />

        <br />
        <label htmlFor="city" className="font-semibold text-xl">
          City:
        </label>
        <br />
        <input
          type="text"
          placeholder="Panvel"
          name="city"
          value={formData.city}
          id="city"
          onChange={changeHandler}
          className=" w-[100%] px-2 py-1 rounded-md border-2 active:bg-gray-200 focus:outline-sky-500 mb-2  transition-all duration-500 mt-1"
        />

        <br />
        <label htmlFor="state" className="font-semibold text-xl">
          State / Province:
        </label>
        <br />
        <input
          type="text"
          placeholder="Maharashtra"
          name="state"
          value={formData.state}
          id="state"
          onChange={changeHandler}
          className=" w-[100%] px-2 py-1 rounded-md border-2 active:bg-gray-200 focus:outline-sky-500 mb-2  transition-all duration-500 mt-1"
        />

        <br />
        <label htmlFor="zip" className="font-semibold text-xl">
          ZIP / Postal Code:
        </label>
        <br />
        <input
          type="text"
          placeholder="410206"
          name="zip"
          value={formData.zip}
          id="zip"
          onChange={changeHandler}
          className=" w-[100%] px-2 py-1 rounded-md border-2 active:bg-gray-200 focus:outline-sky-500 mb-2  transition-all duration-500 mt-1"
        />

        {/* fieldset 1 */}
        <br></br>
        <br />
        <fieldset>
          <legend className="font-semibold text-xl my-4">By Email:</legend>
          <div className="flex flex-row  gap-4 ">
            <input
              type="checkbox"
              onChange={changeHandler}
              name="comments"
              id="comments"
              checked={formData.comments}
              className="w-6 h-6  text-blue-600 bg-gray-100 border-gray-300 rounded-md focus:ring-blue-500 dark:focus:ring-blue-600 mt-2"
            />

            <div className=" ">
              <label
                htmlFor="comments"
                className="font-semibold text-xl mt-0 pt-0"
              >
                Comments
              </label>
              <p className="opacity-60">
                Get notified when someone posts comment on posting
              </p>
            </div>
          </div>

          <br></br>
          <div className="flex flex-row gap-4 ">
            <input
              type="checkbox"
              onChange={changeHandler}
              name="candidates"
              id="candidates"
              checked={formData.candidates}
              className="w-6 h-6  text-blue-600 bg-gray-100 border-gray-300 rounded-md focus:ring-blue-500 dark:focus:ring-blue-600 mt-2"
            />
            <div>
              <label htmlFor="candidates" className="font-semibold text-xl">
                Candidates
              </label>
              <p className="opacity-60">
                Get notified when a candidate applies for a job
              </p>
            </div>
          </div>

          <br></br>
          <div className="flex flex-row gap-4  ">
            <input
              type="checkbox"
              onChange={changeHandler}
              name="offers"
              id="offers"
              checked={formData.offers}
              className="w-6 h-6  text-blue-600 bg-gray-100 border-gray-300 rounded-md focus:ring-blue-500 dark:focus:ring-blue-600 mt-2"
            />
            <div>
              <label htmlFor="offers" className="font-semibold text-xl">
                Offers
              </label>
              <p className="opacity-60">
                Get notified when a candidate accepts or rejects a job
              </p>
            </div>
          </div>
        </fieldset>
        <br></br>
        {/* fieldset radio */}
        <fieldset>
          <legend className="font-semibold text-xl">Push Notifications </legend>
          <p className="opacity-60 mb-3">
            These are delivered via SMS to your mobile phone
          </p>

          <input
            type="radio"
            name="pushNotifications"
            id="pushEveryThing"
            onChange={changeHandler}
            value="Everything"
            className="ml-0 w-5 h-5 mr-3 text-sm font-xl text-gray-900 dark:text-gray-300 align-text-top"
          ></input>
          <label htmlFor="pushEveryThing" className="font-semibold text-xl">
            Everything
          </label>
          <br></br>
          <input
            type="radio"
            name="pushNotifications"
            id="pushEmail"
            onChange={changeHandler}
            value="Same as Email"
            className="ml-0 w-5 h-5 mr-3 text-sm font-xl text-gray-900 dark:text-gray-300 align-text-top"
          ></input>
          <label htmlFor="pushEmail" className="font-semibold text-xl">
            Same as Email
          </label>

          <br></br>
          <input
            type="radio"
            name="pushNotifications"
            id="pushNothing"
            onChange={changeHandler}
            value="No push Notifications"
            className="ml-0 w-5 h-5 mr-3 text-sm font-xl text-gray-900 dark:text-gray-300 align-text-top"
          ></input>
          <label htmlFor="pushNothing" className="font-semibold text-xl">
            No push Notifications
          </label>
        </fieldset>

        <div className="w-[100%] text-center mt-12">
          <button className="bg-blue-500 p-2 text-white rounded font-bold  w-[60%]  text-center text-2xl hover:bg-opacity-70 mx-auto tracking-wider uppercase">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
