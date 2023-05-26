import * as SecureStorage from "expo-secure-store";

type StorageKey = "auth";

export class Storage {
  static async set(key: StorageKey, value: object) {
    await SecureStorage.setItemAsync(key, JSON.stringify(value));
  }

  static async get<T = any>(key: StorageKey) {
    const value = await SecureStorage.getItemAsync(key);

    return JSON.parse(value) as T;
  }
}
