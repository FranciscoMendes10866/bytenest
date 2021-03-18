import create, { State } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ClientState extends State {
  username: string;
  setUsername: (username: string) => void;
}

export const useStore = create<ClientState>(
  devtools(
    persist(
      (set) => ({
        username: "",
        setUsername: (username) => set({ username }),
      }),
      {
        name: "bytenest-storage",
        getStorage: () => localStorage,
      }
    )
  )
);
