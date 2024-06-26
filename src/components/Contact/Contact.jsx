import "./Contact.css"

export function Contact(){
    return <>
    <section id = "contactMe">
        <h1>Got a Job Opportunity?</h1>
        <h5>Let's Get in Touch</h5>

        <div className = "container contact_container">
            <div className = "contact_options">

            </div>
            <form>
                <input type = "text" placeholder = "Your Name" required/>
                <input type = "text" placeholder = "Your Email" required/>
                <textarea name = "message" placeholder = "Your Message" rows = "7"/>
                <button type = "submit" >
                    <a href = "mailto:ashwinkharkwal007@gmail.com">Send Message</a>
                </button>
            </form>
        </div>

    </section>

    </>
}