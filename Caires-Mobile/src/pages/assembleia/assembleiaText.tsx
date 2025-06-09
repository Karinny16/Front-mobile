import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { themas } from "../../global/themas";
import { useNavigation } from '@react-navigation/native';
import LogoC from '../../assets/LogoCairesC.png';

const AssembleiaText = () => {
      const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Post na Assembleia</Text>
      <View style={styles.boxContainer}>
        <View style={styles.divlogoc}>
          <Image source={LogoC} style={styles.logoc} />
        </View>
        <Text style={styles.text}>Nova Postagem</Text>
        <TextInput
          style={styles.nome}
          placeholder="@Nome do usuário:"
          multiline
          maxLength={30}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.conteudo}
          placeholder="Conteúdo do Post:"
          multiline
          maxLength={230}
          underlineColorAndroid="transparent"
        />
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://example.com/minha-imagem.jpg' }}
            style={styles.image}
          />
        </View>
        <TouchableOpacity style={styles.buttons}
           onPress={() => navigation.navigate('Assembleia')}>

          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}
        onPress={() => navigation.navigate('Home')}>

          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themas.colors.roxo,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginBottom: 20,
    color: themas.colors.white,
    fontSize: 18,
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  text: {
    marginBottom: 20,
    color: themas.colors.black,
    fontSize: 18,
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  boxContainer: {
    height: 590,
    width: 340,
    borderWidth: 1,
    backgroundColor: themas.colors.white,
    alignItems: "center",
    justifyContent: "flex-start",
    borderColor: "gray",
    borderRadius: 0,
    padding: 8,
  },
  nome: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  conteudo: {
    width: '90%',
    height: 140,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 8,
    textAlignVertical: 'top',
    marginBottom: 10,
  },
  imageContainer: {
    width: '90%',
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    width: 230,
    height: 120,
    resizeMode: 'cover',
  },
  divlogoc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  logoc: {
    width: 50,
    height: 50,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#0A9EDE',
    marginVertical: 10,
    shadowColor: "#888", 
  shadowOffset: { width: 1, height: 6 }, 
  shadowOpacity: 0.5, 
  shadowRadius: 5, 
  elevation: 5,  
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default AssembleiaText;