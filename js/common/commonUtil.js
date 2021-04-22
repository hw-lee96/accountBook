// common functions
import { Dimensions } from 'react-native';

export default {
    setData : () => {
        console.log('setData : ');
    },
    getData : () => {
        console.log('getData : ');
    },
    getAllData : () => {
        console.log('getAllData : ');
    },
    getYYYYMMDD : (date) => {
        if ( !date ) date = new Date();
        return `${date.getFullYear()}${(date.getMonth()+1).length == 1 ? '0'+(date.getMonth()+1) : date.getMonth()+1}${date.getDate()}`
    }
}

