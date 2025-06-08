import { Button, StyleSheet } from "react-native"
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
        
    },
    text:{
        top: 95,
        left: 10,
        color: themas.colors.white,
        fontSize: 18,
        textDecorationLine: "underline",
        fontWeight:"bold"
 },
 circle:{
    top: 30,
    width: 120,        
    height: 120,        
    backgroundColor: themas.colors.blueOcean,
    borderRadius: 60,  
    alignItems: 'center',
    justifyContent: 'center'
 },
 button:{
    alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 50,
        borderRadius: 15,
        top: 90,
        backgroundColor: '#0A9EDE', 
        marginVertical: 10
 },
 textImput:{
    width:'100%',
    height:40,
    borderWidth:1,
    borderRadius:30,
    top: 120,
  //  marginTop:10,
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal: 10,
    backgroundColor:'black',
    borderColor:'#C0ECFB',
 },
 text1:{
    top: 30,
   
    
 }
   
})