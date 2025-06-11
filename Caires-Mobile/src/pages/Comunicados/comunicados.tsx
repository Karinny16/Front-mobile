import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LogoC from '../../assets/LogoCairesC.png';
import Comunicado from '../../components/Comunicado';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Styles } from './comunicados.styles';

const Comunicados = () => {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Tela de Comunicados</Text>
      <View style={Styles.boxContainer}>
        <ScrollView contentContainerStyle={Styles.scrollContent}>
          <View style={Styles.headerContainer}>
            <Image source={LogoC} style={Styles.logoImage} />
            <TouchableOpacity onPress={() => navigation.navigate('ComunicadosText')}>
              <MaterialIcons name="add-circle" size={40} color="#000" />
            </TouchableOpacity>
          </View>
      <View style={Styles.centerPosts}>
      <Comunicado />
      <Comunicado />
      <Comunicado />
    </View>


        </ScrollView >
      </View >
    </View >
  );
};

export default Comunicados;