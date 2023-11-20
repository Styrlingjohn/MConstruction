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


function Portneuf() {

    return (
        <>
            <section className='Gallery'>
                Dewey Lane
            </section>

            <br />

            <section style={Style.Box} className='imageBox'>

                <img src='./images/Portneuf/1.jpg' style={Style.Images} className='images'></img>
                <img src='./images/Portneuf/8.jpg' style={Style.Images} className='images'></img>
                <img src='./images/Portneuf/3.jpg' style={Style.Images} className='images'></img>
                <img src='./images/Portneuf/5.jpg' style={Style.Images} className='images'></img>
                <img src='./images/Portneuf/6.jpg' style={Style.Images} className='images'></img>
                <img src='./images/Portneuf/7.jpg' style={Style.Images} className='images'></img>
                <img src='./images/Portneuf/2.jpg' style={Style.Images} className='images'></img>
                <img src='./images/Portneuf/9.jpg' style={Style.Images} className='images'></img>
                <img src='./images/Portneuf/10.jpg' style={Style.Images} className='images'></img>
                <img src='./images/Portneuf/11.jpg' style={Style.Images} className='images'></img>
                <img src='./images/Portneuf/12.jpg' style={Style.Images} className='images'></img>
                <img src='./images/Portneuf/13.jpg' style={Style.Images} className='images'></img>

            </section>

        </>

    );
};

export default Portneuf; 