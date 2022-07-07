import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,ScrollView } from 'react-native';


export default function Home() {
  return (
    <ScrollView>
    <View style={estilo.container}>
      
       <Image style={estilo.imagem} source={require('../assets/post2new.png')}>
      </Image>
      
      


        <StatusBar style="auto" />
        
    </View>
    </ScrollView>
    
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imagem:{
    flex:1,
    width:423,
    height:800,
    marginLeft:30,
    
    
  }
});
