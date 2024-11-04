import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
      <View>
        <Text style={styles.container}>Hello World</Text>
      </View>
      <View>
          <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
      </SafeAreaView>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 24
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
