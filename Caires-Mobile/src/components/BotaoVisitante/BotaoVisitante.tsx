import React, { useState, useRef } from 'react';
import {
  Animated,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Styles } from './style-BotaoVisatantes';
import AntDesign from '@expo/vector-icons/AntDesign';
type VisitanteProps = {
    nome: string;
    nascimento: string;
    cpf: string;
  };
  

  
export default function Visitante({ nome, nascimento, cpf }: VisitanteProps) {
  const [expandido, setExpandido] = useState(false);
  const altura = useRef(new Animated.Value(50)).current;

  const alternar = () => {
    const novaAltura = expandido ? 50 : 250;
    setExpandido(!expandido);

    Animated.timing(altura, {
      toValue: novaAltura,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Animated.View style={[Styles.button, { height: altura }]}>
      <TouchableOpacity onPress={alternar} style={Styles.areaToque}>
        {!expandido ? (
          <Text style={Styles.texto}>Nome: {nome}</Text>
        ) : (
          <View>
            <Text style={Styles.textoItem}>Nome: {nome}</Text>
            <Text style={Styles.textoItem1}>Data nascimento: {nascimento}</Text>
            <Text style={Styles.textoItem1}>CPF: {cpf}</Text>

            <View style={Styles.acoes}>
              <TouchableOpacity style={Styles.edit}>
                <Text style={Styles.textEdit}>Editar</Text>
                <AntDesign name="edit" size={20} color="white" style={styles.icon} />
              </TouchableOpacity>

              <TouchableOpacity style={Styles.delete}>
                <Text style={Styles.textEdit}>Deletar</Text>
                <AntDesign name="deleteusergroup" size={20} color="white" />
              </TouchableOpacity>
            </View>

            <Text style={Styles.textoFechar}>(toque para recolher)</Text>
          </View>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0066cc',
    borderRadius: 12,
    overflow: 'hidden',
    marginVertical: 10,
    justifyContent: 'center',
  },
  areaToque: {
    paddingHorizontal: 16,
    justifyContent: 'center',
    height: '100%',
  },
  texto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textoItem: {
    color: 'white',
    paddingVertical: 3,
    fontSize: 14,
    top:-20
  },
  textoItem1: {
    color: 'white',
    fontSize: 14,
    marginBottom: 2,
  },
  textoFechar: {
    fontSize: 12,
    color: '#cce0ff',
    marginTop: 10,
    textAlign: 'center',
  },
  acoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  edit: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3399ff',
    padding: 8,
    borderRadius: 8,
  },
  delete: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#cc0000',
    padding: 8,
    borderRadius: 8,
  },
  textEdit: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 6,
  },
  icon: {
    marginTop: 1,
  },
});
