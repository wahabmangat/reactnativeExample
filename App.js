import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
//import React from 'react';
import Button from './Button' 
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [count,setCount] = useState(5);
  const onChange = ()=>
  {
    setCount(count+1)
  }
  return (
    <View style={styles.container}>
      {/* <Text>The app is working and running, woah yes</Text>
      <StatusBar style="auto" /> */}
      <View style={{flexDirection: 'row',height: 30}}>
        <View style={{flex: 1,backgroundColor: 'red'}}/>
        <View style={{flex: 2,backgroundColor: 'blue'}}/>
        <View style={{flex: 3,backgroundColor: 'green'}}/>  
      </View>
      <Button onPress={onChange} label={'Change'}/>
      <Text>
        {count}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop:60,
  },
});
