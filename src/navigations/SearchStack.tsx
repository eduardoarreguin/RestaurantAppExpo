import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

import { Search } from '../screens/Search';

const Stack = createStackNavigator();

export const SearchStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                //headerShown: false,
            }}
        >
            <Stack.Screen
                name='Search'
                component={ Search }
                options={{  title: 'Buscar' }}
            />
        </Stack.Navigator>
    )
}
