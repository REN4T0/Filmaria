import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function Detalhes(props){
    return(
        <View style={styles.container}>

            <View style={styles.modalContainer}>
                <TouchableOpacity style={styles.btnVoltar} onPress={ props.voltar }>
                    <Text style={styles.texto}>Voltar</Text>
                </TouchableOpacity>

                <Text style={styles.titulo}>{ props.filme.nome }</Text>
                <Text style={styles.tituloSinopse}>Sinopse</Text>
                <Text style={styles.sinopse}>{ props.filme.sinopse }</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container:{
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 30,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end'
        },

        modalContainer:{
            width: '80%',
            height: '80%',
            backgroundColor: '#6b6565',
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5
        },

        btnVoltar:{
            backgroundColor: '#e52246',
            padding: 10,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5
        },

        texto:{
            color: '#fff',
            fontSize: 14
        },

        titulo:{
            textAlign: 'center',
            color: '#fff',
            padding: 10,
            fontSize: 26,
            fontWeight: 'bold',
            letterSpacing: 2
        },

        tituloSinopse:{
            color: '#000',
            fontSize: 18,
            marginBottom: 10,
            marginLeft: 10,
            fontWeight: 'bold'
        },

        sinopse:{
            color: '#fff',
            marginLeft: 10,
            marginRight: 10
        }
    }
);

export default Detalhes;