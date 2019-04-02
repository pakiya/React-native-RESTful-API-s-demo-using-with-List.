/* eslint-disable react/require-extension */
import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#0000CD',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'

    },
    textStyle: {
        fontSize: 20,
        color: '#FFFFFF'
    }
};

export default Header;
