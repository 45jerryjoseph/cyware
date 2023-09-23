import React from 'react';
import {TextInput} from 'react-native';
import {darkGreen} from './Constants';

const Field = props => {
  return (
    <TextInput
      {...props}
      style={{borderRadius: 100,height:45,fontSize: 20, color: "grey", paddingHorizontal: 10, width: '78%', backgroundColor: 'rgb(220,220, 220)', marginVertical: 15}}
      placeholderTextColor={darkGreen}></TextInput>
  );
};

export default Field;
