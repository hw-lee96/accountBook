import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const writeExpenditure = ({navigation}) => {
    return (
        <View style={}>
            <Button title="홈 화면으로 가기" onPress={ () => navigation.navigate('Home')} />
            <Text>가계부 작성</Text>

            <div>

            </div>
        </View>
    );
}

const st = StyleSheet.create({
    container : {
        flex:8
    }
});

export default writeExpenditure;