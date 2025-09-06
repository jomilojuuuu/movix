import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "@/tailwind";
import { Link } from "expo-router";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}: Movie) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity style={tw`w-[30%]`}>
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : "https://placehold.co/600x400/1a1a1a/ffffff.png",
          }}
          style={tw`w-full h-52 rounded-lg`}
          resizeMode="cover"
        />

        <Text
          style={tw`font-bold text-white mt-2 text-sm`}
          numberOfLines={1}
        >
          {title}
        </Text>

        <View style={tw`flex-row items-center justify-start ml-1`}>
          <Text style={tw`text-base`}>⭐️</Text>
          <Text style={tw`text-xs text-white font-bold uppercase ml-1`}>
            {Math.round(vote_average / 2)}
          </Text>
        </View>

        <View style={tw`flex-row`}>
          <Text style={tw`text-xs text-white font-medium mt-1`}>
            {release_date?.split("-")[0]}
          </Text>
          {/* <Text style={tw`text-xs font-medium text-light-300 uppercase`}>movie</Text> */}
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
