"use client"
import React from 'react'
import { Korzinka } from '../../../../public/icons/korzinka'
import { Button } from '@/components/ui/button'

export const BtnCounter = () => {
  return (
    <Button onClick={() => console.log("click")} className=" bg-primary hover:bg-green-400 flex gap-2">
      <Korzinka/>
      Savatchaga
    </Button>
  )
}
