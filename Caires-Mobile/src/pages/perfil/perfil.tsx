import React from "react";
import Entypo from '@expo/vector-icons/Entypo';
import { Text, TextInput, ScrollView, TouchableOpacity, View } from "react-native";
import {useNavigation} from '@react-navigation/native';
import { Styles } from "./perfil.styles";

const PerfilEdit = () => {
   const navigation = useNavigation();  
  return (
    <View style={Styles.fundo}>
      <View style={Styles.Container}>
        <ScrollView contentContainerStyle={Styles.scrollContent}>
          <View style={Styles.header}>
            <View style={Styles.circle}>
              <Entypo name="user" size={80} color="black" />
            </View>
            <Text style={Styles.text1}>Editar Perfil</Text>
          </View>

          <View style={Styles.inputsContainer}>
            <TextInput
              style={Styles.txti}
              placeholder="Nome:"
              multiline
              maxLength={60}
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={Styles.txti}
              placeholder="Data de Nascimento:"
              multiline
              maxLength={10}
              underlineColorAndroid="transparent"
            />
             <TextInput
              style={Styles.txti}
              placeholder="Telefone:"
              multiline
              maxLength={10}
              underlineColorAndroid="transparent"
            />
             <TextInput
              style={Styles.txti}
              placeholder="Gênero:"
              multiline
              maxLength={9}
              underlineColorAndroid="transparent"
            />
             <TextInput
              style={Styles.txti}
              placeholder="Email:"
              multiline
              maxLength={70}
              underlineColorAndroid="transparent"
            />
             <TextInput
              style={Styles.txti}
              placeholder="Senha:"
              multiline
              maxLength={30}
              underlineColorAndroid="transparent"
            />
          </View>

          <View style={Styles.botoesContainer}>
            <TouchableOpacity style={Styles.botoes}
onPress={() => navigation.navigate('Home')}>
              <Text style={Styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.botoes}
            onPress={() => navigation.navigate('Home')}>
              <Text style={Styles.buttonText}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default PerfilEdit;