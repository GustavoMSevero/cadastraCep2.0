
import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import api from "../../service";

import styles from "./styles";

export default function Ceps(){
    const [cepList, setCepList] = useState([]);

    const navigation = useNavigation();

    const getCeps = async () => {
        const result = await api.get('api.php', {
            params: {
                option: 'get ceps',
            },
        });
        setCepList(result.data);
    }

    useEffect(() => {
        getCeps();
    }, [])

    function handleVerCep(idcep: number){
        navigation.navigate("VerCep", { idcep })
    }

    return(
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={cepList}
                renderItem={({item}) => {
                    return(
                        <>
                        <View style={styles.box}>
                            <Text style={styles.title}>CEP</Text>
                            <Text style={styles.textCep}>{item.cep}</Text>
                            <TouchableOpacity
                                onPress={() => handleVerCep(item.idcep)}
                            >
                                <Text>Ver</Text>
                            </TouchableOpacity>
                        </View>
                        </>
                    )
                }}
                keyExtractor={(item) => {
                    item.idcep
                }}
            />
        </View>
    );
}