import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Shared/Footer/Footer";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login/Login";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddNewUser from "./components/Pages/Table/AddNewUser/AddNewUser";
import EditUser from "./components/Pages/Table/EditUser";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/add-new-user" element={<AddNewUser/>}/>
        <Route path="users/:id" element={<EditUser></EditUser>}/>
      </Routes>
      <Footer />
      <ToastContainer/>
    </>
  );
}

export default App;
