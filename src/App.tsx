import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import Header from "./Components/Common/Header/Header";
import CarouselSlider from "./Components/CarouselSlider";
import Categories from "./Pages/Categories";
import Footer from "./Components/Common/Footer";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./Redux/store/store";
import { setUserInfo } from "./Redux/Slices/authSlice/authSlice";
import { getUser } from "./API/AuthService";
import Layout from "./Components/Common/Layout/Layout";

function App() {
  const token = useAppSelector((state) => state.auth.token);
  const dispatch = useAppDispatch();
  const getMyUser = async () => {
    const response = await getUser();
    if (response.status === 200) {
      dispatch(setUserInfo(response.data));
    }
  };

  useEffect(() => {
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
