import { StatusBar } from 'expo-status-bar';
import { Modal, Dimensions, StyleSheet, Linking, Alert, Text, View, Image, TouchableOpacity, ScrollView, RefreshControl, BackHandler } from 'react-native';
import { iriser, BANNIERCARREFOUR} from '../../components/constants/images'
import useFetch from '../../hook/useFetch';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import Icon from "@expo/vector-icons/Ionicons";
import {FRUITLOGISTICA} from '../constants/images'
import Loader from '../common/loader/Loader';
import {chevronRight} from '../constants/icons'
import NotConnected from '../common/Notconnected/NotConnected';
import ExitConfirmationModal from '../common/Exit/Exit';

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const [DataPopup, setDataPopup] = useState({})
  const screenDimensions = Dimensions.get('screen');
  const { data, isLoading,  error, refetch } = useFetch("categories");
  const [categorieID, setcategorieID] = useState('')
  const [nameCategorie, setNameCategorie] = useState('')
  const [colorCategorie, setColorCategorie] = useState('')
  const [popup, setpoup] =  useState('')
  const navigation = useNavigation();
  const [FirstModal, setFirstModal] = useState(true);

  const [isExitModalVisible, setExitModalVisible] = useState(false);

const hideExitModal = () => {
  setExitModalVisible(false);
};

const handleExitApp = () => {
  setExitModalVisible(true)
  return true; 
};

const handleConfirmExit = () => {
  BackHandler.exitApp();
};

useEffect(() => {
  BackHandler.addEventListener('hardwareBackPress', handleExitApp);

  return () => {
    BackHandler.removeEventListener('hardwareBackPress', handleExitApp);
  };
}, []);

  const handleNavigatePress = (categorie) => { 
      setModalVisible(true);
      setNameCategorie(categorie.name.toUpperCase())
      setcategorieID(categorie.id)
      setColorCategorie(categorie.color)
      setpoup(categorie.popup)
      setDataPopup(categorie)
    };
    
    const closePopup = () => {
      setModalVisible(false);
      setShouldNavigate(true);
    };

    if (shouldNavigate) {
      setShouldNavigate(false);
      const navigateToScreen = () => {
        navigation.navigate('SubCategorie', {colorCategorie, nameCategorie, categorieID});
      };
      setTimeout(navigateToScreen, 200)
    }
  

  const openLink = (item) => {
    const url = item; 
    Linking.openURL(url)
      .catch((error) => console.error('Failed to open link:', error));
  };
  
  return (
      <View style={styles.container}>
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
  <ExitConfirmationModal
          visible={isExitModalVisible}
          onClose={hideExitModal}
          onConfirm={handleConfirmExit}
        />
  <Modal
        animationType="fade"
        transparent={true}
        visible={FirstModal}
        onRequestClose={() => setFirstModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.FirstmodalContent}>
            <TouchableOpacity style={styles.closebutton}  onPress={() => setFirstModal(false)}>
            <Icon style={{marginLeft: 10}}  name="close-circle" size={30} color="white"  />
            </TouchableOpacity>
            <TouchableOpacity style={{ height: "100%", width: "100%"}} onPress={() => Linking.openURL('https://www.fruitlogistica.com/')}>
            <Image source={FRUITLOGISTICA} style={{ height: "100%", width: "100%"}} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
        <StatusBar style="auto" />
         <View style={styles.header}>
        <Text style={{ color: '#05375a', fontSize: 23, fontWeight: 'bold' }}>Bienvenu sur <Text style={{color: '#55a369'}}>i-FELEM</Text></Text>
        </View>
        <View style={{padding: 8}}>
        {isLoading ? (
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: screenDimensions.height - 400}}>

            <Loader />
          </View>
          ) : error ? (
            <NotConnected data={refetch} />
          ) :  (
          data?.map((item, index) => {
            if (item?.id){
              return (
                <View key={item.id}>
                <TouchableOpacity  activeOpacity={0.8} onPress={() => handleNavigatePress(item)}>
                <View style={{marginTop: 8, borderWidth: 2, borderColor: `${item?.color}`, padding: 10,
                borderRadius: 12}} >
          <View style={styles.head}>
            <View>
              <Image source={{ uri: `https://app.carrefourdemanutention.com/public/categories/${item?.logo}`}} style={styles.logoimage} />
            </View>
            <View style={{ width: "75%"}}>
            <Text style={styles.contentTitle}>{item?.name.toUpperCase()}</Text>
            </View>
            
              <Image
            source={chevronRight}
            resizeMode='cover'
            style={styles.btnImg}
          />
          </View>  
          
        </View>
          </TouchableOpacity>
          {item.id === 2 && <View style={{marginTop: 8}}>
          <TouchableOpacity onPress={() => Linking.openURL('https://eriser.ma/')} >
              <Image source={iriser} style={styles.homeimage} />
              </TouchableOpacity>
            </View>
          }
                </View>
              )
            }
          })
          
        )}
        </View>
        <View style={{marginBottom: 20, marginTop: 5, display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity onPress={() => Linking.openURL('https://carrefourdemanutention.com/')} >
          <Image source={BANNIERCARREFOUR} style={{width: screenDimensions.width - 6, height: 120}}/>
          </TouchableOpacity>
        </View>
    </ScrollView>
        <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              height: screenDimensions.height - 10
        }}>
          <View style={{
             backgroundColor: 'white',
             width: "100%",
             height: "100%"
          }}>
            <TouchableOpacity style={{padding: 5, width: "15%"}} onPress={() => closePopup()}>
          <Icon style={{marginLeft: 10}}  name="close-circle" size={30} color="gray"  />
            </TouchableOpacity>
            <TouchableOpacity style={{maxHeight: screenDimensions.height - 200}} onPress={() => openLink(DataPopup.link)}>
              <Image source={{ uri: `https://app.carrefourdemanutention.com/public/pubs/${popup}`}} style={styles.popimage}/>
            </TouchableOpacity>
            
          </View>
        </View>
      </Modal>
      </View>

  );
}

const styles = StyleSheet.create({
  closebutton: {
    position: "absolute",
    top: "-10%",
    left: '-1%',
    zIndex: 3
  },
  btnImg:{ 
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  contentTitle: {
    fontSize: 19,
    color: 'black',
  },
  contentDesc: {
    fontSize: 15,
    color: 'gray',
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    marginTop: 30,
    borderWidth: 2,
    padding: 10,
    borderRadius: 12
  },
  container: {
    flex: 1,
    backgroundColor : '#fff'
  },
  homeimage: {
    borderWidth: 1, 
    borderColor: "green",
    marginTop: 5,
    width : "100%",
    borderRadius: 12,
    height :200
  },
  popimage: {
    width : "100%",
    height : "100%"
  },
  logoimage: {
    width : 40,
    height :40
},
image: {
  width: "100%",
  height: "100%"
},
header: {
  padding: 10,
},

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    width: "100%",
    height: "100%"
  },
  FirstmodalContent: {
    position: "relative",
    backgroundColor: '#FFF',
    width: "95%",
    height: "72%",
    borderRadius: 8,
    padding: 5,
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 4, 
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  closeButton: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  containerLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    position: 'absolute',
  },
  
});

