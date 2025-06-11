import { StyleSheet, Dimensions } from "react-native"
import { themas } from "../../global/themas";

const { width, height } = Dimensions.get('window');

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themas.colors.roxo
  },
  Box: {
    width: width * 0.8,
    height: height * 0.7,
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themas.colors.white,
    borderRadius: 20,
    overflow: 'hidden'
  },
  text: {
    color: themas.colors.white,
    fontSize: width * 0.05,
    textDecorationLine: "underline",
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: 'Poppins',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 50,
    borderRadius: 15,
    top: 90,
    backgroundColor: '#0A9EDE',
  },
  text1: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 80,
    fontFamily: 'Poppins',
  },
  areaToque: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    height: '100%',
  },
  texto: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Poppins',

  },
  textoItem: {
    color: 'white',
    paddingVertical: 3,
    fontSize: 14,
    top: -20,
    fontFamily: 'Poppins',

  },
  textoItem1: {
    color: 'white',
    paddingVertical: 3,
    fontSize: 14,
    top: -20,
    fontFamily: 'Poppins',

  },
  textoFechar: {
    marginTop: 10,
    fontSize: 12,
    color: '#cce0ff',
    textAlign: 'center',
    top: 30,
    fontFamily: 'Poppins',

  },
  edit: {
    backgroundColor: '#11577E',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 15,
    left: 108,
    justifyContent: 'center',
    top: 96,
    height: 30,
    width: 120,

  },
  edit1: {
    backgroundColor: '#7E1134',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 15,
    left: -15,
    justifyContent: 'center',
    top: 40,
    height: 30,
    width: 120,

  },
  icon: {
    marginLeft: 6,
  },
  textEdit: {
    color: 'white',
    fontFamily: 'Poppins',

  }
})