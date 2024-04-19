import {View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';


export default function WelcomeScreen(){

    const Navigation = useNavigation();

    return(
        <View className ="flex-1 justify-end items-center space-y-10 relative">
            <Image

                source={require("../../assets/WelcomeScreenPicture.jpg")}
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                }}
                resizeMode="cover"
            />
            
            <StatusBar style="light" />

            <View className="flex items-center justify-center py-80 max-w-[80%]">
                <View className="bg-red-600 p-4 rounded-3xl ml-5">
                    <Text className="text-white text-4xl font-extrabold tracking-widest my-4">AA</Text>
                </View>
                <Text className="text-white text-4xl font-bold tracking-widest my-4">Anime App</Text>
                <Text className="text-white tracking-widest mb-2 text-lg text-center font-medium">
                Watch and find anime that bring your mood back.
                </Text>
            </View>
            
            <View className="mb-2">
                <TouchableOpacity className="px-12 py-3 rounded-lg bg-red-600 ml-2" onPress={()=>Navigation.navigate("HomeTab")}>
                    <Text className="text-white text-lg font-medium" >
                            Explore
                    </Text>            
                </TouchableOpacity>
            </View>
        
        </View>
    );
}