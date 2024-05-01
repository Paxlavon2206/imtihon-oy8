import Link from 'next/link'
import React from 'react'
import { FooterLogo } from '../../../../public/icons/footer-logo'
import { Googleplay } from '../../../../public/icons/googleplay'
import { Appstore } from '../../../../public/icons/appstore'

export const Footer = () => {
  return (
    <div className='container sm:pt-[150px] xl:pt-0'>
       <div>
      <div className=" hidden md:flex  py-[35px]  justify-between">
        <div className="">
           
          <FooterLogo />
          <h3 className="mt-8 text-font19">Mobilux © 2022</h3>
          <p className="mb-4 mt-2 text-font15">Barcha huquqlar kafolatlangan</p>
          <div className="flex gap-3">
            <Googleplay />
            <Appstore />
          </div>
        </div>
        <div>
          <h3 className="text-font19">Foydali havolalar</h3>
          <ul className="mt-4">
            <li className="text-font13">
              <Link href={"/#"}>Bosh sahifa</Link>
            </li>
            <li className="text-font13">
              <Link href={"/#"}> Yordam kerakmi?</Link>
            </li>{" "}
            <li className="text-font13">
              <Link href={"/#"}> Foydalanish shartlari</Link>
            </li>{" "}
            <li className="text-font13">
              <Link href={"/#"}> Maxfiylik siyosati</Link>
            </li>
          </ul>
        </div>
        <div className="hidden w-[300px] lg:flex xl:w-[580px] ">
          <div>
            <h3 className="text-font19">Biz haqimizda</h3>
            <ul className="mt-4">
              <li className="text-font13">
                <Link href={"/#"}>
                  Manzil: #214, G-dong, Lotte castle, 347 Jongno, Jongno-gu,
                  Seoul, 03113, Crescent Trade ltd
                </Link>
              </li>
              <li className="text-font13">
                <Link href={"/#"}> Korxona nomi: Mobilux trade</Link>
              </li>{" "}
              <li className="text-font13">
                <Link href={"/#"}> Korxona rahbari: HASANBOY TURSUNOV</Link>
              </li>{" "}
              <li className="text-font13">
                <Link href={"/#"}> Registratsiya raqami: 433-62-00377</Link>
              </li>
              <li className="text-font13">
                <Link href={"/#"}>
                  {" "}
                  Telefon raqami: 93 000 66-44 97 000 66-44
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
    </div>
  )
}
