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
        
    },      
    text:{
        top: 95,
        left: 10,
        color: themas.colors.white,
        fontSize: 18,
        textDecorationLine: "underline",
        fontWeight:"bold"
    },
    boxButton:{
        width: 70,
        height: 70, 
        backgroundColor: '#0A9EDE', 
        justifyContent: 'center', 
        alignItems: 'center',     
        borderRadius: 20, 
        position:"absolute",
        shadowColor: '#000',          
        shadowOffset: { width: 10, height: 10 },  
        shadowOpacity: 0.3,            
        shadowRadius: 5,              
        
        // Sombra para Android
        elevation: 5,            
    },
    textButton:{
        fontSize: 10,
        fontWeight:"bold"
    },
    ramal:{
        position: 'absolute',        
        bottom: 20,                  
        justifyContent: 'center',
        flexDirection:"row",
        
    
    },
    ramalText:{
        color: 'black',               
        fontSize: 20,                
        marginLeft: 10,    
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
    }
})