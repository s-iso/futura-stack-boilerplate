import React from 'react';
import './style.scss';

const Container = ({children,classes}) => (
    <div className={"container " + classes}>{children}</div>
);

export default Container;
