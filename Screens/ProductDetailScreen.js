import React,  {useState, useEffect} from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Header from '../Components/Header'; 
import { storeData, getData } from '../Storage/storage';


const ProductDetailScreen = ({ route, navigation }) => {
    const { product } = route.params;

    const [cart, setCart] = useState([]);

    const handleAddToCart = async (product) => {
        let newProduct;
        if (typeof product.price === 'string') {
          newProduct = { ...product, price: parseFloat(product.price.replace('$', '')) };
        } else {
          newProduct = { ...product };
        }
        const newCart = [...cart, newProduct];
        setCart(newCart);
        await storeData('cart', newCart);
    };

    
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView contentContainerStyle={styles.scrollContent}>
                
                <Image source={{ uri: product.image }} style={styles.image} />
                
                
                <View style={styles.textLogo}>
                <Text style={styles.name}>{product.title} </Text>
                <TouchableOpacity>
                <Image source={require("../assets/icons/Export.png")} style={ styles.exportLogo}/>
                </TouchableOpacity>
                </View>
                
                <View>
                <Text style={styles.price}>${product.price}</Text>
                <Text style={styles.material}>MATERIALS</Text>
                <Text style={styles.description}>{product.description}</Text>
                </View>
                
                <View style={styles.infoContainer}>
                    <View style={styles.infoItem}>
                        <Image source={require('../assets/icons/Do Not Bleach.png')} style={styles.infoIcon} />
                        <Text style={styles.infoText}>Do not use bleach</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Image source={require('../assets/icons/Do Not Tumble Dry.png')} style={styles.infoIcon} />
                        <Text style={styles.infoText}>Do not tumble dry</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Image source={require('../assets/icons/Do Not Wash.png')} style={styles.infoIcon} />
                        <Text style={styles.infoText}>Dry clean with tetrachloroethylene</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Image source={require('../assets/icons/Iron Low Temperature.png')} style={styles.infoIcon} />
                        <Text style={styles.infoText}>Iron at a maximum of 110°C/230°F</Text>
                    </View>
                    <View style={styles.empty}></View>
                </View>

                <View style={styles.shippingContainer}>
                    <Image source={require('../assets/icons/Shipping.png')} style={styles.shippingIcon} />                   
                    <Text style={styles.shippingText}>Free Flat Rate Shipping</Text>
                    <Image source={require('../assets/icons/Up.png')} style={styles.upIcon} />                                        
                </View>
                <View style={styles.date}>
                    <Text style={styles.deliveryDate}>Estimated to be delivered on</Text>
                    <Text style={styles.deliveryDate}> 09/11/2021 - 12/11/2021</Text>
                </View>
                

                <TouchableOpacity style={styles.addButton} onPress={() => handleAddToCart(product)}>
                   <Image source={require('../assets/icons/WhitePlus.png')} style={styles.btIcon} />                     
                     <Text style={styles.buttonText}>ADD TO BASKET</Text>
                     <TouchableOpacity>
                    <Image source={require('../assets/icons/WhiteHeart.png')} style={styles.btIcon} />
                    </TouchableOpacity>                                        
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        padding: 16,
    },
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        marginBottom: 16,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    textLogo:{
       flex: 1,
       flexDirection: "row",
       justifyContent:"space-between"
    },

    price: {
        fontSize: 20,
        color: '#f60',
        marginBottom: 8,
        marginTop: 8,
        paddingTop: 20,
    },
    material:{
        fontFamily:"Poppins",
        fontSize: 20,
        marginTop: 8,
        marginBottom: 8,
    },

    description: {
        fontSize: 16,
        marginBottom: 16,
    },

    empty:{
        marginBottom: 20,
    },

    infoContainer: {
        marginBottom: 16,
        borderBottomWidth: .5,
        borderBottomColor: "#D9D9D9",
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 13,
    },
    infoIcon: {
        width: 24,
        height: 24,
        marginRight: 8,
    },
    infoText: {
        fontSize: 16,
    },
    shippingContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        // marginBottom: 16,
        alignItems: 'left',
    },
    upIcon:{
        width: 24,
        height: 24,
        marginLeft: 100,
    },

    shippingIcon: {
        width: 24,
        height: 24,
        marginRight: 8,
        marginBottom: 8,
    },
    shippingText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
        marginLeft: -20,
    },
    deliveryDate: {
        fontSize: 14,
        color: '#555',
        alignItems: "left",
        marginLeft: 30,
    },
    date:{
        marginTop: -12,
        marginBottom: 16,
        marginLeft: 5,

    },

    addButton: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,
        backgroundColor: '#000',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 16,
    },
    btIcon:{
        color: "#ffff",
        width: 24,
        height: 24,        
    },
    
    buttonText: {
        color: '#fff',
        fontSize: 16,
        marginLeft: -130,
    },
});

export default ProductDetailScreen