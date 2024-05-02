import React from 'react'
import { Products } from '@/service/products'
import { Button } from '@/components/ui/button'
import { Korzinka } from '../../../../public/icons/korzinka'
import Link from 'next/link'
import { Rating } from '../../../../public/icons/rating'
interface ProductCardProps {
    title: string,
    img?: string,
    price?: string
    id?: number
    oldcost?: string
}

export const ProductCard = async ({title, img,  price,id}: ProductCardProps) => {
const productData = await Products()
  return (<>
  <div className="bg-white w-[200px] lg:w-[230px] h-[403px] justify-between p-3 flex flex-col rounded-lg">
    <Link href={`/products/${id}`} >
    <img className="object-contain h-[230px]" src={img} alt="img" />
    <div className="hover:text-primary text-md font-medium text-center">{title.length>25?title.slice(0,25)+"...":title}</div>
    </Link>
    <div className="flex justify-between items-center">
      <Rating/>
      <p className="text-gray-500 font-medium text-sm line-through">23000000 so'm </p>
    </div>
    <h4 className=" text-font18">{price} so'm</h4>
    <Button className=" bg-primary hover:bg-green-400 flex gap-2">
      <Korzinka/>
      Savatchaga
    </Button>
  </div>
  </>
  )
}
