// screens/ProfileScreen.tsx

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { firebase } from '../../config';
import { RootStackParamList } from './app-navigator';

export default function ProfileScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const currentUser = firebase.auth().currentUser;

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      navigation.navigate('Login');
    } catch (error) {
      console.log('Error signing out:', error); // Log the entire error object
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      {currentUser ? (
        <View style={styles.userInfo}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.info}>{currentUser.displayName || 'No Name'}</Text>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.info}>{currentUser.email || 'No Email'}</Text>
        </View>
      ) : (
        <Text style={styles.info}>User not found</Text>
      )}
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 30,
    alignSelf: 'center',
  },
  userInfo: {
    marginBottom: 20,
  },
  label: {
    color: '#ffffff',
    fontSize: 18,
    marginBottom: 5,
  },
  info: {
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    height: 50,
    backgroundColor: '#6200ee',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
