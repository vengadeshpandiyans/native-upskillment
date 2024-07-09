/* eslint-disable react/no-unstable-nested-components */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    Text,
    View
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';



const AddToCart = () => {

    const navigation = useNavigation()
    

    return (
        <LinearGradient colors={['#F4E3DF', '#FFF5F0', '#F7F5F5']} style={{ flex: 1 }}>
            <View style={{ flex: 1,justifyContent: 'center', }}>
                <Text style={{ color: '#000000', fontSize: 20, fontWeight:'600', justifyContent: 'center', flexDirection: 'row',textAlign:'center' }}>
                    Welcome to Cart Screen
                </Text>
            </View>
        </LinearGradient>
    );
};



export default AddToCart;
