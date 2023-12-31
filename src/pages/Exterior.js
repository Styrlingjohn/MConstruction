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


function Exterior() {

  return (
    <div>
      <section className='Gallery'>
        Exterior's
        <a href='/'><button style={Style.button} >Home</button></a>
      </section>

      <br />

      <section style={Style.Box}>

        <img src='./images/DeweyLn/2.jpg' style={Style.Images} className='images'></img>
        <img src='./images/Aframe/3.jpg' style={Style.Images} className='images'></img>
        <img src='./images/Aframe/1.jpg' style={Style.Images} className='images'></img>
        <img src='./images/EphLn/1.jpg' style={Style.Images} className='images'></img>

      </section>

    </div>
  );
};

export default Exterior; 