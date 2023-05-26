import { useEffect } from "react";
import { useAuth } from "../store/useAuth";

export function useRehydrateAuth() {
  const { rehydrateAuth, auth } = useAuth();

  useEffect(() => {
    if (!auth) {
      rehydrateAuth();
    }
  }, [rehydrateAuth, auth]);
}
