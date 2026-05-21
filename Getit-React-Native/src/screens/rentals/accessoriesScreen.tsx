import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

export default function AccessoriesScreen() {
  const accessories = [
    {
      id: 1,
      title: 'Rolex Watch',
      price: '$40/day',
      image:
        'https://images.unsplash.com/photo-1523170335258-f5ed11844a49',
    },

    {
      id: 2,
      title: 'Luxury Handbag',
      price: '$30/day',
      image:
        'https://images.unsplash.com/photo-1584917865442-de89df76afd3',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Accessories</Text>

      {accessories.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.image} />

          <View style={styles.content}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </View>
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
    overflow: 'hidden',
    marginBottom: 20,
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