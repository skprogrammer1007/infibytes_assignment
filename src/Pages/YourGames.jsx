import React from 'react'
import axios from 'axios'

export default function YourGames() {
    const [games, setGames] = React.useState([])
   React.useEffect(() => {
        axios.get('api/url').then(response => {
            setGames(response?.data || [])
        })
    }, [])

    return (
        <>
            <h2 className='text-xl font-bold mx-5'>Your Games</h2>
            <section className='flex items-center justify-center flex-col font-serif'>
                <div className='pt-[30vh] '>
                    <div className='flex justify-center flex-col items-center'>
                        <div>
                            <div className='text-5xl'>
                                <h1 className='text-center italic'>
                                    No Games
                                </h1>
                                <h1 className='text-center my-6 italic'>
                                    Found
                                </h1>
                            </div>
                        </div>
                        <button className='border-2 border-black w-[90vw] p-3 font-bold bg-yellow-300 text-white rounded-md my-4 shadow-lg'>
                            Start Your Game
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
