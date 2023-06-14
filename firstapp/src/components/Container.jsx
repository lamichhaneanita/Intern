import React from 'react';
function Container({children, title, content}) {
  return(
    <div className='Container'>
      {children}
    <h2>{title}</h2>
    <hr/>
    <p>{content}</p>
    </div>
  );
};

export default Container;
