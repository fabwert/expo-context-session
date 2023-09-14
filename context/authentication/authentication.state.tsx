import React from "react";
import { useStorageState } from "@/utils/storage-utils";
import AuthContext from "./authentication.context";
import { router } from "expo-router";

export function SessionProvider(props: { children: React.ReactNode }) {
  const [[isLoading, session], setSession] = useStorageState("session");

  return (
    <AuthContext.Provider
      value={{
        signIn: () => {
          // Perform sign-in logic here
          setSession("xxx");
          router.push("/one");
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
