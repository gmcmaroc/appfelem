import { Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import {Delete} from '../../constants/icons'


const NotConnected  = ({data}) => {
    const screenDimensions = Dimensions.get('screen');
    return (

        <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: screenDimensions.height - 400}}>
            <Image source={Delete} style={{width: 40, height: 40}} />
          <Text style={{fontSize: 17, fontWeight: 'bold', color: 'black' , marginTop: 15}} >Quelque chose s'est mal passé</Text>
          <Text style={{fontSize: 14, fontWeight: 500, color: 'grey'}}>ou vous êtes hors ligne, vérifie votre connexion</Text>
          <TouchableOpacity style={{backgroundColor: '#55a369',paddingVertical: 8,paddingHorizontal: 15,borderRadius: 10, marginVertical: 10, marginTop: 15}} >
          <Text style={{color: '#ffffff',fontSize: 16,textAlign: 'center'}} onPress={data}>Essayer à nouveau</Text>
          </TouchableOpacity>
          </View>
    )
}
export default NotConnected