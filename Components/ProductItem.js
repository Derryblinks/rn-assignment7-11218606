import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={product.image} style={styles.image} />
        <TouchableOpacity onPress={() => onAddToCart(product)} style={styles.cartButton}>
          <Image source={require('../assets/images/add_circle.png')} style={styles.addToCart} />
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.title}</Text>
        <Text style={styles.description}>{product.category}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%', 
    margin: '1%', 
    padding: 10,
    backgroundColor: '#fff', 
    alignItems: 'center', 
    position: 'relative', 
  },
  imageContainer: {
    width: '100%',
    height: 300,
    marginBottom: 10,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    alignItems: 'left', 
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
    textAlign: 'left', 
  },
  price: {
    fontSize: 16,
    color: '#f60', 
    marginBottom: 10,
  },
  cartButton: {
    position: 'absolute',
    bottom: 10, 
    right: 10,
  },
  addToCart: {
    width: 24,
    height: 24,
  },
});

export default ProductItem;