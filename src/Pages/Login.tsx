import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { authLogin } from "../API/AuthService";
import InputLoginForm from "../Components/InputForm/InputLoginForm";
import { LoginFormSchema } from "../Components/InputForm/validations";
import { setLogin } from "../Redux/Slices/authSlice/authSlice";
import { useAppDispatch } from "../Redux/store/store";
import { UserLogin } from "../types/interfaces";
import { yupResolver } from "@hookform/resolvers/yup";

function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "all", resolver: yupResolver(LoginFormSchema) });

  const onLoginSubmit = async (values: UserLogin) => {
    const { email, password } = values;
    try {
      const { data } = await authLogin(email, password);
      dispatch(setLogin(data.access_token));
      navigate("/");
    } catch (err) {
      console.error(err);
    }

    console.log("New Log In");
    reset();
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          height: {
            xs: "77vh",
            sm: "77vh",
            md: "77vh",
            lg: "77vh",
            xl: "84vh",
          },
        }}
      >
        <form onSubmit={handleSubmit(onLoginSubmit)}>
          <InputLoginForm
            register={register}
            errors={errors}
            isValid={isValid}
          />
        </form>
      </Box>
    </div>
  );
}

export default Login;
