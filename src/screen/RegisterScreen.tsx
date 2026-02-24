import React, { useState } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { BodyComponents } from '../components/BodyComponents';
import { styleGlobal } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navigator/StackNavigator';

interface FormRegister{
    name: string;
    email: string;
    password: string;
}

//interface define las propiedades del componente
interface Props{
    listUsers: User[]; 
    handleAddUser: (user: User) => void;  //actualizar el arreglo
}

export const RegisterScreen = ({listUsers, handleAddUser}: Props) => {
    //hook useState: permite gestionar el estado del formulario
    const [formRegister, setFormRegister] = useState({
        name: '',
        email: '',
        password: ''
    });

    //useNavigatio
    const navigation = useNavigation();

    //funcion para capturar los valores de mi formulario
    const handleChangeValue = (name: string, value: string) =>{
    //modificar el estado del formulaeio
    setFormRegister({...formRegister, [name]: value})
}

//funcion para verificar si existe el usuario
const verifyUser = () => {
    const existeUser = listUsers.filter(user => user.email == formRegister.email)[0];
    return existeUser;
}

//funcion para generar los ids de los nuevos usuarios
const getIdUser = (): number => {
    const getId = listUsers.length + 1;
    return getId;
}

//funcion para registrarse
const handleRegister = () => {
    //validar que los campos esten llenos
    if(formRegister.name == '' || formRegister.email ==  '' || formRegister.password == ''){
        Alert.alert("Error", "Complete todos los campos")
        return;
    }

    //validar campo de unucuo de sedión
    if (verifyUser()){
        Alert.alert("Error","Usuario ya se encuentra refistrado");
        return;
    }

    //registrar usuarios
    //crar objeto user
    const newUser: User= {
        id: getIdUser(),
        name: formRegister.name,
        email: formRegister.email,
        password: formRegister.password
    }

    //agregar objeto al arreglo
    handleAddUser(newUser);
    Alert.alert("Registro", "Usuario registrado con éxito");
    //redireccionar al login
    navigation.goBack();
}

    return (
    <View>
        <TitleComponent title='Registrate'/>
        <BodyComponents>
            <Text style={styleGlobal.titleWelcome}>Bienvenido</Text>
            <Text style={styleGlobal.textRedirect}> Realiza tus compras de manera rapida y segura</Text>
            <View style ={styleGlobal.containerInput}>
                <InputComponent placeholder='Nombre' 
                    keyboardType='email-address'
                    handleChangeValue={handleChangeValue}
                    name='name'/>
                <InputComponent placeholder='email' 
                    keyboardType='email-address'
                    handleChangeValue={handleChangeValue}
                    name='email'/>
                <InputComponent placeholder='Contraseña'
                    keyboardType='default'
                    handleChangeValue={handleChangeValue}
                    name='password'/>
            </View>
            <ButtonComponent buttonText='Iniciar' onPress={handleRegister}/>
                    <TouchableOpacity onPress={()=>navigation.dispatch(CommonActions.navigate({name:'Login'}))}>
                        <Text style={styleGlobal.textRedirect}>Ya tienes uan cuenta? Iniciar sesión ahora</Text>
                    </TouchableOpacity>
        </BodyComponents>
    </View>
    )
}
