import { useQuery } from "@tanstack/react-query";

import api from "@/core/configs/api";
import type { TAllUsers } from "@/types/fetchData";

export const useGetUsers = () => {
  const queryKey = ["all-data"];
  const queryFn = (): Promise<TAllUsers> => api.get("/users");
  return useQuery<TAllUsers>({ queryKey, queryFn });
};
