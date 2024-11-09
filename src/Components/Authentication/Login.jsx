import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Login=()=> {
  // We have to create an 2 ways Binding then Usestate
  const [email, setEmail] = useState('') //For Email
  const [password, setpassword] = useState('')
  const SubmitHandler=(e)=>{
    e.preventDefault();
    console.log("Email",email)
    console.log("Password",password)

    setEmail('')
    setpassword('')
  }
  return (
    <div className="flex justify-center items-center h-screen w-screen">
        <div className='border-2 border-emerald-600 p-20 rounded-lg shadow-xl'>
            <form className='flex justify-center items-center flex-col ' onSubmit={(e)=>{
              SubmitHandler(e);
            }}>
                <input required className=' text-white outline-none bg-transparent border-2 border-emerald-600 text-lg px-3 py-3 rounded-full w-full m-4 placeholder:text-gray-400' type='email' placeholder='Put here your Email..' onChange={(e)=>{
                 setEmail(e.target.value);
                }} value={email}/>

                <input  required className=' text-white outline-none bg-transparent border-2 border-emerald-600 text-lg px-3 py-3 rounded-full w-full placeholder:text-gray-400' type='password' placeholder='Put here your Password..' onChange={(e)=>{
                  setpassword(e.target.value);
                }} value={password}/>
 
         <button className='text-white outline-none bg-emerald-600 border-2 border-emerald-600 text-lg px-3 py-3 rounded-full w-1/2 m-4 hover:bg-emerald-800 hover:text-black'>Login</button>

         <p className='text-white text-underline'> or Sign up <FontAwesomeIcon className='font-4xl' icon={faGoogle}/></p>

            </form>

        </div>

    </div>
  )
}

export default Login