
import { StyleSheet, Text, View, ScrollView, Image,Button, Dimensions } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Index = () => {
  const screenDimensions = Dimensions.get('screen');
  const Stack = createNativeStackNavigator();
    return (
        <View style={{position: "relative", width: screenDimensions.width}}>
            <View style={{position: 'absolute', top: 0, backgroundColor: 'white', width: "100%", borderBottomWidth: 1, zIndex: 2}}>
              <View style={{paddingTop: 35}}></View>
            <Text style={{color: "#c6ade3", fontSize: 18, textAlign: 'center'}}>Politique de Confidentialité</Text>
            <Text style={{color: '#55a369', fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>i-FELEM</Text>
            </View>
            <ScrollView>

          <View style={{padding: 10, marginTop: "20%"}}>
        <Text style={styles.text}>L'enregistrement est optionnel cependant, 
        gardez à l'esprit que vous ne pourrez pas utiliser les mises à jour 
        si vous ne vous enregistrez pas. </Text>
        <Text style={styles.text}>Lorsque vous vous enregistrez et utilisez nos applications,
           vous donnez généralement au Playstore votre adresse mail, votre nom d'usage, 
           votre mot de passe et d'autres informations d'enregistrement ; (b) 
           des informations relatives aux transactions, telles que des achats, 
           des réponses à des offres, ou bien télécharger ou utilisez des applications 
           de chez nous ; (c) informations sur la carte de crédit pour acheter et utiliser 
           l'Application, et (d) informations que vous entrez dans votre système lorsque 
           vous utilisez l'Application, telle que vos données de contact.
           Playstore ne nous communiquent pas ces données, nous n'y avons donc pas accès. </Text>
           <Text style={styles.text}>Seules les informations que vous nous donnez quand vous nous contactez pour
             de l'aide nous sont accessibles. </Text> 
             <Text style={styles.text}>
              Il se peut que nous utilisions les données 
             que vous nous avez données pour vous contacter de temps en temps, 
             afin de vous communiquer une information importante, ou vous faire 
             part de mises à jour ou de promotions. 
              </Text>
              <Text style={styles.title}>Les informations collectées automatiquement </Text>  
              <Text style={styles.text}>
                Nos applications ne collectent pas 
                les données précises sur la localisation géographique de l'appareil.
                </Text>
                <Text style={styles.text}>Seules les données agréées, et anonymes sont transmises périodiquement à des services externes 
                  pour nous aider à améliorer nos applications et nos services. Nous ne communiquerons vos informations
                   à des tiers uniquement par les moyens décrits dans ce règlement. </Text>
              <Text style={styles.title}>Sécurité</Text>
              <Text style={styles.text}>Nous sommes concernés par la sauvegarde de la confidentialité de vos informations. Nous fournissons
                 et maintenons par tous les moyens physiques, électroniques et juridiques la protection de ces informations.
                  Par exemple, nous limitons l'accès à ces informations au personnel autorisé, qui a besoin de ces informations
                  pour développer ou améliorer nos applications. Prenez note cependant, que malgré tous nos efforts pour fournir
                  une sécurité raisonnable à ces informations, aucun système ne peut se prévenir d'éventuelles brèches dans la sécurité. </Text>
              <Text style={styles.title}>Changements </Text>
              <Text style={styles.text}>Cette Politique de Confidentialité peut être amenée à évoluer de temps en temps, pour quelque raison que ce soit. 
                Nous vous informerons alors de toute modification de celle-ci en publiant la nouvelle Politique de Confidentialité
                 sur la page https://www.felem.ma/ et en vous informant via l'application mobile. Vous êtes avisé de consulter régulièrement
                  cette Politique de Confidentialité, car l'utilisation continue signifie un accord avec tout changement. </Text>
                  <Text style={styles.title}>Votre consentement </Text>
                  <Text style={styles.text}>En utilisant nos applications, vous consentez à notre traitement de vos données, ainsi qu'expliqué dans cette Politique 
                    de Confidentialité. Traitement signifie utilisation de 'cookies' sur ordinateur, incluant la possibilité de collecter, stocker,
                     supprimer, combiner et divulguer les données, toutes ces activités autorisées en Maroc. Si vous résidez hors de Maroc, vos données
                      seront transférées, traitées et stockées dans les normes de confidentialités de la Maroc. </Text>
                      <Text style={styles.title}>Contactez-nous </Text>
                      <Text style={styles.text}>Si vous avez des questions concernant la confidentialité,
                         en utilisant nos applications, ou concernant nos pratiques, 
                         envoyez-nous un mail via contact@felem.ma </Text>
          </View>
            </ScrollView>
        </View>
          
    )
}

export default Index


const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: 'black',
    textAlign: 'left',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    color: 'black',
    textAlign: 'left',
    paddingVertical: 10,
    fontSize: 15
  },
  
});