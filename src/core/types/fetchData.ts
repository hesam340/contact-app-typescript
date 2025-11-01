export type TUser = {
  id?: string;
  title: string;
  subTitle: string;
  createdAt: Date;
};

export type TAllUsers = TUser[] | [];
