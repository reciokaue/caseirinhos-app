import { format, isBefore } from 'date-fns';
import React from 'react';
import { useState } from 'react';

import { Alert, Platform, Text, View } from 'react-native';
import { FlatList, RectButton } from 'react-native-gesture-handler';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker'

var add = require('date-fns/add')

import DateCard from '../../components/DateCard';
import DateListItem from '../../components/DateListItem';

import { styles } from './styles';

function DateSetting() {
  const [ selectedDate, setSelectedDate ] = useState(1)
  const [ selectedHour, setSelectedHour ] = useState(1)

  const [selectedDateTime, setSelectedDateTime] = useState(new Date);
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS == 'ios');

  function handleChangeTime(event: Event, dateTime: Date | undefined){
    if(Platform.OS === 'android'){
      setShowDatePicker(!showDatePicker)
    }
    if(dateTime && isBefore(dateTime, new Date())){
      setSelectedDateTime(new Date())
      return Alert.alert('Escolha uma data no futuro 🕓')
    }
    if(dateTime)
      setSelectedDateTime(dateTime)
  }
  function handleOpenTimePickerAndroid(){
    setShowDatePicker(!showDatePicker)
  }

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
      {showDatePicker && (
        <DateTimePicker
          value={selectedDateTime}
          mode='date'
          display='spinner'
          onChange={handleChangeTime}
        />
      )}
      { Platform.OS === 'android' && 
          <RectButton  onPress={handleOpenTimePickerAndroid}>
            <Text >
              {`Mudar Horario ${format(selectedDateTime, 'HH:mm')}`}
            </Text>
          </RectButton>
      }
      <Text></Text>
      <View style={{width: '100%', flex: 1}}>
        <Text style={styles.subtitle}>Horários</Text>
        <FlatList
          showsVerticalScrollIndicator={true}
          data={hour}
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

export default DateSetting;
