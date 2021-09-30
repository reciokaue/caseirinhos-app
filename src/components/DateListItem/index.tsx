import React from 'react';

import { Entypo } from '@expo/vector-icons';
import { Text, View, } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

interface DateListItemProps extends RectButtonProps{
  hour: string
  price: number
  selected?: boolean
}

function DateListItem({price, hour, selected, ...rest}: DateListItemProps) {
  return(
    <RectButton {...rest} style={styles.container}>
        <Text style={styles.hour}>{hour}</Text>
        <View style={styles.rightSide}>
          <Text style={styles.price}>R${price}</Text>
          <View style={[styles.radio, selected&& styles.selected]}/>
        </View>
    </RectButton>
  )
};

export default DateListItem;
