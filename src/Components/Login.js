import React, { useContext, useState } from 'react';
import { mycontext } from '../App';
import { Button } from '@mui/material';
import { Formik, Form, Field, ErrorMessage, useFormikContext, useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {


  
  // const formik=useFormik({
  //   initialValues:{
  //     name: '',
  //     email: '',
  //     username: '',
  //     password: '',
  //     otp: ''
  //   }
  // })
  const [disable,setdisable]=useState(true)
  const [sendotp, setSendOtp] = useState(false);
  const { setislogin } = useContext(mycontext);
  const [login, setLogin] = useState(true);

  const handleLoginSuccess = () => {
    // setislogin(true);
    localStorage.setItem('isLogin', 'true');
  };

  return (
    <div>
      {login ? (
        // Login form
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm w-100p">
            <Formik
              initialValues={{
                username: '',
                password: ''
              }}
              validationSchema={Yup.object({
                username: Yup.string().required('Username is required'),
                password: Yup.string().required('Password is required')
              })}
              onSubmit={(values, { setSubmitting }) => {
               const data={
                username:values.username,
                password:values.password
               }
               console.log(data)
              }}
            >
              <Form className="space-y-6 w-100p">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                    Username
                  </label>
                  <div className="mt-2">
                    <Field id="username" name="username" type="text" autoComplete="username" className="block w-100p rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
                  </div>
                </div>

                <div>
                  
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                  <div className="mt-2">
                    <Field id="password" name="password" type="password" autoComplete="current-password" className="block w-100p rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                  </div>
                </div>

                <div className='w-100p flex justify-center'>
                  <button
                    type="submit"
                    onClick={handleLoginSuccess}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Log in
                  </button>
                </div>
              </Form>
            </Formik>

            <p className="mt-10 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <button className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" onClick={() => setLogin(false)}>
                Register
              </button>
            </p>
          </div>
        </div>
      ) : (
        // Registration form
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
          </div>
          <div className="mt-8 sm:mx-auto w-80p sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  username: '',
                  password: '',
                  otp: ''
                }}
                validationSchema={Yup.object({
                  name: Yup.string().required('Name is required'),
                  email: Yup.string().email('Invalid email address').required('Email is required'),
                  username: Yup.string().required('Username is required'),
                  password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
                  otp: Yup.number().required("enter otp")
                })}
                onSubmit={(values, { setSubmitting }) => {
                 const data={
                  username:values.username,
                  password:values.password,
                  name:values.name,
                 }
                 setSubmitting(true)
                 console.log(data)
                }}
              >
                
                <Form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <Field id="name" name="name" disable="true" type="text" autoComplete="name" className="appearance-none block w-100p px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className='flex flex-col'>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                    <div className='flex flex-col'>
                       <div className='flex'>
                        <div className='flex flex-col '>
                        <Field id="email" name="email" type="email" autoComplete="email" className="appearance-none block w-100p px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                        </div>
                      
                    <div>
                      {sendotp?(
                        <div>
                           <Button
                      variant="contained"
                      onClick={() => {
                        setSendOtp(true);
                      }}
                      style={{marginLeft:'5px'}}
                    >
                      ReSend OTP
                    </Button>
                        </div>
                        
                      ):
                      (
                        <div>
                          <div>
                           <Button
                      variant="contained"
                      style={{marginLeft:'5px'}}
                    >
                    Send OTP
                    </Button>
                        </div>
                        </div>
                        
                      )}
                   
                  </div>
                    </div>
                   
                  {sendotp && (
                    <div className='mt-3 flex'>
                      <div>
                         <label htmlFor="otp" className="block text-sm font-medium text-gray-700">Enter OTP</label>
                      <Field id="otp" name="otp" type="number" autoComplete="off" className="appearance-none block w-100p  px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                      <ErrorMessage name="otp" component="div" className="text-red-500 text-sm" />
                        </div>
                        <div className='mt-5'>
                        <Button
                      variant="contained"
                      style={{marginLeft:'5px'}}
                    >
                    Verify OTP
                    </Button>

                          </div>
                     
                    </div>
                  )}
                    </div>
                   
                  </div>
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                    <Field id="username" name="username" type="text" autoComplete="username" className="appearance-none block w-100p px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <Field id="password" name="password" type="password" autoComplete="new-password" className="appearance-none block w-100p px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-100p flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

                      
                    >
                      Create Account
                    </button>
                  </div>
                </Form>
              </Formik>
              <p className="mt-10 text-center text-sm text-gray-500">
                Already have an account?{" "}
                <button className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" onClick={() => setLogin(true)}>
                  Login
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
