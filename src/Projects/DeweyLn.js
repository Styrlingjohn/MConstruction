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


function DeweyLn() {

    return (
        <>
            <section className='Gallery'>
                Dewey Lane
            </section>

            <br />

            <section style={Style.Box} className='imageBox'>

                <img src='./images/DeweyLn/1.jpg' style={Style.Images} className='images'></img>
                <img src='./images/DeweyLn/8.jpg' style={Style.Images} className='images'></img>
                <img src='./images/DeweyLn/2.jpg' style={Style.Images} className='images'></img>
                <img src='./images/DeweyLn/5.jpg' style={Style.Images} className='images'></img>
                <img src='./images/DeweyLn/6.jpg' style={Style.Images} className='images'></img>
                <img src='./images/DeweyLn/7.jpg' style={Style.Images} className='images'></img>
                <img src='./images/DeweyLn/3.jpg' style={Style.Images} className='images'></img>
                <img src='./images/DeweyLn/9.jpg' style={Style.Images} className='images'></img>
                <img src='./images/DeweyLn/4.jpg' style={Style.Images} className='images'></img>
                
            </section>

        </>

    );
};

export default DeweyLn; 