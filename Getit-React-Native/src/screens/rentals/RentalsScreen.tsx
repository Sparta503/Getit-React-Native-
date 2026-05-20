import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

export default function RentalsScreen() {
  const categories = [
    {
      id: 1,
      name: 'Cars',
      icon: 'car-sport',
      color: '#4F6EF7',
    },
    {
      id: 2,
      name: 'Accessories',
      icon: 'watch',
      color: '#7C3AED',
    },
    {
      id: 3,
      name: 'Buildings',
      icon: 'office-building',
      color: '#10B981',
    },
    {
      id: 4,
      name: 'Electronics',
      icon: 'laptop',
      color: '#F97316',
    },
    {
      id: 5,
      name: 'Furniture',
      icon: 'sofa',
      color: '#EC4899',
    },
  ];

  const rentals = [
    {
      id: 1,
      title: 'BMW M4 Competition',
      description:
        'Luxury sports car available for weddings, trips and events.',
      price: '$220/day',
      location: 'Harare',
      image:
        'https://images.unsplash.com/photo-1555215695-3004980ad54e',
    },

    {
      id: 2,
      title: 'Canon DSLR Camera',
      description:
        'Professional camera for photoshoots and video production.',
      price: '$45/day',
      location: 'Borrowdale',
      image:
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
    },

    {
      id: 3,
      title: 'Modern Apartment',
      description:
        '2 bedroom apartment with WiFi, solar backup and parking.',
      price: '$90/day',
      location: 'Avondale',
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
    },

    {
      id: 4,
      title: 'Gaming Laptop',
      description:
        'High performance laptop for gaming and editing.',
      price: '$60/day',
      location: 'CBD',
      image:
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.subtitle}>
              Find the best rentals
            </Text>

            <Text style={styles.title}>
              Explore Marketplace
            </Text>
          </View>

          <TouchableOpacity style={styles.searchButton}>
            <Ionicons
              name="search"
              size={24}
              color="#111"
            />
          </TouchableOpacity>
        </View>

        {/* CATEGORIES */}
        <View style={styles.categoryHeader}>
          <Text style={styles.sectionTitle}>
            Categories
          </Text>

          <TouchableOpacity>
            <Text style={styles.seeAll}>
              See All
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryContainer}
        >
          {categories.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.categoryCard}
              activeOpacity={0.8}
            >
              <View
                style={[
                  styles.categoryIcon,
                  { backgroundColor: item.color },
                ]}
              >
                <MaterialCommunityIcons
                  name={item.icon}
                  size={28}
                  color="#fff"
                />
              </View>

              <Text style={styles.categoryText}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* RENTAL LIST */}
        <View style={styles.rentalHeader}>
          <Text style={styles.sectionTitle}>
            Available Rentals
          </Text>
        </View>

        {rentals.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.rentalCard}
            activeOpacity={0.9}
          >
            {/* IMAGE */}
            <Image
              source={{ uri: item.image }}
              style={styles.rentalImage}
            />

            {/* DETAILS */}
            <View style={styles.rentalContent}>
              <View style={styles.topRow}>
                <Text style={styles.rentalTitle}>
                  {item.title}
                </Text>

                <TouchableOpacity>
                  <Ionicons
                    name="heart-outline"
                    size={22}
                    color="#999"
                  />
                </TouchableOpacity>
              </View>

              <Text style={styles.rentalDescription}>
                {item.description}
              </Text>

              <View style={styles.locationRow}>
                <Ionicons
                  name="location-outline"
                  size={16}
                  color="#777"
                />

                <Text style={styles.locationText}>
                  {item.location}
                </Text>
              </View>

              <View style={styles.bottomRow}>
                <Text style={styles.price}>
                  {item.price}
                </Text>

                <TouchableOpacity
                  style={styles.rentButton}
                >
                  <Text style={styles.rentButtonText}>
                    Rent Now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F8FA',
  },

  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },

  subtitle: {
    color: '#777',
    fontSize: 16,
    marginBottom: 6,
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#111',
  },

  searchButton: {
    width: 55,
    height: 55,
    borderRadius: 18,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },

    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4,
  },

  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },

  rentalHeader: {
    marginTop: 35,
    marginBottom: 18,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111',
  },

  seeAll: {
    color: '#4F6EF7',
    fontWeight: '700',
  },

  categoryContainer: {
    paddingRight: 20,
  },

  categoryCard: {
    alignItems: 'center',
    marginRight: 18,
  },

  categoryIcon: {
    width: 72,
    height: 72,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  categoryText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },

  rentalCard: {
    backgroundColor: '#fff',
    borderRadius: 30,
    marginBottom: 24,
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },

    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 4,
  },

  rentalImage: {
    width: '100%',
    height: 220,
  },

  rentalContent: {
    padding: 18,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  rentalTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111',
    flex: 1,
  },

  rentalDescription: {
    color: '#666',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 14,
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },

  locationText: {
    color: '#777',
    marginLeft: 5,
    fontSize: 15,
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  price: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111',
  },

  rentButton: {
    backgroundColor: '#4F6EF7',
    paddingHorizontal: 22,
    paddingVertical: 14,
    borderRadius: 18,
  },

  rentButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
});