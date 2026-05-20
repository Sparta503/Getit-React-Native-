import React from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@/navigation/types';
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

export default function ProfileScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const menuItems = [
    {
      id: 1,
      title: 'My Rentals',
      icon: 'home-outline',
      color: '#4F6EF7',
    },
    {
      id: 2,
      title: 'Bookings',
      icon: 'calendar-outline',
      color: '#10B981',
    },
    {
      id: 3,
      title: 'Saved Items',
      icon: 'heart-outline',
      color: '#EC4899',
    },
    {
      id: 4,
      title: 'Payment Methods',
      icon: 'card-outline',
      color: '#F97316',
    },
    // moved Notifications and Settings to the Settings screen
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.smallText}>
            Your Account
          </Text>

          <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('EditProfile')}>
            <Ionicons
              name="create-outline"
              size={18}
              color="#111"
            />
          </TouchableOpacity>
        </View>

        {/* PROFILE CARD */}
        <View style={styles.profileCard}>
          <View style={styles.profileInner}>
            <Image
              source={{
                uri: 'https://via.placeholder.com/300',
              }}
              style={styles.profileImage}
            />

            <Text style={styles.name}>
              Peter Jones
            </Text>

            <Text style={styles.email}>
              peterjones@gmail.com
            </Text>

            <View style={styles.locationRow}>
              <Ionicons
                name="location-outline"
                size={16}
                color="#777"
              />

              <Text style={styles.locationText}>
                Harare, Zimbabwe
              </Text>
            </View>

            {/* STATS */}
            <View style={styles.statsContainer}>
              <View style={styles.statBox}>
                <Text style={styles.statNumber}>
                  28
                </Text>

                <Text style={styles.statLabel}>
                  Rentals
                </Text>
              </View>

              <View style={styles.divider} />

              <View style={styles.statBox}>
                <Text style={styles.statNumber}>
                  142
                </Text>

                <Text style={styles.statLabel}>
                  Bookings
                </Text>
              </View>

              <View style={styles.divider} />

              <View style={styles.statBox}>
                <Text style={styles.statNumber}>
                  4.9
                </Text>

                <Text style={styles.statLabel}>
                  Rating
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* WALLET CARD removed - moved to Settings */}

        {/* MENU SECTION */}
        <View style={styles.menuContainer}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuCard}
              activeOpacity={0.9}
            >
              <View style={styles.menuLeft}>
                <View
                  style={[
                    styles.iconContainer,
                    {
                      backgroundColor: item.color,
                    },
                  ]}
                >
                  <Ionicons
                    name={item.icon}
                    size={22}
                    color="#fff"
                  />
                </View>

                <Text style={styles.menuTitle}>
                  {item.title}
                </Text>
              </View>

              <Ionicons
                name="chevron-forward"
                size={20}
                color="#999"
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout moved to Settings screen */}

        <View style={{ height: 40 }} />
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
    padding: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  smallText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111',
  },

  editButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },

  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    marginTop: 12,
    paddingVertical: 6,
    paddingHorizontal: 14,
    alignItems: 'center',
    marginBottom: 8,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 2,
  },

  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },

  name: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111',
  },

  email: {
    fontSize: 13,
    color: '#777',
    marginTop: 4,
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  locationText: {
    marginLeft: 5,
    color: '#777',
    fontSize: 15,
  },

  statsContainer: {
    flexDirection: 'row',
    marginTop: 8,
    backgroundColor: '#F7F8FA',
    borderRadius: 16,
    paddingVertical: 8,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  statBox: {
    alignItems: 'center',
  },

  statNumber: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111',
  },

  statLabel: {
    color: '#777',
    marginTop: 4,
    fontSize: 12,
  },

  profileInner: {
    marginTop: -40,
    alignItems: 'center',
  },

  divider: {
    width: 1,
    height: 40,
    backgroundColor: '#DDD',
  },

  walletCard: {
    backgroundColor: '#4F6EF7',
    borderRadius: 30,
    padding: 24,
    marginBottom: 28,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    shadowColor: '#4F6EF7',
    shadowOffset: {
      width: 0,
      height: 8,
    },

    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 5,
  },

  walletLabel: {
    color: '#DCE4FF',
    fontSize: 16,
    marginBottom: 8,
  },

  walletAmount: {
    color: '#fff',
    fontSize: 34,
    fontWeight: '800',
  },

  walletIcon: {
    width: 65,
    height: 65,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  menuContainer: {
    marginBottom: 30,
  },

  menuCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 18,
    marginBottom: 16,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },

  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconContainer: {
    width: 55,
    height: 55,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },

  menuTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111',
  },

  logoutButton: {
    backgroundColor: '#111827',
    borderRadius: 24,
    paddingVertical: 18,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoutText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
    marginLeft: 10,
  },
});