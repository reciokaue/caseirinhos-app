import React, {useState} from 'react';

import { Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Text, View, Platform, } from 'react-native';
import Header from '../../components/Header';

import { styles } from './styles';
import Input from '../../components/Input';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Button from '../../components/Button'

import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function FinalizingLocation() {
  const [ streetName, setStreetName ] = useState('')
  const [ houseNumber, setHouseNumber ] = useState('')
  const [ complement, setComplement ] = useState('')
  const [ referencePoint, setReferencePoint ] = useState('')
  const [ requestTo, setRequestTo ] = useState('home')

  return (
    <ScrollView style={styles.wrapper}>
      <KeyboardAvoidingView
        style={styles.content}
        behavior={Platform.OS === 'ios' ? 'padding': 'height'}
      >
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
           <View style={styles.container}>
            <Text  style={styles.title}></Text>
            <View>
              <Input setText={setStreetName} stateText={streetName} placeholder="Nome da rua"/>
              <View style={{flexDirection: 'row'}}>
                <View style={{width: '40%', marginRight: 16}}>
                  <Input keyboardType="numeric" setText={setHouseNumber} stateText={houseNumber} placeholder="Número"/>
                </View>
                <View style={{width: '60%',  paddingRight: 16}}>
                  <Input setText={setComplement} stateText={complement} placeholder="Complemento"/>
                </View>
              </View>
              <Input setText={setReferencePoint} stateText={referencePoint} placeholder="Ponto de Referencia"/>
            </View>
            <Text  style={styles.subtitle}>Marcar como</Text>
            <View style={styles.switch}>
              <View  style={[styles.card, requestTo == 'home' && styles.borderEffect]}>
                <RectButton onPress={() => setRequestTo('home')} style={styles.cardInside}>
                  <Text style={styles.cardText}>Casa</Text>
                  <AntDesign name="home" size={24} color="#57575A" />
                </RectButton>
              </View>
              <View  style={[styles.card, requestTo == 'work' && styles.borderEffect]}>
                <RectButton onPress={() => setRequestTo('work')} style={styles.cardInside}>
                  <Text style={styles.cardText}>Trabalho</Text>
                  <MaterialCommunityIcons name="coffee-to-go-outline" size={24} color="#57575A" />
                </RectButton>
              </View>
            </View>
            <Button>Completar Localização</Button>
           </View>
         </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};



export default FinalizingLocation;
