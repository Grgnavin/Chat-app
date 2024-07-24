import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUser } from '../redux/userSlice';

const OtherUser = ({ user }) => {
    const dispatch = useDispatch();
    const seletedUserHandler = (user) => {
        dispatch(setSelectedUser(user));
    }
    const { selectedUser } = useSelector(store => store.user); 
    return (
        <>
            <div onClick={() => seletedUserHandler(user)} className={`${selectedUser?._id === user?._id ? 'bg-gray-200 text-black': 'text-white'} flex gap-2 items-center hover:text-black rounded p-2 cursor-pointer`}>
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
        </>
    )
}


export default OtherUser