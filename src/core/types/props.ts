import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { FieldErrors, UseFormRegister } from "react-hook-form";

import type { TUser } from "@/types/fetchData";

export type TChildren = {
  children: ReactNode;
};

export type TInput = {
  placeHolder: string;
  title: string;
  name: keyof TUser;
  children: ReactNode;
  register: UseFormRegister<TUser>;
  errors: FieldErrors<TUser>;
};

export type TCard = {
  user: TUser;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setSelectedUser: Dispatch<SetStateAction<TUser | null>>;
  showCheckbox: boolean;
  setDeletedList: Dispatch<SetStateAction<TUser[] | []>>;
};

export type TAddModal = {
  user?: TUser;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setSelectedUser: Dispatch<SetStateAction<TUser | null>>;
};

export type TActions = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  deletedList: TUser[] | [];
  setShowCheckbox: Dispatch<SetStateAction<boolean>>;
  showCheckbox: boolean;
  setDeletedList: Dispatch<SetStateAction<TUser[] | []>>;
};
