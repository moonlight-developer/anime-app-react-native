import React from 'react';
import styled from 'styled-components/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo for icons
import SearchBar from '../../components/SearchBar';
import AnimeList from '../../components/AnimeList';
import Spacer from '../../components/shared/spacer';
import useAnimeList from '../../hooks/use-anime-list';
import { RootStackParamList } from '../app-navigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ColorScheme } from '../../theme/theme';
import ProfileScreen from '../ProfileScreen'; // Import ProfileScreen

type DiscoverScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const Tab = createBottomTabNavigator();

const ScreenBackground = styled.View`
  flex: 1;
  background-color: ${ColorScheme.background};
`;

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

const ScrollContainer = styled.ScrollView`
  flex: 1;
`;

function DiscoverTabScreen({ navigation }: DiscoverScreenProps) {
  const { animeListUiState: trending } = useAnimeList({ type: 'sort: TRENDING_DESC' });
  const { animeListUiState: popularThisYear } = useAnimeList({ type: 'seasonYear: 2023, sort: POPULARITY_DESC' });
  const { animeListUiState: popularAllTime } = useAnimeList({ type: 'sort: POPULARITY_DESC' });

  return (
    <ScreenBackground>
      <Container>
        <Spacer h='30px' />
        <SearchBar />
        <Spacer h='5px' />
        <ScrollContainer
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <AnimeList title='Trending now' animeListUiState={trending} navigation={navigation} />
          <Spacer h='20px' />
          <AnimeList title='Popular this year' animeListUiState={popularThisYear} navigation={navigation} />
          <Spacer h='20px' />
          <AnimeList title='Popular all time' animeListUiState={popularAllTime} navigation={navigation} />
          <Spacer h='20px' />
        </ScrollContainer>
      </Container>
    </ScreenBackground>
  );
}

export default function DiscoverScreen({ navigation }: DiscoverScreenProps) {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={DiscoverTabScreen} 
        initialParams={{ navigation }} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} // Change component to ProfileScreen
        initialParams={{ navigation }} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }} 
      />
    </Tab.Navigator>
  );
}
