import { View, Text } from "react-native";
import Button from "../../components/Button";
import { useAuth } from "../../store/useAuth";
import Icon from "@expo/vector-icons/Feather";
import colors from "tailwindcss/colors";

function Home() {
  const { auth, signOut } = useAuth();

  return (
    <View className="flex-1 justify-center p-5">
      <View className="flex-1 justify-center items-center">
        <Text className="font-medium text-white text-4xl text-center mb-10">
          Olá, {auth?.firstName}
        </Text>
        <Icon name="smile" size={70} color={colors.white} />
      </View>
      <Button onPress={signOut}>Logout</Button>
    </View>
  );
}

export default Home;
