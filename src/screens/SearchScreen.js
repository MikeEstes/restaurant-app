// Import Dependencies
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';

// Create component
const SearchScreen = () => {
  const [term, setTerm] = useState('');

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => console.log('Term was submitted!')}
      />
      <Text>Search Screen</Text>
    </View>
  );
};

// Create Stylesheet
const styles = StyleSheet.create({});

// Export Component
export default SearchScreen;
