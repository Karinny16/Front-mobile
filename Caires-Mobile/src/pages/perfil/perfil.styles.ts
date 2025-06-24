import { StyleSheet } from "react-native";
import { themas } from "../../global/themas";

export const Styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: themas.colors.roxo,
    alignItems: "center",
    justifyContent: "center",
  },
  Container: {
    height: 590,
    width: 340,
    borderWidth: 1,
    backgroundColor: themas.colors.white,
    borderColor: "gray",
    borderRadius: 20,
    padding: 8,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 60,
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
  text1: {
    marginTop: 5,
    fontFamily: 'Poppins',
    color: themas.colors.black,
    fontSize: 18,
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  inputsContainer: {
    width: "100%",
    alignItems: "center",
  },
  txti: {
    fontFamily: 'Poppins',
    width: "90%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    marginVertical: 10,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 14,
  },
  botoesContainer: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 30,
    marginTop: 40
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
  texti: {
    fontFamily: 'Poppins',
    fontSize: 12,

  },
});