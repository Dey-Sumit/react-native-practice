/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';
import COLORS from '../consts/colors';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

interface AnimatedPosition {
  x: Animated.SharedValue<number>;
  y: Animated.SharedValue<number>;
}
const useFollowAnimatedPostition = ({x, y}: AnimatedPosition) => {
  const followX = useDerivedValue(() => {
    // return x.value;
    return withSpring(x.value);
  });
  const followY = useDerivedValue(() => {
    return withSpring(y.value);
  });

  const reaniamtedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(followX.value),
        },
        {
          translateY: followY.value,
        },
      ],
    };
  }, []);

  return {reaniamtedStyles, followX, followY};
};

const ReanimatedGestureHandler = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  // to remember the last position of the box
  const context = useSharedValue({x: 0, y: 0});

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {
        x: translateX.value,
        y: translateY.value,
      };
    })
    .onUpdate(event => {
      translateX.value = event.translationX + context.value.x;
      translateY.value = event.translationY + context.value.y;
    })
    .onEnd(() => {
      translateX.value =
        translateX.value > SCREEN_WIDTH / 2 ? SCREEN_WIDTH - 100 : 0;
    });

  const {
    reaniamtedStyles: Circle1rStyles,
    followX: circle1FollowX,
    followY: circle1FollowY,
  } = useFollowAnimatedPostition({
    x: translateX,
    y: translateY,
  });

  const {
    reaniamtedStyles: Circle2rStyles,
    followX: circle2FollowX,
    followY: circle2FollowY,
  } = useFollowAnimatedPostition({
    x: circle1FollowX,
    y: circle1FollowY,
  });

  const {
    reaniamtedStyles: Circle3rStyles,
    // followX: circle3FollowX,
    // followY: circle3FollowY,
  } = useFollowAnimatedPostition({
    x: circle2FollowX,
    y: circle2FollowY,
  });

  return (
    <View style={styles.container}>
      <GestureDetector gesture={gesture}>
        <Animated.View
          style={[
            styles.box,
            Circle1rStyles,
            {
              zIndex: 99,
            },
          ]}
        />
      </GestureDetector>
      <Animated.View
        style={[
          styles.box,
          {
            transform: [
              {
                scale: 0.85,
              },
            ],
            position: 'absolute',
            backgroundColor: 'yellow',
          },
          Circle2rStyles,
        ]}
      />
      <Animated.View
        style={[
          styles.box,
          Circle3rStyles,
          {
            transform: [
              {
                scale: 0.75,
              },
            ],
            position: 'absolute',
            backgroundColor: 'red',
          },
        ]}
      />
    </View>
  );
};

export default ReanimatedGestureHandler;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBg,
  },
  box: {
    width: 100,
    aspectRatio: 1,
    backgroundColor: COLORS.black,
    borderRadius: 999,
    position: 'absolute',
  },
});
