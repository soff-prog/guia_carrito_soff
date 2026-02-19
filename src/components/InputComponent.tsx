import React from 'react'
import { KeyboardTypeOptions, TextInput, useWindowDimensions } from 'react-native'
import { stylesGlobal } from '../theme/appTheme'

interface Props{
    placeholder: string;
    keyboardType: KeyboardTypeOptions; 
    handleChangeValue:(name: string,value: string)=> void;
    name: string;
}

export const InputComponent = ({placeholder, keyboardType, handleChangeValue, name}: Props) => {
    const {height} = useWindowDimensions();
    return (
        <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={(value)=>handleChangeValue(name,value)}
        style={stylesGlobal.input}>{placeholder}</TextInput>
    )
}
