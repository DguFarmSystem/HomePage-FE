interface Kakao {
  init: (key: string) => void;
  isInitialized: () => boolean;
  Auth: {
    authorize: (options: { redirectUri: string }) => void;
  };
}

interface Window {
  Kakao: Kakao;
}
