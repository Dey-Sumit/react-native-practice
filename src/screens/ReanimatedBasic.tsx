/* eslint-disable react-hooks/exhaustive-deps */
import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
} from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const ReanimatedBasic = () => {
  // useSharedValue gives you a value that can be controllled from ui thread
  const progress = useSharedValue(1);
  const scale = useSharedValue(1);
  const buttonScale = useSharedValue(1);

  const reaniamtedStyles = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [
        {scale: scale.value},
        {rotate: `${progress.value * 2 * Math.PI}rad`},
      ],
      borderRadius: progress.value * 50,
    };
  }, []);

  useEffect(() => {
    progress.value = 1;
    scale.value = 1;
    buttonScale.value = 1;
  }, []);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(0.5, {
        duration: 1000,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
      10,
      true,
    );

    scale.value = withRepeat(
      withTiming(0.5, {
        duration: 1000,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
      10,
      true,
    );
    /* scale.value = withSpring(0.3, {
      damping: 20,
      mass: 1,
      stiffness: 100,
    velocity: 1,
    });
    */
  }, []);

  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: buttonScale.value}],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, reaniamtedStyles]} />

      <AnimatedPressable
        onPress={() => {
          console.log('pressed');
        }}
        onPressIn={() => {
          buttonScale.value = withTiming(0.8);
        }}
        onPressOut={() => {
          buttonScale.value = withTiming(1);
        }}
        style={[styles.button, animatedButtonStyle]}>
        <Text style={styles.buttonText}>Tap me</Text>
      </AnimatedPressable>
    </View>
  );
};

export default ReanimatedBasic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginVertical: 10,
  },
  buttonText: {
    color: 'red',
  },
});
