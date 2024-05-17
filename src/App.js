import "./App.css";
import HomePage from "./components/User/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import Header from "./components/User/Header/Header";
import User from "./components/User/User";
import Login from "./components/User/Login/Login";
import Cart from "./components/User/Cart/Cart";
import CardPay from "./components/User/CardPay/CardPay";
import Dealhot from "./components/User/HomePage/Dealhot";
import Productworlk from "./components/User/HomePage/Productworlk";
import Filterproduct from "./components/User/HomePage/Filterproduct";
import Shareinfo from "./components/User/HomePage/Shareinfo";
import Assistant from "./components/User/HomePage/Assistant";
import Bachhoamy from "./components/User/HomePage/Bachhoamy";
import Megavita from "./components/User/HomePage/Megavita";
import Codesales from "./components/User/HomePage/Codesales";
import Singup from "./components/User/Login/Singup";
import Thanhtoandathang from "./components/User/Cart/Thanhtoandathang";
import Editinfouser from "./components/User/Login/Editinfouser";
function App() {
    return (
        <div className="app-container">
            {/* <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer /> */}
            <Routes>
                <Route path="/" element={<User />}>
                    <Route index element={<HomePage />} />
                    <Route path="/Dealhot" element={<Dealhot />} />
                    <Route path="/CardPay" element={<CardPay />} />
                    <Route path="/productworlk" element={<Productworlk />} />
                    <Route path="/Filterproduct" element={<Filterproduct />} />
                    <Route path="/Shareinfo" element={<Shareinfo />} />
                    <Route path="/Assistant" element={<Assistant />} />
                    <Route path="/Bachhoamy" element={<Bachhoamy />} />
                    <Route path="/Megavita" element={<Megavita />} />
                    <Route path="/Codesales" element={<Codesales />} />
                    <Route path="/Cart" element={<Cart />} />
                    <Route path="/Editinfouser" element={<Editinfouser />} />
                </Route>

                <Route
                    path="/Thanhtoandathang"
                    element={<Thanhtoandathang />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/Singup" element={<Singup />} />
            </Routes>
        </div>
    );
}

export default App;
