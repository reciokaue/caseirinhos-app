import React from 'react';

import { Entypo } from '@expo/vector-icons';
import { Text, View, } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

interface LinkCardProps extends RectButtonProps{
  title: string
  subtitle: string
  toLink?: string
}

function LinkCard({title, subtitle, ...rest}: LinkCardProps) {
  const navigation = useNavigation();

  return(
    <RectButton onPress={() => navigation.navigate('DateSetting')} {...rest} style={styles.container}>
        <View style={styles.image}></View>
        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <View style={styles.icon}>
        <Entypo name="chevron-small-down" size={35} color="#E83F5B" />
        </View>
    </RectButton>
  )
};

export default LinkCard;
