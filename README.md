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
- 노치 디자인 관련 글 
    : `` https://blog.edit.kr/entry/Notch-%EB%85%B8%EC%B9%98-%EB%94%94%EC%9E%90%EC%9D%B8-React-Native%EC%97%90%EC%84%9C-SafeAreaView%EB%A1%9C-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0 ``

#
## **[Task]**
- ``const [date, setDate] = useState(new Date());`` 이런 형식의 선언이 어떤 역할을 하는지 구체적으로 파악 필요

- 클릭 시 show, hide 하는 예시 추가되었으니, 그 로직보고 다른 내용도 추가로 개발 진행

#
## **[참고 사이트]**
- 기초 내용 정리 : https://wit.nts-corp.com/2020/03/23/6014
- Data Picker : https://www.npmjs.com/package/@react-native-community/datetimepicker

#