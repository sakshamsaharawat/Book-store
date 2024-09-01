import React from 'react'

const Cards = ({ item }) => {
    return (
        <>
            <div className='mt-8 my-5 p-3 hover: transiation-400 duration-200 truncate ... hover:scale-105 duration'>
                <div className="relative z-10">
                    <div className="mt-10 card bg-base-100 w-92  h-300 shadow-xl">
                        <figure>
                            <img src={item.image} alt={item.name} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {item.name}
                                <div className="badge badge-secondary">{item.category}</div>
                            </h2>
                            <p>{item.title}</p>
                            <div className="card-actions justify-between">
                                <div className="badge badge-outline"> ${item.price}</div>
                                <div className="badge badge-outline cursor-pointer px-2 py-1 border-rounded-full border-black[2px] hover:bg-fuchsia-500 duration-200 hover:text-white ">Buy Now</div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cards
