import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = (data) => console.log(data);

    const notify = () => {
        toast("Default Notification !");

        toast.success("Success Notification !", {
            position: "top-center"
        });

        toast.error("Error Notification !", {
            position: "top-left"
        });

        toast.warn("Warning Notification !", {
            position: "bottom-left"
        });

        toast.info("Info Notification !", {
            position: "bottom-center"
        });

        toast("Custom Style Notification with css class!", {
            position: "bottom-right",
            className: 'foo-bar'
        });
    };

    return (
        <div>

            <div className='flex items-center justify-center h-screen '>
                <div className="w-[700px] flex items-center justify-center md:px-28  ">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                            <h3 className="font-bold text-lg">Contact Us</h3>
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
                                <span>Message</span>
                                <br />
                                <textarea
                                    className="w-80 h-28 mt-2 grow outline-none border border-gray-300 rounded-md"
                                    style={{ border: "1px solid #b3b3b3", borderRadius: "5px", }}
                                    placeholder='Type your message'
                                    {...register('message', {
                                        required: "Message is required",
                                        minLength: {
                                            value: 5,
                                            message: "Name must be at least 5 characters long"
                                        }
                                    })}
                                />
                                <br />
                                {errors.message && <span className='text-sm text-red-500'>{errors.message.message}</span>}
                            </div>


                            <div className='mt-6'>
                                <button className="btn bg-blue-500 text-white hover:bg-blue-600" type='submit' onClick={notify()}> Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact



