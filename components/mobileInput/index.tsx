/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  Image,
  Text,
  TextInput,
  View
} from 'react-native';
import { styles } from './style';

const MobileInput = (props: any) => {
  const {
    countryCodes,
    countryCodeState,
    mobileNumberState,
    onChange,
    editable = true,
  } = props;


  return (
    <>
      <View style={editable ? styles.inputContainer : styles.disableStyle}>
        <View style={styles.imageBox}>
          <Image
            source={countryCodes?.[1]?.image}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.countryCodeBox}>
          <Text style={styles.countryCode}>{countryCodeState}</Text>
          <View style={styles.imageStyle}>
            <Image
              source={require('../../assets/Vector.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        </View>
        <TextInput
          style={[styles.textInput, styles.textInputValue]}
          onChangeText={onChange}
          value={mobileNumberState}
          placeholder={mobileNumberState !== '' ? '' : 'Mobile number'}
          keyboardType="phone-pad"
          editable={editable}
        />
        {mobileNumberState !== '' && (
          <Text style={mobileNumberState && styles.placeholderText}>Mobile Number</Text>
        )}
      </View>
    </>
  );
};



export default MobileInput;
