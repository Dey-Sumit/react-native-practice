/* eslint-disable react-native/no-inline-styles */
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Animated, {
  Layout,
  SlideInDown,
  SlideInLeft,
  SlideInRight,
  SlideOutLeft,
  SlideOutRight,
  SlideOutUp,
} from 'react-native-reanimated';

const BetterHalfScreen1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(idx => (idx === 2 ? 0 : idx + 1));
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          height: '50%',
          width: '90%',
          //   borderWidth: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        {/* left */}
        <Block
          currentIndex={currentIndex}
          enteringAnimation={SlideInDown.duration(1000)}
          //   layout={Layout.delay(10000)}}
          exitingAnimation={SlideOutUp.duration(1000).delay(500)}
          overrideStyle={{flex: 0.4}}
          imagesUrl={[
            'https://picsum.photos/id/237/200/300',
            'https://picsum.photos/id/238/200/300',
            'https://picsum.photos/id/239/200/300',
          ]}
        />
        {/* right */}
        <View
          style={{
            borderRadius: 14,
            flex: 0.58,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          {/* <View
            style={{
              borderWidth: 1,
              borderRadius: 14,
              flex: 0.68,
            }}
          /> */}
          <Block
            currentIndex={currentIndex}
            enteringAnimation={SlideInRight.duration(1000)}
            //   layout={Layout.delay(10000)}}
            exitingAnimation={SlideOutLeft.duration(1000).delay(500)}
            overrideStyle={{flex: 0.68}}
            imagesUrl={[
              'https://picsum.photos/id/227/200/300',
              'https://picsum.photos/id/228/200/300',
              'https://picsum.photos/id/229/200/300',
            ]}
          />
          <View
            style={{
              borderRadius: 14,
              flex: 0.3,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {/* <View style={{borderWidth: 1, borderRadius: 14, flex: 0.49}} />
            <View style={{borderWidth: 1, borderRadius: 14, flex: 0.49}} /> */}
            <Block
              currentIndex={currentIndex}
              enteringAnimation={SlideInDown.duration(1000)}
              //   layout={Layout.delay(10000)}}
              exitingAnimation={SlideOutUp.duration(1000).delay(600)}
              overrideStyle={{flex: 0.48}}
              imagesUrl={[
                'https://picsum.photos/id/217/200/300',
                'https://picsum.photos/id/218/200/300',
                'https://picsum.photos/id/219/200/300',
              ]}
            />
            <Block
              currentIndex={currentIndex}
              enteringAnimation={SlideInLeft.duration(1000)}
              //   layout={Layout.delay(10000)}}
              exitingAnimation={SlideOutRight.duration(1000).delay(600)}
              overrideStyle={{flex: 0.48}}
              imagesUrl={[
                'https://picsum.photos/id/307/200/300',
                'https://picsum.photos/id/208/200/300',
                'https://picsum.photos/id/209/200/300',
              ]}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BetterHalfScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface BlockProps {
  currentIndex: number;
  enteringAnimation: any;
  exitingAnimation: any;
  overrideStyle?: any;
  imagesUrl: string[];
}
const Block = ({
  currentIndex,
  enteringAnimation,
  exitingAnimation,
  overrideStyle,
  imagesUrl,
}: BlockProps) => {
  return (
    <View
      style={[
        {
          borderWidth: 2,
          borderColor: 'pink',
          borderRadius: 14,

          overflow: 'hidden',
        },
        overrideStyle,
      ]}>
      {/* // nested views to be animated */}
      {currentIndex === 0 && (
        <Animated.View
          style={{
            backgroundColor: 'red',
            width: '100%',
            height: '100%',
          }}
          exiting={exitingAnimation}
          entering={enteringAnimation}
          //   layout={Layout.delay(10000)}
        >
          <Image
            source={{uri: imagesUrl[currentIndex]}}
            style={{...StyleSheet.absoluteFillObject}}
          />
        </Animated.View>
      )}
      {currentIndex === 1 && (
        <Animated.View
          style={{
            backgroundColor: 'blue',
            width: '100%',
            height: '100%',
          }}
          exiting={exitingAnimation}
          entering={enteringAnimation}
          layout={Layout.delay(10000)}>
          <Image
            source={{uri: imagesUrl[currentIndex]}}
            style={{...StyleSheet.absoluteFillObject}}
          />
        </Animated.View>
      )}
      {currentIndex === 2 && (
        <Animated.View
          style={{backgroundColor: 'yellow', width: '100%', height: '100%'}}
          exiting={exitingAnimation}
          entering={enteringAnimation}
          layout={Layout.delay(10000)}>
          <Image
            source={{uri: imagesUrl[currentIndex]}}
            style={{...StyleSheet.absoluteFillObject}}
          />
        </Animated.View>
      )}
    </View>
  );
};
