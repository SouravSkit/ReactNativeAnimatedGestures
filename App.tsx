import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Task from './src/components/task';
import LoginScreen from './src/components/login';
import SkiaColor from './src/components/skiaColor';
import { Image } from 'react-native';


const YourComponent = () => {
  return (
    <Image
      source={require('./src/assets/vice.png')}
      style={{ width: 100, height: 100 }} // Adjust dimensions as needed
    />
  );
};


const Stack = createStackNavigator();

const StackNavigator = () => (

  <Stack.Navigator>
      <Stack.Screen name="Task" component={Task} options={{ headerShown: false}}  />

          <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false}}  />

   </Stack.Navigator>

);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Task" component={Task}  options={{ headerShown: false}}
  
    />
    <Tab.Screen name="login" component={LoginScreen} options={{ headerShown: false}}/>
  </Tab.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Task">
    <Drawer.Screen name="Task" component={Task} />
    <Drawer.Screen name="login" component={LoginScreen} />
  </Drawer.Navigator>
);

const MainNavigator = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={TabNavigator} options={{ headerShown: false}} />
    <Drawer.Screen name="Login" component={StackNavigator} options={{ headerShown: false}}/>
  </Drawer.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <MainNavigator />
  </NavigationContainer>
);

export default AppNavigator;
