// common functions
import { Dimensions } from 'react-native';

export default {
    // Dimensions API 이용. 
    // 디바이스의 실제 픽셀 수를 가져온 뒤 매개변수*0.01 을 곱하여 반환
    dw : (per) => {
        if ( !per ) {
            return Dimensions.get('window').width;
        } else if ( typeof(per) == 'number' || typeof(per) == 'bigint' ) {
            return Dimensions.get('window').width * (per*0.01);
        } else {
            console.error('number 혹인 bigInt 타입만 사용 가능합니다.');
        }
    },
    
    dh : (per) => {
        if ( !per ) {
            return Dimensions.get('window').height;
        } else if ( typeof(per) == 'number' || typeof(per) == 'bigint' ) {
            return Dimensions.get('window').height * (per*0.01);
        } else {
            console.error('number 혹인 bigInt 타입만 사용 가능합니다.');
        }
    }

}

