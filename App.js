import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import writeExpenditure from './pages/writeExpenditure';


const Stack = createStackNavigator();

function App() {
	return (
        <View style={st.container}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} options={{title:'홈화면'}}/>
                    <Stack.Screen name="writeExpenditure" component={writeExpenditure} options={{headerTitle:'가계부 작성'}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </View>
	);
}

const st = StyleSheet.create({
    container : {
        flex:1,
        display : 'flex',
        flexDirection : 'column'
    }
});

export default App;
