import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function CarsScreen() {
  const cars = [
    {
      id: 1,
      title: 'BMW M4 Competition',
      price: '$220/day',
      image:
        'https://images.unsplash.com/photo-1555215695-3004980ad54e',
    },
    {
      id: 2,
      title: 'Mercedes Benz C63',
      price: '$180/day',
      image:
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Cars</Text>

      {cars.map((item) => (
        <TouchableOpacity key={item.id} style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.image} />

          <View style={styles.content}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
    padding: 20,
  },

  header: {
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 25,
    marginBottom: 20,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: 220,
  },

  content: {
    padding: 16,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
  },

  price: {
    marginTop: 8,
    fontSize: 18,
    color: '#4F6EF7',
    fontWeight: '700',
  },
});