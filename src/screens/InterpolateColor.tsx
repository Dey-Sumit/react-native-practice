/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet, Switch, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const ReanimatedSafeAreaView = Animated.createAnimatedComponent(SafeAreaView);

const Colors = {
  dark: {
    background: '#1E1E1E',
    circle: '#252525',
    text: '#F8F8F8',
  },
  light: {
    background: '#F8F8F8',
    circle: '#FFF',
    text: '#1E1E1E',
  },
};

const SWITCH_TRACK_COLOR = {
  true: 'rgba(256, 0, 256, 0.2)',
  false: 'rgba(0,0,0,0.1)',
};

const InterpolateColor = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const progress = useSharedValue(0);

  /*     const progress = useDerivedValue(() => {
      return theme === 'dark'
        ? withTiming(1, {
            duration: 250,
          })
        : withTiming(0, {
            duration: 250,
          });
    }, [theme]);
*/
  const handleToggle = (value: boolean) => {
    if (value) {
      progress.value = withTiming(1, {
        duration: 500,
      });
    } else {
      progress.value = withTiming(0, {
        duration: 500,
      });
    }
    setTheme(value === true ? 'dark' : 'light');
  };

  const rSafeViewStyles = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.background, Colors.dark.background],
    );
    return {
      backgroundColor,
    };
  }, []);
  const rTextStyles = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.text, Colors.dark.text],
    );
    return {
      color,
    };
  }, []);

  return (
    <ReanimatedSafeAreaView style={[styles.container, rSafeViewStyles]}>
      <Animated.Text style={[styles.text, rTextStyles]}>
        I already want to take a nap tomorrow.
      </Animated.Text>
      <Switch
        value={theme === 'dark'}
        onValueChange={handleToggle}
        trackColor={SWITCH_TRACK_COLOR}
        thumbColor="rgba(256, 0, 256, 0.2)"
      />
    </ReanimatedSafeAreaView>
  );
};

export default InterpolateColor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
  },
});
