import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Text, View,  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../components/Button';
import ProductCard from '../../components/ProductCard';
import { useProducts } from '../../hooks/useProducts';
import { styles } from './styles';

function Home() {
  const { products } = useProducts()
  const navigation = useNavigation()
  
  return (
    <ScrollView  contentContainerStyle={styles.container}>
      <View style={{width: '100%', paddingHorizontal: 32, marginBottom: 20,}}>
        <Text style={styles.title}>Home</Text>
        <Button onPress={() => navigation.navigate('CreateProduct')}>Cadastrar novo Produto</Button>
      </View>
      <View style={styles.scrollContainer}>
        {products.map((item) => (
          <ProductCard
            key={item.id}
            itemId={item.id}
            title={item.title}
            about={item.about}
            price={item.price}
            amount={1}
            imageUrls={item.img.url}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;
