import React from 'react';
import Container from '../../molecules/Container';
import Image from '../../atoms/image';
import Button from '../../atoms/button';
import Logo from '../../../../../steelplate_icon.png';
import { Link } from 'react-router-dom';
import './style.scss';

const NavigationBar = () => (
    //Navigation__background is temporary
    <nav className="navigation__background"> 
        <Container classes="flex align-items-center">
            <Link to="/" className="branding">
                <Image src={Logo} className="logo-nav"/> <span className="logo-nav-text">Boilerplate</span>
            </Link>
            <ul className="navigation">
		<li><Link to="/">Home</Link></li>
		<li><Link to="/poc">Server POC</Link></li>
            </ul>
        </Container>
    </nav>
    //TODO: There needs to be a conditional ternary operator that says to put the login/register or profile/logout buttons...
    //This cannot be done until there is a working backend. Skipping for now...
);

export default NavigationBar;
