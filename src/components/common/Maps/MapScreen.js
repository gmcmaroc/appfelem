// import React, {useState} from 'react';
// import MapView, {Marker} from 'react-native-maps';
// import { StyleSheet, View, Text, Image } from 'react-native';
// import {Place} from '../../constants/icons'

// const MapScreen = ({latitude, longitude, companyname, id}) => {

//   return(

//       <View style={styles.container}>
//         {companyname !== undefined && latitude !== undefined &&  longitude !== undefined ?
//          <MapView
//           style={styles.map}
//           initialRegion={{
//             latitude: latitude,
//             longitude: longitude,
//             latitudeDelta: 0.0062,
//           longitudeDelta: 0.0061,
//           }}> 
//          <Marker 
//          key={id}
//         coordinate={{
//         latitude: latitude,
//         longitude: longitude}} 
//          >
//           <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>

//           <Text>{companyname}</Text>
//           <Image source={Place} style={{width: 30, height:30}} />
//           </View>
//           </Marker>
//         </MapView> 
//         :(
//           null
//         )
//       }
  
       
//       </View> 
      

      
//   )


// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     flex: 1,
//     width: '100%',
//     height: 200,
//   },
// });

// export default MapScreen;
