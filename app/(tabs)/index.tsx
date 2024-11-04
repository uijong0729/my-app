import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      <Text style={styles.container}>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 24
  }
});
