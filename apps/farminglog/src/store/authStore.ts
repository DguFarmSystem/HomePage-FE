import { create } from "zustand";
import { verifyStudent } from "../services/verify";

interface AuthState {
  studentNumber: string | null;
  studentInfo: any;
  accessToken: string | null;
  setStudentInfo: (studentNumber: string, studentInfo: any) => void;
  verifyStudent: (studentNumber: string) => Promise<void>;
  setToken: (token: string) => void;
}

// Zustand Store 생성 -> 학번의 경우 redirect를 통해 받아와 새로고침 시 사라지기 때문에 LocalStorage에 저장
export const useAuthStore = create<AuthState>((set) => ({
  studentNumber: localStorage.getItem("studentNumber"), 
  studentInfo: null,
  accessToken: null,
  setStudentInfo: (studentNumber, studentInfo) => {
    localStorage.setItem("studentNumber", studentNumber); 
    set({ studentNumber, studentInfo });
  },
  verifyStudent: async (studentNumber: string) => {
    const response = await verifyStudent(studentNumber);
    localStorage.setItem("studentNumber", studentNumber); 
    set({ studentNumber, studentInfo: response.data });
  },
  setToken: (token: string) => set({ accessToken: token }),
}));