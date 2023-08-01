import React, { useState, useEffect } from "react";
import { 
    StyleSheet,
    Text,
    View, 
    TouchableOpacity,
    Modal,
    ScrollView,
    Linking,
    Image,
    RefreshControl,
    Dimensions
   } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";
import MailComponent from '../contact/MailComponent';
import PhoneComponent from '../contact/PhoneComponent';
import useFetch from '../../hook/useFetch';
import Icon from "@expo/vector-icons/Ionicons";
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import {ifelem} from '../constants/icons';
import Loader from '../common/loader/Loader';
import UrlLink from "../contact/UrlLink";

export default function Companies () {
  const screenDimensions = Dimensions.get('screen');
  const navigation = useNavigation();
    const route = useRoute();
    const [modalVisible, setModalVisible] = useState(true);
    const { data, isLoading, error, refetch } = useFetch(`subcategories/${route.params.categorie.id}`)
    const { id } = route.params;
    const [CategorieLink, setCategorieLink] = useState(route.params.categorie)
    const [visibleItems, setVisibleItems] = useState(8);
    const handleLoadMore = () => {
        setVisibleItems(visibleItems + 5);
      }
      const headerTitle  = route.params?.categoriename;
      const colorTitle = route.params?.color 

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: headerTitle,
      headerTitleStyle: {
        color: colorTitle,
        fontSize: 18 
      },
      headerRight: () => (
        <View style={{
          marginRight: 5, 
          width: 40,
          height: 40,
          justifyContent: "center",
          alignItems: "center",
          }}>
            <TouchableOpacity style={{paddingRight: 10}} onPress={() => navigation.navigate("Home")}>
          <Image
          source={ifelem}
          resizeMode='cover'
          style={{width: 30,
            height: 30,}}
        />
            </TouchableOpacity>
        </View>
      )
    });
  }, [navigation, headerTitle]);

      const openLink = (item) => {
        const url = item; 
        Linking.openURL(url)
          .catch((error) => console.error('Failed to open link:', error));
      };
    return (
    <ScrollView showsVerticalScrollIndicator={false}
    refreshControl={
      <RefreshControl
        refreshing={isLoading}
        onRefresh={refetch}
        colors={['#55a369']}
        progressBackgroundColor="#fff"
      />
    }
    > 
        <View >
        {/* <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closebutton}  onPress={() => setModalVisible(false)}>
            <Icon style={{marginLeft: 10}}  name="close-circle" size={30} color="white"  />
            </TouchableOpacity>
            <TouchableOpacity style={{ height: "100%" }} onPress={() => openLink(CategorieLink?.link)}>
            <Image source={{ uri: `https://app.carrefourdemanutention.com/public/pubs/${CategorieLink?.popup}`}} style={styles.popimage} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}
      {isLoading ? (
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: screenDimensions.height - 400}}>

          <Loader />
        </View>
        ) : error ? (
          <Text>Quelque chose s'est mal passé.</Text>
        ) : (
            data?.companies && data?.companies.length > 0 && data.companies.slice(0, visibleItems)?.map((item, index) => {
              const tel = item.phone
              const email = item.email
              if (data.category_id !== 3) {
                
                return (
                    <View key={index} style={{ marginTop: 15, paddingBottom: 15 }}>
                      <View style={{marginTop: 4, paddingHorizontal: 15}}>
                    <Text style={{fontSize: 17, fontWeight: 'bold', backgroundColor: data.category.color, color: 'white', textAlign: 'center', paddingHorizontal: 4}}>{item?.company_name.toUpperCase()}</Text>
                      </View>
                      <View style={{marginTop: 8,
                      paddingHorizontal: 25,
                      borderRadius: 14,
                      display: "flex",
                      width: '100%',
                      flexDirection: 'row',
                      alignItems: "center",
                      justifyContent: "space-between"}}>
                    <Text style={{fontSize: 16, color: 'grey', fontWeight: 'bold' , maxWidth: "80%" }}>{item.adresse}</Text>
                    <FontAwesome5  name="map-marker-alt" style={{marginRight: 2}} size={20} color="#56a56b"  />
                      </View>
                  <View style={{marginTop: 2, paddingHorizontal: 10}}>
                  
    
            <PhoneComponent shouldRender={tel} />
            <MailComponent shouldRender={email} />
            <UrlLink shouldRender={item.siteweb} />
            </View>

                </View>
                )
              } 
              else {
                return (
                  <View key={index} style={{ marginTop: 15, paddingBottom: 15 }}>
                    <View style={{marginTop: 4, paddingHorizontal: 15}}>
                  <Text style={{fontSize: 17, fontWeight: 'bold', backgroundColor: data.category.color, color: 'white', textAlign: 'center', paddingHorizontal: 4}}>{item?.company_name.toUpperCase()}</Text>
                  {item.description !== null && item?.description !== '-' ?
                  <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold' , textAlign: 'center', paddingHorizontal:5 }}>{item?.description}</Text>
                  : (
                    null
                  )
                }
                    </View>
                    <View style={{marginTop: 8,
                    paddingHorizontal: 25,
                    borderRadius: 14,
                    display: "flex",
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: "space-between"}}>
                  
                  <Text style={{fontSize: 16, color: 'grey', fontWeight: 'bold' , maxWidth: "80%" }}>{item?.adresse}</Text>
                  <FontAwesome5  name="map-marker-alt" style={{marginRight: 2}} size={20} color="#56a56b"  />
                    </View>
                <View style={{marginTop: 2, paddingHorizontal: 10}}>
                
  
          <PhoneComponent shouldRender={tel} />
          <MailComponent shouldRender={email} />
          <UrlLink shouldRender={item?.siteweb} />
          </View>

              </View>
              )
              }

        })
        
        )
    }

    {!isLoading && data?.companies && data?.companies.length > visibleItems && (
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
  btnImg:  {
    width: 30,
    height: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 9999,
  },
  modalContent: {
    position: "relative",
    backgroundColor: '#FFF',
    width: "80%",
    height: "50%",
    borderRadius: 8,
    padding: 5,
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 4, 
  },
  closebutton: {
    position: "absolute",
    top: "-10%",
    left: '-1%',
    zIndex: 3
  },
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
      popimage: {
        width : "100%",
        height : "100%",
      },
})