import React from "react";
import { Text, TouchableOpacity, View } from 'react-native'
import { Styles } from "./style";
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';


export default function Home() {
    const navigation = useNavigation();
    return (

        <View style={Styles.container}>
            <Text style={Styles.text}>Olá Morador(a), Seja Bem Vindo(a)</Text>

            <View style={Styles.Box}>
                <View style={Styles.circle}>
                    <Entypo name="user" size={80} color="black" />
                </View>
                <TouchableOpacity style={[Styles.boxButton, { top: 215, left: 190 }]}>
                    <MaterialIcons name="event-note" size={35} color="black" />

                </TouchableOpacity>
                <TouchableOpacity style={[Styles.boxButton, { top: 215, right: 190 }]}
                  onPress={() => navigation.navigate('Comunicados')}>
                    <Ionicons name="megaphone" size={35} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={[Styles.boxButton, { bottom: 100, left: 190 }]}>
                    <Entypo name="camera" size={35} color="black" />

                </TouchableOpacity>
                <TouchableOpacity
                    style={[Styles.boxButton, { bottom: 100, right: 190 }]}
                    onPress={() => navigation.navigate('Assembleia')}>
                    <FontAwesome name="group" size={35} color="black" />
                </TouchableOpacity>

                <View style={Styles.ramal}>
                    <Entypo name="old-phone" size={42} color="black" />
                    <Text style={Styles.ramalText}>Número ramal{'\n'} portaria: 101</Text>
                </View>
            </View>
        </View>

    )



}