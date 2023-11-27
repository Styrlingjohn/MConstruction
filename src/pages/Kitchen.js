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


function Kitchen() {

  return (
    <>
      <section className='Gallery'>
        Kitchen's
        <a href='/'><button style={Style.button} >Home</button></a>
      </section>

      <br />

      <section style={Style.Box} className='imageBox'>

        <img src='./images/DeweyLn/4.jpg' style={Style.Images} className='images'></img>
        <img src='./images/EphLn/13.jpg' style={Style.Images} className='images'></img>
        <img src='./images/EphLn/14.jpg' style={Style.Images} className='images'></img>
        <img src='./images/EphLn/15.jpg' style={Style.Images} className='images'></img>
        <img src='./images/Portneuf/1.jpg' style={Style.Images} className='images'></img>
      </section>

    </>

  );
};

export default Kitchen; 