import React from 'react';
import { Image, Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from "@expo/vector-icons/Ionicons";


const ExitConfirmationModal = ({ visible, onClose, onConfirm }) => {
  return (
       <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closebutton}  onPress={onClose}>
            <Icon style={{marginLeft: 10}}  name="close-circle" size={30} color="white"  />
            </TouchableOpacity>
            <TouchableOpacity style={{ height: "100%" }} >
            <Image source={{ uri: "https://app.carrefourdemanutention.com/public/pubs/INSERTION Agriculture du Maghreb pour FELEM.png" }} style={styles.popimage} />
            </TouchableOpacity>
            <View style={{marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>

            <TouchableOpacity onPress={onConfirm} activeOpacity={0.8}>
          <Text style={styles.confirmButton}>Oui, Quitter</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onClose} activeOpacity={0.8}>
          <Text style={styles.cancelButton}>Annuler</Text>
        </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal> 
    
  );
};

const styles = StyleSheet.create({
    closebutton: {
        position: "absolute",
        top: "-10%",
        left: '-1%',
        zIndex: 3
      },
    modalContent: {
        position: "relative",
        backgroundColor: '#FFF',
        width: "80%",
        height: "60%",
        borderRadius: 8,
        padding: 5,
        elevation: 5, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.25, 
        shadowRadius: 4, 
      },
      popimage: {
        width : "100%",
        height : "100%",
      },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 9999,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  confirmButton: {
    borderRadius: 12,
    fontSize: 16,
    color: 'blue',
    backgroundColor: 'white',
    padding: 15
  },
  cancelButton: {
    borderRadius: 12,
    fontSize: 16,
    color: 'red',
    backgroundColor: 'white',
    padding: 15
  },
});

export default ExitConfirmationModal;
