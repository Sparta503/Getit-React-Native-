import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'rentals_v1';

export default async function saveRental(rental: any) {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    const list = raw ? JSON.parse(raw) : [];
    list.unshift(rental);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch (e) {
    throw e;
  }
}

export async function getRentals() {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}
