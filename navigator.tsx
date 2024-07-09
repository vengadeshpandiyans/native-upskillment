
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './blocks/registerScreen';
import Merchant from './blocks/merchantScreen';
import Home from './blocks/home';
import OrderFood from './blocks/orderScreen';
import OrderDetails from './blocks/orderDetailScreen';
import TabContainer from './bottomBar';

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
                <Stack.Screen name="OrderFood" options={{headerShown:false}} component={TabContainer} />
                <Stack.Screen name="OrderDetails" options={{headerShown:false}} component={OrderDetails} />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}