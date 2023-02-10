import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase"
import { useState } from "react"


export const Signup = () => {
  const [registerEmail, setResisterEmail] = useState("");
  const [registerPassword, setResisterPassword] = useState("");


  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
    
  }

  return (
    <>
      <div className='bg-slate-700 rounded-xl mx-auto w-1/2 mt-10 p-5'>
        <h1 className='w-fit mx-auto font-bold text-2xl text-slate-200'>Sign Up</h1>
        <div>
          <div className='flex flex-col gap-2 w-[65%] mx-auto mb-5 mt-10'>
            <label htmlFor="email" className='text-lg text-slate-200'>Email</label>
            <input type="email" name="email" onChange={(event) => {setResisterEmail(event.target.value)}} className='bg-slate-200 text-slate-800 text-base rounded-lg h-8 outline-none px-4 focus:outline-slate-900 focus:outline-1' />
          </div>
          <div className='flex flex-col gap-2 w-[65%] mx-auto mb-5'>
            <label htmlFor="password" className='text-lg text-slate-200'>Password</label>
            <input type="password" name="password" onChange={(event) => {setResisterPassword(event.target.value)}} className='bg-slate-200 rounded-lg h-8 outline-none px-4 focus:outline-slate-900 focus:outline-1' />
          </div>
          <div className='flex flex-col gap-2 w-[65%] mx-auto'>
            <label htmlFor="confirm-password" className='text-lg text-slate-200'>Password Confirmation</label>
            <input type="password" name="confirm-password" className='bg-slate-200 rounded-lg h-8 outline-none px-4 focus:outline-slate-900 focus:outline-1' />
          </div>
          <div className='w-[60%] h-8 mx-auto mb-5 mt-10'>
            <button onClick={register} className="w-full h-full bg-slate-200 text-slate-700 font-semibold text-base rounded-lg hover:bg-slate-300">Sign UP</button>
          </div>
          <div className='w-fit mx-auto text-slate-200'>
            Already have an account? <Link to="/" className='underline underline-offset-3'>Log In</Link>.
          </div>
        </div>
      </div>
    </>
  )
}
