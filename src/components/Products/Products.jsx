import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Cards from './Cards'

const Products = () => {
    let products = []
    const [data, setData] = useState([])

    const getProducts = async () => {
        try {
            products = await axios.get('https://api.freeapi.app/api/v1/public/randomproducts')
            setData(products.data.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className='w-screen h-full min-h-screen
                        p-1
                        grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                        text-white overflow-hidden'>
            {
                data.map((item) => (
                    <Cards key={item.id} product={item} />
                ))
            }
        </div>
    )
}

export default Products