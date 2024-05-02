import React from 'react'
import { ProductCard } from '../product-card/product-card'
import { Products } from '@/service/products'


export const ProductSome = async () => {
    const productData = await Products()
    
  return (
    <div className='grid grid-cols-2 gap-y-3 md:grid md:grid-cols-3 md:gap-x-12 md:gap-y-5  lg:grid lg:grid-cols-4 lg:gap-4'>
        {productData.slice(0, 8).map((item) => (
            <ProductCard key={item.id} img={item.img} title={item.title} price={item.price} />
        ))}
    </div>
  )
}

export const OmmabopProducts = async () => {
    const productData = await Products()
    return (
        <div className='grid grid-cols-2 gap-y-3 md:grid md:grid-cols-3 md:gap-x-12 md:gap-y-5  lg:grid lg:grid-cols-4 lg:gap-4'>
        {productData.slice(10, 18).map((item) => (
            <ProductCard key={item.id} img={item.img} title={item.title} price={item.price} />
        ))}
    </div>
    )
}
export const DiscountProducts = async () => {
    const productData = await Products()
    return (
        <div className='grid grid-cols-2 gap-y-3 md:grid md:grid-cols-3 md:gap-x-12 md:gap-y-5  lg:grid lg:grid-cols-4 lg:gap-4'>
        {productData.slice(18, 22).map((item) => (
            <ProductCard key={item.id} img={item.img} title={item.title} price={item.price} />
        ))}
    </div>
    )
}

