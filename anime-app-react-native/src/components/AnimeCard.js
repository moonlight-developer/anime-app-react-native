import {View, Text, Dimensions, TouchableWithoutFeedback} from 'react-native'
import React from 'react'

var {widht, height} = Dimensions.get("window");

export default function AnimeCard(){
    console.log("movieImage", item.posterPath);
    return(
        <TouchableWithoutFeedback onPress={()=>handleClick(item)}>
            <Image
                source= {{
                    uri: image500(item.posterPath),
                }}
                style = {{
                    width: width * 0.8,
                    height: height* 0.25,
                }}
                resizeMode= "cover"
                className= "rounded-3xl"
            />
        </TouchableWithoutFeedback>
    );
}