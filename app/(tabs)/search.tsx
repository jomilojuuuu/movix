import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import tw from "@/tailwind";
import MovieCard from "@/components/MovieCard";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import SearchBar from "@/components/SearchBar";

const Search = () => {
  const [searchQuery, setsearchQuery] = useState("");

  const {
    data: movies,
    loading,
    error
  } = useFetch(() => fetchMovies({ query: searchQuery }), true);

  return (
    <View style={tw`flex-1 bg-gray-900`}>
      <Text style={tw`mt-20 mb-5 mx-auto text-2xl font-bold text-white`}>
        MOFIX
      </Text>
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={tw`flex-start gap-6 pr-5 mb-10`}
        style={tw`mt-2 pb-32 px-5 `}
        ListHeaderComponent={
          <>
            <View
              style={tw`w-full text-white flex-row justify-center mb-10 items-center`}
            >
              <SearchBar value={searchQuery} onChangeText={(text: string)=>setsearchQuery(text)} placeholder="Search movies..." />
            </View>

            {loading && (
              <ActivityIndicator
                size="large"
                color="#0000ff"
                style={tw`mt-10 self-center`}
              />
            )}

            {error && (
              <Text style={tw`text-red-500`}>
                Error: {error?.message}
              </Text>
            )}

            {!loading &&
              !error &&
              searchQuery.trim() &&
              movies?.length > 0 && (
                <Text style={tw`font-bold text-white text-lg mb-3`}>
                  Search Results for {""}
                  <Text style={tw`font-bold text-pink-500 text-lg mb-3`}>
                    {searchQuery}
                  </Text>
                </Text>
              )}
          </>
        }
      />
    </View>
  );
};

export default Search;
