export type UserRole = "USER" | "ADMIN"; // 역할

export type TrackType = "UNION" | "GAME" | "WEB" | "AI" | "IOT" | "BIGDATA"; // 트랙 유형

export interface User {
  userId: number;
  role: UserRole;
  name: string;
  studentNumber: string; 
  major: string;
  profileImageUrl: string;
  phoneNumber: string;
  notionAccount: string;
  githubAccount: string;
  track: TrackType;
  generation: number;
  currentSeed: number;
  totalSeed: number;
}

export interface UserState {
  user: User | null;
  setUser: (user: User) => void;
}

export interface UpdateUserRequest {
  phoneNumber?: string;
  profileImageUrl?: string;
  major?: string;
}