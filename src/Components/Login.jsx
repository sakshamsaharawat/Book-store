import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const [showPassword, setShowPassword] = useState(false);
    const onSubmit = (data) => console.log(data);

    // Function to close the modal
    const closeModal = () => {
        document.getElementById('my_modal_3').close();
    };

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Add an onClick handler to close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>
                            ✕
                        </Link>
                        <h3 className="font-bold text-lg">Login</h3>
                        <div className="mt-4 space-y-4">
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
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
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
                        <div className="mt-6 flex justify-around">
                            <button type="submit" className="btn bg-pink-500 text-white hover:bg-pink-600">
                                Login
                            </button>
                            <p>
                                Not registered?
                                <Link to="/signup" className="text-blue-500 underline">
                                    Signup
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default Login;

