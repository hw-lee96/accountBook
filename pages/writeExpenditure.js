import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity, ScrollView, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import cmSt from '../js/common/commonStyleSheet';
import cm from '../js/common/commonStyleFn';
import dataUtil from '../js/common/dataUtil';
import cmUtil from '../js/common/commonUtil';
import cmBtn from '../js/common/commonBtn';

const WriteExpenditure = ({ navigation }) => {
    // const osType = Platform.OS;
    const osType = 'web';

    // 제목
    const [title, setTitle] = useState('');

    // 달력
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(osType === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        if (osType == 'web') {
            setDate(new Date(2021, 3, 20));
        } else {
            showMode('date');
        }
    };

    // 가격
    const [price, setPrice] = useState(0);

    // 내용
    const [content, setContent] = useState('');

    // 카테고리
    const [category, setCategory] = useState('');

    // 등록 버튼
    const writeSubmit = async () => {
        var obj = {
            title,
            content,
            price,
            spentDate: cmUtil.getYYYYMMDD(date),
            category,
            insDate: cmUtil.getYYYYMMDD(),
            useYn: 'Y'
        }

        await dataUtil.setExpend(obj);

        Alert.alert( "", "등록되었습니다.", [{ text: "OK", onPress: () => navigation.navigate('Home') }] );
    }

    return (
        <ScrollView >
            <View style={cmSt.FL9, cmSt.dpFlex, cmSt.flAICJCC}>
                <SafeAreaView style={cmSt.dpFlex, cmSt.flDC, cmSt.flAICJCC, cmSt.btnContainer}>
                    <View style={st.inputBox}>
                        <View>
                            <Text style={st.inputTitle}>* 제목</Text>
                        </View>
                        <View>
                            <TextInput style={st.textInput} valut={title} onChangeText={setTitle} placeholder="제목을 입력해주세요" />
                        </View>
                    </View>

                    <View style={st.inputDt}>
                        <View>
                            <Text style={st.inputTitle}>* 일자</Text>
                        </View>
                        <View>
                            <View>
                                <Text>{date.getFullYear()}/{(date.getMonth() + 1 < 9 ? '0' : '') + (date.getMonth() + 1)}/{date.getDate()}</Text>
                                <Button onPress={showDatepicker} title="날짜를 선택해주세요." />
                            </View>
                            {show && (
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    mode={mode}
                                    is24Hour={true}
                                    display="default"
                                    onChange={onChangeDate}
                                />
                            )}
                        </View>
                    </View>

                    <View style={st.inputBox}>
                        <View>
                            <Text style={st.inputTitle}>* 가격</Text>
                        </View>
                        <View>
                            <TextInput style={st.textInput} onChangeText={setPrice} placeholder='가격을 입력해주세요' />
                        </View>
                    </View>

                    <View style={st.inputBox}>
                        <View>
                            <Text style={st.inputTitle}>º 내용</Text>
                        </View>
                        <View>
                            <TextInput style={st.textInput} onChangeText={setContent} placeholder='내용을 입력해주세요' />
                        </View>
                    </View>

                    <View style={st.inputBox}>
                        <View>
                            <Text style={st.inputTitle}>º 카테고리</Text>
                        </View>
                        <View>
                            <TextInput style={st.textInput} onChangeText={setCategory} placeholder='카테고리를 입력해주세요' />
                        </View>
                    </View>
                </SafeAreaView>

                <View style={cmSt.botBtn}>
                    {/* <Text>가계부 작성</Text> */}
                    { cmBtn.defaultBtn('등록', writeSubmit, null,'green') }

                    {/* <TouchableOpacity style={cmSt.submitBtn} onPress={writeSubmit} >
                        <View>
                            <Text style={cmSt.submitText}>등록</Text>
                        </View>
                    </TouchableOpacity> */}
                </View>
                <Text>{"\n"}</Text>
                {/* <br> 대신 {"\n"} 사용, 문자로 취급하므로 <Text>로 감싸야됨*/}
            </View>
        </ScrollView>
    )
}

const st = StyleSheet.create({
    inputBox: {
        width: cm.dw(80),
        height: cm.dh(5),
        marginTop: cm.dh(4),
        marginBottom: cm.dh(4)
    },
    inputDt: {
        width: cm.dw(80),
        height: cm.dh(10),
        marginTop: cm.dh(4),
        marginBottom: cm.dh(4)
    },
    inputTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: cm.dh(1),
    },
    textInput: {
        margin: 5,
        borderBottomColor: 'black',
        backgroundColor: '#fff'
    }
});

export default WriteExpenditure;