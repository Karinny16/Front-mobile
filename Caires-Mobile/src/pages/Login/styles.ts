import { Button, Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themas";


export const Styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:themas.colors.roxo
    },
    boxTop:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        marginTop:100,
       // backgroundColor:'green',
        alignItems:'center',
        justifyContent: 'center'
    },
    boxMid:{
        height:Dimensions.get('window').height/4,
        width:'100%',
        marginTop:70,
       // backgroundColor:'blue',
        paddingHorizontal:37,
    },
    boxButton:{
        height:Dimensions.get('window').height/3,
        width:'100%',
     //   backgroundColor:'red',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    logo:{
        width:90,
        height:110,
        
    },
    text:{
        fontSize: 15,
        fontWeight:'bold',
        marginTop: 10,
        color: "#809AD1"
    },
    LogoNome:{
        left: -10,
        width:200,
        height:60
    },
    titleImput:{
        marginLeft:5,
        fontSize: 13,
        fontWeight:'bold',
        color:"white"
    },
    BoxInput:{
        width:'100%',
        height:40,
        borderWidth:1,
        borderRadius:30,
      //  marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal: 10,
        backgroundColor:'#C0ECFB',
        borderColor:'#C0ECFB',
    },
    input:{
        height:'100%',
        width:'90%',
     // backgroundColor:'white',
        borderRadius:30,
        padding:6,
    },
    button:{
        
        width: 200,
        height: 50,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#E2AC22',
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,

        elevation: 21,
        },
    textButton:{
        fontSize:15,
        fontWeight:'bold'
         },
    textBotton:{
        fontSize:15,
        marginTop:20,
        color:'white'
        
    },
 
            
        })





