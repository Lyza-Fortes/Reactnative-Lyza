import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Inicial } from '../screens/Inicial'
import { Login } from '../screens/Login'

const Stack=createNativeStackNavigator()

export const Rotas = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name='Inicial'
                component={Inicial}
                options={{
                  headerShown: false
                }}
            />
            <Stack.Screen 
                name='Login'
                component={Login}
                options={{
                  headerShown: false
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>
      
   
  )
}

