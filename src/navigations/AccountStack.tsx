import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

import { Account } from '../screens/Account';

const Stack = createStackNavigator();

export const AccountStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                //headerShown: false,
            }}
        >
            <Stack.Screen
                name='Account'
                component={ Account }
                options={{  title: 'Cuenta' }}
            />
        </Stack.Navigator>
    )
}
