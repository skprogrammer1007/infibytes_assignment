import React from 'react'
import { Link } from 'react-router-dom'
export default function LoginPage() {
    return (
        <section className='flex items-center justify-center flex-col font-serif'>
            <div className='pt-[30vh] '>
                <div className='flex justify-center'>
                    <div>
                        <h2 className='text-4xl text-center my-6'>
                            Async
                        </h2>
                        <div className='text-6xl'>
                            <h1 className='text-center italic'>
                                tic tac
                            </h1>
                            <h1 className='text-center my-6 italic'>
                                toe
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5 flex flex-col '>
                <button className='border-2 border-black w-[90vw] p-3 font-bold bg-yellow-300 text-white rounded-md shadow-lg'>
                    <Link to="/login"> Login</Link>
                </button>
                <button className='border-2 border-black w-[90vw] p-3 font-bold bg-blue-500 text-white rounded-md my-4 shadow-lg'>
                    <Link to="/register"> Register</Link>
                </button>
            </div>
        </section>
    )
}
