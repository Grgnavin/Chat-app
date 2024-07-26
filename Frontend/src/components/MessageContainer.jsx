import React, { useEffect } from 'react'
import SendInput from './SendInput'
import Messages from './Messages'
import { useDispatch, useSelector } from 'react-redux';
import setSelectedUser from "../redux/userSlice"

const MessageContainer = () => {
    const { selectedUser } = useSelector(store => store.user);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("Selected User: ", selectedUser);
        return() => {
            console.log("clearing selected user");
            dispatch(setSelectedUser(null));
        }
    }, [])
    return (
        <>
        { selectedUser !== null ? (
            <div className='md:min-w-[550px] flex flex-col'>
            <div className=''>
                <div className='flex gap-2 items-center bg-zinc-800 px-4 py-2 mb-2 text-white'>
                        <div className='avatar online'>
                            <div className='w-12 rounded-full'>
                                <img src={selectedUser?.profile} alt='UserProfile'/>
                            </div>
                        </div>
                        <div className='flex flex-col flex-1'>
                            <div className='flex justify-between gap-2'>
                                <p>{selectedUser?.fullName}</p>
                            </div>
                        </div>
                    </div>
            </div>
            <Messages />
            <SendInput />
    </div>
        ) : (
            <h1>Let's start conversation</h1>
        ) }
        </>
    )
}

export default MessageContainer