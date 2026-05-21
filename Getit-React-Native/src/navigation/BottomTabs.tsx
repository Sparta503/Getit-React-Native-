import React from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeNavigator from './HomeNavigator';
import RentalsScreen from '../screens/rentals/RentalsScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import SettingsScreen from '../screens/settings/settings';
import RentalUploadScreen from '../screens/uploads/rental';
import { MainTabParamList } from './types';

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function BottomTabs() {
  // safety: ensure imported screens are valid components
  const resolveComponent = (c: any, name: string) => {
    if (typeof c === 'function') return c;

    if (
      c &&
      typeof c === 'object' &&
      typeof c.default === 'function'
    ) {
      return c.default;
    }

    console.warn(
      `BottomTabs: invalid component import for ${name}`,
      c
    );

    return () => (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>{name} unavailable</Text>
      </View>
    );
  };

  const ProfileComp = resolveComponent(
    ProfileScreen,
    'Profile'
  );

  const UploadComp = resolveComponent(
    RentalUploadScreen,
    'Upload'
  );

  const RentalsComp = resolveComponent(
    RentalsScreen,
    'Rentals'
  );

  const HomeComp = resolveComponent(
    HomeNavigator,
    'HomeTab'
  );

  const SettingsComp = resolveComponent(
    SettingsScreen,
    'Settings'
  );

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'HomeTab') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Rentals') {
            iconName = focused
              ? 'grid'
              : 'grid-outline';
          } else if (route.name === 'Upload') {
            iconName = focused
              ? 'add-circle'
              : 'add-circle-outline';
          } else if (route.name === 'Profile') {
            iconName = focused
              ? 'person'
              : 'person-outline';
          } else if (route.name === 'Settings') {
            iconName = focused
              ? 'settings'
              : 'settings-outline';
          } else {
            iconName = 'ellipse';
          }

          return (
            <View
              style={[
                styles.iconContainer,
                focused && styles.activeIconContainer,
              ]}
            >
              <Ionicons
                name={iconName}
                size={22}
                color={focused ? '#4F6EF7' : '#9CA3AF'}
              />
            </View>
          );
        },

        tabBarShowLabel: true,

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginBottom: Platform.OS === 'ios' ? 0 : 5,
        },

        tabBarActiveTintColor: '#4F6EF7',
        tabBarInactiveTintColor: '#9CA3AF',

        tabBarStyle: {
          position: 'absolute',
          left: 15,
          right: 15,
          bottom: 15,

          height: 75,

          borderRadius: 28,

          backgroundColor: 'rgba(255,255,255,0.92)',

          borderTopWidth: 0,

          paddingTop: 10,
          paddingBottom:
            Platform.OS === 'ios' ? 20 : 10,

          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 10,
          },

          shadowOpacity: 0.08,
          shadowRadius: 20,

          elevation: 10,
        },

        sceneStyle: {
          backgroundColor: '#F7F8FA',
        },
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeComp}
        options={{
          tabBarLabel: 'Home',
        }}
      />

      <Tab.Screen
        name="Rentals"
        component={RentalsComp}
        options={{
          tabBarLabel: 'Rentals',
        }}
      />

      <Tab.Screen
        name="Upload"
        component={UploadComp}
        options={{
          tabBarLabel: 'Upload',
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileComp}
        options={{
          tabBarLabel: 'Profile',
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsComp}
        options={{
          tabBarLabel: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  activeIconContainer: {
    backgroundColor: 'rgba(79,110,247,0.12)',
  },
});