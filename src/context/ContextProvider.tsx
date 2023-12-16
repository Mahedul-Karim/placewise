"use client";
import { api } from "@/lib/api";
import { SafeUser } from "@/types";
import { User } from "@prisma/client";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";
import { createContext, useContext, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};
type ContextType = {
  user: SafeUser | null;
  isLoggedIn: boolean;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const Context = createContext<ContextType>({
  user: null,
  isLoggedIn: false,
  setUser: () => {},
  setIsLoggedIn: () => {},
});

const ContextProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getUser = async function () {
    try {
      const data = await api({ endpoint: "me", options: { method: "GET" } });
      if(data.user){

        setUser(data.user);
        setIsLoggedIn(true);
      }
    } catch (err) {
      console.log("");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Context.Provider value={{ user, isLoggedIn, setUser, setIsLoggedIn }}>
        {children}
      </Context.Provider>
    </QueryClientProvider>
  );
};

export const useCtx = () => {
  return useContext(Context);
};

export default ContextProvider;
