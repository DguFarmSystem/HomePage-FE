export const queryKeys = {
  user: {
    me: ["user", "me"] as const,
    search: (query: string) => ["user", "search", query] as const,
    suggest: (query: string) => ["user", "suggest", query] as const,
  },

  auth: {
    token: ["auth", "token"] as const,
    verify: (studentNumber: string) => ["auth", "verify", studentNumber] as const,
  },

  post: {
    list: ["post", "list"] as const,
    detail: (postId: string | number) => ["post", "detail", postId] as const,
  },

  seed: {
    current: ["seed", "current"] as const,
    history: ["seed", "history"] as const,
  },
};
