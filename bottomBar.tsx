
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Text, View } from 'react-native';
import Merchant from './blocks/merchantScreen';
import Register from './blocks/registerScreen';
import CustomTabBar from './components/customTabBar';
import OrderFood from './blocks/orderScreen';
import Home from './blocks/home';
import AddToCart from './blocks/favouritesScreen';
import Notification from './blocks/notificationScreen';
import Announcement from './blocks/announcementScreen';

export default function TabContainer() {
    const Tab = createBottomTabNavigator();


    return (
        
            <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
                {/* <Tab.Screen options={{headerShown:false}} name="Home" component={Home} /> */}
                <Tab.Screen options={{headerShown:false}} name="OrderFood" component={OrderFood} />
                <Tab.Screen options={{headerShown:false}} name="AddToCart" component={AddToCart} />
                <Tab.Screen options={{headerShown:false}} name="Notification" component={Notification} />
                <Tab.Screen options={{headerShown:false}} name="Announcement" component={Announcement} />
            </Tab.Navigator>
        
    );
}