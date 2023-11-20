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


function Bathroom() {

  return (
    <div>
      <section className='Gallery'>
        Bathroom's
      </section>

      <br/>

      <section style={Style.Box}>
     
          <img src='./images/Portneuf/4.jpg' style={Style.Images} className='images'></img>
          <img src='./images/Portneuf/7.jpg' style={Style.Images} className='images'></img>
          <img src='./images/bathroom.jpg' style={Style.Images} className='images'></img>
          <img src='./images/bathroom.jpg' style={Style.Images} className='images'></img>
    
      </section>


    </div>
  );
};

export default Bathroom; 