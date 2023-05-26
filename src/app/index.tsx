import { ActivityIndicator, View } from "react-native";
import colors from "tailwindcss/colors";
import { useRehydrateAuth } from "../hooks/useRehydrateAuth";

function Init() {
  useRehydrateAuth();

  return (
    <View className="flex-1 justify-center items-center">
      <ActivityIndicator size="small" color={colors.white} />
    </View>
  );
}

export default Init;
