import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';

import { Animated, Text, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

import Button from '../../components/Button';
import InfoCost from '../../components/InfoCost';
import ItemAdd from '../../components/ItemAdd';
import LinkCard from '../../components/LinkCard';
import SwipeableButton from '../../components/SwipeableButton';
import UseAuthFirebase from '../../hooks/useAuth';
import useOrder from '../../hooks/useOrder';
import { database } from '../../services/firebase';

import { styles } from './styles';

function Basket() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClamp = Animated.diffClamp(scrollY, 0, 180 )
  const translateY = diffClamp.interpolate({
    inputRange: [0, 180],
    outputRange: [0, - 180],
  })
  
  const [ deliveryPlace, setDeliveryPlace ] = useState('brigadeiro tobias')
  const [ paymentMethod, setPaymentMethod ] = useState('dinheiro')
  const [ deliveryDate, setDeliveryDate ] = useState('24/12')

  const { orderItens, subTotal } = useOrder()
  const { user } = UseAuthFirebase()

  const navigation = useNavigation()

  const data = [
    {itemId: '1', title: 'brigadeiro', about: 'é um brigadeiro', price: '5.50', imageUrl: 'aaa'},
    {itemId: '2', title: 'beijinho', about: 'é um beijinho', price: '2.50', imageUrl: 'aaa'},
    {itemId: '3', title: 'doce', about: 'é um doce', price: '3.0', imageUrl: 'aaa'},
    {itemId: '4', title: 'outro doce', about: 'é ', price: '10', imageUrl: 'aaa'},
    {itemId: '5', title: 'torta', about: 'é ', price: '100', imageUrl: 'aaa'},
  ]

  async function doOrder(){

    if(user){
      const order = {
        items: orderItens,
        paymentMethod: paymentMethod,
        whenDone: Date.now(),
        deliveryDate: deliveryDate,
        deliveryPlace: deliveryPlace,
        total: subTotal + 5,
        author: user,
      }

      await database.ref(`orders/`).push(order)
    }else{
      alert('logue na sessão para poder fazer um pedido')
    }
  }

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, {
        transform: [
          {translateY: translateY}
        ],
        elevation: 5,
        zIndex: 100,
      }]}>
        <View style={styles.row}>
          <Text style={styles.title}>Cestinha</Text>
          <View style={{paddingBottom: 5}}>
            <Text style={styles.clear}>Limpar</Text>
          </View>
        </View>
        <LinkCard title="Entregar em" subtitle="Brigadeiro Tobias, 1231"/>
      </Animated.View>
      <ScrollView
        onScroll={(e) => { scrollY.setValue(e.nativeEvent.contentOffset.y)}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1, paddingTop: 180}
      }>
        <View style={styles.scrollContainer}>
          {
            orderItens.map((item) => (
              item.amount > 0 && 
                <SwipeableButton
                  key={item.itemId}
                  itemId={item.itemId}
                  title={item.title}
                  about={item.about}
                  price={item.price}
                  amount={item.amount}
                  imageUrls={item.imageUrls}
                />
            ))
          }
        </View>
        <View style={{marginTop: 32}}>
          <Text style={styles.subtitle}>Mais alguns dos nossos produtos</Text>
          <FlatList
            horizontal showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 22}}
            data={data}
            keyExtractor={(item) => String(item.itemId)}
            renderItem={(item) => (
              <ItemAdd
                itemId={item.item.itemId}
                price={item.item.price}
                title={item.item.title}
                about={item.item.about}
                imageUrl={item.item.imageUrl}
              />
            )}
            />
          <View style={{width: '100%', paddingHorizontal: 32, paddingVertical: 20,}}>
            <Button onPress={() => navigation.navigate('Home')} outlined>Adicionar mais Produtos</Button>
          </View>
        </View>
        <LinkCard title="Cartão de credito" subtitle="XXXX XXXX XXXX 4389"/>
        <LinkCard title="Agendar data de entrega" subtitle="Dia 27/10"/>
        <InfoCost subtotal={subTotal}/>
        <View style={{marginHorizontal: 32, paddingBottom: 32}}>
          <Button onPress={doOrder}>Confirmar Pedido</Button>
        </View>
      </ScrollView>
    </View> 
  );
};

export default Basket;
