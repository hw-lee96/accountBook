import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, TextInput, ScrollView} from 'react-native';
import TodoListItem from './TodoListItem';

const TodoList = () => {
    return (
        <ScrollView contentContainerStyle={styles.listContainer}>
            <TodoListItem />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        alignItems:'center'
    }
});

export default TodoList;