import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function DetailsCopy() {
  const params = useLocalSearchParams();

  return (
    <View>
      <Text>
        copy
      </Text>
    </View>
  );
}