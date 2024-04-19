import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './src/navigation';
import {initializeApp} from '@firebase/app'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signout} from '@firebase/auth'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const firebaseConfig = {
  apiKey: "AIzaSyD6xjQAh46U2Y9uIcA_oEFANBBO3WxuQEI",
  authDomain: "anime-app-19cf5.firebaseapp.com",
  projectId: "anime-app-19cf5",
  storageBucket: "anime-app-19cf5.appspot.com",
  messagingSenderId: "382104175527",
  appId: "1:382104175527:web:e3f90bf53c90251efeac82",
  measurementId: "G-0THWG22FV3"
};

const app = initializeApp(firebaseConfig);

const queryClient = new QueryClient();

export default function App(email, setEmail, setPassword, isLogin, setIsLogin, handleAuthentication) {
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigation />
    </QueryClientProvider>
  );
}