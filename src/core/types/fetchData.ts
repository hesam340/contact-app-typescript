export type TUser = {
  userId: number;
  title: string;
  subTitle: string;
  createdAt: Date;
};

export type TAllUsers = TUser[] | [];
