import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    rootStyle: {
      height: 70,
      borderWidth: 1,
      borderColor: '#D9DBDD',
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingVertical: 10,
    },
  
    inputStyle: {
      fontSize: 16,
      color: '#02111A',
      fontWeight: '500',
    },
  
    placeholderText: {
      position: 'absolute',
      left: 22,
      top: 5,
      fontSize: 14,
      color: '#4E585E',
      transform:'translate(-10px)'
    },
    errorText: {
      color: 'red',
      fontSize: 12,
      marginTop: 2,
      marginBottom: 16,
      marginLeft: 2,
    },
    errorStyle: {
      borderColor: 'red',
    },
    multilineStyle: {
      height: 'auto',
      minHeight: 50,
      textAlignVertical: 'top',
    },
    marginBottom: {
      marginBottom: 16,
    },
  });