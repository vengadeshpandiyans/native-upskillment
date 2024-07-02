/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from 'react';
import {
    Alert,
    Button,
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { ERRORS } from '../../utils';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';



const Home = () => {

    const navigation = useNavigation()

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.welcomeText}>Welcome!!!</Text>
            </View>
            <View style={{ flex: 3.7 }}>
                <Image
                    resizeMode='contain'
                    style={styles.welcomeImage}
                    source={require('../../assets/welcome.jpeg')}
                />
            </View>
            <View style={styles.root}>
                <TouchableOpacity
                    style={styles.ctaStyles}
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={styles.textStyle}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.ctaStyles}
                    onPress={() => navigation.navigate('Merchant')}
                >
                    <Text style={styles.textStyle}>Merchant Details</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};



export default Home;
