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