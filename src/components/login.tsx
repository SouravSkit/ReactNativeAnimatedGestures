import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  View,
  Image,
  ImageBackground
} from 'react-native';

import { CubeNavigationHorizontal } from 'react-native-3dcube-navigation'


export default function LoginScreen({ navigation }) {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  return (
      <View style={styles.container} >
  <CubeNavigationHorizontal ref={view => { this.cube = view; }}>

  <Pressable onPress={() => navigation.navigate('Task')}>
      <ImageBackground
        source={require('../assets/image99.jpg')}
        style={styles.container}
      >
      </ImageBackground>
    </Pressable>

    <Pressable onPress={() => navigation.navigate('Task')}>
      <ImageBackground
        source={require('../assets/image66.jpg')}
        style={styles.container}
      >
      </ImageBackground>
    </Pressable>

    <Pressable onPress={() => navigation.navigate('Task')}>
      <ImageBackground
        source={require('../assets/image88.jpg')}
        style={styles.container}>
      </ImageBackground>
    </Pressable>

  </CubeNavigationHorizontal>
      </View>
      );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
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

