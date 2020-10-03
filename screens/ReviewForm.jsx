import React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';

const reviewSchema = yup.object({
  title: yup.string()
          .required()
          .min(4),
  content: yup.string()
            .required()
            .min(8),
  rating: yup.string()
            .required()
            .test('is-num-1-5', 'Rating should be a number between 1-5', (val) => {
              return (parseInt(val) <= 5 && parseInt(val) >= 1) && val.length == 1
            })
})

export default function ReviewForm({ addNewReview }) {
  
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{title: '', content: '', rating: ''}}
        validationSchema={reviewSchema}
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
              onBlur={props.handleBlur('title')} 
            />
            <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
            <TextInput
              multiline
              placeholder='Review Content'
              onChangeText={props.handleChange('content')}
              style={globalStyles.input}
              value={props.values.content} 
              onBlur={props.handleBlur('content')} 
            />
            <Text style={globalStyles.errorText}>{props.touched.content && props.errors.content}</Text>
            <TextInput
              placeholder='Review Rating'
              onChangeText={props.handleChange('rating')}
              style={globalStyles.input}
              value={props.values.rating}
              keyboardType='numeric'
              onBlur={props.handleBlur('rating')}
            />
            <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
            <Button title='Submit' color='maroon' onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  )
};