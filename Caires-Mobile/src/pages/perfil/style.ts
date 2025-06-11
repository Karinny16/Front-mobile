import { StyleSheet, Dimensions } from "react-native";
import { themas } from "../../global/themas";

const { width, height } = Dimensions.get('window');


export const Styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: themas.colors.roxo,
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    fontFamily: 'Poppins',

    // marginLeft: 40,
    //   alignSelf: "flex-start",
    marginBottom: 20,
    color: themas.colors.white,
    fontSize: 18,
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  Container: {
    width: width * 0.8,
    height: height * 0.7,
    borderWidth: 1,
    backgroundColor: themas.colors.white,
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "gray",
    borderRadius: 20,
    padding: 8,
  },
  circle: {
    width: 120,
    height: 120,
    backgroundColor: themas.colors.blueOcean,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  botoesContainer: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 40,
  },
  botoes: {
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 50,
    borderRadius: 15,
    backgroundColor: "#0A9EDE",
    marginVertical: 10,
    shadowColor: "#888",
    shadowOffset: { width: 1, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontFamily: 'Poppins',

    color: "#fff",
    fontSize: 16,
  },
});