import { create } from "zustand";
import api from "../services/api";
import { Storage } from "../services/storage";

interface AuthState {
  auth: {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token: string;
  } | null;
  loading: boolean;
  signIn: (value: { username: string; password: string }) => Promise<void>;
  signOut: () => void;
  rehydrateAuth: () => Promise<void>;
}

export const useAuth = create<AuthState>((set) => ({
  auth: null,
  loading: false,

  signIn: async (values) => {
    try {
      set({ loading: true });

      const { data } = await api.post<AuthState["auth"]>("/auth/login", values);

      set({ auth: data });

      await Storage.set("auth", data);
    } catch {
      console.log("Usuário e/ou senha incorretos");
      //continue
    } finally {
      set({ loading: false });
    }
  },
  signOut: () => {
    set({ auth: null });
  },
  rehydrateAuth: async () => {
    const auth = await Storage.get("auth");

    if (auth) {
      set({ auth });
    }
  },
}));
