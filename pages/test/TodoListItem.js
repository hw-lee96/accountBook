// components/TodoListItem.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import common from '../../common';

const TodoListItem = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={styles.circle} />
            </TouchableOpacity>
            <Text style={styles.text}>TodoList items will</Text>
        </View>
    );
};

console.log(common.dw(100));

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        flex: 5,
        fontWeight: '500',
        fontSize: 18,
        marginVertical: common.dh(3),
        width: common.dw(80),
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: 'blue',
        borderWidth: 2,
        marginRight: 20,
        marginLeft: 20,
    },
});

export default TodoListItem;