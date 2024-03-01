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