import { StatusBar } from "expo-status-bar";
import {home, enveloppe, loop, groupGreen, chevronRight, rightChevronWhite } from '../constants/icons'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Dimensions,
  ScrollView,
  TextInput,
 
} from "react-native";
import { AntDesign ,Entypo ,FontAwesome,FontAwesome5,MaterialIcons, MaterialCommunityIcons} from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import Time from '../home/time/Time'
import { useNavigation } from '@react-navigation/native';



export default Partenaire = () => {
  const screenDimensions = Dimensions.get('screen');
  const navigation = useNavigation();
  const [partenaires] = useState(data)
  const handleNavigatePress = (partenaireId) => { 
    navigation.navigate('PartenaireId', {partenaireId});
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.info}>

      <View>
        <Text style={styles.title}>Notre Partenaires</Text>
      </View>
      <View style={{width: '100%', paddingHorizontal: 10, paddingVertical: 20, marginBottom: 50}}>
        {partenaires?.map((item, index) => {
          return (
        <TouchableOpacity activeOpacity={0.8}
          onPress={() => handleNavigatePress(item.id)} key={index}
        >
      <View style={styles.home} >

          <Image source={{uri : item.logo}} style={{width: 60, height: 60}}/>

        <View style={{display: 'flex', flexDirection: 'column', textAlign:'left', width: '70%'}}>
          <Text style={{color: "white", fontWeight: 'bold'}}>{item.company_name}</Text>
          <Time date={item.created_at} />
        </View>
          <Image source={rightChevronWhite} style={{width: 20, height: 20,}}/>
      </View>
          </TouchableOpacity>
          )
        })}
      </View>
     
      </ScrollView>
      
      <StatusBar style="auto" />
      <View style={{position: "absolute",
    left: 0,
    flexDirection: "row",
    justifyContent: "center",
    width: screenDimensions.width,
    bottom: 0,
    height: 55,
    zIndex: 2
    }}>
        <TouchableOpacity activeOpacity={1}
          style={styles.icon1}
          onPress={() => navigation.navigate("Home")}
        >
          <Image source={home} style={styles.logofooter}/>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1}
          style={styles.icon1}
          onPress={() => navigation.navigate("Search")}
        >
          <Image source={loop} style={styles.logofooter}/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1}
          style={styles.icon1}
          onPress={() => navigation.navigate("Partenaire")}
        >
          <Image source={groupGreen} style={styles.logofooter}/>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1}
          style={styles.icon1}
          onPress={() => navigation.navigate("ContactUs")}
        >
          <Image source={enveloppe} style={styles.logofooter}/>
        </TouchableOpacity>
      </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  icon1: {
    backgroundColor : "#fff",
    alignItems : 'center',
    padding : 12,
    justifyContent:'center',
    width : 100,
  },
  logofooter:{
    width : 30,
    height :30
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  home : {
    marginTop: 8,
    padding: 10,
    borderRadius: 14,
    display: "flex",
    width: '100%',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: '#55a369'
  },
  navbar: {
    width: 410,
    backgroundColor: "#000",
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  cardContainer: {
    width: 370,
    backgroundColor: "#fff",
    height: 'auto',
    marginBottom : 70,
    borderColor : '#000',
    shadowColor: "#DCDCDC",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 3,
  },
  imageStyle: {
    height: 200,
    width: 370,
    resizeMode: "stretch",
    // marginTop: 4,
    opacity: 0.9,
    alignContent: "center",
    alignSelf: "center",
  },
  titleStyle: {
    fontSize: 17,
    fontWeight: "500",
    marginLeft : 6,
    marginTop : 5
  },
  paraStyle: {
    marginLeft : 6,
  },
  star: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    marginLeft : 6
  },
  signIn: {
    height: 30,
    width: 130,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#192a56",
    marginTop: 14,
    marginLeft: 6,
    marginBottom : 8,
  },
  textbtn: {
    color: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    color: "#56a56b",
    marginTop: 18,
  },
  title1: {
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    color: "#192a56",
    marginBottom: 30,
  },
  nav: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    position: "absolute",
    left: 0,
    flexDirection: "row",
    justifyContent: "center",
    // backgroundColor: "blue",
    width: "100%",
    bottom: 0,
    height: 55,
  },
  icon1: {
    backgroundColor : "#fff",
    alignItems : 'center',
    padding : 12,
    // borderRadius:10,
    // marginLeft : 5,
    justifyContent:'center',
    width : 100,
    // borderWidth: .4,
    // borderColor: "#56a56b",
  },
  info: {
    width: "100%",
    height: "100%",
    display: "flex"
   },
   price :{
       position : 'absolute',
       top : "2%",
       right : "5%",
       backgroundColor : "green",
       color : "#fff",
       height: 39,
       width : 40,
       borderRadius : 50,
       textAlign: 'center',
       lineHeight: 35
   },
   input:{
    margin: 15,
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 50,
    paddingLeft : 20,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 0,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 7,
  },
  icone: {
    position : 'absolute',
    top : '30%',
    right : '10%' ,
  },
});

