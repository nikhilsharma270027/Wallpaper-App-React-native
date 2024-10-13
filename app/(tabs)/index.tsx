import { ImageCart } from "@/components/ImageCart";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";
import { Image, Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import { Downloadpicture } from "@/components/BottomSheet";

export default function explore() {
  const wallpapers = useWallpapers();
  const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(null);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{ dark: "black", light: "white" }}
        headerImage={
          <Image
            style={{ flex: 1 }}
            source={{
              uri: wallpapers[0]?.url ?? "",
            }}
          />
        }
      >
        <View style={styles.container}>
          <ThemedView style={styles.innerContainer}>
            <FlatList
              data={wallpapers.filter((_, index) => index % 2 == 0 )}
              renderItem={({ item }) => (
                <View style={styles.imageContainer}>
                  <ImageCart wallpaper={item} onPress={()=> {
                      setSelectedWallpaper(item)
                  }}/>
                </View>
              )}
              keyExtractor={(item) => item.name}
            />
          </ThemedView>

          <ThemedView style={styles.innerContainer}>
            <FlatList
              data={wallpapers.filter((_, index) => index % 2 == 1 )}
              renderItem={({ item }) => (
                <View style={styles.imageContainer}>
                  <ImageCart wallpaper={item} onPress={()=> {
                      setSelectedWallpaper(item)
                  }}/>
                </View>
              )}
              keyExtractor={(item) => item.name}
            />
          </ThemedView>
        </View>
        {/* <Text>Expolre page</Text> */}
      </ParallaxScrollView>
      {selectedWallpaper && <Downloadpicture wallpaper={selectedWallpaper} onClose={()=> setSelectedWallpaper(null)} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 10,
  },
  imageContainer: {
    padding: 10,
  },
});

// https://i.pinimg.com/736x/3f/cd/17/3fcd1785622d5eea86a236d9ad795fba.jpg

// instead of mapping use flatList
{
  /* <View style={styles.container}>
          <View style={styles.innerContainer}>
            {wallpapers.map((w: Wallpaper) => (
              <Imagecart wallpaper={w} />
            ))}
          </View>
          <View style={styles.innerContainer}>
            {wallpapers.map((w: Wallpaper) => (
              <Imagecart wallpaper={w} />
            ))}
          </View>
        </View> */
}
