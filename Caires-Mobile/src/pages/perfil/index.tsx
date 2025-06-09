import React from "react";
import Entypo from '@expo/vector-icons/Entypo';
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Styles } from "./style";

export default function Perfil() {
  const navigation = useNavigation();

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