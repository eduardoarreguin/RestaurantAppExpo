import React from 'react'
import { View, Text } from 'react-native'
import { PrimaryColor, SecondaryColor } from '../theme/globalStyles'

interface Props {
    focused: boolean,
    title: string,
}

export const TabText = ({ focused, title }: Props) => {
    return (
        <Text 
            style={{ 
                fontSize: focused? 12 : 10 , 
                color:  focused? PrimaryColor : SecondaryColor ,
                marginBottom: 10 
            }}
        >
            { title }
        </Text>
    )
}

