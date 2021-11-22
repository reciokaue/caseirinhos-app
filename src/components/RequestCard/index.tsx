import React from 'react';
import { Text, View } from 'react-native';
import { RectButton, RectButtonProperties, RectButtonProps } from 'react-native-gesture-handler';

import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import UseOrder from '../../hooks/useOrder';
import { useNavigation } from '@react-navigation/native';
import { ProductType } from '../../hooks/useProducts';
import { format, parseJSON } from 'date-fns';

interface RequestCardProps extends RectButtonProperties{
  request: RequestProps
}
interface RequestProps{
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

function RequestCard({request} :RequestCardProps) {
  const navigation = useNavigation()
  const { addItemToOrder } = UseOrder()

  return (
    <RectButton
      onPress={() =>
        navigation.navigate({
        name: 'ProductDetail',
        params: {
          request
        }
      })}
      style={styles.container}
    > 
      <View>
        <View style={styles.row}>
          <Text style={styles.title}>Festa Mariana</Text>
          <Text style={styles.title}>{`${format(parseJSON(deliveryDate), 'kk')}:${format(parseJSON(deliveryDate), 'mm')}`}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.subtitle}>{`${format(parseJSON(deliveryDate), 'dd')}:00`}</Text>
        </View>
      </View>
      <View>
        <View style={styles.row}>
          <RequestItem amount={12}/>
          <RequestItem amount={43}/>
          <RequestItem amount={21}/>
          <RequestItem amount={4}/>
          <RequestItem amount={7}/>
        </View>
      </View>
    </RectButton>
  );
};
type RequestItem = {
  amount: number | string
  imageUrl?: string
}
function RequestItem({amount, imageUrl}: RequestItem){
  return(
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{amount}x</Text>
      <View style={styles.itemImage}>

      </View>
    </View>
  )
}

export default RequestCard;
