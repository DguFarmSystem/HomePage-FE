import { redirect } from "react-router";
import { getClientSideTokens } from "../api/utils/getClientSideTokens";

export const protectedLoader = async ({ request }: { request: Request }) => {
  if (typeof window !== "undefined") {
    const tokens = getClientSideTokens();

    if (!tokens?.accessToken) {
      const url = new URL(request.url);
      return redirect(`/?from=${url.pathname}`);
    }
  }

  return null; 
};
