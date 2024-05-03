import React from 'react'
import { Basket } from '../../public/icons/basket'

export const Cart = () => {
  return (
    <div className="fixed w-[108px] h-[94px] pt-[18px] pl-[14px] bg-black right-0 bottom-[50%] top-1/3 rounded-l-[6px]">
    <div className="flex mb-2 gap-2">
     <div className="w-[14px] h-3"> <Basket/></div>
      <p className="text-white text-[13px]">Mahsulot</p>
    </div>
    <div className="w-[70px] h-[30px] bg-white rounded-[6px] flex items-center justify-center">
      <span>0</span>
    </div>
   </div>
  )
}
