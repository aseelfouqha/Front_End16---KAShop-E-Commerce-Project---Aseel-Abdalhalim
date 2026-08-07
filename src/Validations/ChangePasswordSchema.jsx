import * as yup from "yup";

export const changePasswordSchema = yup.object({
  currentPassword: yup.string().required(),
  newPassword: yup.string().required().min(8),
  ConfirmNewPassword: yup.string().required().oneOf(
      [yup.ref("NewPassword")],
      "Passwords must match"
    ),


});