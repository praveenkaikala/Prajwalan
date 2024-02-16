import React, { useContext, useState } from "react";
import { mycontext } from "../App";
import { Button } from "@mui/material";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  useFormikContext,
  useFormik,
} from "formik";
import * as Yup from "yup";
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";
import Modal from "./Modal";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const validationSchema = Yup.object().shape({
  otp: Yup.string()
    .required("OTP is required")
    .matches(/^\d{6}$/, "OTP must be a 6-digit number"),
});

// Define the initial form values
const initialValues = {
  otp: "",
};
const Login = () => {

  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [email, setemail] = useState("");
  const [disable, setdisable] = useState(true);
  const [sendotp, setSendOtp] = useState(false);
  const { setislogin } = useContext(mycontext);
  const [login, setLogin] = useState(true);
  const [msg,setMsg] = useState("");

 
  const handleOnClose = () => {
    setOpenModal(false);
  };
  const handleLoginSuccess = () => {
    // setislogin(true);

    sessionStorage.setItem("isLogin", "true");
   
  };

  return (
    <div>
      {login ? (
        // Login form
        <div className="flex min-h-full flex-1 flex-col justify-center px-6  lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm w-100p border-1 border-black  bg-white p-5 rounded-lg shadow-2xl">
            
            <Formik
              initialValues={{
                userName: "",
                password: "",
              }}
              validationSchema={Yup.object({
                userName: Yup.string().required("Username is required"),
                password: Yup.string().required("Password is required"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                const data = {
                  userName: values.userName,
                  password: values.password,
                };
                setLoading(true)
                 axios.post("http://localhost:8082/api/v1/auth/authenticate",data, {
                  headers: {
                    "Content-Type": "application/json"
                  }
                }).then((response)=>{
                  setLoading(false)
                  if(response.status===200)
                  {
                    console.log(response.data.token);
                      sessionStorage.setItem("token",response.data.token);
                    setLogin(true);
                    window.location.href = "/ideas"
                    setMsg("");
                  }
                  else{
                    setOpenModal(true);
                  }
                }).catch((err)=>{
                  setLoading(false);
                  setMsg("Email or Password incorrect");
                })
               
              }}
            >
              <Form className="space-y-6 w-100p">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-semibold  leading-6 text-gray-900"
                  >
                    Username
                  </label>
                  <div className="mt-1">
                    <Field
                      id="username"
                      name="userName"
                      type="text"
                      autoComplete="username"
                      className="block w-100p rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <ErrorMessage
                      name="userName"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm  leading-6 text-gray-900 font-semibold"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      className="block w-100p px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>

                <div className="w-100p  justify-center flex flex-col gap-3">
                  {
                    msg.length >0 && 
                <p className="text-red-500 text-center font-semibold">{msg}</p>
                  }
                  <button
                    type="submit"
                    onClick={handleLoginSuccess}
                    className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-[100%]"
                  >
                  { loading?<CircularProgress color="secondary" /> : <p>Login</p>}
                  </button>
                </div>
              </Form>
            </Formik>

            <p className="mt-10 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <button
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                onClick={() => setLogin(false)}
              >
                Register
              </button>
            </p>
          </div>
        </div>
      ) : (
        // Registration form
        <div className="flex flex-1 flex-col justify-center  lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-semibold text-gray-900 capitalize">
              Create your account
            </h2>
          </div>
          <div className="mt-8 sm:mx-auto w-80p sm:max-w-md">
            <div className="bg-white py-8 px-4  sm:rounded-lg sm:px-10 shadow-2xl">
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  userName: "",
                  password: "",
                }}
                validationSchema={Yup.object({
                  firstname: Yup.string().required("Name is required"),
                  lastName: Yup.string().required("Name is required"),
                  email: Yup.string()
                    .email("Invalid email address")
                    .required("Email is required"),
                  username: Yup.string().required("Username is required"),
                  password: Yup.string()
                    .required("Password is required")
                    .min(6, "Password must be at least 6 characters"),
                })}
                onSubmit={(values, { setSubmitting }) => {
                  const data = {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    userName: values.userName,
                    password: values.password,
                  };
                  setemail(values.email);
                  setSubmitting(true);
                  setLoading(true)
                   axios.post("http://localhost:8082/api/v1/auth/register", data, {
                    headers: {
                      "Content-Type": "application/json"
                    }
                  }).then((response) => {
                    setLoading(false)
                    if(response.status===200){
                      console.log(response.data.token);
                      sessionStorage.setItem("token",response.data.token);
                      setOpenModal(true);
                      
                    }
                    console.log(response.data);
                  }).catch((error) => {
                    console.error(error);
                  });
                }}
              >
                <Form className="space-y-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      FirstName
                    </label>
                    <Field
                      id="firstName"
                      name="firstName"
                      type="text"
                      autoComplete="name"
                      className="appearance-none block w-100p px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      LastName
                    </label>
                    <Field
                      id="lastName"
                      name="lastName"
                      type="text"
                      autoComplete="name"
                      className="appearance-none block w-100p px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="flex w-100p flex-col">
                      <div className="flex w-100p">
                        <div className="flex flex-col w-100p ">
                          <Field
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="appearance-none block w-100p px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-red-500 text-sm"
                          />
                        </div>

                       
                      </div>

            
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="userName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Username
                    </label>
                    <Field
                      id="username"
                      name="username"
                      type="text"
                      autoComplete="username"
                      className="appearance-none block w-100p px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      className="appearance-none block w-100p px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      style={{width:"100%!important"}}
                      className="w-[100%] flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      { loading?<CircularProgress color="secondary" /> : <p>Register</p>}
                    </button>
                  </div>
                </Form>
              </Formik>
              <p className="mt-10 text-center text-sm text-gray-500">
                Already have an account?{" "}
                <button
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 w-[100%]"
                  onClick={() => setLogin(true)}
                >
                  Login
                </button>
              </p>
            </div>

            {openModal && (
              <Modal isOpen={openModal} onClose={handleOnClose}>
                <h2 className="text-center font-bold">Verify OTP</h2>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    const data = {
                      email: email,
                      otp: values.otp,
                    };
                    axios
                      .post(
                        "http://localhost:8082/api/v1/auth/validate-otp",
                        data,
                        {
                          headers: {
                            "Content-Type": "application/json",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.status === 200) {
                          setOpenModal(false);
                          sessionStorage.setItem("userdata",JSON.stringify(response.data))
                          window.location.href = "/ideas";
                          
                        }
                      });
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <div className="mb-4">
                        <label
                          htmlFor="otp"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Enter OTP:
                        </label>
                        <Field
                          type="text"
                          name="otp"
                          className="border border-gray-300 rounded-lg p-2 w-full"
                        />
                        <ErrorMessage
                          name="otp"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                      >
                        Verify
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-3"
                        onClick={() => {
                          const data = {
                            email: email,
                          };
                        }}
                      >
                        ReSend Otp
                      </button>
                    </Form>
                  )}
                </Formik>
              </Modal>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
