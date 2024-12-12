
import { FlatList, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";

import styles from "./styles";

import api from "../../service";

type RouteParams = {
    idcep: number;
}

export default function VerCep(){
    const [dataCep, setDataCep] = useState();
    const route = useRoute();
    const { idcep } = route.params as RouteParams;

    const getAllDataCepToShow = async () => {
        const result = await api.get('api.php', {
            params: {
                option: 'get all data cep to show',
                idcep
            },
        });
        setDataCep(result.data)
    }

    useEffect(()=> {
        getAllDataCepToShow();
    },[])

    return(
        <View>
            <Text>{idcep}</Text>
            <FlatList
                data={dataCep}
                renderItem={({item}) => {
                    return(
                        <View>
                            <Text>CEP</Text>
                            <Text>{item.cep}</Text>
                        </View>
                    )
                }}
                keyExtractor={(item) => {
                    item.idcep
                }}
            />
        </View>
    );
}