import React from "react";
import Entypo from '@expo/vector-icons/Entypo';
import { Text, TouchableOpacity, View, TextInput, } from "react-native";
import { Styles } from "./style";

export default function Perfil (){
    return(
       <View style={Styles.container}>
                   <Text style={Styles.text}>Perfil</Text>
                   <View style={Styles.Box}>
                        <View style={Styles.circle}>
                            <Entypo name="user" size={80} color="black" />
                        </View>
                        <TouchableOpacity>
                        <Text style={Styles.text1}>Editar</Text>
                        </TouchableOpacity>
                        

                        <TouchableOpacity style={Styles.button}>
                        <Text>Editar Perfil</Text>

                        </TouchableOpacity>
                    
                   </View>
               </View>
    )
}