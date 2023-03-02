import * as yup from "yup";

export const LoginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is required"),
  password: yup
    .string()
    .min(5, "Minimum 5 characters")
    .required("Password is required"),
});

export const RegistrationFromSchema = yup
  .object()
  .shape({
    name: yup.string().required("Name is required"),
    avatar: yup.string().required("Avatar is required"),
  })
  .concat(LoginFormSchema);
