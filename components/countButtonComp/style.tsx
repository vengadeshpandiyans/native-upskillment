import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    root: {
      flexDirection: 'row',
      alignItems: 'center',

    },
  
    button: {
      width: 18,
      height: 18,
      alignItems: 'center',
      lineHeight: 20,
      backgroundColor: '#c8361e',
      borderRadius: 50,
    },
  
    disabledButton: {
      backgroundColor: '#A9A9A9',
    },
  
    ctaStyle: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: -4,
    },
  
    text: {
      fontSize: 16,
      fontWeight: '600',
      marginHorizontal: 12,
      color: '#02111A',
    },
  });