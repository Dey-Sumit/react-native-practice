import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ProfileScreen, RestaurantsScreen} from './src/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Restautants">
        <RootStack.Screen
          name="Restautants"
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
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
