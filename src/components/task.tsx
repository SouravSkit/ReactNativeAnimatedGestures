import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Modal, TextInput, Alert, Dimensions } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { Skia, Canvas, Path, Shader } from '@shopify/react-native-skia';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
    <SafeAreaView >
<View style={{justifyContent:'center',alignSelf:'center',marginTop:30}}>   
 <Image source = {require('../assets/vice.png')} style={styles.iconImage}/>
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
  { id: 4, text: 'Item 4', imageSource: require('../assets/image33.jpg') },
  { id: 6, text: 'Item 6', imageSource: require('../assets/image44.jpg') },
  { id: 7, text: 'Item 7', imageSource: require('../assets/image55.jpg') },
  { id: 8, text: 'Item 8', imageSource: require('../assets/image66.jpg') },
  { id: 9, text: 'Item 9', imageSource: require('../assets/image77.jpg') },
  { id:10, text: 'Item 10', imageSource: require('../assets/image88.jpg') },
  { id:11, text: 'Item 11', imageSource: require('../assets/image99.jpg') },
  { id: 12, text: 'Item 12', imageSource: require('../assets/images 1010.jpg')},
  { id: 13, text: 'Item 13', imageSource: require('../assets/image1111.jpg') },
  { id: 14, text: 'Item 14', imageSource: require('../assets/tech3.jpg') },
  { id: 16, text: 'Item 16', imageSource: require('../assets/image44.jpg') },

];

const Task = () => {

  const [index, setIndex] = useState(0);

  const onSwiped = () => {
    setIndex(index + 1);
  };

  const navigation = useNavigation();

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
    <View style={styles.container}>

      <View style={styles.overlay}>
      </View>
      <Canvas style={ styles.canvasStyle}>
        <Path path="M 0 0 L 1048 0 L 1048 583 L 0 583 Z">
          <Shader source={source} />
        </Path>
      </Canvas>
      <View style={{justifyContent:'center',alignSelf:'center',marginTop:30}}>   
 <Image source = {require('../assets/vice.png')} style={styles.iconImage}/>
</View>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor={'black'}
        // onChangeText={(text) => setSearchText(text)}
      />  
      <View style={{justifyContent:'center'}}>
           <Swiper
         style={{ zIndex: 1}} 
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
 </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#94e3e0',

    flex:1,
  },

  card: {
    width: Dimensions.get('window').width - 130,
    borderRadius: 8,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  cardImage: {
    width: Dimensions.get('window').width - 130,
    height: Dimensions.get('window').height - 500,
    borderRadius: 8,
    resizeMode: 'cover',
    marginVertical:40
  },
  searchButton: {
    padding: 10,

  },
  input: {
    borderRadius:30,
    borderWidth:2,
    width: Dimensions.get('window').width - 50,
    height:Dimensions.get('window').width - 305,
    alignSelf:'center',
    padding: 20,
    marginTop:30
  },
  iconImage:{
    width:70,
    height:20
  },
  overlay: {
    // ...StyleSheet.absoluteFillObject,
        // backgroundColor: 'transparent',

  },
  canvasStyle:{

  ...StyleSheet.absoluteFillObject
  }
});

export default Task;
