import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { 
    Dimensions,
    StyleSheet,
    Button,
    Text,
    Linking,
    View, 
    Image,
    TouchableOpacity,
    ActivityIndicator,
    ScrollView } from 'react-native';

import useFetch from '../../hook/useFetch';
import { FontAwesome5 } from "@expo/vector-icons";
import { useRoute } from '@react-navigation/native';


export default function Companies () {
    const screenDimensions = Dimensions.get('screen');
    const route = useRoute();
    const { data, isLoading, error } = useFetch(`subcategories/${route.params.categorieID}`)
    const { categorieID } = route.params;
    const [visibleItems, setVisibleItems] = useState(5);

    const handleLoadMore = () => {
        setVisibleItems(visibleItems + 5);
      };

      const handleOpenPhoneDialer = async (phone) => {
        const phoneNumber = phone; 
        const phoneUrl = `tel:${phoneNumber}`;
    
        try {
          await Linking.openURL(phoneUrl);
        } catch (error) {
          console.error('Failed to open phone dialer:', error);

        }
      };

    return (
<ScrollView showsVerticalScrollIndicator={false}> 
        <View>
            <View>
            <Text style={styles.title}>Entreprises</Text>
            </View>
            
      {isLoading ? (
          <ActivityIndicator size='large' color='#00ff00' />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
            data.companies && data.companies.length > 0 && data.companies.slice(0, visibleItems).map((item, index) => {
            return (
                <View key={index} style={{ marginTop: 15 }}>
                    
              <View style={{marginTop: 2, paddingHorizontal: 15}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.company_name}</Text>
                <Text style={{fontSize: 18, color: 'grey', fontWeight: 'bold'}}>{item.description}</Text>

        </View>
            <View style={styles.home}>
                <Text style={{fontSize: 16}}>{item.phone}</Text>
                <TouchableOpacity onPress={() => handleOpenPhoneDialer(item.phone)}>

                <FontAwesome5  name="phone" size={20} color="#55a369"  />
                </TouchableOpacity>
        </View>
            <View style={styles.home}>
                <Text style={{fontSize: 16}}>{item.email}</Text>
            <FontAwesome5  name="sms" size={20} color="#55a369" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 15}}>

            <View style={{ width: '80%', borderBottomWidth: 1, borderBottomColor: 'black'}}></View>
            </View>
            </View>
            )

        })
        
        )
    }

    {!isLoading && data.companies && data.companies.length > visibleItems && (
    <View style={{marginVertical: 30}}>
        <TouchableOpacity style={styles.button}  onPress={handleLoadMore} >
            <Text style={styles.buttonText}>Afficher Plus</Text>
      </TouchableOpacity>
    </View>
      )}

        </View>
            </ScrollView>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'transparent',
      },
      buttonText: {
        color: "#55a369",
        fontSize: 18,
        fontWeight: 'bold',
      },
      title: {
        fontSize: 20,
        fontWeight: "300",
        textAlign: "center",
        color: "#56a56b",
        marginTop: 18,
      },
      home : {
        marginTop: 10,
        paddingHorizontal: 15,
        borderRadius: 14,
        display: "flex",
        width: '100%',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between"
      },
      
})