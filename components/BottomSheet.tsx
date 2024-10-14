import React, { useCallback, useMemo, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  useColorScheme,
  Pressable,
} from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Wallpaper } from "@/hooks/useWallpapers";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "./ThemedText";

export const Downloadpicture = ({
  onClose,
  wallpaper,
}: {
  onClose: () => void;
  wallpaper: Wallpaper;
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  const theme = useColorScheme() ?? "light";

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // renders
  return (
    <BottomSheet
      onClose={onClose}
      snapPoints={["94%"]}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      handleIndicatorStyle={{ display: "none" }}
      handleStyle={{ display: "none" }}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Image style={styles.image} source={{ uri: wallpaper.url }} />

        <View style={styles.topbar}>
          <Ionicons
            name={"close"}
            size={24}
            // color={theme == 'light' ? Colors.light.icon : Colors.dark.icon}
            color="white"
          />

          <View style={styles.topbarinner}>
          <Ionicons
            name={"share"}
            size={24}
            // color={theme == 'light' ? Colors.light.icon : Colors.dark.icon}
            color="white"
          />
          <Ionicons
            name={"heart"}
            size={24}
            // color={theme == 'light' ? Colors.light.icon : Colors.dark.icon}
            color="white"
            style={{paddingLeft: 4}}
          />
          </View>
        </View>

        <View style={styles.textContainer}>
          <ThemedText style={styles.text}>{wallpaper.name}</ThemedText>
        </View>


        <DownloadButton />
      </BottomSheetView>
    </BottomSheet>
  );
};

function DownloadButton() {
  const theme = useColorScheme() ?? 'light';
  return <Pressable  style={{
    backgroundColor: "black",
    padding: 10,
    marginHorizontal: 40,
    marginVertical: 20,
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme === 'light' ? Colors.light.text : Colors.dark.icon,
  }}>
    <Ionicons
      name={'download'}
      size={24}
      color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
      style={{paddingRight: 4}}
    />
    <Text style={{
      fontSize: 20,
      color: "white",
      fontWeight: "600",
    }}>Download</Text>
  </Pressable>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    // alignItems: 'center',
  },
  image: {
    height: "70%",
    borderRadius: 15,
  },
  topbar: {
    position: "absolute",
    padding: 10,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  topbarinner: {
    display: "flex",
    flexDirection: "row",

  },
  textContainer: {
    width: "100%"
  },
  text: {
    paddingTop: 20,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "600",
    color: "black"
  }
});
