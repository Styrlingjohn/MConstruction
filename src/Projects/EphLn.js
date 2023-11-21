import React from 'react';


const Style = {
    Box: {
        'display': 'flex',
        'margin': 'auto',
        'backgroundColor': 'white',
        'flexWrap': 'wrap',
        'width': '80%',
        'alignItems': 'center',
    },

    Images: {
        'margin': 'auto',
        'height': '80%',
        'display': 'flex',
        'flexWrap': 'wrap',
        'justifyContent': 'space-around',
        'paddingTop': '10px',
        'paddingBottom': '10px',
    },
}


function EphLn() {

    return (
        <>
            <section className='Gallery'>
                Dewey Lane
            </section>

            <br />

            <section style={Style.Box} className='imageBox'>
                <img src='./images/EphLn/12.jpg' style={Style.Images} className='images'></img>
                <img src='./images/EphLn/9.jpg' style={Style.Images} className='images'></img>
                <img src='./images/EphLn/10.jpg' style={Style.Images} className='images'></img>
                <img src='./images/EphLn/8.jpg' style={Style.Images} className='images'></img>
                <img src='./images/EphLn/1.jpg' style={Style.Images} className='images'></img>
                <img src='./images/EphLn/5.jpg' style={Style.Images} className='images'></img>
                <img src='./images/EphLn/2.jpg' style={Style.Images} className='images'></img>
                <img src='./images/EphLn/6.jpg' style={Style.Images} className='images'></img>
                <img src='./images/EphLn/3.jpg' style={Style.Images} className='images'></img>
                <img src='./images/EphLn/11.jpg' style={Style.Images} className='images'></img>
                <img src='./images/EphLn/13.jpg' style={Style.Images} className='images'></img>
                <img src='./images/EphLn/14.jpg' style={Style.Images} className='images'></img>
                <img src='./images/EphLn/15.jpg' style={Style.Images} className='images'></img>
                <img src='./images/EphLn/16.jpg' style={Style.Images} className='images'></img>
                <img src='./images/EphLn/17.jpg' style={Style.Images} className='images'></img>
                <img src='./images/EphLn/18.jpg' style={Style.Images} className='images'></img>

            </section>

        </>

    );
};

export default EphLn; 