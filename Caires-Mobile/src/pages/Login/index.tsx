import React, { useState, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Text, View, Image, TextInput, Button, TouchableOpacity, Alert, ActivityIndicator, } from 'react-native'
import { Styles } from "./styles";
import { MaterialIcons, AntDesign } from '@expo/vector-icons'
import LogoC from '../../assets/LogoCairesC.png'
import NomeCaires from '../../assets/CairesNome.png'
import { themas } from "../../global/themas";


// import { Input } from "../../components/input";
export default function Login (){
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[loading, setLoading] = useState(false)

    
    function getLogin() {
        try {
          setLoading(true);
      
          if (!email || !password) {
            setLoading(false);
            return Alert.alert('Atenção', 'Por favor insira os campos obrigatórios');
          }
      
          fetch('http://127.0.0.1:3333/loginMorador', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, senha: password }) 
          })
            .then(async (res) => {
              const data = await res.json();
              if (res.status === 200) {
                await AsyncStorage.setItem('token', data.message);
                Alert.alert('Logado com sucesso!');
                
                
              } else {
                Alert.alert('Erro', data.message || 'Usuário ou senha inválidos');
              }
            })
            .catch((err) => {
              Alert.alert('Erro', 'Falha ao conectar com o servidor');
              console.error('Erro no login:', err);
            })
            .finally(() => setLoading(false));
        } catch (error) {
          setLoading(false);
          console.error('Erro inesperado:', error);
        }
      }
      
    return(
        <View style={Styles.container}>
                <View style={Styles.boxTop}>
                    <Image source={LogoC} style={Styles.logo}></Image>
                    <Image source={NomeCaires} style={Styles.LogoNome}></Image>
                    <Text style={Styles.text}>SEGURANÇA RESIDENCIAL</Text>
                </View>
                <View style={Styles.boxMid}>
                    <Text style={Styles.titleImput}>EMAIL</Text>
                    <View style={Styles.BoxInput}>
                    <TextInput 
                        style={Styles.input}
                        value={email}
                        onChangeText={setEmail}/>
                    <MaterialIcons
                        name="email"
                        size={20}
                        color={themas.colors.gray}
                    />
                    </View>
                    <Text  style={Styles.titleImput}>SENHA</Text>
                    
                    <View style={Styles.BoxInput}>
                    <TextInput 
                        style={Styles.input}
                        value={password}
                        onChangeText={setPassword}/> 
                  
                    <MaterialIcons
                        name="remove-red-eye"
                        size={20}
                        color={themas.colors.gray}
                    />
                    
                    </View>
                    
                </View>
                <View style={Styles.boxButton}>
                        <TouchableOpacity style={Styles.button} onPress={getLogin}>
                            {
                            loading?
                            <ActivityIndicator color={'#FFFF'} size={"small"}/>: 
                            <Text style={Styles.textButton}>Entrar</Text>}
                         
                        </TouchableOpacity>
                        <Text style={Styles.textBotton}>Esqueceu a Senha?</Text>
                </View>
                <Text style={Styles.textBotton}>Esqueceu a Senha?</Text>
        </View>
    )


}