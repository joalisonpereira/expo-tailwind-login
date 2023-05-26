process.env.EXPO_ROUTER_APP_ROOT = __dirname + "/src/app";

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["nativewind/babel", require.resolve("expo-router/babel")],
  };
};