const data = [
  {
      "id": 1,
      "logo": "gmc.png\n",
      "company_name": "GLOBAL MARKETING CONSULTING - GMC",
      "dirigent": "M. SAMIR BICHRA",
      "description": "Edition, Web, Print & Publicité,\r\nAménagement & Décoration, Formation,\r\nPublicité Industrielle",
      "adresse": "139 Lot AKABAR, Av Hassan II, Ait Melloul Agadir",
      "email": "info@gmcmaroc.com",
      "phone": "05 28 24 55 17",
      "siteweb": "www.gmcmaroc.com",
      "latitude": 30.330615999999999,
      "longitude": -9.5117329999999995,
      "created_at": "2022-03-22T05:44:54.000000Z",
      "updated_at": "2022-03-22T05:44:54.000000Z",
      "deleted_at": null
  },
  {
      "id": 31,
      "logo": "kiralma.png",
      "company_name": "kiralma Sarl",
      "dirigent": "M. GHAZZALI ESSAID",
      "description": " Importation, Vente, Distribution\r\nMatérielle d’irrigation",
      "adresse": "Residence Al Miaraj Center 301 Angle Bd Anoual Et Abdelmoumen 4 Etage, Quartier des Hopiteaux- Casablanca",
      "email": "commercial@kiralma.ma",
      "phone": "05 22 86 92 10",
      "siteweb": "www.kiralma.com",
      "latitude": 30.330615999999999,
      "longitude": -9.5117329999999995,
      "created_at": "2022-03-22T05:44:53.000000Z",
      "updated_at": "2022-03-22T05:44:53.000000Z",
      "deleted_at": null
  },
  {
      "id": 32,
      "logo": "Agriculture-du-Maghreb.jpg",
      "company_name": "Agriculture du Maghreb",
      "dirigent": "M. A bdelhakim MOJTAHID\r\n",
      "description": "Spécialisée dans la fabrication, la commercialisation et le développement du plastique et du filet agricoles, l’entreprise NaturPláS a organisé en partenariat avec Emeraude le distributeur de la société pétrolière mondiale ExxonMobil, en juin  dernier à Agadir une journée d’information dans l’objectif de présenter sa nouvelle gamme de produits plastiques agricoles.",
      "adresse": "22 Bis, Rue des Asphodèles Résidence Zakia, Quartier Berger 20280 Casablanca",
      "email": "agriculturemaghreb@gmail.com",
      "phone": "05 22 23 62 12 / 82 33",
      "siteweb": "www.agri-mag.com",
      "latitude": 33.57311,
      "longitude": -7.5898430000000001,
      "created_at": "2022-03-22T05:44:53.000000Z",
      "updated_at": "2022-03-22T05:44:53.000000Z",
      "deleted_at": null
  },
  {
      "id": 33,
      "logo": "Agrinovation.png",
      "company_name": "Ste Agrinovation",
      "dirigent": "MM. HICHAM EL ACHRAFI ET AMINE BENBARARA",
      "description": "Importation et exportation des semences et des intrants",
      "adresse": "N° 81 Cente de Vie Z.i - Ait Melloul - Agadir",
      "email": "agrinovation.maroc@gmail.com",
      "phone": "05 28 30 64 56",
      "siteweb": "https://felem.ma/",
      "latitude": 30.330615999999999,
      "longitude": -9.5117329999999995,
      "created_at": "2022-03-22T05:44:54.000000Z",
      "updated_at": "2022-03-22T05:44:54.000000Z",
      "deleted_at": null
  },
  {
      "id": 34,
      "logo": "Polyversal.png",
      "company_name": "Polyversal ",
      "dirigent": "MM. ALAOUI MOHAMED ALI ET CHARAI MONSIF",
      "description": "Production du Film Agricole,\r\nProduction Tube Micro Irrigation",
      "adresse": "Lot I3 53 Zi, Ouled Sahel Bouskoura Casablanca",
      "email": "polyversal@polyversal.net",
      "phone": "05 22 59 31 80 à 89",
      "siteweb": "http://www.polyversal.net/",
      "latitude": 30.330615999999999,
      "longitude": -9.5117329999999995,
      "created_at": "2022-03-22T05:44:54.000000Z",
      "updated_at": "2022-03-22T05:44:54.000000Z",
      "deleted_at": null
  },
  {
      "id": 35,
      "logo": "unimagri.png",
      "company_name": "Unimagri",
      "dirigent": "M. SABIL ABDELLATIF",
      "description": "Vente de matériel d’Irrigation,Pompage, Solaire",
      "adresse": "82-86 Rue Mohamed Radi Slaoui, Belvedère, Casablanca",
      "email": "sales@unimagri.com",
      "phone": "05 22 40 17 32",
      "siteweb": "www.unimagri.com",
      "latitude": 30.330615999999999,
      "longitude": -9.5117329999999995,
      "created_at": "2022-03-22T05:44:54.000000Z",
      "updated_at": "2022-03-22T05:44:54.000000Z",
      "deleted_at": null
  },
  {
      "id": 38,
      "logo": "BASF-LOGO.png",
      "company_name": "O-BASF",
      "dirigent": "Mr khaldoun bouacida",
      "description": "BASF crée de la chimie pour un avenir durable. Nous associons succès économique, protection de l’environnement et responsabilité sociale. Grâce à la science et à l’innovation, nous permettons à presque toutes les industries de répondre aux besoins actuels et futurs de la société.",
      "adresse": "Tour Ivoire 3,2 Éme Etage La Marina Casablanca",
      "email": "basf.maroc@basf.com",
      "phone": "05 22 66 94 09 / 05 22 35 01 36\t",
      "siteweb": "www.basf.com",
      "latitude": 30.330615999999999,
      "longitude": -9.5117329999999995,
      "created_at": "2022-03-22T05:44:54.000000Z",
      "updated_at": "2022-03-22T05:44:54.000000Z",
      "deleted_at": null
  },
  {
      "id": 39,
      "logo": "carrefour-du-manutention.jpg",
      "company_name": "Carrefour du manutention sarl",
      "dirigent": "M. YOUSSEF LAALEM",
      "description": "Vente et Location du Matériel de Manutention, Réparation et Pièces de\r\nRechange",
      "adresse": "Km 1,5 Route De Biougra Zi - Ait Melloul\r\n",
      "email": "carrefourmanutention@gmail.com",
      "phone": " 05 28 30 81 19",
      "siteweb": "https://carrefourdemanutention.com/",
      "latitude": 30.330615999999999,
      "longitude": -9.5117329999999995,
      "created_at": "2022-03-22T05:44:54.000000Z",
      "updated_at": "2022-03-22T05:44:54.000000Z",
      "deleted_at": null
  },
  {
      "id": 40,
      "logo": "agrivivos.png",
      "company_name": "Agrivivos",
      "dirigent": "M. HASSAN BOUGUIRI",
      "description": "Importation et Commercialisation\r\ndes Intrants Agricoles",
      "adresse": "N° 11-11 Parc Haliopolis - Zone Agropole -\r\nDrarga - Agadir",
      "email": "contact@agrivivos.ma",
      "phone": "05 28 24 40 12",
      "siteweb": "www.agrivivos.com",
      "latitude": 30.330615999999999,
      "longitude": -9.5117329999999995,
      "created_at": "2022-03-22T05:44:54.000000Z",
      "updated_at": "2022-03-22T05:44:54.000000Z",
      "deleted_at": null
  },
  {
      "id": 44,
      "logo": "FIFEL.png",
      "company_name": "FIFEL",
      "dirigent": "M. Lahoucine ADARDOUR",
      "description": "La FIFEL - Fédération Interprofessionnelle Marocaine de production et d’exportation des Fruits et Légumes,",
      "adresse": "mapMarkerGrey Chambre dAgriculture de la Région Souss Massa Draa, Nouveau Quartier Administratif Haut Founty Agadir\r\n",
      "email": "infocommunication@gmail.com",
      "phone": "0528229917",
      "siteweb": "http://fifel.ma/",
      "latitude": 30.330615999999999,
      "longitude": -9.5117329999999995,
      "created_at": "2022-03-22T05:44:54.000000Z",
      "updated_at": "2022-03-22T05:44:54.000000Z",
      "deleted_at": null
  },
  {
      "id": 45,
      "logo": "fl_logo_home.jpg",
      "company_name": "FRUIT LOGISTICA",
      "dirigent": "pas mentionnée",
      "description": "FRUIT LOGISTICA couvre tous les secteurs du secteur des produits frais et fournit une image complète des dernières innovations, produits et services sur tous les maillons de la chaîne d’approvisionnement internationale. Il offre ainsi de superbes opportunités de mise en réseau et de contact aux décideurs clés de tous les secteurs de l’industrie.",
      "adresse": "Messe Berlin",
      "email": "fruitlogistica@messe-berlin.de",
      "phone": "0600000000",
      "siteweb": "https://www.fruitlogistica.com/en/",
      "latitude": 30.330615999999999,
      "longitude": -9.5117329999999995,
      "created_at": "2022-03-22T05:44:54.000000Z",
      "updated_at": "2022-03-22T05:44:54.000000Z",
      "deleted_at": null
  },
  {
      "id": 46,
      "logo": "ardmaroc.png",
      "company_name": "Ard Unifert Maroc ",
      "dirigent": "MM. MUATH MOUSSA ET CHIBANI ADIL",
      "description": "Importation Distribution des Produits Agricoles ( Semence,\r\nFertillisants,Pesticides,Pdt Vét…)",
      "adresse": "N° 743, Zone Industrielle Ait Melloul, Agadir",
      "email": "maroc@ardunifert.com",
      "phone": "05 28 24 11 95",
      "siteweb": "https://www.ardunifertmaroc.com/",
      "latitude": 30.330615999999999,
      "longitude": -9.5117329999999995,
      "created_at": "2022-03-22T05:44:54.000000Z",
      "updated_at": "2022-03-22T05:44:54.000000Z",
      "deleted_at": null
  },
  {
      "id": 47,
      "logo": "Agrisoil.png",
      "company_name": "Agrisoil Technology Morocco",
      "dirigent": "M. SAMI ABDO",
      "description": "Importation et Distribution d’une\r\nGamme Unique d’Engrais et Amendements\r\nde Sol à Base de Silicium Pour\r\nL’agriculture et Le Jardinage Biologique",
      "adresse": "Lot 10, Avenue Annakhil, Immeuble E,N°10 , 4éme Étage Hay Riad-Rabat",
      "email": "llachkar@agritech-group.com\r\n",
      "phone": " 06 88 61 49 90",
      "siteweb": "www.agripower.com.au /",
      "latitude": 30.330615999999999,
      "longitude": -9.5117329999999995,
      "created_at": "2022-03-22T05:44:55.000000Z",
      "updated_at": "2022-03-22T05:44:55.000000Z",
      "deleted_at": null
  },
  {
      "id": 52,
      "logo": "MAGRISER-01.png",
      "company_name": "MAGRISER",
      "dirigent": "M. MOHAMED AZZOUZ",
      "description": " Production, Importation, Etude et Installation des Systèmes d’Irrigation",
      "adresse": "Lotissement 266, Zone Industrielle de Mohammedia Ouest - Casablanca",
      "email": "contact@magriser.com",
      "phone": " 05 23 31 60 70 / 05 23 31 66 84",
      "siteweb": "https://magriser.com/",
      "latitude": 30.330615999999999,
      "longitude": -9.5117329999999995,
      "created_at": "2022-03-22T05:44:55.000000Z",
      "updated_at": "2022-03-22T05:44:55.000000Z",
      "deleted_at": null
  },
  {
      "id": 58,
      "logo": "RODA.png",
      "company_name": "RODA",
      "dirigent": "M. JEAN MICHEL RAYNAUD",
      "description": "Machines de Conditionnement des Fruits et Légumes",
      "adresse": " 2, Allés des Villas, Ain Sebaa Casablanca",
      "email": "contact@rodamaroc.com",
      "phone": "05 22 35 59 50 ",
      "siteweb": "https://agripharma.ma/",
      "latitude": 30.330615999999999,
      "longitude": -9.5117329999999995,
      "created_at": "2022-03-22T05:44:55.000000Z",
      "updated_at": "2022-03-22T05:44:53.000000Z",
      "deleted_at": null
  }
]