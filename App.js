import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import WriteExpenditure from './pages/WriteExpenditure';

import cmSt from './js/common/commonStyleSheet';

const Stack = createStackNavigator();

function App() {
    return (
        <View style={cmSt.container}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} options={{ title: '홈화면' }} />
                    <Stack.Screen name="WriteExpenditure" component={WriteExpenditure} options={{ headerTitle: '가계부 작성' }} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}
export default App;
