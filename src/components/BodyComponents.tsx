import React, { ReactNode } from 'react'
import { Text, useWindowDimensions, View } from 'react-native'
import { styleGlobal } from '../theme/appTheme';

interface Props{
    children: ReactNode;
}

export const BodyComponents = ({children}: Props) => {
    const { height } = useWindowDimensions ();
    return (
    <View style={{
        ...styleGlobal.containerBody,
        height: height * 0.85
        }}>
            {children}
    </View>
    )
}
