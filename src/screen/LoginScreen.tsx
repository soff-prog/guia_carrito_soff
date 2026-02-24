import React, { useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { StatusBar } from 'expo-status-bar';
import { PRIMARY_COLOR } from '../commons/constants';
import { BodyComponents } from '../components/BodyComponents';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import Icon from '@expo/vector-icons/MaterialIcons';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { styleGlobal } from '../theme/appTheme';


//interface define la estructura del objeto del formulario
interface FormLogin{
    email: string;
    password: string;
}
interface User{
    id: number;
    name: string;
    email: string;
    password: string;
}

export const LoginScreen = () => {
    //datos de prueba
    const users: User[] = [
        {id: 1,name: 'Juan Perez',email: 'juan@correo.com',password: '123456'},
        {id: 2,name: 'Maria Gomez',email: 'maria@correo.com',password: '678910'}
    ];
    //hook useState: permite gestionar el estado del formulario
    const[formLogin, setFormLogin] = useState<FormLogin>({
        email:'',
        password:''
    });

    //hook useState: permite gestionar el estado de la visibilidad de la contraseña
    const[hiddenPassword, setHiddenPassword] = useState<boolean>(true);

    //hook useNavigation: permite navegar entre pantallas
    const navigation = useNavigation();

    //funcion para capturar valores del formulario
    const handleChangeValue = (name: string,value: string):void =>{
        //console.log(name," ", value)
        //funcion para cambiar el estado del formulario
        setFormLogin({...formLogin, [name]: value});
    }

    //funcion para verificar que exista el usuariio
    const verifyUser=(): User =>{
        const existUser = users.filter(user => user.email === formLogin.email && user.password === formLogin.password)[0];
        return existUser;
    }

    //funcion para iniciar sesion
    const handleSingIn=(): void =>{
        if(formLogin.email == '' || formLogin.password == ''){
            Alert.alert('Error','Por favor, complete todos los campos');
            return;
        }
        //verificar que exista el usuario
        if(!verifyUser()){
            Alert.alert('Error','Usuario o contraseña incorrectos');
            return;
        }
        console.log(formLogin);
    }

    return (
    <View>
        <StatusBar backgroundColor={PRIMARY_COLOR}/>
        <TitleComponent title="Iniciar Sesion"/>
        <BodyComponents>
            <Text style ={styleGlobal.titleWelcome}>Bienvenido de nuevo!</Text>
            <Text>Realiza tus compras de manera rapida y segura</Text>
        <View style ={styleGlobal.containerInput}>
            <InputComponent placeholder='email' 
            keyboardType='email-address'
            handleChangeValue={handleChangeValue}
            name='email'/>
            <InputComponent placeholder='Contraseña'
            keyboardType='default'
            handleChangeValue={handleChangeValue}
            name='password'
            isPassword={hiddenPassword}/>
        <Icon name={hiddenPassword == true ?'visibility' :'visibility-off'} color={PRIMARY_COLOR}
        size={20}
        style={styleGlobal.iconPassword}
        onPress={()=>setHiddenPassword(!hiddenPassword)}/>
        </View>
        <ButtonComponent buttonText='Iniciar' onPress={handleSingIn}/>
        <TouchableOpacity onPress={()=>navigation.dispatch(CommonActions.navigate({name:'Register'}))}>
            <Text style={styleGlobal.textRedirect}>No tienes una cuenta? Registrate ahora</Text>
        </TouchableOpacity>
        </BodyComponents>
    </View>
    )
}

