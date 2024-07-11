// import React from 'react';
// import { View, FlatList } from 'react-native';
// import ProductItem from './ProductItem';

// const ProductList = ({ products, onAddToCart }) => {
//   return (
//     <FlatList
//       data={products}
//       keyExtractor={(item) => item.id.toString()}
//       numColumns={2}
//       renderItem={({ item }) => <ProductItem product={item} onAddToCart={onAddToCart} />}
//     />
//   );
// };

// export default ProductList;



import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import ProductItem from './ProductItem';

const ProductList = ({ products, onAddToCart, onProductClick }) => {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => (item.id !== undefined && item.id !== null) ? item.id.toString() : Math.random().toString()}
      numColumns={2}
      renderItem={({ item }) => (
        <TouchableOpacity 
          style={styles.touchableContainer} 
          onPress={() => onProductClick(item)}
        >
          <ProductItem product={item} onAddToCart={onAddToCart} />
        </TouchableOpacity>
          
      )}
    />
  );
};

const styles = StyleSheet.create({
  touchableContainer: {
    flex: 1,
  },
});

export default ProductList;