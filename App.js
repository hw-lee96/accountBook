import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions } from 'react-native';

import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import WriteExpenditure from './pages/WriteExpenditure';
import ExpenditureList from './pages/ExpenditureList';

import cmSt from './js/common/commonStyleSheet';

const Stack = createStackNavigator();
const scheme = '';

const MyTheme = {
    colors: {
        primary: 'red',         // (?) 다양한 요소에 색조를 지정하는 데 사용되는 앱의 기본 색상입니다. 일반적으로이를 위해 브랜드 색상을 사용하고 싶을 것입니다.
        card: '#303030',        // 헤더, 탭바 백그라운드 컬러
        background: '#303030',    // 기본 백그라운드 컬러. card가 정의되어있지 않으면 헤더, 탭바도 이 색으로 설정됨
        text: '#ddd',          // 글자
        border: '#555555',         // 테두리 
        notification: 'green',    // (?) 탭 네비게이터 배지의 색상입니다.
    },
};

function App() {
    return (
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : MyTheme}>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{ title: '홈화면' }} style={cmSt.blackTheme} />
                <Stack.Screen name="WriteExpenditure" component={WriteExpenditure} options={{ headerTitle: '가계부 작성' }} />
                <Stack.Screen name="ExpenditureList" component={ExpenditureList} options={{ headerTitle: '가계부 조회' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;
