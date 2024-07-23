import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import axios from "axios"
import toast from "react-hot-toast"

const Signup = () => {
    const [user, setUser] = useState({
        fullName: "",
        email: "",
        password: "",
        gender: ""
    });
    const navigate = useNavigate();
    const onSubmitHandler =async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:8000/api/v1/users/register`, user, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

            if (res.data.success) {
                navigate('/login');
                toast.success(res.data.message);
            }
        } catch (error) {
            toast.error(error.res.data.message)
            console.log(error);
        }
        setUser({
            fullName: "",
            email: "",
            password: "",
            gender: ""
        })
    }
    const handleCheckbox = (gender) => {
        setUser({...user, gender})
    }
    return (
        <div className='min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
                <h1 className='text-3xl font-bold text-center'>Signup</h1>
                <form onSubmit={onSubmitHandler} action="">
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-white'>Full Name</span>
                        </label>
                        <input 
                            value={user.fullName}  
                            onChange={(e) => setUser({...user, fullName:e.target.value})}
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
                            value={user.email}
                            onChange={(e) => setUser({...user, email:e.target.value})}
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
                            value={user.password}
                            onChange={(e) => setUser({...user, password:e.target.value})}
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
                                checked={user.gender === "Male"}
                                onChange={() => handleCheckbox("Male")}
                                value="Male" 
                                className="radio mr-2"
                            />
                            <label className='label-text text-white'>Male</label>
                        </div>
                        <div className='flex items-center'>
                            <input 
                                type="radio" 
                                name="gender" 
                                checked={user.gender === "Female"}
                                onChange={() => handleCheckbox("Female")}
                                value="Female"
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
                        <button type='submit' className='btn btn-block btn-sm mt-2 border-slate-700'>SignUp</button>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default Signup


