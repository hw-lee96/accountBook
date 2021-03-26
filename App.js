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

    // hook을 이용해 할 일 목록을 담을 변수 todos와 이 변수를 업데이트할 함수 setTodos를 정의
    // todos의 초기 상태값으로는 빈 배열을 담아줌
    const [todos, setTodos] = useState([]);

    // 기존에 있던 todos 배열에 입력한 내용(text)을 리스트에 추가 후 setTodos를 이용해 todos를 업데이트하는 함수
    const addTodo = text => {
        setTodos([
            ...todos,
            { id: Math.random().toString(), textValue: text, checked: false },
        ]);
    };

    // todo 삭제 함수
    const onRemove = id => e => {
        // filter를 이용해 전달된 id와 같지 않은 id를 가진 항목만 배열로 구성하여 todos를 업데이트
        setTodos(todos.filter(todo => todo.id !== id));
    };

    // todo 체크 함수
    const onToggle = id => e => {
        setTodos(
            todos.map(todo =>
                // 체크한 todo의 id와 동일한 항목만 checked를 변경, 그 외에는 그대로 반환
                todo.id === id ? { ...todo, checked: !todo.checked } : todo,
            ),
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.appTitle}>Hello TodoList</Text>

            <View style={styles.card}>

                <TodoInsert onAddTodo={addTodo} />

                <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />

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
        borderColor: 'red',
        borderWidth: 1,
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
