import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import {ifelem} from '../constants/icons';
import { useNavigation } from '@react-navigation/native';


const ContactUs = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [Email, setEmail] = useState('');
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
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
        ),
    });
  })

  const handleSendEmail = () => {
    if (name.trim() === '' || message.trim() === '' || Email.trim() === '') {
      return; 
    }

    const emailSubject = 'Contact Us Message';
    const emailBody = `message de : ${Email} \n\n Nom prénom: ${name} \n\n Message: \n\n  ${message}`;

    MailComposer.composeAsync({
      recipients: ['info@gmcmaroc.com'],
      subject: emailSubject,
      body: emailBody,
    }).then(result => {
      if (result.status === 'sent') {
        setName('');
        setMessage('');
        setEmail('');
      }
    }).catch((error) => {
      console.error(error);
          Alert.alert('Error', error);
    })
  };

  return (
    <>
    <View>
    <ScrollView showsVerticalScrollIndicator={false} > 
      <View style={{padding: 10}}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Contactez nous !</Text>
        <Text style={{fontSize: 17, fontWeight: '400', textAlign: "justify", paddingHorizontal: 5}}>
        Que vous cherchiez des réponses, que vous vouliez résoudre un problème ou que vous
        simplement nous faire savoir comment nous l'avons fait, il existe de nombreuse
        façon de nous contacter ici. Nous vous aiderons à résoudre vos problèmes rapidement et facilement.
        </Text>
      </View>
      <View style={{width: '100%', padding: 20 }}>
      <TextInput
      style={styles.input}
        placeholder="Nom et prénom"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
      style={styles.input}
        placeholder="Tapez votre address E-mail"
        value={Email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
      style={styles.textArea}
        placeholder="Tapez votre message"
        value={message}
        onChangeText={text => setMessage(text)}
        multiline
        textAlignVertical="top"
        numberOfLines={4}
      />
      <View style={{marginTop: 5}}>

      <Button color="#55a369" title="Envoyer" onPress={handleSendEmail} disabled={!name || !message} />
      </View>
      </View>
      <View style={{paddingHorizontal: 15, paddingBottom: 15, display: "flex", alignItems: "center", flexDirection: "column"}}>
        {/* <Text style={{fontSize: 15, fontWeight: '400'}}>
          Si vous êtes au milieu de quelque chose et que 
          vous ne voulez pas manquer cet appel important.
          </Text> */}
        <Text style={{fontSize: 15, fontWeight: '500'}}>
          E-mail : info@gmcmaroc.com
        </Text>
        <Text style={{fontSize: 15, fontWeight: '500'}}>
          Tél. : +212 528 245 517
        </Text>
        <Text style={{fontSize: 15, fontWeight: '500'}}>
          WhatsApp : +212 667 772 201
        </Text>
      </View>
    </ScrollView>
    </View>
    </>
  );
};

export default ContactUs;


const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    borderColor: "#55a369"
  },
  textArea: {
    height: 150,
    marginTop: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: '#fff',
    fontSize: 16,
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 10,
    borderColor: "#55a369"
  },

})
