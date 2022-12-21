import React from 'react'
import changeValue from '../components/changeValue'
import Top from '../components/LoginSignup.Top'
export default function NewGame() {
    const [state, setstate] = useState({})
    const submitForm=()=>{}
    return (
        <>
            <Top heading={'Start a new game'} subHeading={'Whom do you want to play'} />
            <div className='flex flex-col mx-5 pt-5'>
                <h3 className='font-semibold'>Email</h3>
                <input type="email" name="email" onChange={(e)=>changeValue(e,setstate,state)} className='border-2 border-black w-[90vw] p-3 font-bold  text-white rounded-md  shadow-lg' />
            </div>
            <div className='absolute bottom-0 w-screen'>
                <div className='text-center'>
                    <button className='border-2 border-black w-[90vw] p-3 font-bold bg-yellow-300 text-white rounded-md mt-2 shadow-lg'>
                        Start a Game
                    </button>
                </div>
            </div>
        </>
    )
}
