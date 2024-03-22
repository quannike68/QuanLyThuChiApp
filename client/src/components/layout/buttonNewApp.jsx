import React, {useEffect} from 'react';
import {View, Text} from 'react';
import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';
import {TouchableOpacity} from 'react-native';

const MyButton = props => {
  const filledBgColor = props.color || COLORS.purple;
  const outLineColor = COLORS.white;
  const bgColor = props.filled ? filledBgColor : outLineColor;
  const TextColor = props.filled ? COLORS.white : COLORS.gray;

  useEffect(() => {
    console.log('OK');
  }, []);
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: bgColor}, props.style]}
      onPress={props.onPress}>
      <Text style={{fontSize: 18, ...{color: TextColor}}}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingBottom: 16,
    paddingVertical: 10,
    borderColor: COLORS.purple,
    borderWidth: 2,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MyButton;
