import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import TodoListItem from './TodoListItem';

// components/TodoList.js
const TodoList = ({ todos, onRemove, onToggle }) => {
    return (
        <ScrollView contentContainerStyle={styles.listContainer}>
            {todos.map(todo => (        // todo 수 만큼 TodoListItem 생성
                <TodoListItem key={todo.id} {...todo} onRemove={onRemove} onToggle={onToggle} />        // unique한 key값을 전달하지 않으면 경고뜸
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        alignItems: 'center',
    },
});

export default TodoList;