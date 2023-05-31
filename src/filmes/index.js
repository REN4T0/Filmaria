import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import Detalhes from '../detalhes';

function Filmes( { data } ){
    const [verModal, setVerModal] = useState(false);

    return(
        <View style={styles.card}>
            <Text style={styles.nome}>{ data.nome }</Text>

            <Image source={{ uri: data.foto }} style={styles.foto} />

            <View style={styles.areaBotao}>
                <TouchableOpacity style={styles.botao} onPress={ () => setVerModal(true) }>
                    <Text style={styles.botaoTexto}>LEIA MAIS</Text>
                </TouchableOpacity>
            </View>

            <Modal animationType="slide" visible={verModal}>
                <Detalhes filme={ data } voltar={ () => setVerModal(false)} />
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        card:{
            backgroundColor: '#fff',
            margin: 15,
            elevation: 2
        },

        nome:{
            padding: 15,
            fontSize: 18
        },

        foto:{
            height: 250,
            zIndex: 2
        },

        areaBotao:{
            alignItems: 'flex-end',
            marginTop: -45,
            zIndex: 9
        },

        botao:{
            width: 100,
            backgroundColor:'#09a6ff',
            opacity: 10,
            padding: 10,
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5
        },

        botaoTexto:{
            color: '#fff',
            textAlign: 'center'
        }
    }
);

export default Filmes;