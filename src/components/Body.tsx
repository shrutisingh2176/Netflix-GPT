import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter, RouterProvider} from "react-router-dom"



const Body = () => {
    
   
    const appRouter = createBrowserRouter([
        {
            path :"/",
            element: <Login/>
        },
        {
            path:"/browse",
            element: <Browse/>
        }
    ])

//     useEffect(() => { 
//         const auth = getAuth();
// onAuthStateChanged(auth, (user) => {

//   if (user) {
//    const{ uid,email,displayName,photoURL} = user;
//     dispatch(addUser({uid:uid,
//         email:email,
//         displayName:displayName,
        
//          photoURL: photoURL,
//     }))
  
   
//   } else {
//     dispatch(removeUser());
    

//   }
// });

//     },[])


    return (
        <div>
           <RouterProvider router={appRouter} />    
        </div>
    )
}

export default Body;  