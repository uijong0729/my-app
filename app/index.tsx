import { Link, Stack } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
          <Link href={{pathname: '/details', params: {name: 'banana'}}}>
            Go to Details
          </Link>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}