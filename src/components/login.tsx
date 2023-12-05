import React, { useRef, useState } from 'react';
import { StyleSheet, Pressable, View, ImageBackground, Text, Image } from 'react-native';
import { CubeNavigationHorizontal } from 'react-native-3dcube-navigation';
import { BlurView } from "@react-native-community/blur";

const data = [
  { id: 1, image: require('../assets/image99.jpg') },
  { id: 2, image: require('../assets/image66.jpg') },
  { id: 3, image: require('../assets/image11.jpg') },
];

export default function LoginScreen({ navigation }) {
  const cubeRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const onIndexChanged = (index) => {
    setActiveIndex(index);
  };

  const commonBlurView = (
    <BlurView
      style={styles.absolute}
      blurType="light"
      blurAmount={10}
      reducedTransparencyFallbackColor="white"
    />
  );

  return (
    <View style={styles.container}>
      <CubeNavigationHorizontal ref={cubeRef} onIndexChanged={onIndexChanged}>
        {data.map((item, index) => (
          <Pressable key={item.id} onPress={() => navigation.navigate('Task')}>
            <ImageBackground source={item.image} style={styles.imageContainer}>
              <View style={styles.paginationContainer}>
                {data.map((_, i) => (
                  <View
                    key={i}
                    style={[
                      styles.paginationDot,
                      { backgroundColor: i === index ? '#fff' : 'rgba(255, 255, 255, 0.5)' },
                    ]}
                  />
                ))}
              </View>

              <View style={styles.ImageView}>
                {commonBlurView}
                <Image
                  key={'blurryImage'}
                  source={item.image}
                  style={styles.absolute1}
                />
              </View>
            </ImageBackground>
          </Pressable>
        ))}
      </CubeNavigationHorizontal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    resizeMode: 'cover',
  },
  paginationContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    color: 'red',
    marginBottom: 100,
    zIndex:1
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  absolute1:{
    position: 'relative',
    top: '28%',
    left: '25%',
    bottom: 0,
    right: 0,
  },
  ImageView: {
    flex: 1,
  
  }
});

