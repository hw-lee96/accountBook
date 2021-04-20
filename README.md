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