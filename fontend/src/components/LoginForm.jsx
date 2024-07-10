import React from "react";
import { json, Link, useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";
import { loginValid } from "../validation";
import { Helmet } from "react-helmet-async";
import { useLoggedUserMutation } from "../features/api/authApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { LogginUser } from "../features/users/authSlice";

const initialstate = {
  email: "",
  password: "",
};

const loginForm = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const [loggedUser, { isLodding }] = useLoggedUserMutation();
  const notify = (message) => toast.success(message);
  const errorTost = (message) => toast.error(message);

  // Login funcation
  const Login = async () => {
    const loginMutation = await loggedUser({
      email: formik.values.email,
      password: formik.values.password,
    });

    if (loginMutation?.data) {
      notify(loginMutation?.data?.message);
    }
    errorTost(loginMutation?.error?.data?.message);
    const { message, ...rest } = loginMutation.data;
    localStorage.setItem("user", JSON.stringify(rest));
    dispatch(LogginUser(rest));

    navigator("/");
  };

  //formik
  const formik = useFormik({
    initialValues: initialstate,
    validationSchema: loginValid,
    onSubmit: () => {
      Login();
      console.log("sing up");
    },
  });
  console.log(formik);
  // error handleing
  const { errors, touched } = formik;

  return (
    <>
      <ToastContainer />
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="w-4/5">
        <form onSubmit={formik.handleSubmit}>
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
                to="/"
                className="text-blue-500 underline text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
              >
                Regsitration
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

export default loginForm;
