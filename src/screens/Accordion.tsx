/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AnimatedAccordion from '../componetns/AnimatedAccoridion';
import COLORS from '../consts/colors';
const DATA = [
  {
    id: 1,
    title: 'Restaurant 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor odio, nihil quia deserunt id earum tempora, laborum nostrum sed veniam voluptate aut eaque impedit consequatur temporibus? Similique perspiciatis accusantium labore.',
  },
  {
    id: 2,
    title: 'Restaurant 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor odio, nihil quia deserunt id earum tempora, laborum nostrum sed veniam voluptate aut eaque impedit consequatur temporibus? Similique perspiciatis accusantium labore.',
  },
  {
    id: 3,
    title: 'Restaurant 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor odio, nihil quia deserunt id earum tempora, laborum nostrum sed veniam voluptate aut eaque impedit consequatur temporibus? Similique perspiciatis accusantium labore.',
  },
  {
    id: 4,
    title: 'Restaurant 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor odio, nihil quia deserunt id earum tempora, laborum nostrum sed veniam voluptate aut eaque impedit consequatur temporibus? Similique perspiciatis accusantium labore.',
  },
];

export type AccordionDataType = typeof DATA[0];
const AccordionScreen = () => {
  const [activeAccordionIndex, setActiveAccordionIndex] = useState<
    number | null
  >(1);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.primaryBg,
      }}>
      {DATA.map(item => (
        <AnimatedAccordion
          data={item}
          key={item.id}
          setActiveAccordionIndex={setActiveAccordionIndex}
          activeIndex={activeAccordionIndex}>
          <Text>
            {item.description} {'/n'}
            {item.description}{' '}
          </Text>
        </AnimatedAccordion>
      ))}
    </SafeAreaView>
  );
};

export default AccordionScreen;

const styles = StyleSheet.create({});
