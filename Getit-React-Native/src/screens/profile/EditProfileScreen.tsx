import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@/navigation/types';

export default function EditProfileScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [name, setName] = useState('Peter Jones');
  const [email, setEmail] = useState('peterjones@gmail.com');

  const onSave = () => {
    // persist changes here (placeholder)
    Alert.alert('Saved', 'Profile changes saved');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Name" />
      <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Email" keyboardType="email-address" />

      <TouchableOpacity style={styles.saveButton} onPress={onSave}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 16 },
  input: { borderWidth: 1, borderColor: '#eee', padding: 12, borderRadius: 8, marginBottom: 12 },
  saveButton: { backgroundColor: '#4F6EF7', padding: 14, borderRadius: 8, alignItems: 'center', marginTop: 12 },
  saveText: { color: '#fff', fontWeight: '700' },
});
