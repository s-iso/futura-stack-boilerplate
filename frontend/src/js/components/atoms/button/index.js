import React from 'react';
import './style.scss';

const Button = ({size,type,action,children}) => (
    <button onClick={() => action()} className={'button__' + size}>{children}</button>
   // TODO: Change button to p or something else, browsers do wonky things whenever its normal button.  
);

export default Button;
