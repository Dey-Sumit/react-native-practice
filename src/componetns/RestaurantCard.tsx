import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface Props {
  name: string;
  id: number;
}

const RestaurantCard = ({name, id}: Props) => {
  return (
    <TouchableOpacity style={styles.container}>
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
