import {useState} from "react"
import React from 'react'
import Header from './Header'


const Login = () => {
const [isSignInForm, setIsSignInForm] = useState<boolean>(true);
const toggleSignInForm =() =>{
    setIsSignInForm(!isSignInForm);
};

return (
    <div> 
       { /*w-3/12 absolute p-12 bg-black my-36*/}
      <Header/>
      <div className="relative h-screen">
        <img className="h-full w-full"
      src="https://assets.nflxext.com/ffe/siteui/vlv3/797df41b-1129-4496-beb3-6fc2f29c59d3/web/IN-en-20260112-TRIFECTA-perspective_004732f9-7464-4a7c-940b-4a51c4f0f73f_large.jpg" 
      alt="bg-img" />
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <form className=' absolute top-1/2 left-1/2 z-10 w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-black bg-opacity-75 p-12 text-white'>
        <h1 className='mb-6 text-3xl font-bold '> {isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm && (
          <input
            //ref={name}
            type="text"
            placeholder="Full Name"
            className="mb-4 w-full rounded bg-zinc-800 p-3 text-white placeholder-gray-400 outline-none"
          />
        )}

        <input
          //ref={email}
          type="text"
          placeholder="Email Address"
          className="mb-4 w-full rounded bg-zinc-800 p-3 text-white placeholder-gray-400 outline-none"
        />
          <input
          //ref={password}
          type="password"
          placeholder="Password"
          className="mb-4 w-full rounded bg-zinc-800 p-3 text-white placeholder-gray-400 outline-none"
          />
          <button className='w-full rounded bg-red-600 p-3 font-semibold hover:bg-red-700 '>
            {isSignInForm ? "Sign In": "Sign Up"}
          </button>

          <p
          className="text-gray-400 mt-4 cursor-pointer text-sm"
           onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now" 
            : "Already have an account? Sign In"}
        </p>

      </form>
    </div>
      
    </div>
  )
}

export default Login
