/* eslint-disable react/no-unstable-nested-components */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import OrderFood from '../orderScreen';



const Home = () => {

    const navigation = useNavigation()

    return (
        <LinearGradient colors={['#F4E3DF', '#FFF5F0', '#F7F5F5']} style={styles.linearGradient}>
            <View style={{ flex: 1, position: 'relative', }}>
                {/* <View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center' }}>
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
            </View> */}

                <View style={styles.image_Box}>
                    <View style={styles.image_1_box}>
                        <Image source={require('../../assets/briyani.png')} style={styles.image_1} />
                    </View>
                    <View style={styles.image_2_box}>
                        <Image source={require('../../assets/burger.png')} style={styles.image_2} />
                    </View>
                    <View style={styles.image_3_box}>
                        <Image source={require('../../assets/pizza.png')} style={styles.image_3} />
                    </View>
                    <View style={styles.image_4_box}>
                        <Image source={require('../../assets/chicken.png')} style={styles.image_4} />
                    </View>
                    <View style={styles.image_5_box}>
                        <Image source={require('../../assets/briyani.png')} style={styles.image_5} />
                    </View>
                    <View style={styles.image_6_box}>
                        <Image source={require('../../assets/briyani.png')} style={styles.image_6} />
                    </View>
                </View>

                <View style={{ flex: 1, marginHorizontal: 40, zIndex:999 }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                        <Text numberOfLines={2} style={styles.titleText}>Taste the Joy of Delivery</Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text numberOfLines={2} style={styles.subTitleText}>Unlock a world of a culinary delights, right at your fingertips</Text>
                    </View>
                </View>
                <View style={styles.buttonBox}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(OrderFood)}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </LinearGradient>
    );
};



export default Home;
