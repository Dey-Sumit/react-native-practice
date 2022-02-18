/* eslint-disable react-native/no-inline-styles */
import {Platform, Pressable, StyleSheet, Text} from 'react-native';
import React, {FC} from 'react';
import Animated, {
  FadeInDown,
  FadeInUp,
  FadeOutUp,
  Layout,
} from 'react-native-reanimated';

interface Props {
  id: number;
  title: string;
  value: string;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
  activeIndex: number | null;
  collapsePlaceholder: string;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const BhCollapsable: FC<Props> = ({
  id,
  title,
  value,
  setActiveIndex,
  activeIndex,
  collapsePlaceholder,
  children,
}) => {
  return (
    <AnimatedPressable
      entering={FadeInDown.springify()
        .delay(200 * id)
        .stiffness(200)}
      exiting={FadeOutUp.duration(500)}
      style={[styles.container]}
      onPress={() => setActiveIndex(activeIndex === id ? null : id)}
      layout={Layout}>
      <Text style={styles.title}>{title}</Text>
      {activeIndex !== id ? (
        value ? (
          <Animated.Text
            exiting={FadeOutUp}
            entering={FadeInUp}
            style={styles.value}>
            {value}
          </Animated.Text>
        ) : (
          <Animated.Text
            exiting={FadeOutUp}
            entering={FadeInUp}
            style={styles.placeholder}>
            {collapsePlaceholder}
          </Animated.Text>
        )
      ) : null}
      {activeIndex === id && (
        <Animated.View
          style={{padding: 5}}
          exiting={FadeOutUp}
          entering={FadeInUp}>
          {children}
        </Animated.View>
      )}
    </AnimatedPressable>
  );
};

export default BhCollapsable;

const styles = StyleSheet.create({
  container: {
    padding: 14,
    paddingVertical: 15,
    marginBottom: 10,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        shadowColor: 'rgb(231, 231, 231)',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
      },
    }),
    elevation: 3,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgba(255, 91, 145, 100)',
  },
  value: {
    marginVertical: 10,
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  placeholder: {
    marginVertical: 10,
    fontSize: 16,
    color: '#ccc',
  },
});
