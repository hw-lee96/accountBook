import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import WriteExpenditure from './pages/WriteExpenditure';

import TodoInsert from './pages/test/TodoInsert';
import TodoList from './pages/test/TodoList';
import common from './common';


const Stack = createStackNavigator();

function App() {
    return (
        <View style={st.container}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="writeExpenditure">
                    <Stack.Screen name="Home" component={Home} options={{ title: '홈화면' }} />
                    <Stack.Screen name="WriteExpenditure" component={WriteExpenditure} options={{ headerTitle: '가계부 작성' }} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}




function TestApp() {

    const [availableDeviceWidth, setAvailableDivceWidth] = useState(common.dw());
    const [availableDeviceHeight, setAvailableDivceHeight] = useState(common.dh());

    useEffect(() => {
        const updateLayout = () => {
            console.log(common.dw());
            console.log(common.dh());
            setAvailableDivceWidth(common.dw());
            setAvailableDivceHeight(common.dh());
        };
    
        Dimensions.addEventListener('change', updateLayout);
    
        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        };
    });
    
    if ( availableDeviceHeight < 500 ) {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.appTitle}>Hello TodoList</Text>
    
                <View style={styles.card}>
    
                    <TodoInsert />
    
                    <TodoList />
    
                </View>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.appTitle}>Hello TodoList</Text>

            <View style={styles.card}>

                <TodoInsert />

                <TodoList />

            </View>
        </SafeAreaView>
    )
}

const st = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3143e8',
        width: common.dw(100),
        height: common.dh(100),
        borderColor:'red',
        borderWidth:1,
    },
    appTitle: {
        color: '#fff',
        fontSize: 36,
        marginTop: common.dh(5),
        marginBottom: common.dh(5),
        fontWeight: '300',
        textAlign: 'center',
        backgroundColor: '#3143e8',
    },
    card: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 10, // to provide rounded corners
        borderTopRightRadius: 10, // to provide rounded corners
        marginLeft: 10,
        marginRight: 10,
    },
});

export default TestApp;
