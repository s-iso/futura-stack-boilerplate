import React from 'react';
import {Link} from 'react-router-dom';
import Container from '../../molecules/Container';
import Title from '../../atoms/title';
import Text from '../../atoms/text';
import './styles.scss'

const Footer = () => (
    <Container classes="footer-container">
	<div className="text-align-center">
		<Text>Boilerplate Corporation Incorporated™©</Text>
	        <Text>All Rights Reserved © 2049</Text>
	</div>
    </Container>
);

export default Footer;
