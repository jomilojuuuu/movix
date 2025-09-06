import SearchBar from "@/components/SearchBar";
import tw from "@/tailwind";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import MovieCard from "@/components/MovieCard";

export default function Index() {
  const router = useRouter();
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  return (
    <View style={tw`flex-1 bg-gray-900`}>
      <ScrollView
        style={tw`flex-1 px-5`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`min-h-[100%] pb-10`}
      >
        <Text style={tw`mt-20 mb-5 mx-auto text-2xl font-bold text-white`}>
          MOFIX
        </Text>

        {moviesLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={tw`mt-10 self-center`}
          />
        ) : moviesError ? (
          <Text>Error: {moviesError?.message}</Text>
        ) : (
          <View style={tw`flex-1 mt-5`}>
            <SearchBar
              onPress={() => {
                router.push("/search");
              }}
              placeholder="Search through 300+ movies online"
            />

            <>
              <Text style={tw`font-bold text-white text-lg mt-5 mb-3`}>
                Latest Movies
              </Text>
              <FlatList
                data={movies}
                renderItem={({ item }) => <MovieCard {...item} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={tw`flex-start gap-6 pr-5 mb-10`}
                style={tw`mt-2 pb-32 `}
                scrollEnabled={false}
              />
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
