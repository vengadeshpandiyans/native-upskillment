import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

const Counter = (props: any) => {
  const { count, handleDecrement, handleIncrement, buttonStyleProps, ctaStyleProps } = props;

  return (
    <View style={styles.root}>
      <TouchableOpacity
        style={[styles.button, count === 0 && styles.disabledButton, buttonStyleProps]}
        onPress={handleDecrement}
        activeOpacity={1}
        disabled={count === 0}>
        <Text style={[styles.ctaStyle, ctaStyleProps]}>-</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.text}>{count}</Text>
      </View>
      <TouchableOpacity
        style={[styles.button, buttonStyleProps]}
        onPress={handleIncrement}
        activeOpacity={1}>
        <Text style={[styles.ctaStyle, ctaStyleProps]}>+</Text>
      </TouchableOpacity>
    </View>
  );
};



export default Counter;