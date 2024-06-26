import "./Skills.css"
import { BsFillPatchCheckFill } from "react-icons/bs"


export function Skills(){
    return<>
    <section id = "experience">
        <h1>My Skills</h1>
        <div className="container experience_container">
            <div className="skills_frontend">
                <h2>FronEnd Develeopment</h2>
                <div className = "skill_box">
                <Skill language = {"HTML"} level = {"experienced"}/>
                <Skill language = {"CSS"} level = {"experienced"}/>
                <Skill language = {"JAVASCRIPT"} level = {"intermediate"}/>
                <Skill language = {"REACT"} level = {"intermediate"}/>
                </div>
            </div>
            <div className="skills_backend">
                <h2>BackEnd Develeopment</h2>
                <div className = "skill_box">
                <Skill language = {"Node.js"} level = {"experienced"}/>
                <Skill language = {"Express.js"} level = {"experienced"}/>
                <Skill language = {"MongoDB"} level = {"intermediate"}/>
                <Skill language = {"MY SQL"} level = {"beginner"}/>
                </div>
            </div>
        </div>
    </section>
    </>
}

function Skill({language, level}){
    return <>
        <div>
            <BsFillPatchCheckFill/>
            <h3>{language}</h3>
            <h4>{level}</h4>
        </div>
    </>
}
