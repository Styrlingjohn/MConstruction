import React from "react"




function Footer() {
    return (
        <div className="footer">

            <section className="contactInfo">
                <h1> Contact Info: </h1>
                <a href="tel:208-339-1132"> 208-339-1132 </a>
                <a href="mailto:k.morris32@yahoo.com"> k.morris32@yahoo.com </a>
            </section>

            
            <section className="FBLogoS">
                <a href="https://www.facebook.com/MorrisConstructioninc" className="FBLogoHolder">
                    <img className='fbLogo' alt="FB" src="/FB.png"/>
                </a>
            </section>
        </div>
    )
}

export default Footer;