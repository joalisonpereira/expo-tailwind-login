import { Slot } from "expo-router";
import { View } from "react-native";
import { useProtectedRoute } from "../hooks/useProtectedRoute";

function Layout() {
  useProtectedRoute();

  return (
    <View className="flex-1 bg-dark">
      <Slot />
    </View>
  );
}

export default Layout;
