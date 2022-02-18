import {ScrollView, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import BhCollapsable from '../componetns/BhCollapsable';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const darkCharcoal = 'rgb(51, 51, 51)';
const lightGray = 'rgb(204, 204, 204)';

const BetterHalfCollapsible = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const [activeIndex, setActiveIndex] = useState<number | null>(1);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <BhCollapsable
          id={1}
          title="Name"
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          collapsePlaceholder="e.g. Sumit Dey"
          value={firstName && `${firstName} ${lastName}`}>
          <TextInput
            placeholderTextColor="#c3c3c3"
            placeholder="Enter your first name"
            style={[styles.inputStyle]}
            onChangeText={text => setFirstName(text)}
            value={firstName}
            returnKeyType="next"
          />
          <TextInput
            placeholderTextColor="#c3c3c3"
            placeholder="Enter your first name"
            style={[styles.inputStyle]}
            onChangeText={text => setLastName(text)}
            value={lastName}
            returnKeyType="next"
          />
        </BhCollapsable>

        <BhCollapsable
          id={2}
          title="Email"
          value={email}
          collapsePlaceholder="e.g. abc@gmail.com"
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}>
          <TextInput
            placeholderTextColor="#c3c3c3"
            placeholder="Enter your email"
            style={[styles.inputStyle]}
            onChangeText={text => setEmail(text)}
            value={email}
            returnKeyType="next"
          />
        </BhCollapsable>

        <BhCollapsable
          id={3}
          title="Phone"
          value={phone}
          collapsePlaceholder="e.g.+1 (123) 456-7890"
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}>
          <TextInput
            placeholderTextColor="#c3c3c3"
            placeholder="Enter your phone number"
            style={[styles.inputStyle]}
            onChangeText={text => setPhone(text)}
            value={phone}
            maxLength={10}
            returnKeyType="next"
          />
        </BhCollapsable>

        <BhCollapsable
          id={4}
          title="Date of Birth"
          value={dateOfBirth}
          collapsePlaceholder="e.g. 10/09/99"
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}>
          <TextInput
            placeholderTextColor="#c3c3c3"
            placeholder="Enter your first name"
            autoComplete="name"
            style={[styles.inputStyle]}
            onChangeText={text => {
              setDateOfBirth(text);
            }}
            value={dateOfBirth}
            returnKeyType="next"
          />
        </BhCollapsable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BetterHalfCollapsible;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    flex: 1,
    width: '100%',
  },
  inputStyle: {
    height: hp('5%'),
    width: wp('62%'),
    borderBottomWidth: 1,
    borderColor: lightGray,
    textAlignVertical: 'top',
    color: darkCharcoal,
  },
});
