import { create } from "zustand";

export interface UserInfo {
  userId: number;
  role: "USER" | "ADMIN";
  name: string;
  studentNumber: string;
  major: string;
  profileImageUrl: string;
  phoneNumber: string;
  notionAccount: string;
  githubAccount: string;
  track: string;
  generation: number;
  currentSeed: number;
  totalSeed: number;
}

interface UserState {
  user: UserInfo | null;
  setUser: (user: UserInfo) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));

