import { StyleSheet } from "react-native";
import { themas } from "../global/themas";

export const Styles = StyleSheet.create({
  comuni: {
    height: 290,
    width: 300,
    backgroundColor: themas.colors.Corpost,
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 10,
  },
  nome: {
    fontSize: 15,
     fontWeight:'bold',
    paddingHorizontal: 15,
    paddingVertical: 5,
    textAlign: "left",
    width: "100%",
  },
  titulo: {
    fontSize: 20,
    fontWeight:'bold',
    paddingHorizontal: 15,
    paddingVertical: 8,
    textAlign: "center",
    width: "100%",
    minHeight: 40,
  },
  comunicado: {
    fontSize: 15,
     fontWeight:'medium',
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 8,
    textAlign: "left",
    textAlignVertical: "top", 
    minHeight: 150,
  },
});