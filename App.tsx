import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Task from './src/components/task';
import LoginScreen from './src/components/login';
import SkiaColor from './src/components/skiaColor';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="login" component={LoginScreen} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Task" component={Task} />
    <Tab.Screen name="login" component={LoginScreen} />
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
    <Drawer.Screen name="Home" component={TabNavigator} />
    <Drawer.Screen name="Login" component={StackNavigator} />
  </Drawer.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <MainNavigator />
  </NavigationContainer>
);

export default AppNavigator;
