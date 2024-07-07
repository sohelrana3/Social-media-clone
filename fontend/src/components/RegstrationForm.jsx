import React from "react";
import { Link } from "react-router-dom";
import { Formik, useFormik } from "formik";
import { singUpValid } from "../validation";

const initialstate = {
  fname: "",
  //   lname: "",
  //   email: "",
  //   password: "",
  //   byear: "",
  //   bmonth: "",
  //   bday: "",
  //   gender: "",
};

const RegstrationForm = () => {
  const formik = useFormik({
    initialValues: initialstate,
    validationSchema: singUpValid,
    onSubmit: () => {
      console.log("sing up");
    },
  });

  console.log(formik);
  return (
    <div className="w-4/5">
      <form onSubmit={formik.handleSubmit}>
        <input
          className="w-full py-4 px-2 border border-gray-500-400 rounded-md mb-5 focus:outline-none"
          placeholder="Frist Name"
          type="text"
          name="fname"
          autoComplete="off"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.fname}
        />
        <input
          className="w-full py-4 px-2 border border-gray-500-400 rounded-md mb-5 focus:outline-none"
          placeholder="Last Name"
          type="text"
          name="lname"
          autoComplete="off"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.lname}
        />
        <input
          className="w-full py-4 px-2 border border-gray-500-400 rounded-md mb-5 focus:outline-none"
          placeholder="example@gamil.com"
          type="email"
          name="email"
          autoComplete="off"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <input
          className="w-full py-4 px-2 border border-gray-500-400 rounded-md mb-5 focus:outline-none"
          placeholder="Password"
          type="password"
          name="password"
          autoComplete="off"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {/* Radio button */}
        <div className="mb-4">
          <input
            type="radio"
            id="male"
            name="Gender"
            autoComplete="off"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value="male"
          />
          <label className="mx-2" htmlFor="male">
            Male
          </label>
          <input
            type="radio"
            id="female"
            name="Gender"
            autoComplete="off"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value="female"
          />
          <label className="mx-2" htmlFor="female">
            Female
          </label>
        </div>
        {/* birthday */}
        <div className="flex gap-x-7">
          <select
            name="byear"
            autoComplete="off"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.byear}
            className="border border-gray-500 w-[33%]"
          >
            <option>Birthday Of Year</option>
            <option>1995</option>
            <option>1996</option>
            <option>1997</option>
          </select>
          <select
            name="bmonth"
            autoComplete="off"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.bmonth}
            className="border border-gray-500 w-[33%]"
          >
            <option>Birthday Of Month</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <select
            name="bday"
            autoComplete="off"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.bday}
            className="border border-gray-500 w-[33%]"
          >
            <option>Birthday Of Day</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>

        {/* submit button */}
        <div className="flex justify-between items-center pt-4">
          <input
            className="px-4 py-2 bg-blue-500 w-full rounded-md border  text-white font-semibold hover:bg-white hover:text-blue-500  hover:border hover:border-blue-500 delay-200 cursor-pointer"
            type="submit"
          />
        </div>
        {/* <!-- Register link & Forgot Password -->  */}
        <div className="flex justify-between">
          {/* <!-- Register link --> */}
          <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
            Don't have an account?
            <Link
              to="#"
              className="text-blue-500 underline text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
            >
              Login
            </Link>
          </p>
          <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
            <Link
              to="#"
              className=" text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
            >
              Forgot password
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegstrationForm;

//
