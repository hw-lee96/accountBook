// components/TodoListItem.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import common from '../../common';
import Icon from 'react-native-vector-icons/AntDesign';

const TodoListItem = ({ textValue, id, checked, onRemove, onToggle }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPressOut={onToggle(id)}>
                {/* 체크 되었을 때 Icon을 표시, 체크되지 않았을 때는 원만 노출 */}
                {checked ? (
                    <View style={styles.completeCircle}>
                        <Icon name="circledowno" size={30} color="#3143e8" />
                    </View>
                ) : (
                    <View style={styles.circle} />
                )}
            </TouchableOpacity>

            <Text style={[styles.text, checked ? styles.strikeText : styles.unstrikeText,]}>
                {textValue}
            </Text>

            <TouchableOpacity style={styles.buttonContainer}>
                {/* 삭제버튼 클릭 시 해당 todo의 id 값을 매개변수로 onRemove 호출 */}
                <Text style={styles.buttonText} onPress={onRemove(id)}>
                    <Icon name="delete" size={30} color="#e33057" />
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: common.dw(100),
    },
    text: {
        flex: 4,
        fontWeight: '500',
        fontSize: 18,
        marginVertical: common.dh(3),
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: 'blue',
        borderWidth: 2,
        marginRight: common.dw(5),
        marginLeft: common.dw(8),
    },
    completeCircle: {
        marginRight: common.dw(5),
        marginLeft: common.dw(8),
    },
    strikeText: {
        color: '#bbb',
        textDecorationLine: 'line-through',
    },
    unstrikeText: {
        color: '#29323c',
    },
    buttonContainer: {
        marginVertical: common.dw(2),
        marginRight: common.dw(7),
        marginLeft: common.dw(2),
        // marginHorizontal: common.dw(5),      // marginRight, marginLeft를 설정하는 값
    },
});

export default TodoListItem;