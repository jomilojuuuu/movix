import tw from "@/tailwind";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Text style={tw`text-lg text-blue-300 font-bold`}>my first app</Text>
    </View>
  );
}