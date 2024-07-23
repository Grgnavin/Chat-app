import React from 'react'

const OtherUser = () => {
    return (
        <div className=''>
            <div className='flex gap-2 items-center hover:bg-zinc-300 rounded p-2 cursor-pointer'>
                    <div className='avatar online'>
                        <div className='w-12 rounded-full'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3flIHsvZtK3eU7tEnp-LSEjNznTZCn0dkcA&s" alt='UserProfile'/>
                        </div>
                    </div>
                    <div className='flex flex-col flex-1'>
                        <div className='flex justify-between gap-2'>
                            <p>Navingrg</p>
                        </div>
                    </div>
                </div>
                    <div className='divider my-0 py-0 h-1'></div>
        </div>
    )
}

export default OtherUser
