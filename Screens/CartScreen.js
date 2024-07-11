import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getData, storeData } from '../Storage/storage';

import Header from "../Components/Header"
const CartScreen = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const storedCart = await getData('cart');
      if (storedCart) {
        setCart(storedCart);
      }
    };
    fetchCart();
  }, []);

  const handleRemoveFromCart = async (id) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
    await storeData('cart', newCart);
  };

  const calculateTool = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  }

  return (
    <View style={styles.container}>
      <Header/>

      {/* <View>
      <Text style={styles.title}>CHECKOUT</Text>
      <Image source={require("../assets/icons/shipping.png")}/>
      <Text ></Text>
      <Image source={require("../assets/icons/shipping.png")}/>
      </View> */}

      <View style={styles.overAll}>
      <Text style={styles.headerText}>CHECKOUT</Text>
      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <View style={styles.diamondContainer}>
          <View style={styles.diamond} />
        </View>
        <View style={styles.line} />
      </View>
    </View>


      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => handleRemoveFromCart(item.id)}>
              <Image source={require('../assets/images/remove.png')} style={styles.removeIcon} />
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.estimate}>
        <Text style={styles.estimateTotal}>EST. TOTAL</Text>
        <Text style={styles.estimateAmount}>$240</Text>
      </View>
        <TouchableOpacity style={styles.addButton} onPress={() => handleAddToCart(product)}>
                   <Image source={require('../assets/icons/White shopping bag.png')} style={styles.btIcon} />                     
                     <Text style={styles.buttonText}>CHECKOUT</Text>
                </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
    marginLeft: 100,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  // title: {
  //   fontSize: 24,
  //   fontWeight: '',
  //   fontFamily: 'crake test',
  //   textAlign: 'center',
  //   marginVertical: 20,
  //   marginTop: -10,
  // },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  itemImage: {
    width: 80,
    height: 120,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    color: '#f60',
    fontWeight: 'bold',
  },
  removeIcon: {
    width: 24,
    height: 24,
  },
  addButton: {
    flex: 1,
    flexDirection: "row",
    // justifyContent: "space-between",
    padding: 16,
    backgroundColor: '#000',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
    padding: 30,
    margin: 10,
},
btIcon:{
    color: "#ffff",
    width: 24,
    height: 24,  
    marginLeft: 100,
},

buttonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
    
},


overAll: {
    alignItems: 'center',
    marginVertical: 10,
    marginTop: -10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: "crake text",
    marginBottom: 10,
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    width: 50,
    backgroundColor: '#D5D5D5',
    
  },
  diamondContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 16,
    height: 16,
    marginHorizontal: 5,
  },
  diamond: {
    width: 10,
    height: 10,
    backgroundColor: 'black',
    transform: [{ rotate: '45deg' }],
  },

  estimate:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginBottom: 10,

  },
  estimateTotal:{
    marginLeft: 10,
    fontFamily: "Poppins",
    fontSize: 15,

  },
  estimateAmount:{
    marginRight:10,
    fontFamily: "Poppins",
    fontSize: 22,
    color: "red",

  },
});

export default CartScreen;