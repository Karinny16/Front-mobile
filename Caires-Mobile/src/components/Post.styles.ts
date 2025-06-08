import { StyleSheet } from "react-native";
import { themas } from "../global/themas";

export const Styles = StyleSheet.create({
  post: {
    height: 310,
    width: 250,
    backgroundColor: themas.colors.Corpost,
    flexDirection: "column",
    justifyContent: "space-between", 
    paddingVertical: 10,
    borderWidth: 1,           
    borderColor: '#ccc',      
    borderRadius: 4,         
    marginBottom: 10,
  },
  nome: {
    minHeight: 30,
    fontSize: 15,
    fontWeight:'bold',
    paddingHorizontal: 15,
    paddingVertical: 5,
    width: "100%",
    flexWrap: 'wrap', 
  },
  conteudo: {
    minHeight: 140,
    fontSize: 15,
    fontWeight:'medium',
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 8,
    textAlignVertical: "top",
    flexWrap: 'wrap',
  },
  imageContainer: {
    height: 100,
    width: '100%',
    backgroundColor: themas.colors.Corpost,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  imagePlaceholder: {
    fontSize: 14,
    color: '#888',
  },
});