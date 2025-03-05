import React from 'react'

const Cards = ({ product }) => {
    return (

        <div className='h-52 sm:h-96 
                            p-2
                            grid grid-cols-2  gap-1
                            sm:grid-cols-1 sm:grid-rows-3 
                            bg-slate-800/50 overflow-hidden'>

            <div className="w-full h-full my-auto flex items-center rounded-sm bg-white/50 sm:row-span-2 overflow-hidden">
                <img src={product.thumbnail} alt="logo" className='w-full place-self-center bg-cover backdrop-blur-2xl' />
            </div>

            <div className="w-full h-full 
                                my-auto mx-auto px-1 
                                grid grid-rows-4
                                sm:w-full sm:h-full 
                                overflow-hidden">

                <div className="row-span-3 sm:text-center overflow-hidden">

                    <div className=' text-xl'>
                        {product.name}
                    </div>

                    <div className='text-sm opacity-50 h-1/3'>
                        {product.description}
                    </div>

                </div>

                <div className=" flex items-center justify-center gap-1  ">

                    <div>
                        Price:
                    </div>

                    <div className='text-white/75 text-xs line-through'>
                        {product.discount}
                    </div>

                    <div className=''>
                        ${product.price}
                    </div>

                </div>

                <div className="flex items-center justify-between gap-1">

                    <button className=' w-full border-b border-b-white/50 hover:bg-[#F8F8E6]/25 rounded-sm hover:duration-300 border'>Add</button>
                    <button className=' w-full border-b border-b-white/50 hover:bg-[#F8F8E6]/25 rounded-sm hover:duration-300 border'>Buy</button>

                </div>

            </div>

        </div>

    )
}

export default Cards
