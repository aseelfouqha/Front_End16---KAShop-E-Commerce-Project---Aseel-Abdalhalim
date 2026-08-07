import * as yup from "yup";

export const changeEmailSchema = yupResolver.object({
  newEmail: yupResolver.string().email().required(),
});