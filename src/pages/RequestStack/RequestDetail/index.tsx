import React, { useState } from 'react';

import { Text, View } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import { ProductType } from '../../../hooks/useProducts';
import { theme } from '../../../theme';
import { styles } from './styles';

interface RequestType{
  id: string
  author: string
  deliveryPlace: {
    complement: string
    homeNumber: string
    latitude: string
    longitude: string
    referencePoint: string
    residenceType: string
    street: string
  }
  paymenthMethod: {
    method: string
    paymenth: string
  }
  items: Array<ProductType>
  total: string
  deliveryDate: string
  whenDone: string
}

function RequestDetail() {
  const [ showAlert, setShowAlert ] = useState(false)

  return (<>
    <Header title="Detalhe do pedido" border/>
    <ScrollView contentContainerStyle={styles.wrapper}>
      <View>
        <View style={styles.container}>
          <Text style={styles.title}>Festa Mariana</Text>
          <View style={styles.row}>
            <Text style={styles.time}>13:00 - 14:00</Text>
            <Text style={styles.date}>25/06</Text>
          </View>
        </View>
        <View style={styles.listItems}>
          <Bullet/>
          <Bullet/>
          <Bullet/>
          <Bullet/>
          <Bullet/>
          <Bullet/>
          <Bullet/>
          <Bullet/>
          <Bullet/>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.dateInfo}>Entrega em: 25/06/2041</Text>
        <Text style={styles.dateInfo}>Pedido feito em: 15/06/2041</Text>
        <Text style={styles.price}>Preço: R$225.42</Text>

        <Button>Confirmar Entrega</Button>
        <View style={{height: 20,}}/>
        <Button onPress={() => setShowAlert(true)} redFit>Excluir Pedido</Button>
      </View>
    </ScrollView>
    <AwesomeAlert
      show={showAlert}
      title="Deseja mesmo excluir o pedido?"
      contentContainerStyle={{padding: 25, borderRadius: 17, }}
      titleStyle={{
        fontSize: 20,
        color: theme.colors.text,
        fontFamily: theme.fonts.poppins,
        textAlign: 'center'
      }}
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={true}
      showCancelButton={true}
      showConfirmButton={true}
      confirmText="Excluir"
      cancelText="Cancelar"
      confirmButtonColor={theme.colors.red}
      cancelButtonColor={theme.colors.gold}
      confirmButtonStyle={{paddingHorizontal: 15,paddingVertical: 15, borderRadius: 8}}
      cancelButtonStyle={{paddingHorizontal: 15,paddingVertical: 15, borderRadius: 8}}
      onConfirmPressed={() => setShowAlert(false)}
      cancelButtonTextStyle={{fontSize: 12.64, color: theme.colors.white, fontFamily: theme.fonts.roboto, textAlign: 'center'}}
      confirmButtonTextStyle={{fontSize: 12.64, color: theme.colors.white, fontFamily: theme.fonts.roboto, textAlign: 'center'}}
    />
    </>
  );
};
const Bullet = () => (
  <View style={styles.bulletWrapper}>
    <RectButton style={{justifyContent: "center", alignItems: "center", padding: 8}}>
      <Text style={styles.bulletTitle}>12x</Text>
      <View style={styles.bulletImage}>
      </View>
    </RectButton>
  </View>
)

export default RequestDetail;
