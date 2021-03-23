import React, {useState} from 'react';
import { Button, View, Text, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const WriteExpenditure = ({navigation}) => {
    const osType = 'web';

    const [onChangeTitle] = useState(null);
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
        if ( osType == 'web' ) {
            setDate(new Date(2021, 2, 28)); 
        } else {
            showMode('date');
        }
    };

    const writeSubmit = () => {
        console.log(date.getFullYear(), date.getMonth()+1, date.getDate());
    }

    return (
        <View>
            <SafeAreaView>
                <View>
                    <View>
                        <Text>* 제목</Text>
                    </View>
                    <View>
                        <TextInput onChangeText={onChangeTitle} placeholder="제목을 입력해주세요" />
                    </View>
                </View>

                <View>
                    <View>
                        <Text>* 일자</Text>
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

                <Text>가계부 작성</Text>
                <Button title="등록" onPress={writeSubmit} />
                <br/>
                <Button title="홈 화면으로 가기" onPress={ () => navigation.navigate('Home')} />
            </SafeAreaView>
        </View>
    )
}

const st = StyleSheet.create({
    container : {
        flex:9
    }
});

export default WriteExpenditure;