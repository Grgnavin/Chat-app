import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
    return (
        <div className='min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
                <h1 className='text-3xl font-bold text-center'>Signup</h1>
                <form action="">
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-white'>Full Name</span>
                        </label>
                        <input 
                            type="text" 
                            placeholder='Fullname..' 
                            className='w-full input input-bordered h-10'
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-white'>Email</span>
                        </label>
                        <input 
                            type="email" 
                            placeholder='Email..' 
                            className='w-full input input-bordered h-10'
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-white'>Password</span>
                        </label>
                        <input 
                            type="password" 
                            placeholder='Password..' 
                            className='w-full input input-bordered h-10'
                        />
                    </div>
                    <div className='my-4'>
                        <div className='flex items-center mb-2'>
                            <input 
                                type="radio" 
                                name="gender" 
                                value="male" 
                                className="radio mr-2"
                            />
                            <label className='label-text text-white'>Male</label>
                        </div>
                        <div className='flex items-center'>
                            <input 
                                type="radio" 
                                name="gender" 
                                value="female" 
                                className="radio mr-2"
                            />
                            <label className='label-text text-white'>Female</label>
                        </div>
                    </div>
                    <div className='w-full mx-auto flex justify-center items-center text-center'>
                        <p className='text-center mr-2'>Already have an account?</p>
                        <Link to={'/login'} className='text-center text-blue-500'>
                            Login
                        </Link>
                    </div>
                    <div>
                        <button className='btn btn-block btn-sm mt-2 border-slate-700'>SignUp</button>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default Signup