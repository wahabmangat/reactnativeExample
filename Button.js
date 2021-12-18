import React from 'react';
import {StyleSheet,Text,View,TouchableOpacity} from 'react-native';
export default function Button({label})
{
  return(
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    justifyContent: 'center',
  },
});
