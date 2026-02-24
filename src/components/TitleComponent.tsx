import React from 'react'
import { Text, useWindowDimensions } from 'react-native'
import { styleGlobal } from '../theme/appTheme';


interface Props{
    title: string;
}

export const TitleComponent = ({title}: Props) => {
    const {height} = useWindowDimensions();
    return (
    <Text style={{
        ...styleGlobal.title,
        height: height * 0.16
    }}>{title}</Text>
    )
}
