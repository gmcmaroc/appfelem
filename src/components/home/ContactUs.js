import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [Email, setEmail] = useState('');

  const handleSendEmail = () => {
    if (name.trim() === '' || message.trim() === '' || Email.trim() === '') {
      return; 
    }

    const emailSubject = 'Contact Us Message';
    const emailBody = `Name: ${name}\n\n Message: ${message} \n\n E-mail: ${Email}`;

    MailComposer.composeAsync({
      recipients: ['digitalgmcmaroc@gmail.com'],
      subject: emailSubject,
      body: emailBody,
    }).then(result => {
      if (result.status === 'sent') {
        setName('');
        setMessage('');
        setEmail('');
      }
    }).catch((error) => {
      console.log(error)
    })
  };

  return (
    <View>
      <View style={{padding: 10}}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Contactez nous !</Text>
        <Text style={{fontSize: 15, fontWeight: '400'}}>
        Que vous cherchiez des reponses, que vou vouliez résoudre un probleme ou que vous
        simplement nous faire savoir comment nous l'avons fait, il existe de nombreuses
        façon de nous contacter ici. Nous vous aiderons à resoudre vos probléme rapidement et facilement.
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
      style={styles.input}
        placeholder="Tapez votre message"
        value={message}
        onChangeText={text => setMessage(text)}
        multiline
        numberOfLines={4}
      />
      <View style={{marginTop: 5}}>

      <Button color="#55a369" title="Envoyer" onPress={handleSendEmail} disabled={!name || !message} />
      </View>
      </View>
      <View style={{padding: 10}}>
        <Text style={{fontSize: 15, fontWeight: '400'}}>
          Si vous étes au milieu de quelque chose et que 
          vous ne voulez pas manquer cet appel important.
          </Text>
        <Text style={{fontSize: 15, fontWeight: '500'}}>
          E-mail: info@gmcmaroc.com
        </Text>
        <Text style={{fontSize: 15, fontWeight: '500'}}>
          Tel : +212 528 245 517
        </Text>
        <Text style={{fontSize: 15, fontWeight: '500'}}>
          WhatsApp: +212 667 772 201
        </Text>
      </View>
    </View>
  );
};

export default ContactUs;
const styles = StyleSheet.create({
  input: {
    marginTop: 5,
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },

})
