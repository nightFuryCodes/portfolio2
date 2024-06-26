import React from 'react';
import "./Navbar.css"
import { FaLaptopCode } from "react-icons/fa";
import { AiOutlineHome, AiOutlineLine } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { GoChecklist } from "react-icons/go";
import { useState } from 'react';


export function Navbar(){
    const [active, setActive] = useState("#")


    return (
        <>
        <div>
        <nav>
            <a href = "#" 
            onClick = {()=>setActive("#")} 
            className = {active === "#" ? "active" : ""}>
                <AiOutlineHome />
            </a>
            <a href = "#about" 
            onClick = {()=>setActive("#about")} 
            className = {active === "#about" ? "active" : ""}>
                <BiUser/>
            </a>
            <a href = "#experience" 
                        onClick = {()=>setActive("#experience")} 
                        className = {active === "#experience" ? "active" : ""}>
                <FaLaptopCode />
            </a>

            <a href = "#projects"
                        onClick = {()=>setActive("#projects")} 
                        className = {active === "#projects" ? "active" : ""}>
                <GoChecklist/>
            </a>

            <a href = "#contactMe" 
                        onClick = {()=>setActive("#contactMe")} 
                        className = {active === "#contactMe" ? "active" : ""}>
                <BiMessageSquareDetail />
            </a>
        </nav>
        </div>
    </>
    )

}