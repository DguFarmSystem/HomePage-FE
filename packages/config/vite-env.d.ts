/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_KAKAO_CLIENT_ID: string;
  readonly VITE_GOOGLE_CLIENT_ID: string;
  readonly VITE_KAKAO_REDIRECT_URI: string;
  readonly VITE_GOOGLE_REDIRECT_URI: string;
  readonly VITE_KAKAO_JS_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
