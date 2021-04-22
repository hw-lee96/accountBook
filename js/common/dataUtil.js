import AsyncStorage from '@react-native-async-storage/async-storage';
import { createIconSetFromFontello } from 'react-native-vector-icons';

export default {
    setData: async (key, value) => {
        try {
            console.log(key, value);
            const stringValue = typeof value === 'object' ? JSON.stringify(value) : value;
            await AsyncStorage.setItem('@'+key, stringValue);
        } catch (e) {
            console.log(e);
        }
    },

    getData: async (key) => {
        try {
            return await AsyncStorage.getItem('@'+key)
        } catch (e) {
            console.log(e);
        }
    },

    mergeData: async (key, value) => {
        try {
            const stringValue = typeof value === 'object' ? JSON.stringify(value) : value;
            await AsyncStorage.mergeItem('@'+key, value);
        } catch (e) {
            console.log(e);
        }
    },

    setExpend : async (value) => {
        const expendIdx = await this.getData('expendIdx');
        if ( !expenIdx ) {
            expendIdx = 1;
            await this.setData('expendIdx', expendIdx);
        }
        await this.setData(expendIdx, value);
        await this.getAllKeys();
    },

    getAllKeys : async () => {
        let keys = []
        try {
          keys = await AsyncStorage.getAllKeys();
        } catch(e) {
            console.log(e);
        }
        console.log(keys)
      }

}
