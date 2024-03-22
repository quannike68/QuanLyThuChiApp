import {StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';

import COLORS from '../../constants/colors';

import React, {useState, useContext} from 'react';

import {AuthContext} from '../../Auth/Auth';

// import {loginUser} from '../../Auth/Auth';

const Login = ({navigation}) => {
  const [loginForm, setLoginForm] = useState({
    UserName,
    password,
  });``

  const {UserName, password} = loginForm;


  const loginform = async () => {
    console.log(loginForm);
    // event.preventDefault();

    try {
      const loginData = await loginUser({UserName, password});
      if (loginData.success) {
        navigation.navigate('home');
      } else {
        console.log(loginData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handlePressSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={[styles.container, {FlexDirection: 'column'}]}>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <View style={styles.group}>
          <Text style={styles.text}>Username</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeLoginForm}
            name="UserName"
            value={UserName}
            placeholder="Username"
            placeholderTextColor="#8A5EA2"
          />
        </View>
        <View style={styles.group}>
          <Text style={styles.text}>Password</Text>
          <TextInput
            style={styles.input}
            onChange={onChangeLoginForm}
            name="password"
            value={password}
            placeholder="Password"
            placeholderTextColor="#8A5EA2"
            secureTextEntry={true}
          />
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={styles.group}>
          <Button
            style={styles.button}
            title="Đăng nhập"
            onPress={loginform}
            color={COLORS.purple}
          />
        </View>
        <View style={styles.group}>
          <Button
            style={styles.button}
            title="Đăng ký"
            onPress={handlePressSignup}
            color={COLORS.purple}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: COLORS.white,
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 0,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#F4F6F9',
  },
  text: {
    fontSize: 20,
    paddingBottom: 10,
    paddingStart: 5,
    color: COLORS.purple,
  },
  group: {
    padding: 10,
  },
  button: {
    borderRadius: 10,
  },
});

export default Login;
