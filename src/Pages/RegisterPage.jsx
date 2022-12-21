import React from 'react'
import Top from '../components/LoginSignup.Top'
import changeValue from '../components/changeValue';
export default function RegisterPage() {
  const [state, setState] = React.useState({});
  const [warn,setWarn]=React.useState(true)
  const submitForm = () => {

  }
  return (
    <>
      <Top heading={'create account'} subHeading={"Let's get you know better"} />
      {/* <div className='mx-5'>LoginPage</div> */}
      <div className='flex flex-col mx-5 pt-5'>
        <h3 className='font-semibold' name="yourName">Your Name</h3>
        <input type="text" name="yourname" className='border-2 border-black w-[90vw] p-3 font-bold  text-black rounded-md  shadow-lg' onChange={(e) => changeValue(e, setState, state)} />
        <h3 className='font-semibold' name="userName">username</h3>
        <input type="text" name="username" className='border-2 border-black w-[90vw] p-3 font-bold  text-black rounded-md shadow-lg' onChange={(e) => changeValue(e, setState, state)} />
        <h3 className='font-semibold' name="email">email</h3>
        <input type="email" name="email" placeholder='Enter your email' className='border-2 border-black w-[90vw] p-3 font-bold  text-black rounded-md shadow-lg' onChange={(e) => changeValue(e, setState, state)} />
        <h3 className='font-semibold' name="password">password</h3>
        <input type="password" name="password" className='border-2 border-black w-[90vw] p-3 font-bold  text-black rounded-md shadow-lg' onChange={(e) => changeValue(e, setState, state)} />
      </div>
      <div className='absolute bottom-0 w-screen'>
        <div className='text-center'>
          <button className={`text-start text-sm border-2 border-black w-[90vw] p-3  py-4  bg-green-300 text-black rounded-md  mt-2 shadow-lg ${warn?'hidden':'block'}`}>
            successFull
          </button>
          <button className={`border-2 border-black w-[90vw] p-3 font-bold bg-yellow-300 text-black rounded-md mt-2 shadow-lg `}>
            Register
          </button>
        </div>
      </div>
    </>
  )
}
