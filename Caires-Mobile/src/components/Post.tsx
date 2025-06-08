import React from 'react';
import { View, Text, Image } from 'react-native';
import { Styles } from './Post.styles';

const Post = () => {
  return (
    <View style={Styles.post}>
      <Text style={Styles.nome}>
         Nome: @GrupoCaires01
      </Text>
      <Text style={Styles.conteudo}>
        Exemplo de Conteúdo: Este é um conteúdo extenso que deve envolver e quebrar a linha     quando atingir o limite máximo de largura da view do Post.
      </Text>
      <View style={Styles.imageContainer}>
        <Image
          source={{
            uri: 'https://s2.glbimg.com/ljdeRdCzzAZwRPQ8t-mFkak2M4Y=/s.glbimg.com/jo/g1/f/original/2013/03/06/up_ag_24548_up22.jpg'
          }}
          style={{ width: 230, height: 120 }}
        />
      </View>
    </View>
  );
};

export default Post;