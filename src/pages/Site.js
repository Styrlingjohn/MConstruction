import React from "react";




function Homepage() {


    const Style = {
        Container: {
            display: 'flex',
            height: '450px',
            margin: '10px',
            border: '1px solid',
            backgroundColor: 'black',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',

        },
        Box: {
            margin: 'auto',
            display: 'block',
            'flexWrap': 'wrap',
            'flex-direction': 'row',
            height: '98%',
            width: '98%',
        },



    }



    return (
        <div >

            <br />

            <div className="flexbox" >
                <section className="about" >
                Established in the year 2000, our company has been a stalwart in delivering exceptional services to the community. With a firm commitment to quality, communication, experience, and integrity, 
                we have become a trusted name in South East Idaho. Our journey has been defined by a dedication to providing top-notch services that meet the highest standards. From our inception, we have strived to build lasting relationships with our clients, 
                ensuring open and transparent communication at every step. IN recent years we have diverted attention to multi family homes, adding that to a list of custom homes and remodels Morris Construction is the construction
                company to build what your mind can imagine. With a focus on excellence, we continue to serve and make a positive impact in the South East Idaho region.
                </section>
            </div>

            <br />

            <div>
                <section id="Gallery" className="Gallery">
                    Gallery
                </section>
            </div>

            <br />

            <div className="flexbox">
                <section className='cont-box-1' style={Style.Container}>
                    <section style={Style.Box} className="kitchenStyle">
                        <a href='/kitchen'> <div className="boxOverlay">
                            Kitchen's
                        </div></a>
                    </section>
                </section>


                <section className='cont-box-1' style={Style.Container}>
                    <section style={Style.Box} className="bathroomStyle">
                        <a href='/bathroom'> <div className="boxOverlay">
                            Bathroom's
                        </div></a>
                    </section>
                </section>


                <section className='cont-box-1' style={Style.Container}>
                    <section style={Style.Box} className="exteriorStyle">
                        <a href='/exterior'> <div className="boxOverlay">
                            Exterior's
                        </div></a>
                    </section>
                </section>


                <section className='cont-box-1' style={Style.Container}>
                    <section style={Style.Box} className="finishStyle">
                        <a href='/finishes'> <div className="boxOverlay">
                            Finishes
                        </div></a>
                    </section>
                </section>



            </div>

            <br />

            <div>

                <section className="Gallery">
                    Projects
                </section>
            </div>

            <br />


            <div className="flexbox">

                <section className='cont-box-1' style={Style.Container}>
                    <section style={Style.Box} className="hatchH">
                        <a href='/HatchH'> <div className="boxOverlay">
                            Hatch House
                        </div></a>
                    </section>
                </section>
                
                <section className='cont-box-1' style={Style.Container}>
                    <section style={Style.Box} className="SHStyle">
                        <a href='/sorensenhouse'> <div className="boxOverlay">
                            Sorensen House
                        </div></a>
                    </section>
                </section>

                <section className='cont-box-1' style={Style.Container}>
                    <section style={Style.Box} className="AFrame">
                        <a href='/aframe'> <div className="boxOverlay">
                            Aframe
                        </div></a>
                    </section>
                </section>

                <section className='cont-box-1' style={Style.Container}>
                    <section style={Style.Box} className="DeweyLn">
                        <a href='/deweyLn'> <div className="boxOverlay">
                            Dewey Lane
                        </div></a>
                    </section>
                </section>

                <section className='cont-box-1' style={Style.Container}>
                    <section style={Style.Box} className="portneuf">
                        <a href='/portneuf'> <div className="boxOverlay">
                            Portneuf House
                        </div></a>
                    </section>
                </section>

                <section className='cont-box-1' style={Style.Container}>
                    <section style={Style.Box} className="ephLn">
                        <a href='/EphLn'> <div className="boxOverlay">
                            Eph Lane
                        </div></a>
                    </section>
                </section>


            </div>

        </div>
    );
};

export default Homepage;