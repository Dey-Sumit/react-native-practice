import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootBottomtabPrams} from '../../App';
import {useNavigation} from '@react-navigation/native';

interface Props {
  name: string;
  id: number;
  imageUrl?: string;
  additionalStyles: any;
}

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const RestaurantCard = ({name, id, imageUrl, additionalStyles}: Props) => {
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
    <AnimatedTouchable
      style={[additionalStyles, styles.container]}
      onPress={navigateToRestaurantDetail}>
      {imageUrl && (
        <Image
          style={styles.image}
          source={{
            uri: imageUrl,
          }}
        />
      )}
      <View style={styles.body}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.tagLine}>We don't care about your test</Text>
        <Text style={styles.address}>265/12 - Sector 6 , HSR Layout</Text>
      </View>
    </AnimatedTouchable>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  container: {
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
