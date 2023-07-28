import { Dimensions, StyleSheet,Text, View, Image, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import {ifelem, femelapp} from '../constants/icons';
import {gmclogo} from '../constants/images'

const Info = () => {

      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();

    const data = [
        { id: 1, Title: "APPARITION", description: "FELEM est édité depuis 2015" },
        { id: 2, Title: "BASE DE DONNEE", description: "FELEM contient une base de donnée fiable et actualisée de plus de 5000 acteurs de la filière fruits et légumes au Maroc." },
        { id: 3, Title: "EDITION", description: "FELEM apparaitre chaque début d'année en 5000 exemplaires avec une nouvelle identité." },
        { id: 4, Title: "SUPPORTS", description: "Document FELEM 17*24cm, application mobile i-FELEM et site web ww.felem.ma" }
    ];

    return (
        <View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.centerItem}>
                <Image source={ifelem} style={{width: 100, height: 100}}/>
                <Image source={femelapp} style={{width: 100, height: 20}}/>

                <Text style={{fontWeight: 500, color: "gray", marginTop: 10}}>Votre annuaire FELEM</Text>
                <Text style={{fontWeight: 500, color: "gray"}}>est sur votre smartphone</Text>
            </View>
            <View style={{paddingHorizontal: 20,  marginTop: 10}}>
                <Text style={{textAlign: "center", fontWeight: 500}}>
                i-FELEM est l'application mobile de l'annuaire officiel de la filière fruits & légumes au Maroc,
                édité par Global Marketing Consulting (GMC), "FELEM" contient des informations sectorielles et régionales
                et un répertoire des adresses professionnelles actualisées et classées en quatre catégories :
                </Text>
            </View>
            <View style={styles.centerItem}>
                <Text style={{fontWeight: 400, color: "gray"}}>Exportation & transformation</Text>
                <Text style={{fontWeight: 400, color: "gray"}}>Agroforniture</Text>
                <Text style={{fontWeight: 400, color: "gray"}}>Services</Text>
                <Text style={{fontWeight: 400, color: "gray"}}>Vie de la fillière</Text>
            </View>

            <View>
                {data.map((item, index) => {
                    return (
                <View style={{fontWeight: 500, backgroundColor: "green", margin: 10, padding: 15, borderRadius: 14}} key={item.id}>
                    <Text style={{color: "white"}}>{item.Title} </Text>
                    <Text style={{color: "white", marginTop: 5}}>{item.description} </Text>
                </View>
                    )
                })
                }
            </View>

            <View style={styles.centerItem}>
                <Image source={gmclogo} style={{ width: 190, height: 100 }}/>
            </View>

            <View style={styles.centerItem}>
                <Text>Copyright © {currentYear} FELEM Design by GMC Maroc</Text>
            </View>
</ScrollView>

        </View>
    );

};
export default Info
const styles = StyleSheet.create({
    centerItem: {
        marginTop: 10,
        padding: 10,
        dispaly: "flex",
        flexDirection: "column",
        justifyContent: "center", 
        alignItems: "center"
    }
})