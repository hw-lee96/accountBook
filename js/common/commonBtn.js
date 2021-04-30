import React from 'react';

import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import cm from '../common/commonStyleFn';

export default {
    defaultBtn: (text, fn, style, color) => {
        return (
            <TouchableOpacity style={[st.defaultBtn, st[color+'B'], style]} onPress={fn}>
                <Text style={[st[color+'T']]}>{text}</Text>
            </TouchableOpacity>
        );
    },
}

const st = StyleSheet.create({
    defaultBtn : {
        width: cm.dw(70),
        height: cm.dh(6),
        alignItems: 'center',
        justifyContent: 'center',

        borderRadius : 15,
        borderStyle : 'solid',
        borderWidth : 1,
    },
    blueB : {
        backgroundColor : '#70b7ff',
        borderColor : '#4791ff',
    },
    blueT : {
        color : '#e8f4ff'       // HSL -, -, 95%
    },
    redB : {
        backgroundColor : '#ff7070',
        borderColor : '#ff5746',        // HSL +6, 0 -8
    },
    redT : {
        color : '#ffe5e5'
    },
    greenB : {
        backgroundColor : '#1AAB8A',
        borderColor : '#158a7a',
    },
    greenT : {
        color : '#e9fcf7'
    },

    
});

