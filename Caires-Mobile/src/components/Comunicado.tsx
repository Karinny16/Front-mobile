import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from './Comunicado.styles';

const Comunicado = () => {
  return (
    <View style={Styles.comuni}>
      <Text style={Styles.nome}>
        Nome: @GrupoCaires01
      </Text>
      <Text style={Styles.titulo}>
Sistema Integrado de Controle de Acesso   
   </Text>
      <Text style={Styles.comunicado}>
Em um cenário marcado por desafios constantes em segurança, implementamos um sistema integrado de controle de acesso para reforçar a proteção das nossas instalações
 e dados. Nosso novo sistema combina tecnologias avançadas, como reconhecimento facial, autenticação biométrica e monitoramento 24/7
 </Text>
    </View>
  );
};

export default Comunicado;