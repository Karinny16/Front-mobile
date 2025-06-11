import { StyleSheet, Dimensions } from "react-native"
import { themas } from "../../global/themas";

const { width, height } = Dimensions.get('window');

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themas.colors.roxo,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Box: {
        width: width * 0.8,
        height: height * 0.7,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: themas.colors.white,
        borderRadius: 20,
    },
    text: {
        color: themas.colors.white,
        fontFamily: 'Poppins',
        fontSize: width * 0.05,
        textDecorationLine: "underline",
        fontWeight: "bold",
        marginBottom: 20,
        marginTop: -25, 
         marginLeft: 40,
        alignSelf: "flex-start",
    },

    boxButton: {
        width: 70,
        height: 70,
        backgroundColor: '#0A9EDE',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        position: "absolute",
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 5,

        // Sombra para Android
        elevation: 5,
    },
    textButton: {
        fontFamily: 'Poppins',
        fontSize: 10,
        fontWeight: "bold"
    },
    ramal: {
        position: 'absolute',
        bottom: 20,
        justifyContent: 'center',
        flexDirection: "row",


    },
    ramalText: {
        fontFamily: 'Poppins',
        color: 'black',
        fontSize: 20,
        marginLeft: 10,
        fontWeight: "bold"
    },
    circle: {
        top: -180,
        width: 120,
        height: 120,
        backgroundColor: themas.colors.blueOcean,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },


})


