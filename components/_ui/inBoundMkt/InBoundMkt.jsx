'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import './index.scss'

export default function InBoundMkt() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const show = () => {
      setIsVisible(true)
      setTimeout(hide, 4000)
    }

    const hide = () => {
      setIsVisible(false)
      setTimeout(show, 22000)
    }

    setTimeout(show, 22000)
  }, [])

  return (
    <>
      <div className="inboundmkt">
        <div className='inboundmkt__content'>
          <Link href="https://wa.me/5581982810058" target='_blank'>
            <img src="/assets/icons/inboundmkt.png" alt="" />
          </Link>
        </div>
        {isVisible && (
          <div className='inboundmkt__modal'>
            <span>Fale com a gente!!</span>
            <div>.</div>
          </div>
        )}
      </div>
    </>
  )
}