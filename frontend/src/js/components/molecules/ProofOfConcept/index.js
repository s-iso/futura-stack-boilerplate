import React, {Component} from 'react';
import { connect } from 'react-redux'
import {toggleVisibility} from "../../../actions/actions";
import Button from '../../atoms/button';
import Text from '../../atoms/text';
import './style.scss';

const ProofOfConceptComponent = ({visibility, testData, isFetching, toggleVisibility}) => (
    <div>
        <Button action={toggleVisibility}>Toggle Visibility</Button>
        { visibility &&
            <Text className="poc__red-text">{ isFetching ? "Fetching..." : testData }</Text>
        }
    </div>
)

const mapStateToProps = state => {
    return {
        visibility: state.visibility,
        isFetching: state.testData.isFetching,
        testData: state.testData.data
    };
};

export default connect(
    mapStateToProps,
    { toggleVisibility }
)(ProofOfConceptComponent);
