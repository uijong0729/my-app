# React-Native
## 1.Expo 프레임워크 프로젝트
```
npx create-expo-app@latest
```

## 2.JDK설치(17이상)
```
winget search Microsoft.OpenJDK
winget install Microsoft.OpenJDK.21
```

## 3.안드로이드 스튜디오 설치
- 확인1.Android SDK Build-Tools와 Android Emulator가 Installed
```
File > Settings > Languages & Frameworks > Android SDK
```
- 확인2.안드로이드 홈
```
C:\Users\%사용자명%\AppData\Local\Android\Sdk
```

## 4.expo-dev-client 설치
```
npx expo install expo-dev-client
```

## 5.USB연결
USB디버그 모드를 활성화 한 후 USB연결 후 아래 커맨드로 확인가능
```
adb devices
```

## 6.expo실행
```
npx expo start
```

## 7.expo커맨드창에서 a나 w를 눌러 실행
```
› Using Expo Go
› Press s │ switch to development build

› Press a │ open Android
› Press w │ open web

› Press j │ open debugger
› Press r │ reload app
› Press m │ toggle menu
› Press o │ open project code in your editor

› Press ? │ show all commands
```