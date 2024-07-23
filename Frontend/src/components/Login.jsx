import axios from 'axios';
import { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { setAuthUser } from '../redux/userSlice';
const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onSubmitHandler =async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:8000/api/v1/users/login`, user, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            navigate('/');
            toast(res.data.message)
            dispatch(setAuthUser(res.data.user))
        } catch (error) {
            toast.error(error.response.data.message)
            console.log(error);
        }
        setUser({
            fullName: "",
            email: "",
            password: "",
            gender: ""
        })
    }
    return (
        <div className='min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
                <h1 className='text-3xl font-bold text-center'>Signup</h1>
                <form onSubmit={onSubmitHandler} action="">
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-white'>Email</span>
                        </label>
                        <input 
                            value={user.email}
                            onChange={(e) => setUser({...user,email:e.target.value})}
                            type="email" 
                            placeholder='Email' 
                            className='w-full input input-bordered h-10'
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-white'>Password</span>
                        </label>
                        <input 
                            type="password" 
                            value={user.password}
                            onChange={(e) => setUser({...user,password:e.target.value})}
                            placeholder='Password' 
                            className='w-full input input-bordered h-10'
                        />
                    </div>
                    <div className='w-full mx-auto flex justify-center items-center text-center'>
                        <p className='text-center mr-2'>Don't have an account?</p>
                        <Link to={'/signup'} className='text-center text-blue-500'>
                            Signup
                        </Link>
                    </div>
                    <div>
                        <button type='submit' className='btn btn-block btn-sm mt-2 border-slate-700'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default Login
