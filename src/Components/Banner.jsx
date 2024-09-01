import React from 'react';

const Banner = () => {
    return (
        <>
            <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 '>
                <div className='  w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
                    <div className=' space-y-12'>
                        <h1 className='text-2xl md:text-4xl font-bold'>
                            Hello,welcomes here to learn something{" "}
                            <span className='text-pink-500'>new everyday!!!</span></h1>
                        <p className='text-sm md:text-xl'>
                            Embrace each day with a sense of wonder and a thirst for knowledge, because here, learning never stops. Get ready to embark on an exciting journey filled with insights, discoveries, and endless possibilities!
                        </p>
                        <div>
                            <label className=" px-3 py-2 border rounded-md flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path
                                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input type="text" className="grow outline-none" placeholder="Enter your email to login" />
                            </label>
                        </div>

                    </div>
                    <div><button className="btn btn-secondary mt-8">Secondary</button></div>
                </div>
                <div className=' mt-12 md:mt-32 order-1 w-full md:w-1/2 '><img src="Banner.png" className="md:w-[550px] md:h-[460px] md:ml-12"
                    alt="Book-banner-image"
                />
                </div>
            </div>

        </>
    )
}

export default Banner
