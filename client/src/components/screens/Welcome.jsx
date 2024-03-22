import {Text, View} from 'react-native';
import React from 'react';

import { Button } from '@rneui/themed';

const RaisedButton = (props) => <Button raised {...props} />;

// Your App
const Welcome = () => {
  return <RaisedButton title="Yea" />;
};

export default Welcome;
