import React from "react";
import { Link } from "react-router-dom";
import { Formik, useFormik } from "formik";
import { singUpValid } from "../validation";
import { Helmet } from "react-helmet-async";
import { useAddUserMutation } from "../features/api/authApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialstate = {
  fname: "",
  lname: "",
  email: "",
  password: "",
  byear: "",
  bmonth: "",
  bday: "",
  gender: "",
};

const RegstrationForm = () => {
  const [addUser, { isLodding }] = useAddUserMutation();
  const notify = (message) => toast.success(message);
  const errorTost = (message) => toast.error(message);

  // regstration funcation

  const regstration = async () => {
    const singupMutation = await addUser({
      fname: formik.values.fname,
      lname: formik.values.lname,
      email: formik.values.email,
      password: formik.values.password,
      byear: formik.values.byear,
      bmonth: formik.values.bmonth,
      bday: formik.values.bday,
      gender: formik.values.gender,
    });
    console.log(singupMutation);
    notify(singupMutation?.data?.message)
    errorTost(singupMutation?.error?.data?.error)
  };

  //formik
  const formik = useFormik({
    initialValues: initialstate,
    validationSchema: singUpValid,
    onSubmit: () => {
      regstration();
      console.log("sing up");
     
    },
  });
  // error handleing
  const { errors, touched } = formik;

  // Date of Birth

  const tempDate = new Date().getFullYear();
  const Years = Array.from(new Array(105), (val, index) => tempDate - index);
  const Month = Array.from(new Array(12), (val, index) => 1 + index);
  const day = () => {
    return new Date(formik.values.byear, formik.values.bmonth, 0).getDate();
  };
  const GetDates = Array.from(new Array(day()), (val, index) => 1 + index);
  
  return (
    <>
      <ToastContainer />
      <Helmet>
        <title>Regstration</title>
      </Helmet>
      <div className="w-4/5">
        <form onSubmit={formik.handleSubmit}>
          <input
            className={
              errors.fname && touched.fname
                ? "w-full py-4 px-2 border border-gray-500-400 rounded-md focus:outline-none"
                : "w-full py-4 px-2 border border-gray-500-400 rounded-md mb-5 focus:outline-none"
            }
            placeholder="Frist Name"
            type="text"
            name="fname"
            autoComplete="off"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.fname}
          />
          {errors.fname && touched.fname && (
            <p className="text-red-500 py-2">{errors.fname}</p>
          )}
          <input
            className={
              errors.lname && touched.lname
                ? "w-full py-4 px-2 border border-gray-500-400 rounded-md focus:outline-none"
                : "w-full py-4 px-2 border border-gray-500-400 rounded-md mb-5 focus:outline-none"
            }
            placeholder="Last Name"
            type="text"
            name="lname"
            autoComplete="off"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.lname}
          />
          {errors.lname && touched.lname && (
            <p className="text-red-500 py-2">{errors.lname}</p>
          )}
          <input
            className={
              errors.email && touched.email
                ? "w-full py-4 px-2 border border-gray-500-400 rounded-md focus:outline-none"
                : "w-full py-4 px-2 border border-gray-500-400 rounded-md mb-5 focus:outline-none"
            }
            placeholder="example@gamil.com"
            type="email"
            name="email"
            autoComplete="off"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {errors.email && touched.email && (
            <p className="text-red-500 py-2">{errors.email}</p>
          )}
          <input
            className={
              errors.password && touched.password
                ? "w-full py-4 px-2 border border-gray-500-400 rounded-md focus:outline-none"
                : "w-full py-4 px-2 border border-gray-500-400 rounded-md mb-5 focus:outline-none"
            }
            placeholder="Password"
            type="password"
            name="password"
            autoComplete="off"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {errors.password && touched.password && (
            <p className="text-red-500 py-2">{errors.password}</p>
          )}
          {/* Radio button */}
          <div className="">
            <input
              type="radio"
              id="male"
              name="gender"
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
              name="gender"
              autoComplete="off"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value="female"
            />
            <label className="mx-2" htmlFor="female">
              Female
            </label>
          </div>
          {errors.gender && touched.gender && (
            <p className="text-red-500 py-2">{errors.gender}</p>
          )}
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
              <option>Year</option>
              {Years.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>

            <select
              name="bmonth"
              autoComplete="off"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.bmonth}
              className="border border-gray-500 w-[33%]"
            >
              <option>Month</option>
              {Month.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
            <select
              name="bday"
              autoComplete="off"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.bday}
              className="border border-gray-500 w-[33%]"
            >
              <option>Date</option>
              {GetDates.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
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
                to="/login"
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
    </>
  );
};

export default RegstrationForm;

//
