import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootBottomtabPrams} from '../../App';
import RestaurantCard from '../componetns/RestaurantCard';
import COLORS from '../consts/colors';
// import BackNavigationButton from '../componetns/BackNavigationButton';

type Props = NativeStackScreenProps<RootBottomtabPrams, 'Restaurant'>;

const Restaurant: FC<Props> = ({
  route: {
    params: {name, id},
  },
}) => {
  return (
    <View style={styles.container}>
      {/* <BackNavigationButton /> */}
      <Text style={styles.title}>
        {id} : {name}
      </Text>
      <Text style={styles.subTitle}>How can I help you?</Text>

      <View>
        <Text style={styles.subTitle}>Related Restaurants</Text>
        <RestaurantCard id={1} name="Ai Restaurant" />
        <RestaurantCard id={2} name="Net Restaurant" />
      </View>
    </View>
  );
};

export default Restaurant;

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
