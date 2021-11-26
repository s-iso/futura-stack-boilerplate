import React from 'react';

import Navigation from '../organisms/Navigation/index.js';
import Footer from '../organisms/Footer';

const Page = (props) => (
    <div> 
	<Navigation/>
        {props.children}
	<Footer/>
    </div>
);

export default Page;
