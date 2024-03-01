# Task_1

## Thiết kế database cho ứng dụng

## List các tính năng chính của ứng dụng (mô tả tính năng dành cho ai, sử dụng như thế nào)

    1. Tính năng chính
        Quản lý thu chi cá nhân

    2.Đối tượng
        Dành cho người muốn quản lý Thu chi online

    3.Sử dụng

        - Login / Register
        - Home (
            + Số Dư
            + Số Tiền Đã Thêm Trong Tháng
            + Số tiền đã chi
            + 3 Giao dịch gần nhất
            + NavButton
        )
        - Transaction (
            + list spending (Ngay - Thang - Năm)
        )

        -Add transaction (
            + Thêm tiền 
            + Tiêu Tiền 

        )
        -User(
            
            + Update TK
            + Setting 
            + Logout

        )


## Tìm hiểu và cài đặt môi trường React Native, các basic component, navigation => Show kết quả bằng một ứng dụng với 2 màn hình có thể navigate đến nhau bằng Button

    ```
    #App.js

        import * as React from 'react';
        import { NavigationContainer } from '@react-navigation/native';
        import { createStackNavigator } from '@react-navigation/stack';
        import Home from './app/View/Home';
        import Login from './app/View/Login';

            const Stack = createStackNavigator();

        export default function App() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Login" component={Login}/>
            </Stack.Navigator>
            </NavigationContainer>
         );
    };

    #Home.js

    import react from "react";
    import {View , Text , Button} from 'react-native'

    export default function Home ({ navigation }) {
    return (
        <View>
            <Text>
                Home
            </Text>
            <Button title="Button" onPress={() => navigation.navigate('Login')}/>
        </View>
        )
    }

    #Login.js
    import react from "react";
    import {View , Text , Button} from 'react-native'

        export default function Login ({ navigation }) {
            return (
                <View>
                    <Text>
                         Login
                    </Text>
                    <Button title="Button" onPress={() => navigation.navigate('Home')}/>
                </View>
        )
    }

    ```
