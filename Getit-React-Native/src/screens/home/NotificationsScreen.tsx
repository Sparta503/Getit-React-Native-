import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationProp } from '@react-navigation/native';
import { HomeStackParamList } from '../../navigation/types';

export default function NotificationsScreen({ navigation }: { navigation: NavigationProp<HomeStackParamList> }) {
  const notifications = [
    {
      id: 1,
      title: 'New booking request',
      message: 'John Doe wants to rent your Camera for 3 days',
      time: '2 hours ago',
      unread: true,
    },
    {
      id: 2,
      title: 'Payment received',
      message: 'You received $150 for Camera rental',
      time: '5 hours ago',
      unread: true,
    },
    {
      id: 3,
      title: 'Rental completed',
      message: 'Your Laptop rental has been completed',
      time: '1 day ago',
      unread: false,
    },
    {
      id: 4,
      title: 'New review',
      message: 'Sarah left you a 5-star review',
      time: '2 days ago',
      unread: false,
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#111" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.container}>
        {notifications.map((notification) => (
          <View
            key={notification.id}
            style={[styles.notificationCard, notification.unread && styles.unreadCard]}
          >
            <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>{notification.title}</Text>
              <Text style={styles.notificationMessage}>{notification.message}</Text>
              <Text style={styles.notificationTime}>{notification.time}</Text>
            </View>
            {notification.unread && <View style={styles.unreadDot} />}
          </View>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  notificationCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  unreadCard: {
    backgroundColor: '#F0F7FF',
    borderWidth: 1,
    borderColor: '#4F6EF7',
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  notificationTime: {
    fontSize: 12,
    color: '#999',
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4F6EF7',
    marginLeft: 12,
    marginTop: 6,
  },
});
