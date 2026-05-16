import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationProp } from '@react-navigation/native';
import { HomeStackParamList } from '../../navigation/types';

export default function HomeScreen({ navigation }: { navigation: NavigationProp<HomeStackParamList> }) {
  const myRentals = [
    {
      id: 1,
      name: 'Camera',
      amount: '$145/day',
      growth: '+20%',
      icon: 'camera',
      color: '#4F6EF7',
    },
    {
      id: 2,
      name: 'Laptop',
      amount: '$95/day',
      growth: '+12%',
      icon: 'laptop',
      color: '#7C3AED',
    },
    {
      id: 3,
      name: 'Bike',
      amount: '$40/day',
      growth: '+8%',
      icon: 'bike',
      color: '#F97316',
    },
    {
      id: 4,
      name: 'Drone',
      amount: '$120/day',
      growth: '+16%',
      icon: 'drone',
      color: '#06B6D4',
    },
    {
      id: 5,
      name: 'Speaker',
      amount: '$25/day',
      growth: '+5%',
      icon: 'speaker-wireless',
      color: '#10B981',
    },
  ];

  const trendingRentals = [
    {
      id: 1,
      title: 'Canon DSLR Camera',
      category: 'Electronics',
      price: '$50/day',
      growth: '+12%',
      icon: 'camera',
      color: '#4F6EF7',
    },
    {
      id: 2,
      title: 'Gaming Laptop',
      category: 'Computers',
      price: '$85/day',
      growth: '+18%',
      icon: 'laptop',
      color: '#7C3AED',
    },
    {
      id: 3,
      title: 'Mountain Bike',
      category: 'Outdoor',
      price: '$30/day',
      growth: '+9%',
      icon: 'bike',
      color: '#F97316',
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
            <Text style={styles.welcome}>Welcome</Text>
            <Text style={styles.name}>Mr Takunda</Text>
          </View>

          <View style={styles.headerRight}>
            <TouchableOpacity>
              <Image
                source={{
                  uri: 'https://via.placeholder.com/100',
                }}
                style={styles.profileImage}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.notificationButton}
              onPress={() => navigation.navigate('Notifications')}
            >
              <Ionicons name="notifications-outline" size={24} color="#111" />
              <View style={styles.notificationDot} />
            </TouchableOpacity>
          </View>
        </View>

        {/* DASHBOARD CARD */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Total Rental Earnings</Text>

          <Text style={styles.balanceAmount}>$4,50,933</Text>

          <Text style={styles.monthlyLabel}>Monthly Revenue</Text>

          <View style={styles.profitRow}>
            <Text style={styles.monthlyProfit}>$12,484</Text>

            <View style={styles.profitBadge}>
              <Ionicons name="caret-up" size={12} color="#fff" />
              <Text style={styles.profitPercent}>+10%</Text>
            </View>
          </View>
        </View>

        {/* TOGGLE */}
        <View style={styles.toggleContainer}>
          <TouchableOpacity style={styles.activeToggle}>
            <Text style={styles.activeToggleText}>Rentals</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.inactiveToggle}>
            <Text style={styles.inactiveToggleText}>Bookings</Text>
          </TouchableOpacity>
        </View>

        {/* MY RENTALS */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>My Rentals</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.portfolioContainer}
        >
          {myRentals.map((item) => (
            <View style={styles.portfolioCard} key={item.id}>
              <View style={styles.coinRow}>
                <View
                  style={[
                    styles.dynamicIcon,
                    { backgroundColor: item.color },
                  ]}
                >
                  <MaterialCommunityIcons
                    name={item.icon as any}
                    size={28}
                    color="#fff"
                  />
                </View>

                <Text style={styles.coinName}>{item.name}</Text>
              </View>

              <Text style={styles.portfolioLabel}>Rental Income</Text>

              <View style={styles.portfolioBottom}>
                <Text style={styles.portfolioPrice}>{item.amount}</Text>

                <Text style={styles.portfolioGrowth}>▲ {item.growth}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* TRENDING RENTALS */}
        <View style={styles.popularHeader}>
          <Text style={styles.sectionTitle}>Trending Rentals</Text>

          <TouchableOpacity>
            <Text style={styles.seeMore}>See More</Text>
          </TouchableOpacity>
        </View>

        {trendingRentals.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.currencyCard}
          >
            <View style={styles.currencyLeft}>
              <View
                style={[
                  styles.dynamicIconSmall,
                  { backgroundColor: item.color },
                ]}
              >
                <MaterialCommunityIcons
                  name={item.icon as any}
                  size={24}
                  color="#fff"
                />
              </View>

              <View>
                <Text style={styles.currencyName}>{item.title}</Text>

                <View style={styles.currencyInfo}>
                  <Text style={styles.currencySymbol}>{item.category}</Text>

                  <Text style={styles.currencyGrowth}>▲ {item.growth}</Text>
                </View>

                {/* ONLY FIX APPLIED HERE */}
                <Text style={[styles.currencyPrice, { marginTop: 4 }]}>{item.price}</Text>
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
    backgroundColor: '#F7F7F7',
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
  },

  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  welcome: {
    fontSize: 18,
    color: '#A0A0A0',
    marginBottom: 4,
  },

  name: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111',
  },

  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 18,
  },

  notificationButton: {
    width: 50,
    height: 50,
    borderRadius: 18,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },

  notificationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FF3B30',
    position: 'absolute',
    top: 10,
    right: 10,
  },

  balanceCard: {
    backgroundColor: '#4F6EF7',
    borderRadius: 30,
    padding: 25,
    marginTop: 28,
  },

  balanceLabel: {
    color: '#D7DEFF',
    fontSize: 18,
    marginBottom: 10,
  },

  balanceAmount: {
    color: '#fff',
    fontSize: 42,
    fontWeight: '700',
  },

  monthlyLabel: {
    color: '#D7DEFF',
    fontSize: 18,
    marginBottom: 10,
  },

  profitRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  monthlyProfit: {
    color: '#fff',
    fontSize: 34,
    fontWeight: '700',
  },

  profitBadge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  profitPercent: {
    color: '#fff',
    fontWeight: '600',
  },

  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#ECECEC',
    borderRadius: 18,
    padding: 5,
    marginTop: 25,
  },

  activeToggle: {
    flex: 1,
    backgroundColor: '#4F6EF7',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },

  inactiveToggle: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center',
  },

  activeToggleText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },

  inactiveToggleText: {
    color: '#777',
    fontWeight: '600',
    fontSize: 16,
  },

  sectionHeader: {
    marginTop: 35,
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111',
  },

  portfolioContainer: {
    paddingRight: 20,
  },

  portfolioCard: {
    width: 230,
    backgroundColor: '#fff',
    borderRadius: 28,
    padding: 22,
    marginRight: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 5,
  },

  coinRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },

  dynamicIcon: {
    width: 55,
    height: 55,
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  dynamicIconSmall: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  coinName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111',
  },

  portfolioLabel: {
    color: '#9A9A9A',
    fontSize: 18,
    marginBottom: 10,
  },

  portfolioBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  portfolioPrice: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111',
  },

  portfolioGrowth: {
    color: '#4F6EF7',
    fontWeight: '700',
    fontSize: 16,
  },

  popularHeader: {
    marginTop: 35,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  seeMore: {
    color: '#4F6EF7',
    fontWeight: '700',
    fontSize: 18,
  },

  currencyCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 18,
    marginBottom: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },

  currencyLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  currencyName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111',
  },

  currencyInfo: {
    flexDirection: 'row',
    marginTop: 4,
    gap: 10,
  },

  currencySymbol: {
    color: '#777',
    fontSize: 16,
  },

  currencyGrowth: {
    color: '#4F6EF7',
    fontWeight: '600',
    fontSize: 16,
  },

  currencyPrice: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111',
  },
});