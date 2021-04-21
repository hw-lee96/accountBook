import { StyleSheet } from 'react-native';
import cm from './commonStyleFn';

export default StyleSheet.create({
    container : {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    btnContainer : {
        marginBottom:cm.dh(10)
    },
    botBtn : {
        width : cm.dw(100),
        height: cm.dh(10),
        position : 'absolute',
        bottom : 10,
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center'
    },
    submitBtn: {
        width: cm.dw(85),
        height: cm.dh(8),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1AAB8A',
    },
    submitText: {
        color: '#fff'
    },
    dpFlex : {
        display : 'flex',
    },
    flDC : {
        flexDirection : 'column'
    },
    // 좌우 중앙 정렬
    flAIC : {
        alignItems : 'center'
    },
    // 상하 중앙 정렬
    flJCC : {
        justifyContent : 'center'
    },
    flAICJCC : {
        alignItems : 'center',
        justifyContent : 'center'
    },
    FL9 : {
        flex : 9
    },
    FL1 : {
        flex : 1
    },

});