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

    const editExpenditure = (expendIdx) => {
        console.log(expendIdx);

        let obj = {};
        obj[expendIdx] = {
            category: "update"+expendIdx,
            content: "update"+expendIdx,
            expendIdx: "1",
            insDate: "2021504",
            price: 0,
            spentDate: "2021504",
            title: "update"+expendIdx,
            useYn: "Y",
        }
        dataUtil.updateExpend(obj);
    }

    useEffect(() => {
        initData();
    }, []);

    return (
        <ScrollView>
            <View style={[cmSt.FL9, cmSt.dpFlex, cmSt.flAICJCC]}>
                <SafeAreaView style={[cmSt.dpFlex, cmSt.flDC, cmSt.flAICJCC, cmSt.btnContainer]}>
                    <FlatList 
                        data={expendList}
                        renderItem={
                            ({item}) => 
                                <View style={st.itemBox}>
                                    <View style={st.editBtn}>
                                        <TouchableOpacity style={st.editBtn2} onPress={ () => editExpenditure(item.expendIdx) } >
                                            <View>
                                                <Text style={st.editText}>수정</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    
                                    <Text style={st.boxText}>제목 : {!item.title? '없음':item.title}</Text>
                                    <Text style={st.boxText}>내용 : {!item.content? '없음':item.content}</Text>
                                    <Text style={st.boxText}>가격 : {!item.price? 0:item.price}</Text>
                                    <Text style={st.boxText}>소비일 : {item.spentDate}</Text>
                                    <Text style={st.boxText}>카테고리 : {!item.category? '없음':item.category}</Text>
                                </View>
                        }
                        keyExtractor={(item, index) => index.toString()}        // 각 아이템의 키값을 지정
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
        borderColor : '#ddd',
    },
    boxText : {
        color : '#ddd',
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