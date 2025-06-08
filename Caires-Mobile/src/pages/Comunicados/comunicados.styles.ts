import { StyleSheet } from "react-native";
import { themas } from "../../global/themas";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themas.colors.roxo,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginBottom: 20,
    color: themas.colors.white,
    fontSize: 18,
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  boxContainer: {
    height: 590,
    width: 340,
    borderWidth: 1,
    backgroundColor: themas.colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "gray",
    borderRadius: 0,
    padding: 8,
  },
  scrollContent: {
    paddingBottom: 16,
  },
  headerContainer: {
    flexDirection: "row",          
    justifyContent: "space-between", 
    gap:140,
    alignItems: "center",           
    width: "100%",                  
    paddingHorizontal: 10,          
    marginBottom: 10,               
  },
  logoImage: {
    width: 50,
    height: 50,
  },
});