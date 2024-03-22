import {StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';

import COLORS from '../../constants/colors';

import React, {useState} from 'react';

const Signup = ({navigation}) => {

    const [name , setName] = useState("");
    const [password , setPassword] = useState("");
    const [checkPassword , setCheckPassword] = useState("");
    const [email , setEmail] = useState('');
    const [phone , setPhone] = useState('');
    const [sex , setSex] = useState('');
    const [age , setAge] = useState('');


    const handleChangeName = (newName) =>{
        setName(newName)
    }
    const handleChangePassword = (newPassword) =>{
        setPassword(newPassword)
    }
    const handleChangeCheck = (newCheckPassword) =>{
        setCheckPassword(newCheckPassword)
    }
    const handleChangeEmail = (newEmail) => {
        setEmail(newEmail)
    }
    const handleChangePhone = (newPhone) => {
        setPhone(newPhone)
    }
    const handleChangeSex = (newSex) => {
        setSex(newSex)
    }
    const handleChangeAge = (newAge) => {
        setAge(newAge)
    }
  const handlePressSignup = () => {
    Alert.alert('Thanh công');
  };

  return (
    <View style={[styles.container, {FlexDirection: 'column'}]}>
      <View style={{flex: 9, justifyContent: 'flex-end'}}>
        <View style={styles.group}>
          <Text style={styles.text}>Tên đăng nhập</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChangeName}
            value={name}
            placeholderTextColor="#8A5EA2"
          />
        </View>
        <View style={styles.group}>
          <Text style={styles.text}>Mật khẩu</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChangePassword}
            value={password}
            placeholderTextColor="#8A5EA2"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.group}>
          <Text style={styles.text}>nhập lại mật khẩu</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChangeCheck}
            value={checkPassword}
            placeholderTextColor="#8A5EA2"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.group}>
          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChangeEmail}
            value={email}
            placeholderTextColor="#8A5EA2"
          />
        </View>
        <View style={styles.group}>
          <Text style={styles.text}>Số điện thoại</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChangePhone}
            value={phone}
            placeholderTextColor="#8A5EA2"
          />
        </View>
        <View style={styles.group}>
          <Text style={styles.text}>Giới tính</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChangeSex}
            value={sex}
            placeholderTextColor="#8A5EA2"
          />
        </View>
        <View style={styles.group}>
          <Text style={styles.text}>Tuổi</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChangeAge}
            value={age}
            placeholderTextColor="#8A5EA2"
            
          />
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
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

export default Signup;
