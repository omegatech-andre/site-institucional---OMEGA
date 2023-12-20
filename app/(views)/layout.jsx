'use client'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Navbar from '@/components/_ui/navBar/Navbar'
import '../../styles/globals.scss'
import Footer from '@/components/footer/Footer'

const BOTTOM_OFFSET = 50;

export default function ViewsLayout({ children }) {
  const [fixHeader, setFixHeader] = useState(true)
  const headerRef = useRef(null)
  const [headerHeight, setHeaderHeight] = useState(0)

  useLayoutEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight)
    }
  }, [])

  
  useEffect(() => {
    setFixHeader(true)
    const handleScroll = () => {
      const isBottomOfPage = window.innerHeight + window.scrollY >= document.body.offsetHeight - BOTTOM_OFFSET
      if (window.scrollY >= headerHeight && !isBottomOfPage) {
        setFixHeader(true)
      } else {
        setFixHeader(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      {
        fixHeader && (
            <Navbar/>
        )
      }
      {children}
      <Footer />
    </>
  )
}