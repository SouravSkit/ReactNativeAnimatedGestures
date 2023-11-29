import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Modal,TextInput,Alert, Dimensions } from 'react-native';
import Swiper from 'react-native-deck-swiper';

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

  

  const[index,setIndex]= useState(0);
  const onSwiped =()=>{
    setIndex(index+1)
  }

  const Card = ({card})=>(
    <View style={styles.card}>
      <Image source = {card.imageSource} style={styles.cardImage}/>
    </View>
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
  //   width:160,
  //   flex:1,
  //   resizeMode:'contain',
  //  alignSelf:'center'

  width: Dimensions.get('window').width - 130,
  height: Dimensions.get('window').height - 600,
  borderRadius: 8,
  resizeMode: 'cover',
  }

});

export default Menu;



// import React from 'react';
// import { View, Text, Image, StyleSheet, Dimensions,ScrollView } from 'react-native';
// import Animated, { interpolate,useSharedValue } from 'react-native-reanimated';

// const Width = Dimensions.get('window').width;
// const Height = Dimensions.get('window').height;
// const Card = ({ item, index, offsetX }) => {
//   console.log('item,index,offset',item, index, offsetX);
  
//   const cardStyle = {
//     transform: [
//       {
//         rotate: interpolate(offsetX, {
//           inputRange: [
//             (index - 1) * Width,
//             index * Width,
//             (index + 1) * Height,
//           ],
//           outputRange: ['-10deg', '0deg', '10deg'],
//           extrapolate: 'clamp',
//         }),
//       },
//     ],
//   };

//   return (
//     <Animated.View style={[styles.card, cardStyle]}>
//       <Image source={item.imageSource} style={styles.cardImage} />
//       <Text>{item.text}</Text>
//     </Animated.View>
//   );
// };

// const YourComponent = () => {
//   const data = [
//   { id: 1, text: 'Item 1', imageSource: require('../assets/tech2.jpg') },
//   { id: 2, text: 'Item 2', imageSource: require('../assets/image11.jpg') },
//   { id: 3, text: 'Item 3', imageSource: require('../assets/image22.jpg') },
//   { id: 4, text: 'Item 4', imageSource: require('../assets/image33.jpg') },
//   { id: 6, text: 'Item 6', imageSource: require('../assets/image44.jpg') },
//   { id: 7, text: 'Item 7', imageSource: require('../assets/image55.jpg') },
//   { id: 8, text: 'Item 8', imageSource: require('../assets/image66.jpg') },
// { id: 9, text: 'Item 9', imageSource: require('../assets/image77.jpg') },
//   { id:10, text: 'Item 10', imageSource: require('../assets/image88.jpg') },
//   { id:11, text: 'Item 11', imageSource: require('../assets/image99.jpg') },
//   { id: 12, text: 'Item 12', imageSource: require('../assets/images 1010.jpg') },
//   { id: 13, text: 'Item 13', imageSource: require('../assets/image1111.jpg') },
//   { id: 14, text: 'Item 14', imageSource: require('../assets/tech3.jpg') },
//   { id: 16, text: 'Item 16', imageSource: require('../assets/image44.jpg') },
//   ];

//   const offsetX = useSharedValue(0); // Assuming offsetX is being updated with the swipe position

//   return (
//     <ScrollView
//       horizontal
//       showsHorizontalScrollIndicator={false}
//       onScroll={(event) => {
//         offsetX.value = event.nativeEvent.contentOffset.x;
//       }}
//     >
//       {data.map((item, index) => (
//         <Card key={item.id} item={item} index={index} offsetX={offsetX} />
//       ))}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     margin: 10,
//     borderRadius: 8,
//     borderWidth: 2,
//     borderColor: '#E8E8E8',
//     justifyContent: 'center',
//     backgroundColor: 'white',
//   },
//   cardImage: {
//     width: Dimensions.get('window').width - 40,
//     height: Dimensions.get('window').height - 200,
//     borderRadius: 8,
//     resizeMode: 'cover',
//   },
// });

// export default YourComponent;