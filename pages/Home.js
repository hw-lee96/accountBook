import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import dataUtil from '../js/common/dataUtil';
import cmSt from '../js/common/commonStyleSheet';
import cmBtn from '../js/common/commonBtn';
import cm from '../js/common/commonStyleFn';

const Home = ({navigation}) => {
    return (
        <View style={[cmSt.homeContainer, cmSt.flAIC]}>
            <View style={[cmSt.flAIC]}>
                { cmBtn.blueBtn( '가계부 작성하러 가기', () => navigation.push('WriteExpenditure'), st.btnMargin )}
                { cmBtn.blueBtn( '가계부 조회하러 가기', () => navigation.push('ExpenditureList'), st.btnMargin )}
            </View>

            <View style={[cmSt.flAIC, st.bottomMenu]}>
                { cmBtn.redBtn( '가계부 인덱스 초기화', () => dataUtil.removeData('expendIdx'), st.btnMargin )}
                { cmBtn.redBtn( '가계부 전체 초기화', () => dataUtil.removeData('expenditure'), st.btnMargin )}
                { cmBtn.redBtn( '전체 데이터 초기화', () => dataUtil.dataClearAll('expendIdx'), st.btnMargin )}
            </View>
        </View>
    );
}

const st = StyleSheet.create({
    btnMargin : {
        marginTop : cm.dh(3),
        marginBottom : cm.dh(3),
    },
    bottomMenu : {
        position : 'absolute',
        bottom : cm.dh(3),
    }
});

export default Home;