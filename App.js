import { StyleSheet,Text, View, TextInput, TouthableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

socket = io('https://squarewebsocketbackend.onrender.com', {
  transports: ['websocket']
});

export default function App() {

  const [nome, setNome] = useState('');
  const [entrou, setEntrou] = useState('false');
  const [usuarios, setUsuarios] = useState([]);
  const [id, setId] = useState(null);

  useEffect(() => {
    socket.on('player', (id) => {
      setId(id);
    }):

    socket.on('update', (users) => {
      setUsuarios(users);
    }):

    return () => {
      socket.off('player');
      socket.of('update');
    }
    
  }, []);
  if(entrou == false){
    return (
      <View>
        <text>Digite seu Nome</text>
        <TextInput>
          value={nome}
          onChangeText={(novotexto) => setNome(nomeTexto)}
        </TextInput>
        <TouchableOpacity>
        <text>Entrar</text>
        </TouchableOpacity>
      </View>
  ):
}

else{
  return (
    <View>
    </View>
  );
}
}