#
# Account Book

## **[2021-03-09]**
- expo 세팅, emulator device 신규 추가하여 구동 확인.
- App.js 텍스트 수정하여 emulator 내 app에서 변경 확인
- 시작 시 npm run start로 하여 expo web에서 emulator 실행
- 노마드코더 React Native로 날씨 앱 만들기 보면서 세팅 및 공부 중
    > ``https://nomadcoders.co/react-native-fundamentals/lectures/1573``

#
## **[2021-03-16]**
- npm package 제거 : `` npm uninstall [packageName] ``
- rn(react native)에서 <View>는 <div> 처럼 사용된다.
- <div> 는 web으로 구동 시 오류가 나지 않지만, 모바일 기기에서는 에러가 난다.
- <View>에 <Text> 없이 그냥 글자를 기입하면 에러가 난다.
- expo로 모바일 기기에 연결할 때 아래처럼 세팅했었음
    - 휴대폰 usb 연결하여 테더링
    - npm run start 후 expo dev 페이지에서 CONNECTION 은 LAN으로 설정
    - 처음에는 안되다가 앱을 몇 번 재실행하면 됨

- input, datepicker를 추가하고 정상동작 확인함
- 추가한 datepicker 관련 정보
    - npm url : https://www.npmjs.com/package/@react-native-community/datetimepicker

#
## **[2021-03-23]**
- react-native tutorial 앱 따라함
- ``https://jeffgukang.github.io/react-native-tutorial/docs/basic-tutorial/basic-features(todolist)/09-adding-icons/adding-icons-kr.html``

#
## **[2021-03-24]**
1. 튜토리얼 예시 이미지랑 다르게 나와서 소스 똑같이 복붙함
    - 화면 사이즈 자체 문제였으며, 반응형으로 수치 계산해서 적용해야됨
    
    > 참고 사이트 : ``https://wordbe.tistory.com/entry/React-Native-4-%EB%B0%98%EC%9D%91%ED%98%95-%EC%A0%81%EC%9D%91%ED%98%95-%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4-%EB%A7%8C%EB%93%A4%EA%B8%B0``

#
## **[2021-03-25]**
1. react-native 에서 지원하는 Dimensions API 이용하여 반응형 인터페이스 구현
    - common.js 파일 생성 및 반응형 인터페이스 관련 함수 정의

2. react 버전 업데이트
    - 이펙트 훅(useState) 에러가 발생해서 react, react-dom 최신버전으로 업데이트
    - react 먼저 최신버전으로 업데이트 했으나 계속 에러발생함
        - npm i react@latest
    - react-dom도 업데이트 해야됨
        - npm i react-dom@latest

3. app.json > orientation 수정
    - default : 가로, 세로 지원
    - landscape : 가로만 지원
    - portrait : 세로만 지원

#
## **[2021-03-26]**
1. react-dom 업데이트 함
    - 다시 롤백함

2. useState
    - react에서 import 해야되는데 react-native에서 하고있었음.
    - 수정 후 정상동작하길래 react-dom 롤백함 (업데이트 후 경고문구 계속 떠서)

3. ``const [date, setDate] = useState(new Date());``
    - 이게 useState 관련 문법이였음.
    - Hook 이라고 하며, React 16.8에 새로 추가된 기능으로 class를 작성하지 않고도 state와 다른 React의 기능들을 사용할 수 있게 해줌
    - useState는 현재의 state 값(위에서 date)과 이 값을 업데이트 하는 함수(setDate)를 쌍으로 제공한다.
        - 기존 class의 this.setState와 거의 유사하지만, 이전 state와 새로운 state를 합치지는 않는다는 차이가 있음

4. 튜토리얼 todo list 완성함

#
## **[2021-03-30]**
1. data를 storage에 저장하는 방법 중 asyncStorage을 이용하기로 함 (다른 방법으로는 Redux가 있음)
    - 관련 방법을 참고할만한 문서 찾음

2. 화면개발 > 데이터 정리 > 실제 저장 순으로 진행

