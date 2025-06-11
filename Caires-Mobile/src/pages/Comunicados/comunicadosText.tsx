import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { themas } from "../../global/themas";
import { useNavigation } from '@react-navigation/native';
import LogoC from '../../assets/LogoCairesC.png';

const ComunicadosText = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Comunicado</Text>
      <View style={styles.boxContainer}>
        <View style={styles.divlogoc}>
          <Image source={LogoC} style={styles.logoc} />
        </View>
        <Text style={styles.text}>Novo Comunicado</Text>
        <TextInput
          style={styles.nome}
          placeholder="@Nome do usuário:"
          multiline={true}
          maxLength={30}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.titulos}
          placeholder="Título do Post:"
          multiline={true}
          maxLength={30}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.conteudo}
          placeholder="Conteúdo do Post:"
          multiline={true}
          maxLength={290}
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('Comunicados')}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
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
    fontFamily: 'Poppins',
    marginBottom: 20,
    color: themas.colors.white,
    fontSize: 18,
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  text: {
    fontFamily: 'Poppins',
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
    fontFamily: 'Poppins',

    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  titulos: {
    fontFamily: 'Poppins',

    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 8,
    textAlignVertical: 'top',
    marginBottom: 10,
  },
  conteudo: {
    fontFamily: 'Poppins',
    width: '90%',
    height: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 8,
    textAlignVertical: 'top',
    marginBottom: 10,
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
  button: {
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
    fontFamily: 'Poppins',
    color: '#fff',
    fontSize: 16,
  },
});

export default ComunicadosText;