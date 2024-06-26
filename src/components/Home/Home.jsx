import React from 'react'
import image from "/Images/ashwin.jpg"
import "./Home.css"

const Home = () =>{
    return (
        <header id = "home">
            <div className='container home_container'>
                <h5>Hello! I am </h5>
                <h1>Ashwin Kharkwal</h1>
                <h5 className='text-light'>Full-Stack Developer</h5>
                <div className = "cta">
                    <button><a href = "#" download className = "btn">Download CV</a></button>
                    <button><a href = "#contactMe" className = "btn">Contact Me</a></button>
                </div>
                <div className = "me">
                    <img src = {image} alt = "Ashwin"/>
                </div>
            </div>
        </header>
    )
}
export default Home