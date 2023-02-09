import React from 'react'
//rfc
export function SignUp() {
  return (
    <div className='bg-slate-700 rounded-xl mx-auto w-1/2 mt-10 p-5'>
        <h1 className='w-fit mx-auto font-bold text-2xl text-slate-200'>Sign Up</h1>
      <form>
            <div className='flex flex-col gap-2 w-[65%] mx-auto mb-5 mt-10'>
                <label for="email" className='text-lg text-slate-200'>Email</label>
                <input type="email" name="email" className='bg-slate-200 text-slate-800 text-base rounded-lg h-8 outline-none px-4 focus:outline-slate-900 focus:outline-1' />
            </div>
            <div className='flex flex-col gap-2 w-[65%] mx-auto mb-5'>
                <label for="password" className='text-lg text-slate-200'>Password</label>
                <input type="password" name="password" className='bg-slate-200 rounded-lg h-8 outline-none px-4 focus:outline-slate-900 focus:outline-1' />
            </div>
            <div className='flex flex-col gap-2 w-[65%] mx-auto'>
                <label for="confirm-password" className='text-lg text-slate-200'>Password Confirmation</label>
                <input type="password" name="confirm-password" className='bg-slate-200 rounded-lg h-8 outline-none px-4 focus:outline-slate-900 focus:outline-1' />
            </div>
            <div className='w-fit mx-auto mb-5 mt-10'>
                <button className="px-32 py-2 bg-slate-200 text-slate-700 font-semibold text-base rounded-lg hover:bg-slate-300">Sign UP</button>
            </div>
            <div className='w-fit mx-auto text-slate-200'>
                Already have an account? <span className='underline underline-offset-3'>Sign In</span>.
            </div>
      </form>
    </div>
  )
}
