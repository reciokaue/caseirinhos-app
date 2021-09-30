import React from 'react';
import { useState } from 'react';

import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import DateCard from '../../components/DateCard';
import DateListItem from '../../components/DateListItem';
import { styles } from './styles';

function DateScheduling() {
  const [ selectedDate, setSelectedDate ] = useState(1)
  const [ selectedHour, setSelectedHour ] = useState(1)

  const date = [
    {id: '1', name: 'hoje'},
    {id: '2', name: 'ter'},
    {id: '3', name: 'qua'},
    {id: '4', name: 'qui'},
    {id: '5', name: 'sex'},
    {id: '6', name: 'sab'},
  ]
  const hour = [
    {id: '1', name: 'hoje'},
    {id: '2', name: 'ter'},
    {id: '3', name: 'qua'},
    {id: '4', name: 'qui'},
    {id: '5', name: 'sex'},
    {id: '6', name: 'sab'},
    {id: '7', name: 'sab'},
    {id: '8', name: 'sab'},
    {id: '9', name: 'sab'},
    {id: '10', name: 'sab'},
    {id: '11', name: 'sab'},
    {id: '12', name: 'sab'},
    {id: '13', name: 'sab'},
  ]
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha o melhor horario para você</Text>
      <View style={{width: '100%', paddingBottom: 32}}>
        <Text style={styles.subtitle}>Datas</Text>
        <FlatList
          horizontal showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 32, paddingRight: 16}}
          data={date}
          keyExtractor={(item) => String(item.id)}
          renderItem={(item) => (
            <DateCard
              onPress={() => setSelectedDate(item.item.id)}
              selected={selectedDate == item.item.id && true}
              title={item.item.name}
              day={item.item.id}
            />
          )}
        />
      </View>
      <View style={{width: '100%', flex: 1}}>
        <Text style={styles.subtitle}>Horários</Text>
        <FlatList
          showsVerticalScrollIndicator={true}
          data={hour}
          // contentContainerStyle={{paddingBottom: 790}}
          keyExtractor={(item) => String(item.id)}
          renderItem={(item) => (
            <DateListItem
              onPress={() => setSelectedHour(item.item.id)}
              selected={selectedHour == item.item.id && true}
              hour='12:00 - 13:00'
              price={5.55}
            />
          )}
        />
      </View>
    </View>
  );
};

export default DateScheduling;
