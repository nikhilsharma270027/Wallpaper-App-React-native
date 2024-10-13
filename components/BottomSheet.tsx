import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Wallpaper } from '@/hooks/useWallpapers';

export const Downloadpicture = ({onClose, wallpaper}: {
  onClose: () => void;
  wallpaper: Wallpaper
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (

      <BottomSheet
      onClose={onClose}
      snapPoints={["94%"]}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        handleIndicatorStyle={{display: 'none'}}
        handleStyle={{display: 'none'}}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Image style={styles.image} source={{uri: wallpaper.url}} />
          <Button title="Download"></Button>
        </BottomSheetView>
      </BottomSheet>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  contentContainer: {
    flex: 1,
    // alignItems: 'center',
  },
  image: {
    height: "60%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  }
});
