import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootBottomtabPrams} from '../../App';
import {useNavigation} from '@react-navigation/native';

interface Props {
  name: string;
  id: number;
}

const RestaurantCard = ({name, id}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootBottomtabPrams>>();
  console.log('push', navigation.push);

  const navigateToRestaurantDetail = () => {
    // navigation.push('Restaurant', {
    //   name,
    //   id,
    // });

    // navigate to other screen
    navigation.navigate('RestaurantStack', {
      screen: 'Restaurant',
      params: {
        name,
        id,
      },
    });
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={navigateToRestaurantDetail}>
      <Text>
        {id} : {name}
      </Text>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  container: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
});