3. Button 조정
    - Button의 style을 조정하려면 Button이 아닌 Button을 감싸고 있는 View를 조정해야 한다.
    - ex : ``<View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}><Button onPress={this.buttonClickListener} title="Button Three" color="#FF3D00" /> </View>``
    > 높이는 안되고, 가로 길이만 조절 가능

    - 누구는 TouchableOpacity 를 사용하길 권장하기도 한다.
    - ex : ``<TouchableOpacity style={{ height: 100, marginTop: 10 }}> <Text>My button</Text> </TouchableOpacity>``
    > TouchableOpacity 안에 Text를 View로 씌워야 함

    > ex : ``<TouchableOpacity style={{ height: 100, marginTop: 10 }}> <View> <Text>My button</Text> </View> </TouchableOpacity>``

#
## **[2021-04-20]**
1. 입력 화면 구현하고, 변수에 담아서 등록버튼 클릭 시 콘솔에 찍히도록 함

#
## **[2021-04-21]**
1. 모바일 디바이스 쪽 스토리지 관련 작업하려고 핸드폰에 빌드함
    - package.json에 "local": "expo start --localhost --android" 커맨드 추가해서 npm run local 했을 때 연결된 디바이스로 빌드&실행되도록 함
    - 핸드폰이 컴퓨터에 연결되어있어야 하며, 디버깅 모드가 켜져있어야 하고, 해당 컴퓨터에서 디버깅을 허용해야함.

2. 디바이스에 빌드하면서 생긴 자잘한 오류 수정
    - position 값을 'fixed' 대신 'absolute' 사용해야됨
    - fontWeight 값에 숫자 기입 시에도 따옴표로 감싸야 됨
    - br태그 사용대신 {"\n"}을 사용해야되며, 이 부분도 문자로 취급되므로, Text 태그로 감싸야 됨

3. DatePicker는 다시 봐야될 것 같음
    - 아래 경로에서 RNDateTimePicker 검색 후 확인
    - https://www.npmjs.com/package/@react-native-community/datetimepicker#datepickerandroid

#
## **[2021-04-22]**
1. DateTimePicker 관련 경고 확인
    > 경고 내용 : [Unhandled promise rejection: TypeError: _reactNative.NativeModules.RN DatePicker Android.dismiss is not a function]

    - 해결법 1 : 캐시 제거
        - expo start -c

    - 해결법 2 : expo 40.0.0 이상으로 업그레이드

2. data 저장 방식으로 asyncStorage를 사용하기 위해 install 진행
    - npm install @react-native-async-storage/async-storage
    - asyncStorage
        - 앱 종료시에도 유지
    - redux
        - 앱 실행 중에만 유지. 유사한거로 session-storage가 있지만, 데이터 저장 시 관련 내용이 업데이트 되거나, 다시 렌더링 되지 않는다.

    - asyncStorage를 사용하는건 간단한데, 데이터를 string 형태로만 저장 가능한 한계 때문에 기존의 db와는 다른 설계를 해야될 것 같음.

    - 일단 데이터는 테이블 명을 키값으로하고, value는 컬럼과 값 처럼 하기로 함.

    - asyncStorage 추가해서 간단하게 테스트 했는데 안됨. 확인 후 수정 필요.
        > https://react-native-async-storage.github.io/async-storage/docs/api/#getitem

#
## **[2021-04-23]**
1. 텍스트 입력시 키보드 올라왔을 때 하단부 텍스트 박스 가려지는 현상 수정
    - 전체 <View>를 <ScrollView>로 감싸서 해결
    - 처음에 keyboardShouldPersistTaps 속성을 always로 줬었는데, 지금은 제거함. 나중에 필요에 따라 추가하면 될듯
        - keyboardShouldPersistTaps : 탭 했을 떄 키보드 노출 여부
            - always : 다른 곳을 터치해도 키보드가 닫히지 않음
            - (default) : 다른 곳을 터치했을 때 키보드가 닫힘. 이 때 터치한게 다른 텍스트 인풋이면 유지됨. 스크롤 했을 때도 키보드는 유지되며, 탭만 해당됨.

2. dataUtil 내 함수 서로 호출
    - this로 하면 될 줄 알았는데, 그렇게는 안됐음. export default = {} 이런 식으로 사용하던걸 const dataUtil = {} 와 같이 변경하고 따로 export 해줌.
    
    - 별도의 이름을 붙혔으니 해당 js에서 사용 가능하도록 상위에 const _this = dataUtil; 로 선언하여 함수에서 호출 시 _this.function 과 같이 사용 가능하도록 함.

