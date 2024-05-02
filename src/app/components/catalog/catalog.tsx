import React from 'react'
import { Button } from '../reasuble-btn/button'
import { Korzinka } from '../../../../public/icons/korzinka'
import { RightIcon } from '../../../../public/icons/right-icon'
import Link from 'next/link'
import { Catalogs } from '@/service/catalog'
export const Catalog =  async () => {
    const catalog = await Catalogs()
  return (
    <div className='bg-white h-full mt-5'>
        <Button className='py-[10px] px-[20px] bg-primary text-white flex items-center md:gap-1 lg:gap-2 rounded-[6px] mb-6 '>
           <Korzinka/>   Maxsus buyurtma
        </Button>
        <div>
        {catalog.map((item) => (
            <Link key={item.id} href={`/catalog-pages/${item.path}`} className='flex mb-[35px] hover:text-primary'>
                <p className='md:w-[100px] lg:w-[170px] font-sans md:text-[13px] lg:text-[15px] hover:text-primary hover:underline'>{item.title}</p>
               <span className='text-black hover:text-primary'> <RightIcon/></span>
            </Link>
        ))}
        </div>
    </div>
  )
}
