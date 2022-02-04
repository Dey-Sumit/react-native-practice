/* eslint-disable react-native/no-inline-styles */
import {Animated, Image, SafeAreaView, StyleSheet} from 'react-native';
import React, {useRef} from 'react';
import RestaurantCard from '../componetns/RestaurantCard';
//import {useNavigation} from '@react-navigation/native';
// import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import {RootBottomtabPrams} from '../../App';
import COLORS from '../consts/colors';

const BG_IMAGE =
  'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=2';
const ITEM_SIZE = 80 + 10 * 3;

const DATA = [
  {
    id: 1,
    name: 'Ai Restaurant',
    image:
      'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=2',
  },
  {
    id: 2,
    name: 'Com Restaurant',
    image:
      'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=2',
  },
  {
    id: 3,
    name: 'Net Restaurant',
    image:
      'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=2',
  },
  {
    id: 4,
    name: 'Tech Restaurant',
    image:
      'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=2',
  },
  {
    id: 5,
    name: 'In Restaurant',
    image:
      'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=2',
  },
  {
    id: 6,
    name: 'Space Restaurant',
    image:
      'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=2',
  },
  {
    id: 7,
    name: 'Io Restaurant',
    image:
      'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=2',
  },
  {
    id: 8,
    name: 'Io Restaurant',
    image:
      'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=2',
  },
  {
    id: 9,
    name: 'Io Restaurant',
    image:
      'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=2',
  },
  {
    id: 10,
    name: 'Io Restaurant',
    image:
      'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=2',
  },
];

const Restaurants = () => {
  // const navigation =
  //   useNavigation<NativeStackNavigationProp<RootBottomtabPrams>>();

  // const navigateToProfile = () => {
  //   navigation.navigate('ProfileStack');
  // };

  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: BG_IMAGE,
        }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={60}
      />
      <Animated.FlatList
        data={DATA}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.list}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY,
                },
              },
            },
          ],
          {
            useNativeDriver: true,
          },
        )}
        renderItem={({item, index}) => {
          const scale_inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ]; // based on the scroll position
          const scale = scrollY.interpolate({
            inputRange: scale_inputRange,
            outputRange: [1, 1, 1, 0],
          });

          const opacity_inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 1),
          ];

          const opacity = scrollY.interpolate({
            inputRange: opacity_inputRange,
            outputRange: [1, 1, 1, 0],
          });

          return (
            <RestaurantCard
              name={item.name}
              id={item.id}
              imageUrl={item.image}
              additionalStyles={{
                opacity,
                transform: [{scale}],
              }}
            />
          );
        }}
      />

      {/* <TouchableOpacity
        style={styles.profileButton}
        onPress={navigateToProfile}>
        <Text>Profile</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};

export default Restaurants;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },

  bgImage: {},

  list: {
    padding: 10,
  },

  header: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  profileButton: {
    position: 'absolute',
    bottom: 100,
    left: 30,
    right: 30,
    backgroundColor: COLORS.elementsBg,
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    //! Q : width : '100%' is behaving wrong
  },

  // -----
  buttonContainer: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',

    backgroundColor: 'rgba(255,255,255,0.9)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    // transform: [{scale: 0.9}],
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginRight: 20,
  },

  body: {
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  tagLine: {
    fontSize: 14,
    color: '#888',
    marginVertical: 5,
  },
  address: {
    fontSize: 12,
    color: '#133',
    marginTop: 2,
  },
});
