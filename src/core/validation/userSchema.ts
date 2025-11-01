import { date, object, string } from "yup";

export const userSchema = object({
  title: string()
    .required("please fill this field")
    .min(3, "title must be more than 3 characters")
    .max(20, "title must not be more than 20 characters")
    .trim(),
  subTitle: string()
    .required("please fill this field")
    .min(3, "subTitle must be more than 3 characters")
    .max(20, "subTitle must not be more than 20 characters")
    .trim(),
  createdAt: date().default(() => new Date()),
});