3. AsyncStorage 함수 정상 동작
    - setData는 정상적으로 동작하는데, 버튼 클릭 함수에서 동일한 key로 getData 하면 정상적으로 조회되지 않음
    - 버튼 클릭 함수에서 getData할 때 await 도 해봤는데 에러만 남
    - 알고보니 await 하는게 맞았고, 에러난 이유는 해당 함수도 앞에 async 달아줘야됐음. 
    - 결국 async 달아주고 호출 시 await 해주니까 정상적으로 조회됨.

4. Object.keys 했을 때 이상하게 나옴. 확인해봐야됨

#
## **[2021-04-27]**
1. Object.keys 정상 동작 확인
    - 데이터 불러올 때 data == object 일 때 JSON.parse가 되어있었음. 불러오는 데이터가 string이니 파싱 안돼서 Object.keys가 안됨.
    - data 에 JSON.parse 하는 것으로 정상 변환 및 Object.keys 정상 동작 확인

2. 리스트 형태로 출력하기
    - FlatList를 이용했다. 그리고 data에 불러온 expendList를 담았는데 useState로 만든게 아니라 데이터를 조회한 뒤에 화면에 갱신이 되지 않음.
    - useState를 이용해서 expendList를 만들었다. 그리고 그냥 생으로 setList()하여 갱신하게 했더니 무한루프가 돌았다.
    - useEffect(Hook)를 이용해서 컴포넌트가 마운트될 때 데이터를 한 번 조회하도록 했음.

3. 리스트 스크롤이 작은 범위가 아니라 전체화면 사이드에 표시되도록 이전에 ScrollView 작업 한 내용과 동일하게 함

4. 리스트 안에 수정버튼 추가했는데 TouchableOpacity가 안눌려서 고민하다가 zIndex 주니까 잘 눌림.

5. 나중에 수정버튼이랑 제목 텍스트랑 겹치는 부분 조치해야될 것 같음. 제목 Text의 width 값에 제한을 준다던가.

#
## **[Task]**
- ``const [date, setDate] = useState(new Date());`` 이런 형식의 선언이 어떤 역할을 하는지 구체적으로 파악 필요

- 클릭 시 show, hide 하는 예시 추가되었으니, 그 로직보고 다른 내용도 추가로 개발 진행

#
## **[참고 사이트]**
- 기초 내용 정리 : ``https://wit.nts-corp.com/2020/03/23/6014``

- Data Picker : ``https://www.npmjs.com/package/@react-native-community/datetimepicker``

- 튜토리얼 (todo list) : ``https://jeffgukang.github.io/react-native-tutorial/docs/basic-tutorial/basic-features(todolist)/08-todolistitem/todolistitem-kr.html``

- 반응형 인터페이스
    : ``https://wordbe.tistory.com/entry/React-Native-4-%EB%B0%98%EC%9D%91%ED%98%95-%EC%A0%81%EC%9D%91%ED%98%95-%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4-%EB%A7%8C%EB%93%A4%EA%B8%B0``

- 리액트 기초 : ``https://reactnative.dev/docs/intro-react``

- 이펙트 훅 : ``https://ko.reactjs.org/docs/hooks-effect.html``

- 훅 docu : ``https://ko.reactjs.org/docs/hooks-overview.html``

- Dimensions docu : ``https://reactnative.dev/docs/dimensions``

- 노치 디자인 관련 글 
    : `` https://blog.edit.kr/entry/Notch-%EB%85%B8%EC%B9%98-%EB%94%94%EC%9E%90%EC%9D%B8-React-Native%EC%97%90%EC%84%9C-SafeAreaView%EB%A1%9C-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0 ``

- 반응형 관련 글 (Dimension API)
    : ``https://wordbe.tistory.com/entry/React-Native-4-%EB%B0%98%EC%9D%91%ED%98%95-%EC%A0%81%EC%9D%91%ED%98%95-%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4-%EB%A7%8C%EB%93%A4%EA%B8%B0``

- 백터아이콘 : ``https://oblador.github.io/react-native-vector-icons/``

- data storage 예제 (async storage)
    - async storage 기본 예제 : ``https://jw910911.tistory.com/73``
    - get all keys 예제 : ``https://stackoverflow.com/questions/48194482/react-native-return-all-json-data-in-asyncstorage``

#