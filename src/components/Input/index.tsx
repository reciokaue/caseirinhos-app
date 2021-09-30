import React, { useRef } from 'react';

import { View, Text, Animated, TouchableOpacity, TextInputProps, TextInput } from 'react-native';
import { styles } from './styles';
import { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons'; 
import { RectButton } from 'react-native-gesture-handler';
import { Jost_100Thin } from '@expo-google-fonts/jost';

interface InputProps extends TextInputProps{
  placeholder: string
  stateText: string
  setText: Function
}
function Input({placeholder, setText, stateText,  ...rest}: InputProps) {
  const labelAnim = useRef(new Animated.ValueXY()).current;
  const textSizeAnim = useRef(new Animated.Value(16)).current;
  const removeAnin = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if(stateText != ''){
      labelIn()
    }else{
      labelOut()
    }
  },[stateText])

  function labelIn(){
    Animated.parallel([
      Animated.timing(labelAnim, {
        toValue: {x: 0,y: -26}, 
        duration: 50,
        useNativeDriver: true
      }),
      Animated.timing(textSizeAnim, {
        toValue: 12, 
        duration: 50,
        useNativeDriver: false
      }),
      Animated.timing(removeAnin, {
        toValue: 1, 
        duration: 100,
        useNativeDriver: false
      }),
    ]).start();
  };
  function labelOut(){
    Animated.parallel([
      Animated.timing(labelAnim, {
        toValue: {x: 0,y: 0}, 
        duration: 200,
        useNativeDriver: true
      }),
      Animated.timing(textSizeAnim, {
        toValue: 16, 
        duration: 200,
        useNativeDriver: false
      }),
      Animated.timing(removeAnin, {
        toValue: 0, 
        duration: 100,
        useNativeDriver: false
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      {/* <View style={{
        position: 'absolute',
        width: 10,
        height: '100%',
        backgroundColor: '#fd0'
      }}/> */}
      <TextInput
        value={stateText}
        style={styles.input}
        onChangeText={text => setText(text)}
        {...rest}
      />
      <Animated.View
        style={[styles.placeholder,{
          transform: labelAnim.getTranslateTransform(),
        }]}
      >
       <Animated.Text style={[styles.text, {fontSize: textSizeAnim}]}>
         {placeholder}
        </Animated.Text>
      </Animated.View>
      <Animated.View style={[styles.removeText,{
        opacity: removeAnin,
      }]}>
        <RectButton onPress={() => setText('')}>
          <Ionicons name="close" size={24} color="#C3C7CE" />
        </RectButton>
      </Animated.View>
    </View>
  );
};

export default Input;
