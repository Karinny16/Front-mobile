import React, {useState, useRef} from "react";
import {Text, TouchableOpacity, View, Animated, ScrollView} from 'react-native'
import { Styles } from "./style";
import AntDesign from '@expo/vector-icons/AntDesign';
import Visitante from "../../components/BotaoVisitante/BotaoVisitante";
export default function Control(){
    const [expandido, setExpandido] = useState(false);
  const altura = useRef(new Animated.Value(50)).current;

  const alternar = () => {
    const novaAltura = expandido ? 50 : 250; // Altura do botão fechado e expandido
    setExpandido(!expandido);

    Animated.timing(altura, {
      toValue: novaAltura,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

    return(
        <View style={Styles.container}>
            <Text style={Styles.text}>Controle de visitantes permanentes</Text>
            <View style={Styles.Box}>
            <ScrollView>
              <Text style={Styles.text1}>Visitantes Permanentes Cadastrados :</Text>
            
               <Visitante
                nome="Zarandir Almeida"
                nascimento="10-12-1990"
                cpf="123.456.789-10"
               />
               <Visitante
                nome="carlos"
                nascimento="10-12-1990"
                cpf="123.456.789-10"
               />
               <Visitante
                nome="carlos maia"
                nascimento="10-12-1990"
                cpf="123.456.789-10"
               />
               
            </ScrollView>
            </View>
            
        </View>
    )



}