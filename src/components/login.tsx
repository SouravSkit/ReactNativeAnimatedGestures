import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  View,
} from 'react-native';

import { CubeNavigationHorizontal } from 'react-native-3dcube-navigation'


export default function LoginScreen({ navigation }) {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    // <ScrollView style={styles.container}>
      <View style={styles.container} >
  <CubeNavigationHorizontal ref={view => { this.cube = view; }}>
    <View style={[styles.container, { backgroundColor: '#5CDB8B' }]}>
      <Text style={styles.text}>Horizontal Page 1</Text>
    </View>
    <View style={[styles.container, { backgroundColor: '#A3F989' }]}>
      <Text style={styles.text}>Horizontal Page 2</Text>
    </View>
    <View style={[styles.container, { backgroundColor: '#CBF941' }]}>
      <Text style={styles.text}>Horizontal Page 3</Text>
    </View>
  </CubeNavigationHorizontal>
    {/* <Pressable
        onPress={() => navigation.navigate('Welcome')}
        style={styles.button}>
        <Text style={styles.buttonText}>Log in</Text>
      </Pressable> */}
      </View>
    
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  father: {
    flex:0.8,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#EDEFEE',
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: '#EE9972',
    borderColor: '#EE9972',
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
  },
});

