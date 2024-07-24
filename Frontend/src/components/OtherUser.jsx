import React from 'react'

const OtherUser = (props) => {
    const user = props.user;
    return (
        <div className=''>
            <div className='flex gap-2 items-center text-gray-800 hover:bg-gray-200 rounded p-2 cursor-pointer'>
                <div className='avatar online'>
                    <div className='w-12 rounded-full'>
                        <img src={user?.profile} alt='UserProfile'/>
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <div className='flex justify-between gap-2 text-gray-800'>
                        <p className='font-semibold'>{user?.fullName}</p>
                    </div>
                </div>
            </div>
            <div className='divider my-0 py-0 h-1 '></div>
        </div>
    )
}


export default OtherUser