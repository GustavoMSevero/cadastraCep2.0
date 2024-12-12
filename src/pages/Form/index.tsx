import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

import styles from './styles';
import api from '../../service';

export default function Form({ navigation }){
    const [cep, setCep] = useState("");
    const [logradouro, setLogradouro] = useState(null);
    const [bairro, setBairro] = useState(null);
    const [localidade, setLocalidade] = useState(null);
    const [uf, setUf] = useState(null);

    async function getCep(){
        if (cep.trim().length === 0) {
            return Alert.alert("CEP", "Informe o CEP.");
        }
        const result = await api.get('api.php', {
            params: {
                option: 'check cep exists',
                cep
            },
        });
        if(result.data.status === 0){
            let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            let body = await response.json();
        
            setCep(body.cep);
            setLogradouro(body.logradouro);
            setBairro(body.bairro);
            setLocalidade(body.localidade);
            setUf(body.uf);
        } else {
            const dados = JSON.parse(result.data);
            setCep(dados.cep);
            setLogradouro(dados.logradouro);
            setBairro(dados.bairro);
            setLocalidade(dados.localidade);
            setUf(dados.uf);
        }
        
    }

    async function registerCep(){
        const cepData = {
            cep: cep,
            logradouro: logradouro,
            bairro: bairro,
            localidade: localidade,
            uf: uf,
        };

        const result = await api.post('api.php', {
            ...cepData,
            option: 'register cep',
        })
        .then(result => {
            console.log(result.data)
            if(result.data.status == 1) {
                alert(result.data.msg)
            } else if(result.data.status == 2) {
                alert(result.data.msg)
            }
            setLogradouro(null);
            setBairro(null);
            setLocalidade(null);
            setUf(null);
        })
        .catch(error => {
            console.error(error)
        })
    }


    return(
        <View style={styles.container}>
        <Text style={styles.title}>BUSCAR CEP</Text>
        <View style={styles.viewInput}>
            <Text>CEP</Text>
            <TextInput
                style={styles.input}
                placeholder='90480-180'
                onChangeText={(number) => setCep(number)}
                value={cep}
            />
        </View>
        <View style={styles.viewInput}>
            <Text>Logradouro</Text>
            <TextInput
                readOnly
                style={styles.input}
                value={logradouro}
            />
        </View>
        <View style={styles.viewInput}>
            <Text>Bairro</Text>
            <TextInput
                readOnly
                style={styles.input}
                value={bairro}
            />
        </View>
        <View style={styles.viewInput}>
            <Text>Cidade</Text>
            <TextInput
                readOnly
                style={styles.input}
                value={localidade}
            />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={getCep}
        >
          <Text style={styles.textButton}>Buscar CEP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonCadastra}
          onPress={registerCep}
        >
          <Text style={styles.textButtonCadastra}>Cadastrar CEP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonListagem}
          onPress={() => navigation.navigate("Ceps")}
        >
          <Text style={styles.textButtonListagem}>Listagem de CEPs</Text>
        </TouchableOpacity>
    </View>
    )
}