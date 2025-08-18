import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import tw from "@/tailwind";

const TabIcon = ({ focused, icon, title }: any) => {
  return (
    <>
      {focused ? (
        <View
          style={tw`flex-1 flex-row rounded-full overflow-hidden w-full min-w-[112px] min-h-16 mt-4 h-fit py-5 p-1 justify-center items-center bg-blue-600`}
        >
          <Text>{icon}</Text>
          <Text style={tw`ml-2 text-white font-semibold text-base`}>
            {title}
          </Text>
        </View>
      ) : (
        <View
          style={tw`size-full mt-4 rounded-full flex-1 justify-center items-center bg-transparent`}
        >
          <Text>{icon}</Text>
        </View>
      )}
    </>
  );
};

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0f0D23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="Home" icon="🏠" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="Profile" icon="👤" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="Search" icon="🔍" />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="Saved" icon="💾" />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
