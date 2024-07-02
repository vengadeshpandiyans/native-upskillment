/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';


const Title = (props: any) => {
    const {
        title,
        titleStyle
    } = props;


    const navigation = useNavigation()
    const goBack = ()=>{
        navigation.goBack();
    }

    return (
        <View style={styles.firstSectionBox}>

            <TouchableOpacity onPress={()=>goBack()}>
                <Image style={styles.backgroundIcon} source={require('../../assets/backgroundIcon.png')} />
            </TouchableOpacity>
            <Text style={[styles.title, titleStyle]}>{title}</Text>
        </View>
    );
};



export default Title;
