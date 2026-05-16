import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Main: NavigatorScreenParams<MainTabParamList>;
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type MainTabParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Rentals: undefined;
  Profile: undefined;
  Settings: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  Search: undefined;
  ItemDetails: { itemId: string };
};