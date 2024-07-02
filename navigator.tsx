
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './blocks/registerScreen';
import Merchant from './blocks/merchantScreen';
import Home from './blocks/home';

export default function NavigationRoute() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName='Home'
            >
                <Stack.Screen name="Home" options={{headerShown:false}} component={Home} />
                <Stack.Screen name="Register" options={{headerShown:false}} component={Register} />
                <Stack.Screen name="Merchant" options={{headerShown:false}} component={Merchant} />
            </Stack.Navigator>
            
        </NavigationContainer>
    );
}