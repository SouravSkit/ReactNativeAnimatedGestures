import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import Task from './src/components/task';
import Menu from './src/components/Menu';
import DetailsScreen from './src/components/Details';
import LoginScreen from './src/components/login';
import SkiaColor from './src/components/skiaColor';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    {/* <Stack.Screen name="Task" component={Task} /> */}
    <Stack.Screen name="SkiaColor" component={SkiaColor} />

  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    {/* <Tab.Screen name="Menu" component={Menu} /> */}
    {/* <Tab.Screen name="SkiaColor" component={SkiaColor} /> */}

    <Tab.Screen name="Task" component={Task} />
  </Tab.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="DetailsScreen" component={DetailsScreen} />
    <Drawer.Screen name="Task" component={Task} />
  </Drawer.Navigator>
);

// Create the main navigator combining the stack, tab, and drawer navigators
const MainNavigator = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={TabNavigator} />
    <Drawer.Screen name="Stack" component={StackNavigator} />
  </Drawer.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <SkiaColor>
    <MainNavigator />
    </SkiaColor>

  </NavigationContainer>
);

export default AppNavigator;
