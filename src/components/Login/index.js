import { Link } from "react-router-dom";
import { signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"
import { auth } from "../../firebase";


export const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  }

  const signout = async () => {
    await signOut(auth);
  }


  return (
    <>
      <div className='bg-slate-700 rounded-xl mx-auto w-1/2 mt-10 p-5'>
        <h1 className='w-fit mx-auto font-bold text-2xl text-slate-200'>LogIn</h1>
        <div>
          <div className='flex flex-col gap-2 w-[65%] mx-auto mb-5 mt-10'>
            <label htmlFor="email" className='text-lg text-slate-200'>Email</label>
            <input type="email" name="email" onChange={(event) => {setLoginEmail(event.target.valueAsDate)}} className='bg-slate-200 text-slate-800 text-base rounded-lg h-8 outline-none px-4 focus:outline-slate-900 focus:outline-1' />
          </div>
          <div className='flex flex-col gap-2 w-[65%] mx-auto mb-5'>
            <label htmlFor="password" className='text-lg text-slate-200'>Password</label>
            <input type="password" name="password" onChange={(event) => {setLoginPassword(event.target.valueAsDate)}} className='bg-slate-200 rounded-lg h-8 outline-none px-4 focus:outline-slate-900 focus:outline-1' />
          </div>
          <div className='w-[60%] h-8 mx-auto mb-5 mt-10'>
            <button onClick={login} className="w-full h-full bg-slate-200 text-slate-700 font-semibold text-base rounded-lg hover:bg-slate-300">Sign UP</button>
          </div>
          <div className='w-fit mx-auto text-slate-200'>
            Don't have an account? <Link to="/signup" className='underline underline-offset-3'>Sign Up</Link>.
          </div>
        </div>
      </div>
      <div>LOgged In as: {user?.email}</div>
      <button onClick={signout} className="bg-slate-700 rounded-md px-2 py-1 text-white">LogOut</button>
    </>
  )
}