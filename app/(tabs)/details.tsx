import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Details() {
  const params = useLocalSearchParams();

  return (
    <View>
      <Text>
        { params.name }
      </Text>
    </View>
  );
}