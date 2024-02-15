import React, { useContext, useState } from 'react'
import { mycontext } from '../App'

const Login = () => {
  const {islogin,setislogin}=useContext(mycontext)
    const [login,setlogin]=useState(true)
    const [photo,setphoto]=useState(null)
    const [imgurl,seturl]=useState("")
    const [logindata,setlogindata]=useState({
      username:"",
      password:""
    })
    const handleLoginSuccess = () => {
      setislogin(true);
      localStorage.setItem('isLogin', 'true');
    };
    const logineventChange=(e)=>{
      e.preventDefault();
      setlogindata({...logindata,[e.target.name]:e.target.value})
    }
    const changeEvent=(e)=>{
        e.preventDefault();
        const img=e.target.files[0]
      setphoto(img)
      seturl(URL.createObjectURL(img))
    }
  return (
    <div>
        {login ? (
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>
    
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" >
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      autoComplete="email"
                      required
                      onChange={logineventChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
    
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      onChange={logineventChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
    
                <div>
                  <button
                    type="submit"
                    onClick={handleLoginSuccess} 
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Log in
                  </button>
                </div>
              </form>
    
              <p className="mt-10 text-center text-sm text-gray-500">
                Don't have an account {" "} 
                <button  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" onClick={()=>{setlogin(!login)}}>
                  Register
                </button>
              </p>
            </div>
          </div>

        ):(
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-md">
    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
  </div>
  <div className="mt-8 sm:mx-auto w-80p sm:max-w-md">
    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <div className="mt-1">
            <input id="name" name="name" type="text" autoComplete="name" required className="appearance-none block w-100p px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
          <div className="mt-1">
            <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none block w-100p px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <div className="mt-1">
            <input id="password" name="password" type="password" autoComplete="new-password" required className="appearance-none block w-100p px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
        </div>
        <div>
          <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Upload Photo</label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v20m24-20v20m-24-20l24 24" />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-lg font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={changeEvent} />
                </label>
                <img src={imgurl} style={{width:"100px",height:"100px"}} alt='profile'/>
              </div>
            
            </div>
          </div>
        </div>
        <div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Create Account
          </button>
        </div>
      </form>
      <p className="mt-10 text-center text-sm text-gray-500">
                Do you have an account {" "} 
                <button  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" onClick={()=>{setlogin(!login)}}>
                  Login
                </button>
              </p>
    </div>
  </div>
</div>

        )}
        
    </div>
  )
}

export default Login