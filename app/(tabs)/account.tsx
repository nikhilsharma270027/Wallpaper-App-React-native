import { Downloadpicture } from "@/components/BottomSheet";
import { useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function account() {
  const [pictureopen, setPictureOpen] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text>account page</Text>
        <Button
          title="Open Button sheet"
          onPress={() => {
            setPictureOpen(true);
          }}
        ></Button>
        {pictureopen && <Downloadpicture onClose={()=> setPictureOpen(false)}/>}{/**controlled components */}
      </View>
    </SafeAreaView>
  );
}
