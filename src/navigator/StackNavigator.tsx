import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screen/LoginScreen';
import { PRIMARY_COLOR } from '../commons/constants';
import { RegisterScreen } from '../screen/RegisterScreen';
import { useState } from 'react';
import { HomeScreen } from '../screen/HomeScreen/HomeScreen';

const Stack = createStackNavigator();

export interface User{
    id: number;
    name: string;
    email: string;
    password: string;
}

export const StackNavigator =() => {
    //datos de prueba
    const users: User[] = [
        {id: 1,name: 'Juan Perez',email: 'juan@gmail.com',password: '123456'},
        {id: 2,name: 'Sofia Paz y Miño',email: 'soff@gmail.com',password: '2013'}
    ];

    //hook useState: permite gestionar la lista de usuarios
    const [listUsers, setListUsers] = useState<User[]>(users);

    //funcion para agregar el usuario al arreglo listUsers
    const handleAddUser = (user: User): void => {
        //modificar el estado del arreglo
        setListUsers([...listUsers,user])
    }

    return (
    <Stack.Navigator screenOptions={{
        cardStyle: {
            backgroundColor: PRIMARY_COLOR
        }
    }}>
        <Stack.Screen 
            name="Login" 
            options={{headerShown: false}} 
            children={() => <LoginScreen users={listUsers}/>} 
        />
        <Stack.Screen 
            name="Register" 
            options={{headerShown: false}} 
            children={() => <RegisterScreen listUsers={listUsers} handleAddUser={handleAddUser}/>} 
        />
        <Stack.Screen 
            name="Home" 
            options={{headerShown: false}} 
            component={HomeScreen}
        />
    </Stack.Navigator>
    );
}