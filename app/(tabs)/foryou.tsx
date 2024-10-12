// import { Link } from "expo-router";
// import { Text, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function ForYou() {
//   return (
//   <SafeAreaView>
//     <Text>foryou page</Text>
//     <Link href={"/liked"}>
//       <Text>liked</Text>
//     </Link>
//     <Link href={"/suggested"}>
//       <Text>suggested</Text>
//     </Link>
//     <Link href={"/library"}>
//       <Text>library</Text>
//     </Link>
//   </SafeAreaView>
//   )
// }

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from "react-native";
const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Library" component={HomeScreen} />
      <Tab.Screen name="Liked" component={SettingsScreen} />
      <Tab.Screen name="Sugggested" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function HomeScreen(){
  return <View>
        <Text>Library</Text>
    </View>
}
function SettingsScreen(){
  return <View>
        <Text>Library</Text>
    </View>
}
