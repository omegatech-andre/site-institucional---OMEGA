'use client'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Navbar from '@/components/_ui/navBar/Navbar'
import '../../styles/globals.scss'
import Footer from '@/components/footer/Footer'

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
    const setFixed = () => {
      const bottomOfPage = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50
      if (window.scrollY >= headerHeight && !bottomOfPage) {
        setFixHeader(true)
      } else {
        setFixHeader(false)
      }
    }

    window.addEventListener("scroll", setFixed)

    return () => {
      window.removeEventListener("scroll", setFixed)
    }
  }, [headerHeight])

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