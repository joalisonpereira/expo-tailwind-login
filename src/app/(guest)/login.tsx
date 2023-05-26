import { Image, View } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useState } from "react";
import AntDesignIcon from "@expo/vector-icons/AntDesign";
import { useAuth } from "../../store/useAuth";
import colors from "tailwindcss/colors";

function Login() {
  const { signIn, loading } = useAuth();

  const [values, setValues] = useState({
    username: "kminchelle",
    password: "0lelplR",
  });

  async function onSubmit() {
    try {
      await signIn(values);

      setValues({ username: "", password: "" });
    } catch {}
  }

  function handleChange(name: string, value: string) {
    setValues((state) => ({ ...state, [name]: value }));
  }

  return (
    <View className="flex-1 p-5">
      <View className="flex-1 justify-center items-center">
        <AntDesignIcon name="user" size={100} color={colors.white} />
        <Input
          placeholder="Username"
          value={values.username}
          onChangeText={(value) => handleChange("username", value)}
          className="mt-10"
        />
        <Input
          className="mt-5"
          placeholder="Password"
          value={values.password}
          onChangeText={(value) => handleChange("password", value)}
          onEndEditing={onSubmit}
          secureTextEntry
        />
      </View>
      <Button loading={loading} onPress={onSubmit}>
        Entrar
      </Button>
    </View>
  );
}

export default Login;
