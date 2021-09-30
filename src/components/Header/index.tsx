import React from 'react';

import { Fontisto } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { styles } from './styles';

function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Caseirinhos</Text>
      <Fontisto name="coffeescript" size={24} color="black" />
    </View>
  );
};

export default Header;
