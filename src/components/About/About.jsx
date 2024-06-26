import "./About.css"
import { FaUserGraduate } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import { FaLocationArrow } from 'react-icons/fa'
import image from "/Images/me.jpeg"


const About = () =>{
    return (
        
        <section id="about">
            <hr className = "line" />
            <h5>Get To Know</h5>
            <h2>About Me</h2>
        <div className="container about_container">
           <div className="about_left">
                <div className = "img_div">
                <img src = {image} alt="Ashwin"/>
                </div>
            </div> 
           <div className = "about_right">
                <div className = "card_container">
                <div className = "card">
                    <h3>Qualifications</h3>
                    <FaUserGraduate /><br/>
                    <p>Bachelor's in Information Technology</p><br/>
                    <p>Diploma in Computer Networks</p>
                </div>
                <div className = "card">
                    <h3>Address</h3>
                    <FaLocationArrow/>
                    <p>1013 106th Ave, Tisdale, SK.</p>
                </div>
                <div className = "card">
                    <h3>Contact Me</h3>
                    <FaPhone /><br/>
                    <p>Phone Number: 226-975-3961</p><br/>
                    <p>Email: ashwinkharkwal007<br/>@gmail.com</p>
                </div>
                </div>
                <div className="about_me">
                    <h3>Hi, I'm Ashwin Kharkwal, an aspiring full-stack MERN 
                        developer with a passion of building dynamic, robust and 
                        efficent web-applications. With a good understanding in MongoDB,
                        Express, React and Node.js, I can craft extremely pleasing user experiences
                        with a competent backend architecture.
                    </h3>
                </div>
            </div> 

        </div>
        </section>
    ) 
}


export default About;