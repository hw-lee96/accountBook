import * as React from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import WriteExpenditure from './pages/WriteExpenditure';

import TodoInsert from './pages/test/TodoInsert';
import TodoList from './pages/test/TodoList';


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
        flexDirection: 'column'
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3143e8',
    },
    appTitle: {
        color: '#fff',
        fontSize: 36,
        marginTop: 30,
        marginBottom: 30,
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
    input: {
        padding: 20,
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
        fontSize: 24,
        marginLeft: 20,
    },
});

export default TestApp;
