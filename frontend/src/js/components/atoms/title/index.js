import React from 'react';
import './style.scss';

const Title = ({size,children}) => (
        <h1 className={'title__' + size}>{children}</h1>
);

export default Title;
