import React from 'react'
import Top from '../components/LoginSignup.Top'
import changeValue from '../components/changeValue'
export default function LoginPage() {
    const [state, setState] = React.useState({})
    const Login=()=>{
        
    }
    return (
        <>
            <Top heading={'Login'} subHeading={'Please enter your details'}/>
            {/* <div className='mx-5'>LoginPage</div> */}
            <div className='flex flex-col mx-5 pt-5'>
                <h3 className='font-semibold'>username</h3>
                <input type="email" onChange={(e)=>changeValue(e,setState,state)} className='border-2 border-black w-[90vw] p-3 font-bold  text-white rounded-md  shadow-lg' name="username"/>
                <h3 className='font-semibold'>password</h3>
                <input type="password" onChange={(e)=>changeValue(e,setState,state)} className='border-2 border-black w-[90vw] p-3 font-bold  text-white rounded-md shadow-lg' name="password"/>
            </div>
            <div className='absolute bottom-0 w-screen'>
                <div className='text-center'>
                    <button className='text-start text-sm border-2 border-black w-[90vw] p-3  py-4  bg-rose-500 text-white rounded-md  mt-2 shadow-lg'>
                        Enter Correct details
                    </button>
                    <button className='border-2 border-black w-[90vw] p-3 font-bold bg-yellow-300 text-white rounded-md mt-2 shadow-lg' onClick={Login}>
                        Login 
                    </button>
                </div>
            </div>
        </>
    )
}
