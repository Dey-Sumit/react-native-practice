/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BetterHalfScreen1 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          height: '50%',
          width: '90%',
          borderWidth: 1,
          flexDirection: 'row',
        }}>
        {/* left */}
        <View style={{borderWidth: 1, borderRadius: 14, flex: 0.4}} />
        {/* right */}
        <View
          style={{
            borderWidth: 1,
            borderRadius: 14,
            flex: 0.6,
            flexDirection: 'column',
          }}>
          <View style={{borderWidth: 1, borderRadius: 14, flex: 0.7}} />
          <View
            style={{
              borderWidth: 1,
              borderRadius: 14,
              flex: 0.3,
              flexDirection: 'row',
            }}>
            <View style={{borderWidth: 1, borderRadius: 14, flex: 0.5}} />
            <View style={{borderWidth: 1, borderRadius: 14, flex: 0.5}} />
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
