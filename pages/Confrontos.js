import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image, ScrollView} from 'react-native';

export default function Pesquisa() {
function pesquisarFruta(){
  Alert.alert('Jogadores 1')
}

  return (
    <ScrollView>
    <View style={estilo.container}>
      
      <View style={estilo.blocos}>

     
     

     
     
      
     


      <View style={estilo.textos}>

     <Text style={estilo.titulo}></Text>

     <View style={estilo.imagens}>
    
     <Image style={estilo.imagens} source={require('../assets/maca.jpg')}>
      </Image>
      </View>
      <TouchableOpacity style={estilo.botao} onPress={()=> pesquisarFruta()}>

      </TouchableOpacity>
      <Image style={estilo.imagens} source={require('../assets/maca.jpg')}>
      </Image>
      <Image style={estilo.imagens} source={require('../assets/maca.jpg')}>
      </Image>
    
      <TouchableOpacity style={estilo.botao} onPress={()=> pesquisarFruta()}>
   
      </TouchableOpacity>
      <Image style={estilo.imagens} source={require('../assets/maca.jpg')}>
      </Image>
      <Image style={estilo.imagens} source={require('../assets/maca.jpg')}>
      </Image>
      <TouchableOpacity style={estilo.botao} onPress={()=> pesquisarFruta()}>
    
      </TouchableOpacity>
      <Image style={estilo.imagens} source={require('../assets/maca.jpg')}>
      </Image>
      <Image style={estilo.imagens} source={require('../assets/maca.jpg')}>
      </Image>
      <TouchableOpacity style={estilo.botao} onPress={()=> pesquisarFruta()}>
    
      </TouchableOpacity>
      <Image style={estilo.imagens} source={require('../assets/maca.jpg')}>
      </Image>
      <Image style={estilo.imagens} source={require('../assets/maca.jpg')}>
      </Image>
       <TouchableOpacity style={estilo.botao} onPress={()=> pesquisarFruta()}>
    
      </TouchableOpacity>
      <Image style={estilo.imagens} source={require('../assets/maca.jpg')}>
      </Image>
       <TouchableOpacity style={estilo.botao} onPress={()=> pesquisarFruta()}>
    
      </TouchableOpacity>
      <Image style={estilo.imagens} source={require('../assets/maca.jpg')}>
      </Image>
     

    

      <StatusBar style="auto" />
    </View> 
    </View>
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

botao:{
  
  backgroundColor:"#3a0ca3",
  marginTop:120,
  padding:20,
  borderRadius:15,
  width:200,
  height:10,
  justifyContent:'center',
  alignItems:'center',
},
textobotao:{
  color:"#edf2f4",
  fontSize: 22,
  fontWeight: '700',
  color:"white",
  alignItems: 'center',
  justifyContent: 'center',

},
titulo:{
  fontSize:30,
  color:"black"
},
blocos:{
  flexDirection:'row'
},


imagens:{
  marginTop:50,
  width:60,
  height:60,
  paddingRight: 30,
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection:'row'
}
});

