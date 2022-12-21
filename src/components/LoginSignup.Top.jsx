import React from 'react'

export default function Top({ heading, subHeading }) {
    return (
        <div className='mx-5'>
            <h2 className='font-extrabold text-2xl pt-2'><button>{"<"}</button></h2>
            <div className=''>
                <h2 className='font-bold text-xl '>{heading}</h2>
                <h3 className='text-3xl text-left font-bold'>{subHeading}</h3>
            </div>
        </div>
    )
}
