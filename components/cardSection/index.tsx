/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from 'react';
import {
    Button,
    Image,
    SafeAreaView,
    Text,
    View
} from 'react-native';
import { styles } from './style';
import Counter from '../countButtonComp';


const CardSection = (props: any) => {
    const {
        icon,
        title,
        subTitle,
        footText,
        iconStyle,
        hideCount,
        subTitleIcon,
        subTitleStyles,
        subTitleIconStyle,
        footTextStyles,
        textSectionStyles,
        handleDecrement,
        handleIncrement,
        count
    } = props;




    return (

        <View style={styles.root}>
            <View style={styles.firstSection}>
                <Image source={{ uri: icon }} style={[styles.icon, iconStyle]} />
                <View style={[styles.textSection, textSectionStyles]}>
                    <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={styles.title}
                    >
                        {title}
                    </Text>
                    <View style={styles.subtitleBox}>
                        {subTitleIcon && (
                            <Image
                                source={subTitleIcon}
                                style={[styles.subTitleIcon, subTitleIconStyle]}
                            />
                        )}
                        <Text numberOfLines={1} style={[styles.subTitle, subTitleStyles]}>{subTitle}</Text>
                    </View>
                    {footText &&
                        <Text style={[styles.footText, footTextStyles]}>{footText}</Text>
                    }
                </View>
            </View>
            {!hideCount &&
                <View style={styles.counterSection}>
                    <Counter
                        count={count}
                        handleDecrement={handleDecrement}
                        handleIncrement={handleIncrement}
                    />
                </View>
            }
        </View>
    );
};



export default CardSection;
