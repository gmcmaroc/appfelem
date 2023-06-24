// import { StatusBar } from "expo-status-bar";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
//   Button,
//   ScrollView,
//   TextInput
// } from "react-native";
// import { AntDesign ,Entypo ,FontAwesome,FontAwesome5} from "@expo/vector-icons";
// import { DataTable } from 'react-native-paper';
// import React, { useState, useEffect } from "react";
// import {AllCommand } from "../../services/CommandService";




// export default function Command({ navigation }) {


//   const [comand, setComand] = useState([])
//   return (
//     <View style={styles.container}>
//         <View>
//        <Text style={styles.title}>All Commands</Text>
//          <Text style={styles.title1}>TODAY'S SPCIALITY</Text>
//      </View>
     
//      <View>
//       <DataTable>
//       <DataTable.Header>
//           <DataTable.Title>Status</DataTable.Title>
//           <DataTable.Title>Adresse</DataTable.Title>
//           <DataTable.Title numeric>total</DataTable.Title>
//         </DataTable.Header>
       
//         {comand.map(comands =>(  

//            <DataTable.Row>
//           <DataTable.Cell>{comands.status}</DataTable.Cell>
//           <DataTable.Cell numeric>{comands.address}</DataTable.Cell>
//           <DataTable.Cell numeric>{comands.total}</DataTable.Cell>
//           </DataTable.Row>
//    ))}
        
      
//         </DataTable></View>
    

//     </View>


   
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//   },
//   home : {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",

//   },
//   navbar: {
//     width: 410,
//     backgroundColor: "#000",
//     height: 60,
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "center",
//   },
//   cardContainer: {
//     width: 380,
//     backgroundColor: "#fff",
//     height: 'auto',
//     marginBottom : 70,
//     borderColor : '#000',
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 2,
//       height: 2,
//     },
//     shadowOpacity: 0.75,
//     shadowRadius: 5,
//     elevation: 3,
//     display : 'flex',
//     flexDirection : 'row',
//     justifyContent: "space-between",

//   },
//   imageStyle: {
//     height: 200,
//     width: 370,
//     resizeMode: "stretch",
//     // marginTop: 4,
//     opacity: 0.9,
//     alignContent: "center",
//     alignSelf: "center",
//   },
//   titleStyle: {
//     fontSize: 17,
//     fontWeight: "500",
//     marginLeft : 6,
//     marginTop : 5
//   },
//   paraStyle: {
//     marginLeft : 6,
//   },

//   signIn: {
//     height: 30,
//     width: 130,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#192a56",
//     marginTop: 6,
//     marginBottom : 8,
//     marginRight : 7
//   },
//   textbtn: {
//     color: "#fff",
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "320",
//     textAlign: "center",
//     color: "#56a56b",
//     marginTop: 18,
//   },
//   title1: {
//     fontSize: 24,
//     fontWeight: "400",
//     textAlign: "center",
//     color: "#192a56",
//     marginBottom: 30,
//   },
//   nav: {
//     display: "flex",
//     flexDirection: "row",
//   },
//   button: {
//     position: "absolute",
//     left: 0,
//     flexDirection: "row",
//     justifyContent: "center",
//     // backgroundColor: "blue",
//     width: "100%",
//     bottom: 0,
//     height: 55,
//   },
//   icon1: {
//     backgroundColor : "#fff",
//     alignItems : 'center',
//     padding : 12,
//     // borderRadius:10,
//     // marginLeft : 5,
//     justifyContent:'center',
//     width : 140,
//     // borderWidth: .4,
//     // borderColor: "#56a56b",
//   },
//   info: {
//     width: "100%",
//     height: "100%",
//     display: "flex"
//    },
//    price :{
//        position : 'absolute',
//        top : "2%",
//        right : "5%",
//        backgroundColor : "green",
//        color : "#fff",
//        height: 39,
//        width : 40,
//        borderRadius : 50,
//        textAlign: 'center',
//        lineHeight: 35
//    },
//    input:{
//     margin: 15,
//     height: 40,
//     borderColor: '#fff',
//     borderWidth: 1,
//     borderRadius: 50,
//     paddingLeft : 20,
//     backgroundColor: '#fff',
//     shadowColor: "#000",
//     shadowOffset: {
//         width: 0,
//         height: 0,
//     },
//     shadowOpacity: 0.27,
//     shadowRadius: 4.65,
//     elevation: 7,
//   },
//   icone: {

//     position : 'absolute',
//     ZIndex  :1,
//     top : '30%',
//     right : '10%' ,
//   },
// });





