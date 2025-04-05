import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

const categories = ['Todo', 'Ropa', 'Electrónica', 'Hogar', 'Accesorios', 'Juguetes', 'Oficina'];

const HomeScreen = () => {

  const renderProductCard = () => (
    <View style={styles.card}>
      <Image
        source={{ uri: 'https://via.placeholder.com/80' }}
        style={styles.productImage}
      />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>Nombre del Producto</Text>
        <Text style={styles.productPrice}>Q100.00</Text>
      </View>
      <View style={styles.quantityControls}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="add" size={20} color="#000" />
        </TouchableOpacity>
        <TextInput
          style={styles.quantityInput}
          keyboardType="numeric"
          defaultValue="1"
        />
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="remove" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* 🔍 Buscador */}
      <View style={styles.searchRow}>
      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          placeholder="Buscar producto..."
          style={styles.searchInput}
        />
      </View>

      <TouchableOpacity style={styles.cartButton}>
    <Ionicons name="cart-outline" size={24} color="#007aff" />
  </TouchableOpacity>

      </View>

      {/* 🗂️ Categorías */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
      >
        {categories.map((cat, index) => (
          <TouchableOpacity key={index} style={styles.categoryButton}>
            <Text style={styles.categoryText}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* 🛒 Lista de productos */}
      <FlatList
        data={[1,2,3,4,5,6,7,8,9,10,11,12,13]} // Aquí puedes mapear tu lista real
        renderItem={renderProductCard}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      {/* ➕ Botón flotante */}
      <TouchableOpacity style={styles.floatingButton}>
        <Ionicons name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
    height: 40,
    width: '85%'
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
  },
  cartButton: {
    marginLeft: 12,
    padding: 8,
    backgroundColor: '#e0f0ff',
    borderRadius: 8,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fafafa',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    marginTop: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: '#ddd',
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 6,
  },
  quantityInput: {
    width: 40,
    height: 30,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 4,
    borderRadius: 4,
    fontSize: 16,
    padding: 0,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    backgroundColor: '#3AB0FF',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  categoriesContainer: {
    marginTop: 16,
    marginBottom: 16,
    flexDirection: 'row',
    gap: 8,
    paddingVertical: 4,
  },
  categoryButton: {
    backgroundColor: '#e0f0ff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    height: 38,
  },
  categoryText: {
    fontSize: 14,
    color: '#007aff',
    fontWeight: '500',
  },
 

});
