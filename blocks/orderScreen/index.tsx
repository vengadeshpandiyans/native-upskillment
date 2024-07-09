/* eslint-disable react/no-unstable-nested-components */
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import {
    Button,
    DrawerLayoutAndroid,
    FlatList,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import CustomInputField from '../../components/textInput';
import { FOOD_CARD_DATA, FOOD_DATA, drawerData } from '../../utils';
import { styles } from './styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import OrderDetails from '../orderDetailScreen';
import LinearGradient from 'react-native-linear-gradient';



const OrderFood = () => {

    const navigation = useNavigation()
    const drawer = useRef<DrawerLayoutAndroid>(null);
    const [selectedTab, setSelectedTab] = useState<any>(FOOD_DATA?.[0]);
    const [search, setSearch] = useState('');




    const handleTab = (id: any, title: string, icon: any) => {
        setSelectedTab({ id, title, icon });
    };

    const handleChange = (e: any) => {
        setSearch(e);
    };

    const handleDrawernavigate = (item: any) => {
        navigation.navigate(item)
    };

    const ProfileData = () => (
        <View style={styles.drawerProfileData}>
            <Image style={styles.profilePic} source={{ uri: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg' }} />
            <View>
                <Text>Eduardo Camavinga</Text>
                <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                    <Image style={{ width: 12, height: 12 }} source={require('../../assets/star_filled.png')} />
                    <Text>(4.1)</Text>
                </View>
            </View>
        </View>
    )

    const navigationView = () => (
        <View style={styles.drawerRoot}>
            <View style={styles.closeIconBox}>
                <Text></Text>
                <TouchableWithoutFeedback style={styles.drawerCloseicon} onPress={() => drawer.current?.closeDrawer()}>
                    <Image style={{ width: 20, height: 20 }} source={require('../../assets/close.png')} />
                </TouchableWithoutFeedback>
            </View>

            <ProfileData />
            <View style={{ padding: 12, marginVertical: 12 }}>
                <FlatList
                    data={drawerData}
                    keyExtractor={(item: any) => item?.id}
                    renderItem={({ item }: any) => (
                        <TouchableOpacity
                            style={styles.drawerBox}
                            onPress={() => handleDrawernavigate(item.route)}>
                            <View style={styles.drawerIcon}>
                                <Image source={item?.icon} style={styles.drawerIconsStyle} />
                            </View>
                            <Text style={styles.drawerText}>{item?.name}</Text>
                        </TouchableOpacity>
                    )}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    );

    const SelectTab = ({ text, icon, selected, onPress }: any) => (
        <TouchableOpacity
            style={[
                styles.tabChip,
                {
                    backgroundColor: selected ? '#ED714D' : '#fff',
                    borderWidth: selected ? 0 : 1,
                },
            ]}
            onPress={onPress}>
            {icon && (
                <Image source={icon} style={styles.tabIcon} resizeMode="contain" />
            )}
            <Text style={[styles.tabText, { color: selected ? '#fff' : '#808080' }]}>
                {text}
            </Text>

        </TouchableOpacity>
    );

    const StarRating = ({ rating }: any) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <Image
                    key={i}
                    source={i < rating ? require('../../assets/star_filled.png') : require('../../assets/star_unfilled.png')}
                    style={styles.star}
                />
            );
        }
        return <View style={styles.starContainer}>{stars}</View>;
    };

    const FoodCard = ({ title, icon, rating, distance, duration, onPress }: any) => {
        return (
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={styles.foodCard}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center',  }}>
                        <Image source={icon} style={styles.icon} />
                    </View>
                    <Text style={styles.cardTitle}>{title}</Text>
                    <View style={{ marginBottom: 12 }}>
                        <StarRating rating={rating} />
                    </View>
                    <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                        <Text style={styles.distance}>{distance}</Text>
                        <Text style={styles.dot}>•</Text>
                        <Text style={styles.duration}>{duration}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    };

    const Tab = createBottomTabNavigator();

    return (
        <LinearGradient colors={['#F4E3DF', '#FFF5F0', '#F7F5F5']} style={styles.linearGradient}>
            <View style={{ flex: 1, }}>
                <DrawerLayoutAndroid
                    ref={drawer}
                    drawerWidth={300}
                    drawerPosition={'left'}
                    renderNavigationView={navigationView}
                >
                    <View style={styles.root}>
                        <View style={styles.container}>
                            <Image style={styles.profilePic} source={{ uri: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg' }} />
                            <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                                <Image style={{ width: 20, height: 20 }} source={require('../../assets/locationFill.png')} />
                                <Text style={styles.paragraph}>Canada</Text>
                                <Image style={{ width: 20, height: 20 }} source={require('../../assets/dropDownIcon.png')} />

                            </View>
                            <TouchableOpacity onPress={() => drawer.current?.openDrawer()}>
                                {/* <Image style={{ width: 20, height: 20 }} source={{ uri: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg' }} /> */}
                                <View style={{
                                    backgroundColor: '#fff',
                                    padding: 12,
                                    borderRadius: 50
                                }}>
                                    <Image source={require('../../assets/sort.png')} style={styles.rightfilterIcon} />
                                </View>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.titleText}>Ready to order your favourite food?</Text>

                        <View style={styles.inputField}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                <Image source={require('../../assets/search-icon.png')} style={styles.Searchicon} />
                                <TextInput
                                    value={search}
                                    onChangeText={(e: any) => handleChange(e)}
                                    placeholder="Search food"
                                    keyboardType="default"
                                    editable={true}
                                    inputMode="text"
                                    style={styles.inputFieldStyles}
                                // error={registerData?.error?.name}
                                // isError={registerData?.error?.name?.length ? true : false}
                                />
                            </View>
                            <View style={{
                                backgroundColor: '#ED714D',
                                padding: 12,
                                borderRadius: 50
                            }}>
                                <Image source={require('../../assets/filter.png')} style={styles.filterIcon} />
                            </View>

                        </View>
                        <View style={styles.tabDetails}>
                            <FlatList
                                data={FOOD_DATA}
                                horizontal
                                keyExtractor={(item: any) => item?.id}
                                renderItem={({ item }: any) => (
                                    <SelectTab
                                        text={item?.title}
                                        icon={item?.icon}
                                        selected={item?.id === selectedTab?.id}
                                        onPress={() =>
                                            handleTab(item?.id, item?.title, item?.icon)
                                        }
                                    />
                                )}
                                contentContainerStyle={styles.tabContainer}
                                showsHorizontalScrollIndicator={false}
                            />

                        </View>
                        <View style={styles.popularText}>
                            <Text style={styles.foodText}>Popular Food</Text>
                            <Text style={styles.seeAll}>See all</Text>
                        </View>
                        <View >
                            <FlatList
                                data={FOOD_CARD_DATA}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({ item }) => (
                                    <FoodCard title={item.title} distance={item.distance} duration={item.duration} icon={item.icon} rating={item.rating} onPress={() => navigation.navigate(OrderDetails)} />
                                )}
                                contentContainerStyle={styles.listContainer}
                                showsVerticalScrollIndicator={false}
                                horizontal

                            />
                        </View>

                    </View>
                </DrawerLayoutAndroid>
            </View>
        </LinearGradient>
    );
};



export default OrderFood;
