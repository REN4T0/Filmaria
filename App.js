// import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator} from 'react-native';

import api from './src/service/api';
import Filmes from './src/filmes';

function App() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes(){
      const response = await api.get('r-api/?api=filmes');
      setFilmes(response.data);
      setLoading(false);
    }

    loadFilmes();
  }, []);


  if(loading){
    return(
      <View style={styles.loading}>
        <ActivityIndicator style={styles.act} color="#121212" size={45} />
      </View>
    )
  }else{
    return(
      <View style={styles.container}>
        <FlatList data={filmes}
                  keyExtractor={ item => String(item.id) }
                  renderItem={ ({ item }) => <Filmes data={ item } /> }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create(
  {
    container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },

    loading:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },

    act:{
      size: 'large',
      color: '#000ff'
    }
  }
);

export default App;
