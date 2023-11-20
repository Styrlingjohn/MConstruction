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


function Exterior() {

  return (
    <div>
       <section className='Gallery'>
          Exterior's
      </section>

      <br/>

      <section style={Style.Box}>

          <img src='./images/AFrame.jpg' style={Style.Images} className='images'></img>
          <img src='./images/AFrame.jpg' style={Style.Images} className='images'></img>
          <img src='./images/AFrame.jpg' style={Style.Images} className='images'></img>
          <img src='./images/AFrame.jpg' style={Style.Images} className='images'></img>

      </section>
      
    </div>
  );
};

export default Exterior; 