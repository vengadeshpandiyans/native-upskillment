/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from 'react';
import {
    Alert,
    Image,
    ScrollView,
    Text,
    View
} from 'react-native';
import MobileInput from '../../components/mobileInput';
import CustomInputField from '../../components/textInput';
import { ERRORS } from '../../utils';
import { styles } from './style';


const countryCodes = [
    { code: '+1', image: require('../../assets/usFlag.png') },
    { code: '+91', image: require('../../assets/indiaFlag.png') },
    { code: '+44', image: require('../../assets/canadaFlag.png') },
];

const Register = () => {
    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        address: '',
        countryCode: countryCodes[1]?.code,
        mobileNumber: '8778210733',
        error: {
            name: '',
            email: '',
            address: '',
        }
    });

    const handleChange = (key: string, value: any) => {
        setRegisterData({
            ...registerData,
            [key]: value,
        });
    };


    const validation = () => {
        let isValid = true;
        let errors = {
            name: '',
            email: '',
            address: '',
        };

        if (!registerData.name) {
            errors.name = ERRORS.required;
            isValid = false;
        }

        if (!registerData.email) {
            errors.email = ERRORS.required;
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(registerData.email)) {
            errors.email = ERRORS.validMail;
            isValid = false;
        }

        if (!registerData.address) {
            errors.address = ERRORS.required;
            isValid = false;
        }

        setRegisterData({
            ...registerData,
            error: errors
        });
        return isValid;
    };

    // Resister Form Reset
    const resetRegisterForm = () => {
        setRegisterData({
            name: '',
            email: '',
            address: '',
            countryCode: countryCodes[1]?.code,
            mobileNumber: '8778210733',
            error: {
                name: '',
                email: '',
                address: '',
            }
        });

    };
    const handleRegister = () => {
        if (validation()) {
            Alert.alert('Registered successfully!');
            resetRegisterForm();
        }
    };


    return (
        <View style={styles.container}>
            <View style={styles.root}>
                <View style={styles.firstSection}>
                    <Image source={require('../../assets/Group.png')} />
                    <Text style={styles.title}>
                        Earn loyalty for every purchase
                    </Text>
                </View>
                <View style={styles.center}>
                    <View style={styles.fieldsStyle}>
                        <Text style={styles.headerText}>
                            Profile details
                        </Text>
                        <Text style={styles.subText}>
                            Login/ Signin with your mobile number to proceed further
                        </Text>
                        <ScrollView
                            style={styles.scrollView}
                            contentContainerStyle={styles.scrollViewContainer}>
                            <View style={{ flex: 1, gap: 16 }}>
                                <CustomInputField
                                    value={registerData.name}
                                    onChange={(e: any) => handleChange('name', e)}
                                    placeholder="Name"
                                    keyboardType="default"
                                    editable={true}
                                    inputMode="text"
                                    error={registerData?.error?.name}
                                    isError={registerData?.error?.name?.length ? true : false}
                                />
                                <MobileInput
                                    countryCodes={countryCodes}
                                    countryCodeState={registerData.countryCode}
                                    mobileNumberState={registerData.mobileNumber}
                                    onChange={(e: any) =>
                                        handleChange('mobileNumber', e)
                                    }
                                    editable={false}
                                    value={registerData.mobileNumber}
                                />
                                <CustomInputField
                                    value={registerData.email}
                                    onChange={(e: any) => handleChange('email', e)}
                                    placeholder="Email"
                                    keyboardType="email-address"
                                    editable={true}
                                    inputMode="text"
                                    isError={registerData?.error?.email?.length ? true : false}
                                    error={registerData?.error?.email}
                                />
                                <CustomInputField
                                    value={registerData.address}
                                    onChange={(e: any) => handleChange('address', e)}
                                    placeholder="Address"
                                    keyboardType="default"
                                    editable={true}
                                    isError={registerData?.error?.address?.length ? true : false}
                                    error={registerData?.error?.address}
                                    inputMode="text"
                                    multiline={true}
                                    numberOfLines={5}
                                />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.bottom}>
                        <Text
                            style={styles.ctaStyle}
                            onPress={handleRegister}>
                            Register
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};



export default Register;
