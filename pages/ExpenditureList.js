import React, { useState, useEffect } from 'react';
import { Button, View, Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity, ScrollView, Alert, FlatList } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import cmSt from '../js/common/commonStyleSheet';
import cm from '../js/common/commonStyleFn';
import dataUtil from '../js/common/dataUtil';

const ExpenditureList = ({ navigation }) => {
    let [expendList,setList] = useState([]);

    const initData = async () => {
        setList(await dataUtil.getExpend());
    }

    const test = () => {console.log('edit button click!')}

    useEffect(() => {
        initData();
    }, []);

    return (
        <ScrollView>
            <View style={cmSt.FL9, cmSt.dpFlex, cmSt.flAICJCC}>
                <SafeAreaView style={cmSt.dpFlex, cmSt.flDC, cmSt.flAICJCC, cmSt.btnContainer}>
                    <FlatList 
                        data={expendList}
                        renderItem={
                            ({item}) => 
                                <View style={st.itemBox}>
                                    <View style={st.editBtn}>
                                        <TouchableOpacity style={st.editBtn2} onPress={test} >
                                            <View>
                                                <Text style={st.editText}>수정</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    
                                    <Text>제목 : {!item.title? '없음':item.title}</Text>
                                    <Text>내용 : {!item.content? '없음':item.content}</Text>
                                    <Text>가격 : {!item.price? 0:item.price}</Text>
                                    <Text>소비일 : {item.spentDate}</Text>
                                    <Text>카테고리 : {!item.category? '없음':item.category}</Text>
                                </View>
                        }
                    />
                </SafeAreaView>
            </View>
        </ScrollView>
    )
}

const st = StyleSheet.create({
    itemBox : {
        width: cm.dw(80),
        borderWidth: 1,
        borderRadius: 5,
        borderStyle: 'solid',
        marginTop : 20,
        padding : 10,
    },

    editBtn : {
        zIndex : 1,
        position : 'absolute',
        right : cm.dw(2),
        top : cm.dw(2),

        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',

        width : cm.dw(14),
        height : cm.dw(7),
    },

    editBtn2 : {
        width: cm.dw(14),
        height: cm.dw(7),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : '#4290f5',

        borderRadius : 15,
        borderStyle : 'solid',
        borderWidth : 1,
        borderColor : '#21609e',
    },

    editText : {
        color : '#edf6ff',
        fontSize : 12
    }
});

export default ExpenditureList;