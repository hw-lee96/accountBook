import React from 'react';

import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import cm from '../common/commonStyleFn';

export default {
    blueBtn: (text, fn, style) => {
        return (
            <TouchableOpacity style={[st.blueBtn, style]} onPress={fn}>
                <Text style={[st.blueBtnText]}>{text}</Text>
            </TouchableOpacity>
        );
    },
    redBtn: (text, fn, style) => {
        return (
            <TouchableOpacity style={[st.redBtn, style]} onPress={fn}>
                <Text style={[st.redBtnText]}>{text}</Text>
            </TouchableOpacity>
        );
    },
}

const st = StyleSheet.create({
    blueBtn: {
        width: cm.dw(70),
        height: cm.dh(6),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : '#70b7ff',

        borderRadius : 15,
        borderStyle : 'solid',
        borderWidth : 1,
        borderColor : '#21609e',
    },
    blueBtnText : {
        fontSize: 15,
    },

    redBtn: {
        width: cm.dw(70),
        height: cm.dh(6),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : '#ff7070',

        borderRadius : 15,
        borderStyle : 'solid',
        borderWidth : 1,
        borderColor : '#ff5746',
    },
    redBtnText : {
        fontSize: 15,
    },
    
});

