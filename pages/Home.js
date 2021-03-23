import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const Home = ({navigation}) => {
    return (
        <View style={st.container}>
            <Text>홈 화면입니다.</Text>
            <Button title="가계부 작성하러 가기" onPress={ () => navigation.push('WriteExpenditure')} />
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