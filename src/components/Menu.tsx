import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Modal,TextInput,Alert, Dimensions } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { useNavigation } from '@react-navigation/native';


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
  { id: 12, text: 'Item 12', imageSource: require('../assets/images 1010.jpg') },
  { id: 13, text: 'Item 13', imageSource: require('../assets/image1111.jpg') },
  { id: 14, text: 'Item 14', imageSource: require('../assets/tech3.jpg') },
  { id: 16, text: 'Item 16', imageSource: require('../assets/image44.jpg') },

];

const Menu = () => {

  const navigation = useNavigation();

  const onCardPress = () => {
    // navigation.navigate(''); 
  };

  const[index,setIndex]= useState(0);
  const onSwiped =()=>{
    setIndex(index+1)
  }

  const Card = ({card})=>(
    <TouchableOpacity style={styles.card} onPress={onCardPress}>
      
      <Image source = {card.imageSource} style={styles.cardImage}/>
      </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
<View>
      <Swiper cards={data}
      cardIndex={index}
      renderCard={(card)=><Card card={card}
      />}
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
    flex:1,
     backgroundColor:'#87CEEB'
  },
  
card: {
  width: Dimensions.get('window').width - 130,

    flex: 0.3,
    borderRadius: 8,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
    alignSelf:'center'
  },
  cardImage:{
  width: Dimensions.get('window').width - 130,
  height: Dimensions.get('window').height - 600,
  borderRadius: 8,
  resizeMode: 'cover',
  }

});

export default Menu;
