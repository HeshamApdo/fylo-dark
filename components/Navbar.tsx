"use client"
import { link } from "fs"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
const Navbar = () => {
    const navRef = useRef();
    useEffect(() =>{
        window.addEventListener("scroll", () =>{
            if (window.scrollY > 100){
                navRef.current.style.background = "#0c1524"
                navRef.current.style.padding = "20px 0"
            } else{
                navRef.current.style.background = "transparent"
                navRef.current.style.padding = "60px 0 0 0"
            }
        })
    },[])
    const [links, setLinks] = useState(["Home","Features", "Team", "SignIn"])
  return (
    <div ref={navRef} className="pt-[60px] fixed top-0 left-0 w-full z-10 nav transition-all duration-200">
        <div className="container mx-auto flex justify-between items-center px-[30px]">
            <Link href="/">
                <Image src="/images/logo.svg" alt="logo" width={100} height={100} className="sm:w-[176px] sm:h-[52px]"/>
            </Link>
            <ul className="text-white flex justify-between items-center gap-4 sm:gap-10 pl-10">
                {links.map((link) =>(
                    <li key={link}>
                        <a href={(link === "Team" || link === "SignIn")? `/${link.toLowerCase()}` : (link === "Home") ? `/` : null} className={`hover:underline hover:decoration-sky-500 hover:underline-offset-8 ${link === "Features" && "cursor-pointer"}`} onClick={() =>{link === "Features" && window.scrollTo(0,800)}}>{link}</a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Navbar