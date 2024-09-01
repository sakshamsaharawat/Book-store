import React from 'react'
import list from '../Data/list.json'
import Cards from './Cards';
import { Link } from 'react-router-dom';


const Course = () => {
    const filterData = list.filter((data) => data.category !== "Free");




    return (
        <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4 '>
            <div className='mt-28 justify-center items-center  text-center'>
                <h1 className='text-4xl font-bold text-center'>We're delighted to have you<span className='text-pink-500'> Here!:)</span> </h1>
                <p className='mt-10 text-center'>Landscape of entertainment and personal development, comedy, gaming, storytelling, and reading books each play a unique role in enriching our lives. Comedy, through its various courses, not only provides a pathway to laughter but also teaches the art of humor, timing, and audience engagement, helping individuals connect and cope with life’s ups and downs. </p>
                <Link to="/"> <button className=" btn bg-pink-500 text-white hover:bg-pink-600 mt-5">Back</button>
                </Link>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
                {filterData.map((item) => (<Cards item={item} key={item.id} />))}
            </div>

        </div>
    )
}

export default Course
