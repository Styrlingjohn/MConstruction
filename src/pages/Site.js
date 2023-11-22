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
        <div>

            <br />

            <div className="flexbox">
                <section >
                    Construction is a general term meaning the art and science to form objects, systems, or organizations, and comes from Latin construction (from com- "together" and struere "to pile up") and Old French construction.
                    To construct is the verb: the act of building, and the noun is construction: how something is built, the nature of its structure.
                    In its most widely used context, construction covers the processes involved in delivering buildings, infrastructure, industrial facilities, and associated activities through to the end of their life. It typically starts with planning,
                    financing, and design, and continues until the asset is built and ready for use; construction also covers repairs and maintenance work, any works to expand, extend and improve the asset, and its eventual demolition, dismantling or decommissioning.
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