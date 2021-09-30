import React from 'react';

import { Text, View,  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import RequestCard from '../../components/RequestCard';
import { styles } from './styles';

function FollowRequests() {
  const itensData = [
    {itemId: '1', title: 'brigadeiro', about: 'é um brigadeiro', price: '5.50', imageUrl: 'aaa'},
    {itemId: '2', title: 'beijinho', about: 'é um beijinho', price: '2.50', imageUrl: 'aaa'},
    {itemId: '3', title: 'doce', about: 'é um doce', price: '3.0', imageUrl: 'aaa'},
    {itemId: '4', title: 'mamada', about: 'é uma mamada', price: '10', imageUrl: 'aaa'},
    {itemId: '5', title: 'minha caceta', about: 'é minha caceta', price: '100', imageUrl: 'aaa'},
  ]
  return (
    <ScrollView  contentContainerStyle={styles.container}>
      <Text style={styles.title}>Acompanhe {'\n'}seus Pedidos</Text>
      <RequestCard/>
    </ScrollView>
  );
};

export default FollowRequests;
