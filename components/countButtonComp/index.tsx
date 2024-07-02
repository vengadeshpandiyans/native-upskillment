import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

const Counter = (props: any) => {
  const { count, handleDecrement, handleIncrement } = props;

  return (
    <View style={styles.root}>
      <TouchableOpacity
        style={[styles.button, count === 0 && styles.disabledButton]}
        onPress={handleDecrement}
        activeOpacity={1}
        disabled={count === 0}>
        <Text style={styles.ctaStyle}>-</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.text}>{count}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleIncrement}
        activeOpacity={1}>
        <Text style={styles.ctaStyle}>+</Text>
      </TouchableOpacity>
    </View>
  );
};



export default Counter;