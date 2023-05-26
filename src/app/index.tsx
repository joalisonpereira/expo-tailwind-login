import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-black">
      <Text className="font-bold text-white">
        <Link href="/home">Go to home</Link>
      </Text>
    </View>
  );
}
