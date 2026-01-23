import {LOGO,UserLogo} from "../utils/constants"
import { auth} from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
//import { addUser } from "../utils/userSlice";
import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import { onAuthStateChanged } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser,removeUser } from "../utils/userSlice";




const Header = () => {
   const navigate = useNavigate();
    const dispatch = useDispatch();

   const user = useSelector((store: RootState) => store.user);
  const handleSignOut =() =>{
   signOut(auth)
   .then(() => {})


.catch((error) => {
  // An error happened.
   navigate("/error");
});
  }

   useEffect(() => { 
          const auth = getAuth();
   const unsubscribe = onAuthStateChanged(auth, (user) => {
  
    if (user) {
     const{ uid,email,displayName,photoURL} = user;
      dispatch(addUser({uid:uid,
          email:email,
          displayName:displayName,
          
           photoURL: photoURL,
      }))
    navigate("/browse");
     
    } else {
      dispatch(removeUser());
      navigate("/");
      return () => unsubscribe(); 
    }
  });
  
      },[])
  

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black  flex justify-between items-center z-10 w-full' >
         <img  className="w-44"src={LOGO}
        alt="logo" />
           {user && (
          <div className="flex items-center gap-4">

          {/* <img alt="UserLogo" src={UserLogo} */}
          <img alt="UserLogo" src={user.photoURL}
           className="w-10 h-10 rounded-md cursor-pointer"/>


          <button  onClick={handleSignOut} className="text-white font-bold hover:underline">
            (Sign Out)
            </button>
         </div> 
          )}
    </div>
    
  );
};



export default Header
