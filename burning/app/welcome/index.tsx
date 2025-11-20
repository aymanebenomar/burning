import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Welcome() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Screen</Text>
      <Text style={styles.text}>This will open first when the app starts.</Text>
      <Button title="Go to Login" onPress={() => router.push('/welcome/login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  text: { fontSize: 18, marginBottom: 20, textAlign: 'center' },
});
