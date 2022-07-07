import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,TouchableOpacity, Alert,} from 'react-native';
import Api from './Api';

export default function Frutas() {

  const [dadosFrutas,setdadosFruta] = useState([])


  async function getFrutas(){
    try{
      const resultado = await Api.get(`/hortifruit`);
      return resultado.data
    }catch(error){
      console.log(error)
      return []
    }
  }

  useEffect(async() => {
    const resp = await getFrutas()
    setdadosFruta(resp);
    
  },[])

  return (
    <View style={estilo.container}>

     <FlatList
      data={dadosFrutas}
      keyExtractor={dadosFrutas => dadosFrutas.id}
      renderItem={({item})=>
    <TouchableOpacity>
    <View style={estilo.grupoFrutas}>
      
        <Text style={estilo.textoBotaoFruta}>{item.fruta}</Text>
        <Text style={estilo.textoBotaoValor}>{item.valor}</Text>
    
    </View>
    </TouchableOpacity>
    }
     />
      <StatusBar style="auto" />

    </View>
  );
}


const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3a0ca3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize:30,
    color:"#fff",
    textAlign: 'center',
    justifyContent: 'center',
    marginVertical: 20,

  },
  grupoFrutas:{
    backgroundColor:"#f72585",
    justifyContent:'center',
    margin:15,
    padding:5,
    borderRadius:15,
    width: 300,
    alignContent:'center',
    textAlign:'center',
    alignItems:'center'
    
  },
  botaoFrutas:{

  },
  textoBotaoFruta:{
    fontSize:20,
  },
  textoBotaoValor:{
    fontSize: 20,
  },
});
