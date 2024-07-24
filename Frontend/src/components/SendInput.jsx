import React from 'react'
import { IoMdSend } from "react-icons/io";

function SendInput() {
    return (
        <form className='px-4 py-3'>
            <div className='w-full relative'>
                <input 
                    type="text"
                    placeholder='Send Message...'
                    className='border border-zinc-500 p-3 text-sm rounded-lg block w-full bg-gray-600 text-white'
                    />
                    <button className='absolute flex inset-y-0 pr-4 end-0 items-center'>
                        <IoMdSend size={"20px"} />
                    </button>
            </div>
        </form>
    )
}

export default SendInput
