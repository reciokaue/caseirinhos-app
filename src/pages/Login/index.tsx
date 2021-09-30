import React from 'react';

import { Text, TouchableOpacity, View } from 'react-native';
import Header from '../../components/Header';
import Button from '../../components/Button';

import { AntDesign } from '@expo/vector-icons'; 
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
// import UseAuthFirebase from '../../hooks/useAuth';

function Login() {
  const navigation = useNavigation();

  return (
    <>
      <Header/>
      <View style={styles.container}>
        <Text style={styles.title}>Os melhores doces, na porta da sua casa</Text>
        <Text style={styles.subtitle}>Com todo amor, carinho e confiança que temos a oferecer</Text>
        <Button outlined
          icon={
            <AntDesign style={{marginRight: 8}} name="google" size={24} color="black" />
          }
            // onPress={HandleLoginGoogle}
          >
          Entrar com Google
        </Button>
        <View style={styles.separator}>
          <View style={styles.line}/>
          <Text style={styles.separatorText}>ou</Text>
          <View style={styles.line}/>
        </View>
        <Button onPress={() => navigation.navigate('LoginWithEmail')}>Criar Conta</Button>
        <BottomAlreadLogin/>
      </View>
    </>
  );
};

export function BottomAlreadLogin(){
  const navigation = useNavigation();
  return(
    <View style={styles.goLogin}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.loginQuestion}>
          Já tem uma conta? 
        </Text>
        <TouchableOpacity >
          <Text  style={styles.doLogin}>fazer login</Text>  
        </TouchableOpacity>
      </View>
      <Button onPress={() => navigation.navigate('TabRoutes')} redFit>Pular</Button>
    </View>
  )
}

export default Login;
