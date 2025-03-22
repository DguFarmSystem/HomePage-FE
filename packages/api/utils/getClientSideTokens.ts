import Cookies from "js-cookie";

export const getClientSideTokens = () => {
  return {
    accessToken: localStorage.getItem("accessToken") || "",
    refreshToken: Cookies.get("refreshToken") || "",
  };
};
