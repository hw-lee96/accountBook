import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity, ScrollView, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import cmSt from '../js/common/commonStyleSheet';
import cm from '../js/common/commonStyleFn';
import dataUtil from '../js/common/dataUtil';
import cmUtil from '../js/common/commonUtil';

const ExpenditureList = ({ navigation }) => {
    const init = async () => {
        let expendList = await dataUtil.getExpend();
        console.log(expendList);
    }
    init();
    
    return (
        <View style={cmSt.FL9, cmSt.dpFlex, cmSt.flAICJCC}>
                <View>
                    <Text>가계부 조회 화면</Text>
                </View>
        </View>
    )
}

const st = StyleSheet.create({

});

export default ExpenditureList;