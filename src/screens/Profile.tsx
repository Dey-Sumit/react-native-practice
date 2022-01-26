import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RestaurantCard from '../componetns/RestaurantCard';
import COLORS from '../consts/colors';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sumit Dey</Text>
      <Text style={styles.subTitle}>Here's all fav restaurants!</Text>
      <View>
        <RestaurantCard id={2} name="Com Restaurant" />
        <RestaurantCard id={3} name="Net Restaurant" />
        <RestaurantCard id={4} name="Teh Restaurant" />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondaryBg,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  subTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    margin: 10,
  },
});
