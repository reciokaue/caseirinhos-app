import React, {useState} from 'react';

import { Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Text, View, Platform, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import Button from '../../components/Button';

import { styles } from './styles';
import { BottomAlreadLogin } from '../Login';
import Input from '../../components/Input';
import { useNavigation } from '@react-navigation/native';
import UseAuthFirebase from '../../hooks/useAuth';

function LoginWithEmail() {
  const navigation = useNavigation();

  const { LoginWithEmailAuth, user } = UseAuthFirebase()

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ action, setAction ] = useState(false)
  const [loginError, setLoginError] = useState('');
  
  async function handleSubmit(){
    try {
      LoginWithEmailAuth(email, password);
      navigation.navigate('TabRoutes')
      alert("caralho")
    } catch (error) {
      setLoginError(error.message);
    }
  }

  return (<>
    <KeyboardAvoidingView
      style={styles.content}
      behavior={Platform.OS === 'ios' ? 'padding': 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.title}>Os melhores doces, na porta da sua casa</Text>
          <View style={styles.switch}>
            <TouchableOpacity onPress={() => setAction(true)} style={{marginRight: 5}}>
              <Text style={[styles.subtitle, action&& {color: '#D9A96F'}]}>login /</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setAction(false)}>
              <Text style={[styles.subtitle, !action&& {color: '#D9A96F'}]}>resgister</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginBottom: 38, marginTop: 22}}>
            <Input setText={setEmail} stateText={email} placeholder="Email"/>
            <Input setText={setPassword} stateText={password} placeholder="Senha"/>
          </View>
          <Button onPress={handleSubmit} >Criar Conta</Button>
          <View style={{height: 22}}/>
          <BottomAlreadLogin/>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  </>);
};


export default LoginWithEmail;
