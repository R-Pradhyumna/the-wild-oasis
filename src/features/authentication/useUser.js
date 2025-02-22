import { useQuery } from "@tanstack/react-query";

import { getCurrentUser } from "../../services/apiAuth.js";

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  // NOTE: we need user?.role, not user?.user?.role, as Mirko suggested, please see apiAuth.js and useLogin.js
  // when we get this from getCurrentUser, it's user?.user
  // and when we get this from useLogin -> onSuccess, it's data.user
  const isAuthenticated = user?.role === "authenticated";

  return { isLoading, user, isAuthenticated };
}
