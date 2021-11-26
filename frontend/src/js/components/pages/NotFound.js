import React from 'react';
import Page from '../templates/PageWrapper';
import Title from '../atoms/title';

const NotFound = () => (
    <Page>
        <Title size="lg">Hoops!</Title>
        <Title size="md">This page does not exist. Try again! (Error 404)</Title>
    </Page>
);

export default NotFound;
