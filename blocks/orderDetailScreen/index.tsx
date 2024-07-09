// export default OrderDetails;
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
    Alert,
    Image,
    Text,
    ToastAndroid,
    TouchableOpacity,
    View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Counter from '../../components/countButtonComp';
import OrderFood from '../orderScreen';
import { styles } from './styles';
import AddToCart from '../favouritesScreen';

const OrderDetails = ({ navigation }: any) => {
    const [size, setSize] = useState('Small');
    const [count, setCount] = useState(0);
    const [favourite, setFavourite] = useState(false);


    const handleDecrement = () => {
        setCount(count - 1);
    };

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const updateFavourite = () => {
        setFavourite(!favourite);
    };

    const handleFavourite = () => {
        updateFavourite()
        // ToastAndroid.alert(favourite ? 'Added to Favourites' : 'Removed from Favourites');
        ToastAndroid.showWithGravityAndOffset(
            favourite ? 'Added to Favourites' : 'Removed from Favourites',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
        );
    };


    return (
        <LinearGradient colors={['#F4E3DF', '#FFF5F0', '#F7F5F5']} style={styles.linearGradient}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(OrderFood);
                        }}
                        style={{
                            backgroundColor: '#FFF',
                            padding: 12,
                            borderRadius: 50,
                        }}>
                        <Image style={{
                            width: 24,
                            height: 24
                        }} source={require('../../assets/backgroundIcon.png')} />
                    </TouchableOpacity>
                    <Text style={styles.titleText}>
                        Details
                    </Text>
                    <TouchableOpacity
                        onPress={handleFavourite}
                        style={{
                            backgroundColor: '#FFF',
                            padding: 12,
                            borderRadius: 50,
                        }}>
                        <Image style={{
                            width: 24,
                            height: 24
                        }} source={favourite ? require('../../assets/heart.png') : require('../../assets/heart_unfilled.png')} />
                    </TouchableOpacity>

                </View>
                <View style={styles.content}>
                    <View style={styles.divideSection}>
                        <View>
                            <Text style={styles.title}>Briyani Bliss</Text>
                            <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                                <Image
                                    source={require('../../assets/star_filled.png')}
                                    style={styles.ratingIcon}
                                />
                                <Text style={styles.rating}>4.8 (105 review)</Text>
                            </View>
                            <Text style={styles.value}>Price</Text>
                            <Text style={styles.title}>$7.50</Text>
                            <Text style={styles.subTitle}>Calories</Text>
                            <Text style={{ fontSize: 16, color: '#02111a', marginTop: 6 }}>
                                450 Cal
                            </Text>
                            <Text style={styles.subTitle}>Diameter</Text>
                            <Text style={{ fontSize: 16, color: '#02111a', marginTop: 6 }}>
                                15.05 cm
                            </Text>
                        </View>
                        <View style={styles.imageBox}>
                            <Image
                                source={require('../../assets/briyani.png')}
                                style={styles.image}
                            />
                        </View>
                    </View>
                    <View style={styles.counterBox}>
                        <Counter
                            count={count}
                            handleDecrement={handleDecrement}
                            handleIncrement={handleIncrement}
                            buttonStyleProps={{ backgroundColor: '#ED714D', padding: 18 }}
                            ctaStyleProps={{ position: 'absolute', top: '40%', fontSize: 28, fontWeight: '400' }}
                        />
                    </View>
                    <Text style={styles.size}>Size</Text>
                    <View style={styles.sizeContainer}>
                        {['Small', 'Medium', 'Large'].map(item => (
                            <TouchableOpacity
                                key={item}
                                style={[
                                    styles.sizeButton,
                                    size === item && styles.selectedSizeButton,
                                ]}
                                onPress={() => setSize(item)}>
                                <Text style={size === item ? styles.colorText : styles.sizeText}>
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <Text style={styles.description} numberOfLines={4} ellipsizeMode="tail">
                        Biryani is a mixed rice dish, mainly popular in South Asia. It is made with rice, some type of meat and spices. To cater to vegetarians, in some cases, it is prepared by substituting vegetables or paneer for the meat. Sometimes eggs and/or potatoes are also added.
                    </Text>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity
                        style={styles.cartCTA}
                        onPress={() => {
                            Alert.alert('Added to cart');
                        }}
                        activeOpacity={1}>
                        <Text style={styles.cartCTAText}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
};



export default OrderDetails;