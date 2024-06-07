import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import {BellIcon, MagnifyingGlassIcon,} from "react-native-heroicons/outline"
import {useNavigation} from "@react-navigation/native"
import {useQuery} from '@tanstack/react-query'
import {animeData} from '../../util/animeapi'

export default function HomeScreen(){

    const navigation = useNavigation();
    const [animePictures, SetAnimePictures] = useState([]);

    const {isLoading: isAnimePictureLoading} = useQuery({
        queryKey: ["animePictures"],
        queryFn: animeData,
        onSuccess: (data) => {
            SetAnimePictures(data.results);
        },
        onError: (error) => {
            console.log("Error fetching anime pictures", error);
        },
    });

    console.log("Anime Pictures", animePictures);

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

                    
                    
                </View>

                {
                    isAnimePictureLoading ? (
                        <Loading />
                    ) : (
                        <ScrollView> 
                            {animePictures?.length > 0 && <AnimePictures data={animePictures} />}
                        </ScrollView>
                    )
                }

                <AnimePictures data= {animePictures} />
            </ScrollView>
            
        </View>
    );
}