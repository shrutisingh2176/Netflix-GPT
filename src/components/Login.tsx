import {useState, useRef} from "react"
import React from 'react'
import Header from './Header'
import { checkValidData } from "../utils/validate";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword ,updateProfile } from "firebase/auth";
import {auth } from "../utils/firebase"
import { BgImg, UserLogo } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login = () => {
const [isSignInForm, setIsSignInForm] = useState<boolean>(true);
const [errorMessage, setErrorMessage] = useState<string | null>(null); 


const email = useRef<HTMLInputElement> (null);
const password = useRef<HTMLInputElement> (null);
 const name = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();

 const handleButtonClick = () => {
    // Validate the form data 
    if (!email.current || !password.current) return;
  // console.log(email.current.value);
   //console.log(password.current.value);
   const message = checkValidData (email.current.value,password.current.value)
   //console.log(message);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm){
      //Sign Up Logic 
      createUserWithEmailAndPassword(auth,
         email.current.value,
         password.current.value
        )

  .then((userCredential) => {
    
    const user = userCredential.user;
    updateProfile(user, {
   displayName:  name.current ? name.current.value : "User",
   photoURL:UserLogo
   
})
.then(() => {
  // Profile updated!
   const { uid, email, displayName, photoURL } = auth.currentUser!;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
  
})
.catch((error) => {
  // An error occurred
  setErrorMessage(error.message);
});

   // console.log(user)
   
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
      setErrorMessage(errorCode + " - " + errorMessage);
    
  });
    } else{
      signInWithEmailAndPassword(auth,
         email.current.value,
         password.current.value)
      .then((userCredential) => {
        
        const user = userCredential.user;
       
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
         setErrorMessage(errorCode + " - " + errorMessage);
      });

    }
}

const toggleSignInForm =() =>{
    setIsSignInForm(!isSignInForm);
};



return (
    <div> 
       { /*w-3/12 absolute p-12 bg-black my-36*/}
      <Header/>
      <div className="relative h-screen">
        <img className="md:h-full md:w-full object-cover h-screen"
      src={BgImg} 
      alt="bg-img" />
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <form onSubmit={(e) => e.preventDefault()} className=' absolute md:top-1/2 top-1/3 left-1/2 z-10 w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-black bg-opacity-75 p-12 text-white'>
        <h1 className='mb-6 text-3xl font-bold '> {isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="mb-4 w-full rounded bg-zinc-800 p-3 text-white placeholder-gray-400 outline-none"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="mb-4 w-full rounded bg-zinc-800 p-3 text-white placeholder-gray-400 outline-none"
        />
          <input
          ref={password}
          type="password"
          placeholder="Password"
          className="mb-4 w-full rounded bg-zinc-800 p-3 text-white placeholder-gray-400 outline-none"
          />

             {errorMessage && (
          <p className="text-red-500 font-bold text-sm py-2">{errorMessage}</p>
        )}


          <button className='w-full rounded bg-red-600 p-3 font-semibold hover:bg-red-700 ' onClick={handleButtonClick}>
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
