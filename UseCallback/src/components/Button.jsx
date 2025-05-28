import React from 'react';

const Button = React.memo(({onClick,children}) => {
    console.log(`button component rerendered again ${children}`);
    
  return (
    <button onClick={onClick}>{children}</button>
  )
});

export default Button;