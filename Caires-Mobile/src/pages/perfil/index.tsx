import React from "react";
import Entypo from '@expo/vector-icons/Entypo';
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Styles } from "./style";
import { useFonts } from 'expo-font';



export default function Perfil() {

const navigation = useNavigation();

    const [fontsLoaded] = useFonts({
        Poppins: require('../../../src/assets/fonts/Poppins-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <View style={Styles.Container}><Text>Carregando fontes...</Text></View>;
    }
  return (
    <View style={Styles.fundo}>
      <Text style={Styles.text1}>Perfil</Text>
      <View style={Styles.Container}>
        <View style={Styles.circle}>
          <Entypo name="user" size={80} color="black" />
        </View>
        <View style={Styles.botoesContainer}>
          <TouchableOpacity
            style={Styles.botoes}
            onPress={() => navigation.navigate("PerfilEdit")}
          >
            <Text style={Styles.buttonText}>Perfil Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.botoes}>
            <Text style={Styles.buttonText}>Suporte</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.botoes}>
            <Text style={Styles.buttonText}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}                   