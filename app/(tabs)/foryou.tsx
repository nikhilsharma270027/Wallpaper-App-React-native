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

import { SplitView } from '@/components/SplitView';
import { useLibraryWallpapers, useLikedWallpapers, useSuggestedWallpapers, useWallpapers } from '@/hooks/useWallpapers';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, View } from "react-native";
const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="Liked" component={LikedScreen} />
      <Tab.Screen name="Sugggested" component={SuggestedScreen} />
    </Tab.Navigator>
  );
}

function LibraryScreen(){
  const wallpapers = useLibraryWallpapers();
  return <View style={styles.container}>
        <SplitView wallpapers={wallpapers} />
    </View>
}
function LikedScreen(){
  const wallpapers = useLikedWallpapers();
  return <View style={styles.container}>
        <SplitView wallpapers={wallpapers} />
    </View>
}
function SuggestedScreen(){
  const wallpapers = useSuggestedWallpapers();
  return <View style={styles.container}>
        <SplitView wallpapers={wallpapers} />
    </View>
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
})
