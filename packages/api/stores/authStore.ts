import { create } from "zustand";
import { AuthState } from "../models/auth"; 

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: localStorage.getItem("accessToken") || null, 

  setToken: (token: string) => {
    localStorage.setItem("accessToken", token);
    set(() => ({ accessToken: token })); 
  },
}));
