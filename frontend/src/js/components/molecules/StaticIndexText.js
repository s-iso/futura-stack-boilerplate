import React from 'react';

import Text from '../atoms/text';

import Title from '../atoms/title';

const StaticIndexText = () => (
    <div>
        <Title size="md">Proof of Concept</Title>
        <Text>This Proof of Concept page should show a button that says "Toggle Visibility" and a red text that says "Hello World".</Text>
        <Text>By pressing the button, the Text should be hidden. By pressing it again, it should show up again.</Text>
        <Text>If any of these things do not work, something has gone wrong in setting up the server.</Text>
    </div>
)

export default StaticIndexText;
