import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { SafeAreaView, Text, View } from 'react-native';

export default function RootLayout() {
  return (
    <SafeAreaView>
        <View style={{backgroundColor: "black"}}>
            <Link href={"/"}>
            <Text style={{color: "white"}}>Go back</Text>
            </Link>
        </View>
    </SafeAreaView>
  );
}
