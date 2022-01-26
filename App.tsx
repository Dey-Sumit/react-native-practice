import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  ProfileScreen,
  RestaurantScreen,
  RestaurantsScreen,
} from './src/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Restaurants: undefined;
  Profile: undefined;
  Restaurant: {
    name: string;
    id: number;
  };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Restaurants">
        <RootStack.Screen
          name="Restaurants"
          component={RestaurantsScreen}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          component={ProfileScreen}
          name="Profile"
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#F52111',
            },
          }}
        />
        <RootStack.Screen
          component={RestaurantScreen}
          name="Restaurant"
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#F52111',
            },
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
