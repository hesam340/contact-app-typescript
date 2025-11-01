import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import api from "@/core/configs/api";
import { MESSAGES } from "@/core/enums/enums";
import type { TUser } from "@/core/types/fetchData";

export const useAddUser = () => {
  const queryClient = useQueryClient();
  const mutationFn = (data: TUser) => api.post("/users", data);
  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-data"] });
      toast.success(MESSAGES.ADD_SUCCESS);
    },
    onError: () => {
      toast.error(MESSAGES.UNKNOWN_ERROR);
    },
  });
};

export const useEditUser = () => {
  const queryClient = useQueryClient();
  const mutationFn = (data: TUser) => api.put(`/users/${data.id}`, data);
  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-data"] });
      toast.success(MESSAGES.EDIT_SUCCESS);
    },
    onError: () => {
      toast.error(MESSAGES.UNKNOWN_ERROR);
    },
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  const mutationFn = (id: string) => api.delete(`/users/${id}`);
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
