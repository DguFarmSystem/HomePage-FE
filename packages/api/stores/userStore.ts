import { create } from "zustand";
import { UserState } from "../models/user"; 

export const useUserStore = create<UserState>((set) => ({
  user: JSON.parse(localStorage.getItem("user") || "null"),

  setUser: (user) => {
    localStorage.setItem("studentNumber", user.studentNumber); // 리다이렉트 이후에도 학번이 남아 있도록 학번만 저장 -> 회원가입 페이지에만 유지 되도록 나중에 변경
    set(() => ({ user }));
  },
}));
