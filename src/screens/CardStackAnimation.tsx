import {Dimensions, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {snapPoint} from 'react-native-redash';
const COLORS = ['#065535', '#ffc0cb', '#ff7373', '#ffd700', '#ffa500'];
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const CARD_WIDTH = 300;
const side = (SCREEN_WIDTH + CARD_WIDTH + 100) / 2;

const SNAP_POINTS = [-side, 0, side];

const CardStackAnimation = () => {
  return (
    <View style={styles.container}>
      {COLORS.map((color, index) => {
        return (
          <Card
            key={index}
            overrideStyles={{
              backgroundColor: color,
            }}
            index={index}
          />
        );
      })}
    </View>
  );
};

export default CardStackAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
  },
});

interface ICard {
  overrideStyles: any;
  index: number;
}

const Card = ({overrideStyles, index}: ICard) => {
  const randomDegree = Math.floor(Math.random() * 20 - 10);
  const rotateZ = useSharedValue(randomDegree);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(-SCREEN_HEIGHT);
  const context = useSharedValue({
    x: 0,
    y: 0,
  });
  const scale = useSharedValue(1);
  useEffect(() => {
    // translateY.value = withDelay(
    //   index * 150,
    //   withTiming(0, {
    //     duration: 300,
    //     easing: Easing.inOut(Easing.ease),
    //   }),
    // );
    translateY.value = withDelay(index * 200, withSpring(0));
  }, [index, translateY]);

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {x: translateX.value, y: translateY.value};
      scale.value = withSpring(1.1);
    })
    .onUpdate(event => {
      translateX.value = context.value.x + event.translationX;
      translateY.value = context.value.y + event.translationY;
    })
    .onEnd(event => {
      const dest = snapPoint(translateX.value, event.velocityX, SNAP_POINTS);
      translateX.value = withSpring(dest, {
        velocity: event.velocityX,
      });
      translateY.value = withSpring(0, {
        velocity: event.velocityY,
      });
      scale.value = withSpring(1);
    });

  const cardReanimatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
      {
        translateY: translateY.value,
      },
      {
        rotateZ: `${rotateZ.value}deg`,
      },
      {
        scale: scale.value,
      },
    ],
  }));

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[cardStyles.card, cardReanimatedStyles, overrideStyles]} />
    </GestureDetector>
  );
};
const cardStyles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: '55%',
    position: 'absolute',
    borderRadius: 20,
  },
});
