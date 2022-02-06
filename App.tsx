// import React from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {
  ProfileScreen,
  ReanimatedBasicScreen,
  RestaurantScreen,
  RestaurantsScreen,
} from './src/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import COLORS from './src/consts/colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ExploreIcon from './src/icons/ExploreIcon';
import ProfileIcon from './src/icons/ProfileIcon';
import React from 'react';
import ReanimatedGestureHandler from './src/screens/ReanimatedGestureHandler';
import LayoutAnimation from './src/screens/LayoutAnimation';

export type RestaurantStackParams = {
  Restaunrants: undefined;
  Restaurant: {
    name: string;
    id: number;
  };
  ReanimatedBasic: undefined;
  ReanimatedGestureHandler: undefined;
  LayoutAnimation: undefined;
};
export type ProfileStackParams = {
  Profile: undefined;
  Restaurant: {
    name: string;
    id: number;
  };
};
export type RootBottomtabPrams = {
  RestaurantStack: NavigatorScreenParams<RestaurantStackParams>;
  ProfileStack: undefined;
  Restaurant: {
    name: string;
    id: number;
  };
};

const RootBottomTabNav = createBottomTabNavigator<RootBottomtabPrams>();
const RestaurantStackNav = createNativeStackNavigator<RestaurantStackParams>();
const ProfileStackNav = createNativeStackNavigator<ProfileStackParams>();

const RestaurantStackComponent = () => {
  return (
    <RestaurantStackNav.Navigator initialRouteName="LayoutAnimation">
      <RestaurantStackNav.Screen
        name="ReanimatedBasic"
        component={ReanimatedBasicScreen}
        options={{
          headerShown: false,
        }}
      />
      <RestaurantStackNav.Screen
        name="ReanimatedGestureHandler"
        component={ReanimatedGestureHandler}
        options={{
          headerShown: false,
        }}
      />
      <RestaurantStackNav.Screen
        name="LayoutAnimation"
        component={LayoutAnimation}
        options={{
          headerShown: false,
        }}
      />
      <RestaurantStackNav.Screen
        name="Restaunrants"
        component={RestaurantsScreen}
        options={{
          headerShown: false,
        }}
      />
      <RestaurantStackNav.Screen
        name="Restaurant"
        component={RestaurantScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: COLORS.secondaryBg,
          },
        }}
      />
    </RestaurantStackNav.Navigator>
  );
};
const ProfileStackComponent = () => {
  return (
    <ProfileStackNav.Navigator initialRouteName="Profile">
      <ProfileStackNav.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <ProfileStackNav.Screen
        name="Restaurant"
        component={RestaurantScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: COLORS.secondaryBg,
          },
        }}
      />
    </ProfileStackNav.Navigator>
  );
};
// const tabBarStyle = {
//   backgroundColor: COLORS.white,
//   position: 'absolute',
//   bottom: 20,
//   left: 20,
//   right: 20,
//   borderRadius: 40,
//   paddingBottom: 0,
//   height: 60,
// };
const App = () => {
  return (
    <NavigationContainer>
      <RootBottomTabNav.Navigator
        initialRouteName="RestaurantStack"
        screenOptions={{
          tabBarActiveTintColor: COLORS.secondaryBg,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: COLORS.white,
            position: 'absolute',
            bottom: 20,
            left: 20,
            right: 20,
            borderRadius: 40,
            paddingBottom: 0,
            height: 60,
          },
        }}>
        <RootBottomTabNav.Screen
          name="RestaurantStack"
          component={RestaurantStackComponent}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <ExploreIcon color={color} size={size} />
            ),
            tabBarLabel: 'Restaurants',
          }}
        />
        <RootBottomTabNav.Screen
          component={ProfileStackComponent}
          name="ProfileStack"
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: COLORS.secondaryBg,
            },
            tabBarIcon: ({color, size}) => (
              <ProfileIcon color={color} size={size} />
            ),
            tabBarLabel: 'Profile',
          }}
        />
      </RootBottomTabNav.Navigator>
    </NavigationContainer>
  );
};

export default App;
