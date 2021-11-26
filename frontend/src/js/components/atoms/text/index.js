import React from 'react';

const Text = ({children, ...props}) => (
    <p {...props}>{children}</p>
    // TODO: Remove props
);

export default Text;
