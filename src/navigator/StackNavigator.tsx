import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screen/LoginScreen';

const Stack = createStackNavigator();

export const StackNavigator =() => {
    return (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
    );
}