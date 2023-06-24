// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
// import { AntDesign,Entypo, FontAwesome ,MaterialIcons,MaterialCommunityIcons} from '@expo/vector-icons'; 

// export default function Home({navigation}) {
//   return (
//     <View style={styles.container}>
//     <View style={styles.header}>
//     <Image 
//        source={image}
//       style={styles.homeimage}
//       />
//     </View>
//     <Image style={styles.avatar} source={profile}/>
//     <View style={styles.body}>
//       <View style={styles.bodyContent}>
//         <Text style={styles.name}>User Profile</Text>
//         <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
//         <TouchableOpacity style={styles.buttonContainer}onPress={() => navigation.navigate('Product')}>
//           <Text style={styles.options} >Meals</Text>  
//         </TouchableOpacity>              
//         <TouchableOpacity style={styles.buttonContainer}>
//           <Text style={styles.options}onPress={() => navigation.navigate('Delivery')}>Dashboard</Text> 
//         </TouchableOpacity>
//       </View>
//   </View>
//   <View style={styles.button}>
//         <TouchableOpacity
//           style={styles.icon1}
//           onPress={() => navigation.navigate("Food")}
//         >
//           <FontAwesome name="home" size={30} color="#7fb9e7" />
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.icon1}
//           onPress={() => navigation.navigate("Profile")}
//         >
//           <Entypo name="users" size={30} color="#7fb9e7" />
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.icon1}
//           onPress={() => navigation.navigate("Product")}
//         >
//           <MaterialIcons name="fastfood" size={30} color="#7fb9e7" />
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.icon1}
//           onPress={() => navigation.navigate("Delivery")}
//         >
//           <MaterialCommunityIcons name="microsoft-xbox-controller-menu" size={30} color="#7fb9e7" />
//         </TouchableOpacity>
//       </View>
// </View>


//   );
// }

// const styles = StyleSheet.create({
//   container:{
//     flex: 1,
//     backgroundColor: "#7fb9e7",
//     alignItems: "center",
//   },
//   header:{
//     height:150,
//     width:"100%",
//     backgroundColor: '#E6E6FA',
//     position:'relative'
//   },
//   homeimage:{
//     height:150,
//     width:"100%",
//     backgroundColor: '#E6E6FA',
//     position:'relative',
//     resizeMode: "cover",
//   },
//   avatar: {
//     width: 130,
//     height: 130,
//     borderRadius: 63,
//     borderWidth: 4,
//     borderColor: "white",
//     alignSelf:'center',
//     position: 'absolute',
//     marginTop:70,
//   }, 
//   body:{
//     marginTop:60,
//     backgroundColor:'#7fb9e7'
    
//   },
//   bodyContent: {
//     flex: 1,
//     alignItems: 'center',
//     padding:30,
//     // backgroundColor:'black'
//   },
//   name:{
//     fontSize:28,
//     color: "#FFF",
//     fontWeight: "600"
//   },
//   description:{
//     fontSize:16,
//     color: "#FFF",
//     marginTop:10,
//     textAlign: 'center',
//     marginBottom:20
//   },
//   buttonContainer: {
//     marginTop:10,
//     height:45,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom:20,
//     width:200,
//     borderRadius:30,
//     backgroundColor : '#fcb736',
//   },
//   options:{
//       fontSize:20,
//       fontWeight:'bold',
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
//     backgroundColor: "#fff",
//     alignItems: "center",
//     padding: 12,
//     // borderRadius:10,
//     // marginLeft : 5,
//     justifyContent: "center",
//     width: 100,
//     // borderWidth: .4,
//     // borderColor: "#56a56b",
//   },

// });






