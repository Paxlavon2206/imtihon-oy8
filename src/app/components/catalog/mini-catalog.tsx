import React from 'react'
import Link from 'next/link'
import { Catalogs } from '@/service/catalog'
import { PhoneIcon } from '../../../../public/icons/phone-icon'
export const MiniCatalog =  async () => {
    const catalog = await Catalogs()
  return (
    <div className='pt-[25px]'>
        <div className='flex items-center gap-2 overflow-y-scroll justify-center'>
        {catalog.map((item) => (
            <Link key={item.id} href={item.path}>
                <div className='w-[48px] h-[48px] mb-2 rounded-[50%] bg-white flex items-center justify-center'><PhoneIcon/></div>
                <p className='text-[6px] sm:text-[10px]'>{item.title}</p>
            </Link>
        ))}
        </div>
    </div>
  )
}
