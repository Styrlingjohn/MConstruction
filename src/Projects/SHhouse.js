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


function SHHouse() {

  return (
    <>
      <section className='Gallery'>
        Sornsen House
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
        
      </section>

    </>

  );
};

export default SHHouse; 