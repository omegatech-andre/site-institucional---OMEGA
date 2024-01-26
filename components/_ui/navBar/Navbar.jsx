import { IoMenuSharp, IoHome } from "react-icons/io5"
import GroupBtnSec from '../groupBtnSec/GroupBtnSec'
import './index.scss'
import Image from "next/image"
import logo from "../../../public/assets/images/logo-principal.png"
import Link from "next/link"
import { useCallback, useEffect, useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  const handleResize = useCallback(() => {
    setIsLargeScreen(window.innerWidth > 1200)
  }, [])

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [handleResize])

  return (
    <>
      <div className="navbar">
        <div className="navbar__content">
          <div className="navbar__icons">
            <Link href="/">
              <IoHome />
            </Link>
          </div>
          <div className="navbar__logo">
            <Link href="/">
              <Image src={logo} width={85} height={63} alt="teste" />
            </Link>
          </div>
          {(isOpen || isLargeScreen) && <>
            <div className="navbar__btns">
              <GroupBtnSec setIsOpen={setIsOpen} />
            </div>
          </>}
          <div className="navbar__icons btnmenu">
            <Link href=''>
              <IoMenuSharp onClick={(e) => {
                e.preventDefault()
                setIsOpen(!isOpen)
              }} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}