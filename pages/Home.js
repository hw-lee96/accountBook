import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import dataUtil from '../js/common/dataUtil';

const Home = ({navigation}) => {
    return (
        <View style={st.container}>
            <Text>홈 화면입니다.</Text>
            <Button title="가계부 작성하러 가기" onPress={ () => navigation.push('WriteExpenditure')} />
            <Text>{"\n"}</Text>
            <Button title="가계부 조회하러 가기" onPress={ () => navigation.push('ExpenditureList')} />
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
            <Button title="가계부 인덱스 초기화" onPress={ () => dataUtil.removeData('expendIdx')} />
            <Text>{"\n"}</Text>
            <Button title="가계부 전체 초기화" onPress={ () => dataUtil.removeData('expenditure')} />
            <Text>{"\n"}</Text>
            <Button title="전체 데이터 초기화" onPress={ () => dataUtil.dataClearAll('expendIdx')} />
        </View>
    );
}

const st = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#fff'
    }
});

export default Home;