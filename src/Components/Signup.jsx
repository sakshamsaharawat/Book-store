import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from 'react-hook-form';

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    const onSubmit = (data) => console.log(data);

    return (
        <div className='flex items-center justify-center h-screen '>
            <div className="w-[700px] flex items-center justify-center md:px-28  ">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        <h3 className="font-bold text-lg">Signup</h3>
                        <div className='mt-10'>
                            <span>Name</span>
                            <br />
                            <input
                                type="text"
                                className="border-rounded-md w-80 px-3 mt-2 grow outline-none"
                                style={{ border: "1px solid #b3b3b3", borderRadius: "5px" }}
                                placeholder='Enter your fullname'
                                {...register('name', {
                                    required: "Name is required",
                                    minLength: {
                                        value: 2,
                                        message: "Name must be at least 2 characters long"
                                    }
                                })}
                            />
                            <br />
                            {errors.name && <span className='text-sm text-red-500'>{errors.name.message}</span>}
                        </div>

                        <div className='mt-4'>
                            <span>Email</span>
                            <br />
                            <input
                                type="email"
                                className="border-rounded-md w-80 px-3 mt-4 grow outline-none"
                                style={{ border: "1px solid #b3b3b3", borderRadius: "5px" }}
                                placeholder='Enter your email'
                                {...register('email', {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Invalid email address"
                                    }
                                })}
                            />
                            <br />
                            {errors.email && <span className='text-sm text-red-500'>{errors.email.message}</span>}
                        </div>

                        <div className='mt-10'>
                            <span>Password</span>
                            <br />
                            <input
                                type={showPassword ? "text" : "password"} // Toggle between text and password
                                className="border-rounded-md w-80 px-3 mt-2 grow outline-none"
                                style={{ border: "1px solid #b3b3b3", borderRadius: "5px" }}
                                placeholder='Enter your password'
                                {...register('password', {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters long"
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                                        message: "Password must contain at least one letter and one number"
                                    }
                                })}
                            />
                            <br />
                            {errors.password && <span className='text-sm text-red-500'>{errors.password.message}</span>}
                            <div className="mt-2">
                                <input
                                    type="checkbox"
                                    id="show-password"
                                    className="mr-2"
                                    checked={showPassword}
                                    onChange={() => setShowPassword(!showPassword)}
                                />
                                <label htmlFor="show-password" className="text-sm">Show Password</label>
                            </div>
                        </div>

                        <div className='mt-6 flex justify-around'>
                            <button className="btn bg-pink-500 text-white hover:bg-pink-600">Signup</button>
                            <p>Already have an account? <Link to='/login' className='text-blue-500 underline'
                                onClick={() => document.getElementById('my_modal_3').showModal()}>Login</Link></p>
                            <Login />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
