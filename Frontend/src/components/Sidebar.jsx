import React from 'react'
import { FiSearch  } from "react-icons/fi"
import OtherUser from './OtherUser'

const Sidebar = () => {
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
            <OtherUser />
        </div>
    )
}

export default Sidebar