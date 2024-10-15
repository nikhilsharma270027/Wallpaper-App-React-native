import { FlatList } from "react-native";
import { ThemedView } from "./ThemedView";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { ImageCart } from "./ImageCart";
import { Downloadpicture } from "./BottomSheet";
import React from "react";

export function SplitView({wallpapers} : {
    wallpapers: Wallpaper[]
}) {
//   const wallpapers = useWallpapers();
  const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(
    null
  );
  return <>
    <ThemedView style={styles.container}>
      <ThemedView style={styles.innerContainer}>
        <FlatList
          data={wallpapers.filter((_, index) => index % 2 == 0)}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <ImageCart
                wallpaper={item}
                onPress={() => {
                  setSelectedWallpaper(item);
                }}
              />
            </View>
          )}
          keyExtractor={(item) => item.name}
        />
      </ThemedView>

      <ThemedView style={styles.innerContainer}>
        <FlatList
          data={wallpapers.filter((_, index) => index % 2 == 1)}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <ImageCart
                wallpaper={item}
                onPress={() => {
                  setSelectedWallpaper(item);
                }}
              />
            </View>
          )}
          keyExtractor={(item) => item.name}
        />
      </ThemedView>
    </ThemedView>
    {selectedWallpaper && <Downloadpicture wallpaper={selectedWallpaper} onClose={()=> setSelectedWallpaper(null)} />}
  </>
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
    flexDirection: "row",
  },
  innerContainer: {
    flex: 1,
    padding: 10,
  },
  imageContainer: {
    paddingVertical: 10,
  },
});
