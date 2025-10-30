import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import api from "@/core/configs/api";
import type { TUser } from "@/core/types/fetchData";
import { MESSAGES } from "@/core/enums/enums";

export const useAddUser = () => {
  const queryClient = useQueryClient();
  const mutationFn = (data: TUser) => api.post("/users", data);
  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-data"] });
    },
    onError: () => {
      toast.error(MESSAGES.UNKNOWN_ERROR);
    },
  });
};
