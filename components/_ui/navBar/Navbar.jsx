'use client'
import { GoArrowLeft } from "react-icons/go";
import { IoMenuSharp } from "react-icons/io5";
import GroupBtnSec from '../groupBtnSec/GroupBtnSec'
import './index.scss'
import Image from "next/image";
import logo from "../../../public/assets/images/logo-principal.png"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLargeScreen, setIsLargeScreen] = useState(typeof window !== 'undefined' ? window.innerWidth > 1200 : false)

  useEffect(() => {
    const handleRezise = () => {
      setIsLargeScreen(window.innerWidth > 1200)
    }

    window.addEventListener("resize", handleRezise)

    return () => {
      window.removeEventListener("resize", handleRezise)
    }
  }, [])


  return (
    <>
      <div className="navbar">
        <div className="navbar__icons">
          <Link href="#">
            <GoArrowLeft />
          </Link>
        </div>
        <div className="navbar__logo">
          <Link href="/">
            <Image src={logo} width={95} height={80} alt="teste" />
          </Link>
        </div>
        {(isOpen || isLargeScreen) && <>
          <div className="navbar__btns">
            <GroupBtnSec />
          </div>
        </>}
        <div className="navbar__icons btnmenu">
          <Link href="#">
            <IoMenuSharp onClick={(e) => {
              e.preventDefault()
              setIsOpen(!isOpen)
              }} />
          </Link>
        </div>
      </div>
    </>
  )
}