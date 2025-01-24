"use client";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from "next/navigation";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useKindeAuth();
  const router = useRouter();

  if (!isAuthenticated) {
    router.push("/api/auth/login");
    return null;
  }

  return children;
};

export default PrivateRoute;
