import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { authLogin } from "../API/AuthService";
import { addNewUser } from "../API/UsersService";
import InputRegForm from "../Components/InputForm/InputRegForm";
import { RegistrationFormSchema } from "../Components/InputForm/validations";
import { setLogin } from "../Redux/Slices/authSlice/authSlice";
import { useAppDispatch } from "../Redux/store/store";
import { User } from "../types/interfaces";
import { yupResolver } from "@hookform/resolvers/yup";

function Registration() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "all", resolver: yupResolver(RegistrationFormSchema) });

  const addUser = async (values: User) => {
    try {
      const { email, password, name, avatar } = values;

      const data: User = {
        email,
        password,
        name,
        avatar,
      };
      const newUser = await addNewUser(data);
      const userToken = await authLogin(newUser.data.email, password);
      dispatch(setLogin(userToken.data.access_token));

      reset();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          height: { xl: "84vh" },
        }}
      >
        <form onSubmit={handleSubmit(addUser)}>
          <InputRegForm errors={errors} register={register} isValid={isValid} />
        </form>
      </Box>
    </div>
  );
}

export default Registration;
