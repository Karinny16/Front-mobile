import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LogoC from '../../assets/LogoCairesC.png';
import Post from '../../components/Post';
import { GrAddCircle } from "react-icons/gr";
import { Styles } from './assembleia.styles';

const Assembleia = () => {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Tela da Assembleia</Text>
      <View style={Styles.boxContainer}>
        <ScrollView contentContainerStyle={Styles.scrollContent}>
          <View style={Styles.divlogo}>
            <Image source={LogoC} style={Styles.logoc} />
            <TouchableOpacity onPress={() => navigation.navigate('AssembleiaText')}>
  <GrAddCircle size="40px" color="#000" />
</TouchableOpacity>

          </View>
          <Post />
          <Post />
          <Post />
        </ScrollView>
      </View>
    </View>
  );
};

export default Assembleia;
