import React from 'react';
import CV from "../assests/img/cv.pdf";

const CVX = () => {
  return (
    <div className='cvx'>
        <a href= {CV} download className='btn'>Download CV</a>
        <a href='#Contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CVX;