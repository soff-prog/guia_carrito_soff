import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { StatusBar } from 'expo-status-bar'
import { PRIMARY_COLOR } from '../commons/constants'
import { BodyComponents } from '../components/BodyComponents'
import { stylesGlobal } from '../theme/appTheme'
import { InputComponent } from '../components/InputComponent'
import { ButtonComponent } from '../components/ButtonComponent'


//interface define la estructura del objeto del formulario
interface FormLogin{
    email: string;
    password: string;
}
export const LoginScreen = () => {
    //hook useState: permite gestionar el estado del formulario
    const[formLogin, setFormLogin] = useState<FormLogin>({
        email:'',
        password:''
    });
    //funcion para capturar valores del formulario
    const handleChangeValue = (name: string,value: string):void =>{
        console.log(name," ", value)
    }

    return (
    <View>
        <StatusBar backgroundColor={PRIMARY_COLOR}/>
        <TitleComponent title="Iniciar Sesion"/>
        <BodyComponents>
            <Text style ={stylesGlobal.titleWelcome}>Bienvenido de nuevo!</Text>
            <Text>Realiza tus compras de manera rapida y segura</Text>
        <View style ={stylesGlobal.containerInput}>
            <InputComponent placeholder='Correo' 
            keyboardType='email-address'
            handleChangeValue={handleChangeValue}
            name='Correo'/>
            <InputComponent placeholder='Contraseña'
            keyboardType='default'
            handleChangeValue={handleChangeValue}
            name='Contraseña'/>
        </View>
        <ButtonComponent buttonText='Iniciar'/>
        </BodyComponents>
    </View>
    )
}

