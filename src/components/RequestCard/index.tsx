import React from 'react';
import { Text, View } from 'react-native';
import { RectButton, RectButtonProperties, RectButtonProps } from 'react-native-gesture-handler';

import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import UseOrder from '../../hooks/useOrder';
import { useNavigation } from '@react-navigation/native';

interface RequestCardProps extends RectButtonProperties{

}

function RequestCard({ ...rest} :RequestCardProps) {
  const navigation = useNavigation()
  const { addItemToOrder } = UseOrder()

  return (
    <RectButton
      // onPress={() => navigation.navigate({
        // name: 'ProductDetail',
        // params: {
        //   itemId: itemId,
        //   imageUrl: imageUrl,
        //   title: title,
        //   price: price,
      //   }
      // })}
      {...rest}  style={styles.container}
    > 
      <View>
        <View style={styles.row}>
          <Text style={styles.title}>Festa Mariana</Text>
          <Text style={styles.title}>25/06</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.subtitle}>13:00 - 14:00</Text>
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
