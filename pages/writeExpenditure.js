import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import cmSt from '../js/common/commonStyleSheet';
import cm from '../js/common/commonStyleFn';

const WriteExpenditure = ({ navigation }) => {
    const osType = 'web';

    // 제목
    const [title, setTitle] = useState('');

    // 달력
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
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

    // 태그
    const [tags, setTags] = useState('');

    // 등록 버튼
    const writeSubmit = () => {
        var obj = {
            title,
            date : `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`,
            price,
            content,
            tags
        }
        console.log(obj);
    }

    // 웹 포커스 (이후 모바일에도 적용 예정)
    

    return (
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
                        <TextInput style={st.textInput} onChangeText={setPrice} placeholder='가격을 입력해주세요'/>
                    </View>
                </View>

                <View style={st.inputBox}>
                    <View>
                        <Text style={st.inputTitle}>º 내용</Text>
                    </View>
                    <View>
                        <TextInput style={st.textInput} onChangeText={setContent} placeholder='내용을 입력해주세요'/>
                    </View>
                </View>

                <View style={st.inputBox}>
                    <View>
                        <Text style={st.inputTitle}>º 태그</Text>
                    </View>
                    <View>
                        <TextInput style={st.textInput} onChangeText={setTags} placeholder='태그를 선택해주세요'/>
                    </View>
                </View>
            </SafeAreaView>

            <View style={cmSt.botBtn}>
                {/* <Text>가계부 작성</Text> */}
                <TouchableOpacity style={cmSt.submitBtn} onPress={writeSubmit} >
                    <View>
                        <Text style={cmSt.submitText}>등록</Text>
                    </View>
                </TouchableOpacity>
            </View>
                {/* <View style={cmSt.submitBtn} ><Button title="등록" onPress={writeSubmit} /></View> */}
                <Text>{"\n"}</Text>
                {/* <br> 대신 {"\n"} 사용, 문자로 취급하므로 <Text>로 감싸야됨*/}
                {/* <Button style={cmSt.submitBtn} title="홈 화면으로 가기" onPress={() => navigation.navigate('Home')} /> */}
        </View>
    )
}

const st = StyleSheet.create({
    inputBox : {
        width : cm.dw(80),
        height : cm.dh(5),
        marginTop : cm.dh(4),
        marginBottom : cm.dh(4)
    },
    inputDt : {
        width : cm.dw(80),
        height : cm.dh(10),
        marginTop : cm.dh(4),
        marginBottom : cm.dh(4)
    },
    inputTitle : {
        fontSize : 16,
        fontWeight : '600',
        marginBottom : cm.dh(1),
    },
    textInput : {
        margin : 5,
        borderBottomColor : 'black',
        backgroundColor : '#fff'
    }

});

export default WriteExpenditure;