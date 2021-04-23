import AsyncStorage from '@react-native-async-storage/async-storage';


const _this = dataUtil;

const setData = async (key, value) => {
    try {
        console.log('setData. key : ', key, ', value : ', value);
        const stringValue = typeof value != 'string' ? JSON.stringify(value) : value;
        await AsyncStorage.setItem('@' + key, stringValue);
    } catch (e) {
        console.log(e);
    }
    console.log('setData Done.');
}

const getData = async (key) => {
    try {
        let value = await AsyncStorage.getItem('@' + key);
        if (typeof value === 'object') value = JSON.parse(value);
        console.log('getData value : ', value);
        console.log('getData Done.');
        return value
    } catch (e) {
        console.log(e);
    }
}

const getAllKeys = async () => {
    let keys = []
    try {
        keys = await AsyncStorage.getAllKeys();
    } catch (e) {
        console.log(e);
    }
    console.log(JSON.parse(keys));
}

const mergeData = async (key, value) => {
    try {
        console.log('mergeData. key : ', key, ', value : ', value);
        const stringValue = typeof value != 'string' ? JSON.stringify(value) : value;
        await AsyncStorage.mergeItem('@' + key, stringValue);
    } catch (e) {
        console.log(e);
    }
    console.log('mergeData Done.');
}

const removeData = async (key) => {
    try {
        await AsyncStorage.removeItem('@' + key);
    } catch (e) {
        console.log(e);
    }
    console.log(key + ' remove Done.');
}

const dataUtil = {
    // 가계부 저장
    setExpend: async (value) => {
        let expendIdx = Number(await getData('expendIdx'));

        if (!expendIdx) {
            expendIdx = 1;
            await setData('expendIdx', expendIdx);
        }
        let obj = new Object();
        obj[expendIdx] = value

        console.log("obj : ", obj);

        await mergeData('expenditure', obj);
        await setData('expendIdx', expendIdx + 1);
    },

    // 가계부 조회
    getExpend: async () => {
        let obj = await getData('expenditure');
        console.log(obj);
        // 왜 key가 이상하게 나오냐
        console.log(Object.keys(obj));

        // let result = Object.keys(obj).map( key => [Number(key), obj[key]]);
        // console.log('result : ' + result);
        return '';
    },

    // 데이터 삭제(key)
    removeData: async (key) => {
        await removeData(key);
    },

    // 데이터 전체 삭제
    dataClearAll: async () => {
        try {
            await AsyncStorage.clear()
        } catch (e) {
            console.log(e);
        }
        console.log('dataClear Done.');
    },

}

export default dataUtil;