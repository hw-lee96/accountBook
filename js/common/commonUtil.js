// common functions
import { Dimensions } from 'react-native';

export default {
    getYYYYMMDD : (date) => {
        if ( !date ) date = new Date();
        return `${date.getFullYear()}${(date.getMonth()+1).length == 1 ? '0'+(date.getMonth()+1) : date.getMonth()+1}${date.getDate()}`
    }
}

