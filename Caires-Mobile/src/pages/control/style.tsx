import { StyleSheet } from "react-native"
import { themas } from "../../global/themas";
export const Styles = StyleSheet.create({
    container:{
        flex: 1,
    
        backgroundColor:themas.colors.roxo
    },
    Box: {
        height: 500,
        width: 300,
        display: "flex",
        alignItems: 'center',
        
        backgroundColor: themas.colors.white,
        borderRadius: 20,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        overflow: 'hidden'
    },
    text:{
        top: 95,
        left: 10,
        color: themas.colors.white,
        fontSize: 18,
        textDecorationLine: "underline",
        fontWeight:"bold"
 },
 button:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 50,
    borderRadius: 15,
    top: 90,
    backgroundColor: '#0A9EDE', 
 },
 text1:{
    top: 15,
    left: 0,
    color: 'black',
    fontSize: 22,
   
    fontWeight:"bold"
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
  },
  textoItem: {
    color: 'white',
    paddingVertical: 3,
    fontSize: 14,
    top:-20
  },
  textoItem1: {
    color: 'white',
    paddingVertical: 3,
    fontSize: 14,
    top:-20
  },
  textoFechar: {
    marginTop: 10,
    fontSize: 12,
    color: '#cce0ff',
    textAlign: 'center',
    top: 30
  },
  edit:{
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
  edit1:{
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
  textEdit:{
    color:'white',
  }
})