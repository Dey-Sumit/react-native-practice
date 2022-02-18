/* eslint-disable react-native/no-inline-styles */
import {Pressable, StyleSheet, Text} from 'react-native';
import React, {FC} from 'react';
import {AccordionDataType} from '../screens/Accordion';
import Animated, {FadeInUp, FadeOutUp, Layout} from 'react-native-reanimated';
import COLORS from '../consts/colors';

interface Props {
  data?: AccordionDataType;
  setActiveAccordionIndex: React.Dispatch<React.SetStateAction<number | null>>;
  activeIndex: number | null;
}
/* const useLayout = (defaultHeight?: number) => {
  const [layout, setLayout] = useState({
    height: defaultHeight || 0,
    width: 0,
    measured: false,
  });
  const onLayout = React.useCallback(
    e => {
      const {height, width} = e.nativeEvent.layout;
      if (height === layout.height && width === layout.width) {
        return;
      }
      setLayout({
        height,
        width,
        measured: true,
      });
    },
    [layout.height, layout.width],
  );
  return [layout, onLayout];
}; */
// export default useLayout;

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const AnimatedAccordion: FC<Props> = ({
  data,
  setActiveAccordionIndex,
  activeIndex,
  children,
}) => {
  /*   const [layout, onLayout] = useLayout();

  console.log('activeIndex', activeIndex, 'height ', layout);

    const rStyles = useAnimatedStyle(() => {
      return {
        height: withTiming(activeIndex === data.id ? layout.height : 0),
      };
    }, [activeIndex]);
 */
  return (
    <AnimatedPressable
      style={[styles.container]}
      onPress={() =>
        setActiveAccordionIndex(activeIndex === data.id ? null : data.id)
      }
      layout={Layout}>
      <Text style={styles.title}>{data.title}</Text>
      {activeIndex === data.id && (
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

export default AnimatedAccordion;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: COLORS.elementsBg,
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
