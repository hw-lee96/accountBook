// components/TodoInsert.js
import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import common from '../../common';

const TodoInsert = ({ onAddTodo }) => {

    // 사용자가 입력한 todo 텍스트를 관리할 훅
    const [newTodoItem, setNewTodoItem] = useState('');

    // 텍스트를 업데이트할 핸들러용 함수
    const todoInputHandler = newTodo => {
        setNewTodoItem(newTodo);
    };

    // 작성된 텍스트를 todos에 추가하도록 연결하는 핸들러
    const addTodoHandler = () => {
        onAddTodo(newTodoItem);
        setNewTodoItem('');
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Add an item!"
                placeholderTextColor={'#999'}
                autoCorrect={false}
                onChangeText={todoInputHandler}     // 텍스트 수정 시 핸들러 호출하여 값 반영
                value={newTodoItem}
                autoCorrect={true}                  // 자동수정여부(?)
            />
            <View style={styles.button}>
                <Button title={'ADD'} onPress={addTodoHandler} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        padding: common.dw(4),
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
        fontSize: 24,
        marginLeft: common.dw(5),
        width: common.dw(60)
    },
    button: {
        marginRight: common.dw(5),
    },
});

export default TodoInsert;