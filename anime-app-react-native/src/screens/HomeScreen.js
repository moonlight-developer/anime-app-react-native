import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {BellIcon, MagnifyingGlassIcon,} from "react-native-heroicons/outline"
import {useNavigation} from "@react-navigation/native"
import TrendingAnime from '../components/TrendingAnime'

export default function HomeScreen(){

    const navigation = useNavigation();
    return(
        <View className="flex-1">
            <Image 
                source={require("../../assets/TestPicture.jpg")}
                style={
                    {
                        position: "absolute",
                        height: "100%",
                        width: "100%"
                    }
                }
                resizeMode="cover"
            />
            <ScrollView className="mt-16">
                <StatusBar style="light"/>
                {/*Welcome title*/}

                <View className="flex-row justify-between items-center mx-4 mg-4">
                    <View className="border-2 border-black rounded-full overflow-hidden">
                        <Image source={require("../../assets/TestPicture.jpg")}

                            style={{
                                width: 45,
                                height: 45,
                            }}
                            resizeMode='cover'
                        />
                    </View>
                    {/*notification and search icon*/}
                    <View className="flex-row space-x-4">
                        <BellIcon size={30} strokeWidth={2} color="black"/>
                        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                            <MagnifyingGlassIcon size={30} strokeWidth={2} color="black"/>
                        </TouchableOpacity>
                    </View>

                    {/*Anime Cards*/}
                    
                </View>
                <TrendingAnime />
            </ScrollView>
            
        </View>
    );
}