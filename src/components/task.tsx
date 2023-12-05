import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { Canvas, Path, Shader, Skia } from '@shopify/react-native-skia';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const source = Skia.RuntimeEffect.Make(`
  vec3 color1 = vec3(0.635, 0.58, 0.89);
  vec3 color2 = vec3(0.58, 0.89, 0.882);
  
  half4 main(float2 xy) {
    float t = xy.y / 600.0;
    float tAdjusted = t * t; 
    
    vec3 color = mix(color1, color2, tAdjusted);
    return vec4(color, 1);
  }
`)!;
const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchText);
  };

  return (
    <SafeAreaView>
      <View style={{ justifyContent: 'center', alignSelf: 'center', marginTop: 30 }}>
        <Image source={require('../assets/vice.png')} style={styles.iconImage} />
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor={'black'}
          onChangeText={(text) => setSearchText(text)}
          onSubmitEditing={handleSearch}
        />
      </View>
    </SafeAreaView>
  );
};

const data = [
  { id: 1, text: 'Item 1', imageSource: require('../assets/tech2.jpg') },
  { id: 2, text: 'Item 2', imageSource: require('../assets/image11.jpg') },
  { id: 3, text: 'Item 3', imageSource: require('../assets/image22.jpg') },
];

const Task = () => {
  const [index, setIndex] = useState(0);
  const navigation = useNavigation();

  const onSwiped = () => {
    setIndex(index + 1);
  };

  const onCardPress = () => {
    navigation.navigate('login');
  };

  const Card = ({ card }) => (
    <TouchableOpacity style={styles.card} onPress={onCardPress}>
      <View>
        <Image source={card.imageSource} style={styles.cardImage} />
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <View style={styles.container}>
        <Canvas style={styles.canvasStyle}>
          <Path path="M 0 0 L 1048 0 L 1048 583 L 0 583 Z">
            <Shader source={source} />
          </Path>
        </Canvas>
        <View style={{ justifyContent: 'center', alignSelf: 'center', marginTop: 30 }}>
          <Image source={require('../assets/vice.png')} style={styles.iconImage} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor={'black'}
        />
        <View style={{ justifyContent: 'center' }}>
          <Swiper
            style={{ zIndex: 1 }}
            cards={data}
            cardIndex={index}
            renderCard={(card) => <Card card={card} />}
            onSwiper={onSwiped}
            stackSize={4}
            stackScale={10}
            stackSeparation={14}
            infinite
            disableTopSwipe
            disableBottomSwipe
          />
          <Text style={{ fontWeight: 'bold', color: 'white', justifyContent: 'center', textAlign: 'center', backgroundColor: '#A294E4' }}>THE ARCHIVE</Text>
        </View>
      </View>
      <View style={{ flex: 0.15, backgroundColor: '#94e3e0', marginBottom: 2 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
          <Text>All Editions</Text>
          <Image source={require('../assets/filter2.png')} style={{ width: 20, height: 20 }} />
        </View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          renderItem={({ item }) => (
            <Image source={item.imageSource} style={styles.flatListItem} />
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#94e3e0',
    flex: 0.85,
  },
  card: {
    width: windowWidth - 130,
    borderRadius: 8,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  cardImage: {
    width: windowWidth - 130,
    height: windowHeight - 500,
    borderRadius: 8,
    resizeMode: 'cover',
    marginVertical: 40,
  },
  searchButton: {
    padding: 10,
  },
  input: {
    borderRadius: 30,
    borderWidth: 2,
    width: windowWidth - 50,
    height: windowWidth - 305,
    alignSelf: 'center',
    padding: 20,
    marginTop: 30,
  },
  iconImage: {
    width: 70,
    height: 20,
  },
  canvasStyle: {
    ...StyleSheet.absoluteFillObject,
  },
  flatListItem: {
    height: windowWidth * 0.28,
    width: windowWidth * 0.28,
    marginHorizontal: 10,
  },
});

export default Task;
