import { Link, useNavigation } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 justify-center items-center bg-black">
      <Text className="font-bold text-white">
        <Button onPress={() => navigation.goBack()} title="Go Back" />
      </Text>
    </View>
  );
}
