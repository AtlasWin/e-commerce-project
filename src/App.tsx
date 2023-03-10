import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import Header from "./Components/Common/Header/Header";
import Footer from "./Components/Common/Footer";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./Redux/store/store";
import { setUserInfo } from "./Redux/Slices/authSlice/authSlice";
import { getUser } from "./API/AuthService";

function App() {
  const token = useAppSelector((state) => state.auth.token);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getMyUser = async () => {
      const response = await getUser();
      if (response.status === 200) {
        dispatch(setUserInfo(response.data));
      }
    };
    if (token) {
      getMyUser();
    }
  }, [token]);
  return (
    <BrowserRouter>
      <Header />

      <AppRouter />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
