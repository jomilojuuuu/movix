import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import tw from "@/tailwind";

interface props {
  onPress?: () => void;
  placeholder: string;
}

const SearchBar = ({ onPress, placeholder }: props) => {
  return (
    <View style={tw`flex-row items-center bg-gray-800 rounded-full px-5 py-4`}>
      {/* Icon */}
      <Ionicons name="search" size={24} color="white" />

      {/* Input */}
      <TextInput
        style={tw`flex-1 text-white ml-2 text-base`}
        placeholder={placeholder}
        placeholderTextColor="#ccc"
        value=""
        onPress={onPress}
        onChangeText={() => {}}
        onFocus={() => {}}
      />
    </View>
  );
};

export default SearchBar;
