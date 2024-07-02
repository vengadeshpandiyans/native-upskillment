/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from 'react';
import {
    Alert,
    FlatList,
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import CardSection from '../../components/cardSection';
import Title from '../../components/title';
import { MAPPING_ITEMS, MERCHANT_DATA, tabData } from '../../utils';
import { styles } from './style';

interface ISectionProps {
    title?: string;
    subTitle?: string;
    icon?: any
}
// seperator component for flat list
const separator = () => <View style={{ marginBottom: 16, }} />

const Merchant = () => {

    const [selectedTab, setSelectedTab] = useState<any>(tabData?.[0]);


    // State for the counter
    const [listedFoods, setListedFoods] = useState(MAPPING_ITEMS);
    const [count, setCount] = useState(0)

    // Handlers for incrementing and decrementing the counter
    const handleIncrement = (id: any) => {
        
        setListedFoods(prevData => {
            const newData = prevData.map(item =>
              item.id === id ? { ...item, count: item.count + 1 } : item
            );
            
            // Find the item with the updated count
            const updatedItem = newData.find(item => item.id === id);
            
            // Set the global count to the updated item's count
            setCount(updatedItem.count);
      
            return newData;
          });
    };

    const handleDecrement = (id: any) => {
        setListedFoods(prevData => {
            const newData = prevData.map(item =>
              item.id === id ? { ...item, count: item.count - 1 } : item
            );
            
            // Find the item with the updated count
            const updatedItem = newData.find(item => item.id === id);
            
            // Set the global count to the updated item's count
            setCount(updatedItem.count);
      
            return newData;
          });
    };

    const handleTab = (id: any, title: string, icon: any) => {
        setSelectedTab({ id, title, icon });
    };


    const Section = ({ title, subTitle, icon }: ISectionProps) => {
        return (
            <SafeAreaView>
                <View style={styles.ratingIconSection}>
                    <Image
                        source={icon}
                        style={styles.ratingIcon}
                        resizeMode="contain"
                    />
                    <Text>
                        {title}
                    </Text>
                </View>
                <Text>{subTitle}</Text>
            </SafeAreaView>
        );
    };


    const SelectTab = ({ text, icon, selected, onPress }: any) => (
        <TouchableOpacity
            style={[
                styles.chip,
                {
                    backgroundColor: selected ? '#d05e48' : '#fff',
                    borderWidth: selected ? 0 : 1,
                },
            ]}
            onPress={onPress}>
            <Text style={[styles.tabText, { color: selected ? '#fff' : '#808080' }]}>
                {text}
            </Text>
            {icon && (
                <Image source={icon} style={styles.tabIcon} resizeMode="contain" />
            )}
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.firstSectionBox}>
                <Title title="Merchant Details" />
                <CardSection
                    icon="https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg"
                    subTitle={"4831 Kildeer Boyunton Beach, Florida 33456"}
                    hideCount
                    iconStyle={styles.iconStyle}
                    title="Chicken Lalapan Gresik"
                    subTitleIcon={require("../../assets/location.png")}
                    textSectionStyles={{ gap: 4 }}
                />
                <View style={styles.ratingStyle}>
                    <FlatList
                        data={MERCHANT_DATA}
                        renderItem={({ item, index }) =>
                            <View style={[styles.itemContainer, index === MERCHANT_DATA.length - 1 && styles.lastItemContainer]}>
                                <Section
                                    title={item?.title}
                                    subTitle={item?.subTitle}
                                    icon={item?.icon}
                                />
                            </View>
                        }
                        keyExtractor={item => item.id}
                        horizontal
                        contentContainerStyle={styles.listContainer}
                    />
                </View>
                <View style={styles.tabDetails}>
                    <FlatList
                        data={tabData}
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
            </View>
            <View style={styles.sectionSectionBox}>
                <View style={styles.tabTitle}>
                    <Text style={styles.headerText}>{selectedTab?.title}</Text>
                    {selectedTab?.icon && (
                        <Image
                            source={selectedTab?.icon}
                            style={styles.headerIcon}
                            resizeMode="contain"
                        />
                    )}
                </View>

                <View style={{marginBottom: 16}}>
                    <FlatList
                        data={listedFoods}
                        keyExtractor={(item: any) => item?.id}
                        renderItem={({ item }: any) => (
                            <CardSection
                                icon={item?.icon}
                                iconStyle={styles.comboImageStyle}
                                title={item?.title}
                                titleStyle={styles.comboTextSx}
                                subTitle={item?.subTitle}
                                footText={item?.footText}
                                count={item?.count}
                                handleDecrement={() => handleDecrement(item.id)}
                                handleIncrement={() => handleIncrement(item.id)}
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={separator}
                    />
                </View>

            </View>
            <View style={styles.footerCTA}>
                <TouchableOpacity style={styles.cartCta} onPress={() => Alert.alert('Added to cart')}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                        <Text style={styles.amountTitle}>
                            {`$ 24.00`}
                        </Text>
                        <View style={styles.foodTitles}>
                            <Text
                                style={styles.selectedItemsText}>{`2 Food Selected`}</Text>
                        </View>
                    </View>
                    <View>
                        <Image
                            source={require('../../assets/right_btn_arrow.png')}
                            style={styles.rightArrowStyle}
                        />
                    </View>
                </TouchableOpacity>
            </View>


        </View>
    );
};



export default Merchant;
