import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LogoC from '../../assets/LogoCairesC.png';
import Post from '../../components/Post';
import { MaterialIcons } from '@expo/vector-icons';
import { Styles } from './assembleia.styles';
import { useFonts } from 'expo-font';


const Assembleia = () => {
const navigation = useNavigation();

    const [fontsLoaded] = useFonts({
        Poppins: require('../../../src/assets/fonts/Poppins-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <View style={Styles.container}><Text>Carregando fontes...</Text></View>;
    }
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Tela da Assembleia</Text>
      <View style={Styles.boxContainer}>
        <ScrollView contentContainerStyle={Styles.scrollContent}>
          <View style={Styles.divlogo}>
            <Image source={LogoC} style={Styles.logoc} />
            <TouchableOpacity onPress={() => navigation.navigate('AssembleiaText')}>
              <MaterialIcons name="add-circle" size={40} color="#000" />
            </TouchableOpacity>
          </View>
          <View style={Styles.centerPosts}>
            <Post />
            <Post />
            <Post />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Assembleia;
