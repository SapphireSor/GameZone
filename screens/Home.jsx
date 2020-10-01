import React, { useState } from 'react';
import { Button, FlatList, Text, View, TouchableOpacity } from 'react-native';
import Card from '../shared/Card';
import { gobalStyles } from '../styles/global'

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { key: '1', title: 'Zelda Breath of Fresh Air', rating: 4, content: 'real goooood' },
    { key: '2', title: 'Gotta Catch Them All (again...)', rating: 3, content: 'boring' },
    { key: '3', title: 'Not so \'Final\' Fantasy', rating: 5, content: 'great story' },
    { key: '4', title: 'My Little Pony', rating: 1, content: 'too scary' },
  ])

  return (
    <View style={gobalStyles.container}>
      <FlatList 
        data={reviews} 

        renderItem={({ item }) => 
          <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Card>
              <Text style={gobalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>}/>
    </View>
  );
}

