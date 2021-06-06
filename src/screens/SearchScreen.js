// Import Dependencies
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

// Create component
const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$' || '$$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? (
        <Text style={styles.errorStyle}>{errorMessage}</Text>
      ) : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('$')}
          title='Cost Effective'
        />
        <ResultsList
          results={filterResultsByPrice('$$')}
          title='A Bit Pricier'
        />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title='Big Spender'
        />
        <ResultsList
          results={filterResultsByPrice('$$$$')}
          title='Too Damn High'
        />
      </ScrollView>
    </>
  );
};

// Create Stylesheet
const styles = StyleSheet.create({
  errorStyle: {
    color: 'red',
    fontWeight: 'bold',
  },
});

// Export Component
export default SearchScreen;
