import React from 'react';
import Page from '../templates/PageWrapper';
import ProofOfConceptComponent from '../molecules/ProofOfConcept';
import StaticIndexText from '../molecules/StaticIndexText';

const ConceptPage = () => (
    <Page>
        <StaticIndexText />
        <ProofOfConceptComponent />
    </Page>
);

export default ConceptPage;
