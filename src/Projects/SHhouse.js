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


function SHHouse() {

  return (
    <>
      <section className='Gallery'>
        Sorensen House
        <a href='/'><button style={Style.button} >Home</button></a>
      </section>

      <br />

      <section style={Style.Box} className='imageBox'>

        <img src='./images/SornsenHouse/3.jpg' style={Style.Images} className='images'></img>
        <img src='./images/SornsenHouse/4.jpg' style={Style.Images} className='images'></img>
        <img src='./images/SornsenHouse/5.jpg' style={Style.Images} className='images'></img>
        <img src='./images/SornsenHouse/6.jpg' style={Style.Images} className='images'></img>
        <img src='./images/SornsenHouse/11.jpg' style={Style.Images} className='images'></img>
        <img src='./images/SornsenHouse/1.jpg' style={Style.Images} className='images'></img>
        <img src='./images/SornsenHouse/2.jpg' style={Style.Images} className='images'></img>
        <img src='./images/SornsenHouse/12.jpg' style={Style.Images} className='images'></img>
        <img src='./images/SornsenHouse/13.jpg' style={Style.Images} className='images'></img>
        <img src='./images/SornsenHouse/14.jpg' style={Style.Images} className='images'></img>
        <img src='./images/SornsenHouse/15.jpg' style={Style.Images} className='images'></img>
        <img src='./images/SornsenHouse/16.jpg' style={Style.Images} className='images'></img>
        <img src='./images/SornsenHouse/17.jpg' style={Style.Images} className='images'></img>
        <img src='./images/SornsenHouse/18.jpg' style={Style.Images} className='images'></img>
        <img src='./images/SornsenHouse/19.jpg' style={Style.Images} className='images'></img>
        <img src='./images/SornsenHouse/20.jpg' style={Style.Images} className='images'></img>
        <img src='./images/SornsenHouse/21.jpg' style={Style.Images} className='images'></img>
        <img src='./images/SornsenHouse/22.jpg' style={Style.Images} className='images'></img>
        <img src='./images/SornsenHouse/23.jpg' style={Style.Images} className='images'></img>
        <img src='./images/SornsenHouse/24.jpg' style={Style.Images} className='images'></img>
        <img src='./images/SornsenHouse/25.jpg' style={Style.Images} className='images'></img>
        
      </section>

    </>

  );
};

export default SHHouse; 