import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import RestaurantCard from '../componetns/RestaurantCard';
import {useNavigation} from '@react-navigation/native';

const Restaurants = () => {
  const navigation = useNavigation();

  const navigateToProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>All Restaurants</Text>
      <View>
        <RestaurantCard id={1} name="Ai Restaurant" />
        <RestaurantCard id={2} name="Com Restaurant" />
        <RestaurantCard id={3} name="Net Restaurant" />
        <RestaurantCard id={4} name="Teh Restaurant" />
        <RestaurantCard id={5} name="In Restaurant" />
      </View>
      <TouchableOpacity
        style={styles.profileButton}
        onPress={navigateToProfile}>
        <Text>Profile</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Restaurants;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F52',
    flex: 1,
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
    backgroundColor: '#F52111',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    //! Q : width : '100%' is behaving wrong
  },
});
