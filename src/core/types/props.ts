import type { ReactNode } from "react";
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
