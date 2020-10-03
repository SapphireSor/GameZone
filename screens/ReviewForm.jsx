import React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';

export default function ReviewForm({ addNewReview }) {
  
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{title: '', content: '', rating: ''}}
        onSubmit={(valus, action) =>{
          addNewReview(valus)
          action.resetForm()
        }}
      >
        {props => (
          <View>
            <TextInput
              placeholder='Review Title'
              onChangeText={props.handleChange('title')}
              style={globalStyles.input}
              value={props.values.title}  
            />
            <TextInput
              placeholder='Review Content'
              onChangeText={props.handleChange('content')}
              style={globalStyles.input}
              value={props.values.content}  
            />
            <TextInput
              placeholder='Review Rating'
              onChangeText={props.handleChange('rating')}
              style={globalStyles.input}
              value={props.values.rating}
              keyboardType='numeric'
            />
            <Button title='Submit' color='maroon' onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  )
};