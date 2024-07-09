/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from './style';

const CustomInputField = (props: any) => {
  const {
    value,
    multiline,
    placeholder,
    onChange,
    keyboardType,
    numberOfLines,
    maxLength,
    styleProps,
    editable,
    inputMode,
    error,
    isError,
    ...rest
  } = props;


  return (
    <View>
      <TextInput
        value={value}
        multiline={multiline}
        placeholder={value !== '' ? '' : placeholder}
        onChangeText={onChange}
        keyboardType={keyboardType}
        numberOfLines={numberOfLines}
        maxLength={maxLength}
        style={[styles.rootStyle,
        multiline ? styles.multilineStyle : styles.inputStyle,
        isError && styles.errorStyle,
        value !== '' && styles.marginBottom,
          styleProps
        ]}
        editable={editable}
        inputMode={inputMode}
        {...rest}
      />
      {isError && (
        <Text style={styles.errorText}>{error}</Text>
      )}
      {value !== '' && (
        <Text style={[value && styles.placeholderText]}>
          {placeholder}
        </Text>
      )}
    </View>
  );
};



export default CustomInputField;
