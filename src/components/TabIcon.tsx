import React from 'react'
import { Icon } from 'react-native-elements';
import { PrimaryColor, SecondaryColor } from '../theme/globalStyles';

interface Props{
    focused: boolean;
    name: string;
}

export const TabIcon = ({ focused, name }: Props ) => {
    return (
        <Icon 
            type="material-community"
            name={ name } 
            size={ focused? 35 : 22 }
            color={ focused? PrimaryColor : SecondaryColor }
            style={{marginBottom: focused? 10 : 0}}
        /> 
    )
}

