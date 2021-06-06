// Import Dependencies
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

// Create component
const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.containerStyle}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text style={styles.ratingStyle}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

// Create Stylesheet
const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 15,
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 5,
    marginBottom: 5,
  },
  nameStyle: {
    fontWeight: 'bold',
  },
  ratingStyle: {
    color: 'grey',
  },
});

// Export Component
export default ResultsDetail;
