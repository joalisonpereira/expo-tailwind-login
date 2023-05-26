import { useRouter, useSegments } from "expo-router";
import { useAuth } from "../store/useAuth";
import { useEffect } from "react";

export function useProtectedRoute() {
  const { auth } = useAuth();

  const segments = useSegments();

  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(guest)";

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !auth &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      router.replace("/login");
    } else if (auth && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace("/home");
    }
  }, [auth, segments]);
}
