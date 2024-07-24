import React from 'react'
import { FiSearch  } from "react-icons/fi"
import OtherUsers from './OtherUsers'
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
    const navigate = useNavigate();
    const logoutHandler =async () => {
        try {
            const res = await axios.delete('http://localhost:8000/api/v1/users/logout')
            navigate('/login')
            toast.success(res.data.message);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='border-r border-slate-500 p-4 flex flex-col'>
            <form action="" className='flex items-center gap-2'>
                <input 
                    type="text" 
                    className='input input-bordered rounded-md' 
                    placeholder='Search...'/>
                <button type='submit' className='btn bg-slate-500 text-white'>
                    <FiSearch size={'15px'} className='outline-none'/>
                </button>
            </form>
            <div className="divider px-3"></div>
            <OtherUsers />
            <div className='mt-2'>
                <button onClick={logoutHandler} className='btn btn-sm'>
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Sidebar