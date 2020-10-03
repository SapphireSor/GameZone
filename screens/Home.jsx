import React, { useState } from 'react';
import { FlatList, Text, View, TouchableOpacity, Modal, StyleSheet, StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from '../shared/Card';
import { globalStyles } from '../styles/global'
import { Ionicons } from '@expo/vector-icons';
import ReviewForm from './ReviewForm';

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { key: '1', title: 'Zelda Breath of Fresh Air', rating: 4, content: 'real goooood' },
    { key: '2', title: 'Gotta Catch Them All (again...)', rating: 3, content: 'boring' },
    { key: '3', title: 'Not so \'Final\' Fantasy', rating: 5, content: 'great story' },
    { key: '4', title: 'My Little Pony', rating: 1, content: 'too scary' },
  ])
  const [modalOpen, setModalOpen] = useState(false)

  const addNewReview = (review) => {
    review.key = Math.random().toString()
    setReviews((prevReviews) => [review, ...prevReviews])
    setModalOpen(false) 
  }

  return (
    <View style={globalStyles.container}>
      <StatusBar translucent backgroundColor="rgba(96, 96, 96, 0.5)" barStyle='dark-content'/>

      <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <Ionicons 
              name="md-close-circle-outline"
              style={{...styles.modalToggle, ...styles.modalClose}}
              size={30} 
              onPress={() => setModalOpen(false)} />
            <ReviewForm addNewReview={addNewReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Ionicons 
        name="md-add-circle-outline"
        size={30} 
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)} />
      <FlatList 
        data={reviews} 
        renderItem={({ item }) => 
          <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>}/>
    </View>
  );
}


const styles = StyleSheet.create({
  modalToggle: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  modalClose: {
    marginBottom: 0,
    marginTop: 15,

  },
  modalContent: {
    flex: 1,

  }
})
