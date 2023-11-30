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
      style={{ width: 100, height: 100 }}
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
  <Tab.Navigator
  screenOptions={{
    tabBarStyle: {
      backgroundColor: '#94e3e0',
    },
  }}
  >
    <Tab.Screen
      name="Task"
      component={Task}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Image
            source={focused ? require('./src/assets/HomeIcon.png') : require('./src/assets/HomeIconDisable.png')}
            style={{ width: 24, height: 24 }}
          />
        ),
      }}
    />

<Tab.Screen
      name="Settings"
      component={LoginScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Image
            source={focused ? require('./src/assets/SettingsEnabled.png') : require('./src/assets/SettingsDisabled.png')}
            style={{ width: 28, height: 28 }}
          />
        ),
      }}
    />

<Tab.Screen
      name="Share"
      component={Task}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Image
            source={focused ? require('./src/assets/shareEnabled.png') : require('./src/assets/shareDisabled.png')}
            style={{ width: 20, height: 20 }}
          />
        ),
      }}
    />

<Tab.Screen
      name="Like"
      component={LoginScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Image
            source={focused ? require('./src/assets/likeEnabled.png') : require('./src/assets/likeImage.png')}
            style={{ width: 25, height: 25 }}
          />
        ),
      }}
    />
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
