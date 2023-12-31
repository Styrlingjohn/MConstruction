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
    button: {
        position: 'absolute',
        right: '40px',
        transform: 'translateY(30%)'
    }
}


function AFrame() {

    return (
        <>
            <section className='Gallery'>
                AFrame
                <a href='/'><button style={Style.button} >Home</button></a>
            </section>

            <br />

            <section style={Style.Box} className='imageBox'>

                <img src='./images/Aframe/3.jpg' style={Style.Images} className='images'></img>
                <img src='./images/Aframe/1.jpg' style={Style.Images} className='images'></img>
                <img src='./images/Aframe/4.jpg' style={Style.Images} className='images'></img>
                <img src='./images/Aframe/5.jpg' style={Style.Images} className='images'></img>
                <img src='./images/Aframe/6.jpg' style={Style.Images} className='images'></img>
                <img src='./images/Aframe/7.jpg' style={Style.Images} className='images'></img>
                <img src='./images/Aframe/8.jpg' style={Style.Images} className='images'></img>
                <img src='./images/Aframe/2.jpg' style={Style.Images} className='images'></img>
                <img src='./images/Aframe/9.jpg' style={Style.Images} className='images'></img>
                <img src='./images/Aframe/10.jpg' style={Style.Images} className='images'></img>
                <img src='./images/Aframe/11.jpg' style={Style.Images} className='images'></img>
                <img src='./images/Aframe/12.jpg' style={Style.Images} className='images'></img>
                <img src='./images/Aframe/14.jpg' style={Style.Images} className='images'></img>
                <img src='./images/Aframe/15.jpg' style={Style.Images} className='images'></img>
                <img src='./images/Aframe/16.jpg' style={Style.Images} className='images'></img>
                <img src='./images/Aframe/17.jpg' style={Style.Images} className='images'></img>
            </section>

        </>

    );
};

export default AFrame; 