import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Index from './src/components/screens/Index';
import Login from './src/components/screens/Login';
import Signup from './src/components/screens/Singup';
``
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
